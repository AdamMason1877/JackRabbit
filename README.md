# Jack Rabbit
A new visual way of handling branching in LLM's thats more conducive to a streamlined workflow and better organization. Every reply lives in its own draggable window; highlight a phrase, branch into a child window with its own context, and the connector arrow ties them together. Designed for following one investigation across many forks without losing the thread.

Built as a static React app. Bring your own Anthropic API key; nothing ever touches a server you don't own.

## Quickstart

```bash
npm install
npm run dev
```

Open the printed URL, click the gear in the header, paste an Anthropic API key (get one at <https://console.anthropic.com/settings/keys>), and start a thread.


## BYOK and what stays where

- The API key is stored in `localStorage["jr-key"]` on the user's machine, never sent anywhere except `api.anthropic.com`.
- Browser calls Anthropic directly using the `anthropic-dangerous-direct-browser-access` header. There is no backend, no proxy, no analytics. Do not use on insecure networks, meant for home use.
- Conversations autosave to `localStorage["thread-canvas-v1"]`. Use the Save / Open buttons in the header for portable JSON exports.

## What's in here

- **Main thread + branches.** Highlight any text in an answer to spawn a child window focused on that phrase. The child inherits the parent's context.
- **Per-tab answer structure.** Every assistant reply is split into four facets: Context, Summary, Authoritative source, Suggested action.
- **Branch highlighting.** The exact text that was branched off is highlighted in the parent window in the same color as the child's arrow. Each tab in the parent gets a small color dot for any branches sourced from that tab.
- **Spatial canvas.** Drag windows, resize them, multi-select with shift-drag, snap to neighbors, zoom with Cmd-scroll or pinch, undo with Cmd-Z. Viewport and layout persist across reloads.
- **Sidebar tree.** Every branch is listed under its parent with a clipped title pulled from content.

## Keyboard shortcuts

| Key | Action |
| --- | --- |
| `⌘` / `Ctrl` + scroll, pinch | Zoom centered on cursor |
| `⌘` / `Ctrl` + `Z` | Undo |
| `⌘` / `Ctrl` + `Shift` + `Z`, `⌘` / `Ctrl` + `Y` | Redo |
| `⌘` / `Ctrl` + `A` | Select all open windows |
| `Shift` + drag background | Marquee select |
| `Shift` + click window | Toggle selection |
| Arrows | Nudge selected (1px; `Shift` = 10px) |
| `Delete` / `Backspace` | Close selected windows (kept in sidebar) |
| `F` | Fit active window |
| `Esc` | Clear selection |

## Stack

React 18, Vite. No CSS framework; styles inline. No state library; React state plus a small undo/redo ring buffer. The whole app is one `App.jsx`, deliberately, so it's auditable in one read.

## License

MIT. See `LICENSE`.


# JackRabbit


