## React DevTools panel repro

This Electron Forge + Vite app reproduces an `electron-devtools-installer`
issue where React DevTools installs successfully, but Electron DevTools does
not show the React panels.

The main process installs React DevTools before creating the window:

```ts
const react = await installExtension(REACT_DEVELOPER_TOOLS, {
  loadExtensionOptions: {
    allowFileAccess: true,
  },
});
```

The renderer mounts a small React app with state and a derived memoized value so
React DevTools has a real component tree to inspect.

## Run

```sh
pnpm start
```

Expected behavior: Electron DevTools opens with React DevTools available as
`Components` and `Profiler` panels.

Observed behavior: the extension install logs successfully in the main process,
but the React DevTools panels do not appear in Electron DevTools.
