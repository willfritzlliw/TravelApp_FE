
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Social.vue'), name: 'Home' },
      { path: '/tasks', component: () => import('pages/Tasks.vue') , name: 'Tasks'},
      { path: '/login', component: () => import('pages/Login.vue') , name: 'Login' },
      { path: '/help', component: () => import('pages/Help.vue') , name: 'Help'}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
