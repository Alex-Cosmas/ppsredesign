import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a8126fe2 = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _66444ca5 = () => interopDefault(import('..\\pages\\contacts\\index.vue' /* webpackChunkName: "pages/contacts/index" */))
const _5ec49c40 = () => interopDefault(import('..\\pages\\inventory\\index.vue' /* webpackChunkName: "pages/inventory/index" */))
const _50f7a150 = () => interopDefault(import('..\\pages\\media\\index.vue' /* webpackChunkName: "pages/media/index" */))
const _625136f4 = () => interopDefault(import('..\\pages\\products\\index.vue' /* webpackChunkName: "pages/products/index" */))
const _5274220d = () => interopDefault(import('..\\pages\\support\\index.vue' /* webpackChunkName: "pages/support/index" */))
const _1db79a84 = () => interopDefault(import('..\\pages\\media\\_posts\\index.vue' /* webpackChunkName: "pages/media/_posts/index" */))
const _bab05426 = () => interopDefault(import('..\\pages\\support\\_services\\service.vue' /* webpackChunkName: "pages/support/_services/service" */))
const _3f1e395c = () => interopDefault(import('..\\pages\\support\\_services\\training.vue' /* webpackChunkName: "pages/support/_services/training" */))
const _d042c850 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _a8126fe2,
    name: "about"
  }, {
    path: "/contacts",
    component: _66444ca5,
    name: "contacts"
  }, {
    path: "/inventory",
    component: _5ec49c40,
    name: "inventory"
  }, {
    path: "/media",
    component: _50f7a150,
    name: "media"
  }, {
    path: "/products",
    component: _625136f4,
    name: "products"
  }, {
    path: "/support",
    component: _5274220d,
    name: "support"
  }, {
    path: "/media/:posts",
    component: _1db79a84,
    name: "media-posts"
  }, {
    path: "/support/:services/service",
    component: _bab05426,
    name: "support-services-service"
  }, {
    path: "/support/:services/training",
    component: _3f1e395c,
    name: "support-services-training"
  }, {
    path: "/",
    component: _d042c850,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
