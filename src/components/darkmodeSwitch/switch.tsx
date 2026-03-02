'use client';

import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';

function SwitchExample() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;

    if (isDark) {
      root.style.setProperty('--background', '#000000');
      root.style.setProperty('--foreground', '#ffffff');
      return;
    }

    root.style.setProperty('--background', '#ffffff');
    root.style.setProperty('--foreground', '#171717');
  }, [isDark]);

  return (
    <Form>
      <Form.Check
        type="switch"
        id="darkmode-switch"
        label={isDark ? 'Fondo negro' : 'Fondo blanco'}
        checked={isDark}
        onChange={() => setIsDark((prev) => !prev)}
      />
    </Form>
  );
}

export default SwitchExample;