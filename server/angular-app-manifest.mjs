
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/rizzyMarts/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/rizzyMarts"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6963, hash: '1265788b7c9badb1b0ff41a500798abc0296c805d9f0959523f1fb65c2d5e3e5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2775, hash: 'bda78f49659d4005348c740537ef2923d070259215dece0df5d08e1d3e9bbcf9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 15628, hash: 'ed6e34bf350a463c9247900eeb56243b6b5d40f216aeda41b1bb3892ab964d8c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-QPP7R2EX.css': {size: 231014, hash: 'gH62Nv/LJHc', text: () => import('./assets-chunks/styles-QPP7R2EX_css.mjs').then(m => m.default)}
  },
};
