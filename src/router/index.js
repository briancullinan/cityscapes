import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
const createBuilderView = type => () => import('../views/CreateBuilderView').then(m => m.default(type))
const GalleryLanding = () => import('../views/GalleryLanding.vue')

const Styles = () => import('../views/Styles.vue')
const Features = () => import('../views/Features.vue')
const Gallery = () => import('../views/Gallery.vue')
const Downloads = () => import('../views/Downloads.vue')

const ItemView = () => import('../views/ItemView.vue')
const UserView = () => import('../views/UserView.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/landing', component: GalleryLanding },
      { path: '/envisor', redirect: '/envisor/styles' },
      { path: '/covrit', redirect: '/covrit/styles' },
      { path: '/naturescreen', redirect: '/naturescreen/styles' },
      { path: '/planx', redirect: '/planx/styles' },
      { path: '/toughgate', redirect: '/toughgate/styles' },
      { path: '/:product/styles', component: createBuilderView(Styles), props: true },
      { path: '/:product/features', component: createBuilderView(Features), props: true },
      { path: '/:product/gallery', component: createBuilderView(Gallery), props: true },
      { path: '/:product/gallery/:image', component: createBuilderView(Gallery), props: true },
      { path: '/:product/downloads', component: createBuilderView(Downloads), props: true },
      { path: '/', redirect: '/landing' }
    ]
  })
}
