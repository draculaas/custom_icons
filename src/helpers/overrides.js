import * as React from 'react';
import {isValidElementType} from 'react-is';
import deepMerge from '../utils/deep-merge.js';

export function getOverride(override) {
  if (isValidElementType(override)) {
    return override;
  }

  if (override && typeof override === 'object') {
    return (override).component;
  }

  // null/undefined
  return override;
}

export function getOverrideProps(override) {
  if (override && typeof override === 'object') {
    return {
      ...override.props,
      $style: override.style,
    };
  }
  return {};
}

export function toObjectOverride(
  override,
) {
  if (isValidElementType(override)) {
    return {
      component: override,
    };
  }

  return override || {};
}

export function getOverrides(
  override,
  defaultComponent,
) {
  const Component = getOverride(override) || defaultComponent;

  if (
    override &&
    typeof override === 'object' &&
    typeof override.props === 'function'
  ) {
    const DynamicOverride = React.forwardRef((props, ref) => {
      const mappedProps = override.props(props);
      const nextProps = getOverrideProps({...override, props: mappedProps});
      return <Component ref={ref} {...nextProps} />;
    });
    DynamicOverride.displayName = Component.displayName;
    return [DynamicOverride, {}];
  }

  const props = getOverrideProps(override);
  return [Component, props];
}

export function mergeOverrides(
  target,
  source,
) {
  const allIdentifiers = Object.keys({...target, ...source});
  return allIdentifiers.reduce((acc, name) => {
    acc[name] = mergeOverride(
      toObjectOverride(target[name]),
      toObjectOverride(source[name]),
    );
    return acc;
  }, {});
}

export function mergeOverride(
  target,
  source,
) {
  // Shallow merge should handle `component`
  const merged = {...target, ...source};
  if (target.props && source.props) {
    merged.props = mergeConfigurationOverrides(target.props, source.props);
  }
  if (target.style && source.style) {
    merged.style = mergeConfigurationOverrides(target.style, source.style);
  }
  return merged;
}


export function mergeConfigurationOverrides(
  target,
  source,
) {
  // Simple case of both objects
  if (typeof target === 'object' && typeof source === 'object') {
    return deepMerge({}, target, source);
  }

  // At least one is a function, return a new composite function
  return (...args) => {
    return deepMerge(
      {},
      typeof target === 'function' ? target(...args) : target,
      typeof source === 'function' ? source(...args) : source,
    );
  };
}
