
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6952, hash: '0736656543e3f7cc607cfb23f35c103698e576bc83152159018d6e95100bc9e5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2764, hash: '090583c6540949eb995a55665ba73af2c4907105d4db64f0f02016f9cae0b697', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 15617, hash: 'ad7e27d6ef0710aa3500abd2acc06b4e6ee9a299e27927f5a74a60ea6c0ccddf', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-QPP7R2EX.css': {size: 231014, hash: 'gH62Nv/LJHc', text: () => import('./assets-chunks/styles-QPP7R2EX_css.mjs').then(m => m.default)}
  },
};
