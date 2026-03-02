'use client';

import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import ProgressBar from 'react-bootstrap/ProgressBar';

function WithLabelExample() {
  const [percentage, setPercentage] = useState(60);

  return (
    <div className="space-y-3">
      <ProgressBar now={percentage} label={`${percentage}%`} />

      <div className="flex items-center gap-3">
        <span className="text-sm">input percentage</span>
        <Form.Control
          type="number"
          min={0}
          max={100}
          value={percentage}
          onChange={(event) => {
            const value = Number(event.target.value);

            if (Number.isNaN(value)) {
              setPercentage(0);
              return;
            }

            const clampedValue = Math.min(100, Math.max(0, value));
            setPercentage(clampedValue);
          }}
          className="w-28"
        />
      </div>
    </div>
  );
}

export default WithLabelExample;