import * as React from 'react';

import { Upload } from '../nexi';
import { APN, SIMCard } from '../mega';

export default function Scenario() {
  return (
    <div>
      <Upload />
      <APN />
      <SIMCard />
    </div>
  );
}
