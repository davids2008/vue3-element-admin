/** Route for grid demo using TUI Grid */

const gridDemoRouter = {
  path: '/grid-demo',
  component: () => import('@/layout/index'),
  children: [
    {
      path: 'index',
      component: () => import('@/views/grid-demo/index'),
      name: 'GridDemo',
      meta: { title: 'Grid Demo', icon: 'table' }
    }
  ]
}

export default gridDemoRouter
