import './index.css';
import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';

const checks = [
  'React renders a component tree',
  'useState updates the renderer',
  'DevTools should expose Components and Profiler panels',
];

function DevToolsProbe() {
  const [count, setCount] = useState(0);
  const doubled = useMemo(() => count * 2, [count]);

  return (
    <main className="shell">
      <section className="status-panel">
        <p className="eyebrow">Electron DevTools repro</p>
        <h1>React DevTools extension installs, but the panels do not appear</h1>
        <p className="lede">
          The main process installs REACT_DEVELOPER_TOOLS with allowFileAccess
          enabled before opening Electron DevTools. This renderer gives React
          DevTools a real component tree to inspect.
        </p>
        <div className="version-row">
          <span>React</span>
          <strong>{React.version}</strong>
        </div>
      </section>

      <section className="counter-card">
        <div className="counter-label">State probe</div>
        <div className="counter-value">{count}</div>
        <p>Derived value from useMemo: {doubled}</p>
        <button type="button" onClick={() => setCount((value) => value + 1)}>
          Increment React state
        </button>
      </section>

      <section className="checklist">
        {checks.map((check) => (
          <div className="check-item" key={check}>
            <span aria-hidden="true" />
            <p>{check}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Missing root element');
}

createRoot(rootElement).render(<DevToolsProbe />);
