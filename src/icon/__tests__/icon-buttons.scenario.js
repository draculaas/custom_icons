import * as React from 'react';

import { APN as APNNexi, SIMCard as SIMCardNexi } from '../nexi';
import { APN as APMMega, SIMCard as SIMCardMega } from '../mega';

export default function Scenario() {
  return (
    <div>
      <APMMega />
      <APNNexi />
      <SIMCardMega />
      <SIMCardNexi />
    </div>
  );
}
