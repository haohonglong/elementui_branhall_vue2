import { BasicLayout } from "@/layouts"

const RouteView = {
  name: 'RouteView',
  render: h => h('router-view')
}

const routes = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: '主页' },
    redirect: '/room/list',
		children: [
			// room
      {
        path: '/room',
        name: 'room',
				redirect: '/room/list',
        component: RouteView,
        meta: { title: '商品列表', keepAlive: true },
				children: [
					{
						path: '/room/list',
						name: '',
						component: () => import('@/views/room/list'),
						meta: { title: '商品列表', keepAlive: false }
					}
				]
      },
	  // mind map
	  {
        path: '/mindmap',
        name: 'mindmap',
		redirect: '/mindmap/list',
        component: RouteView,
        meta: { title: '思维导图', keepAlive: true },
				children: [
					{
						path: '/mindmap/index',
						name: 'mindmapIndex',
						component: () => import('@/views/mindmap/index'),
						meta: { title: '思维导图首页', keepAlive: false }
					},
					{
						path: '/mindmap/detail/:key',
						name: 'mindmapDetail',
						component: () => import('@/views/mindmap/detail'),
						meta: { title: '思维导图详情页', keepAlive: false }
					}
				]
      },
			// url
			{
        path: '/url',
        name: 'url',
				redirect: '/url/list',
        component: RouteView,
        meta: { title: '网页地址', keepAlive: true },
				children: [
					{
						path: '/url/list/:sid?',
						name: 'urlList',
						component: () => import('@/views/url/list'),
						meta: { title: '网页地址', keepAlive: false }
					},
					{
						path: '/url/add/:sid',
						name: 'urlAdd',
						component: () => import('@/views/url/add'),
						meta: { title: '添加网页地址', keepAlive: false }
					},
					{
						path: '/url/edit/:id',
						name: 'urlEdit',
						component: () => import('@/views/url/edit'),
						meta: { title: '修改网页地址', keepAlive: false }
					}
				]
      },
			// sorts
			{
        path: '/sorts',
        name: 'sorts',
				redirect: '/sorts/list',
        component: RouteView,
        meta: { title: '类别', keepAlive: true },
				children: [
					{
						path: '/sorts/list',
						name: 'sortList',
						component: () => import('@/views/sorts/list'),
						meta: { title: '类别列表', keepAlive: false }
					},
					{
						path: '/sorts/add/:pid',
						name: 'sortAdd',
						component: () => import('@/views/sorts/add'),
						meta: { title: '添加类别', keepAlive: false }
					},
					{
						path: '/sorts/edit/:id',
						name: 'sortEdit',
						component: () => import('@/views/sorts/edit'),
						meta: { title: '修改类别', keepAlive: false }
					}
				]
      },
			// goods
			{
        path: '/goods',
        name: 'goods',
				redirect: '/goods/list',
        component: RouteView,
        meta: { title: '商品', keepAlive: true },
				children: [
					{
						path: '/goods/list',
						name: 'goodsList',
						component: () => import('@/views/goods/list'),
						meta: { title: '商品列表', keepAlive: false }
					},
					{
						path: '/goods/add',
						name: 'goodsAdd',
						component: () => import('@/views/goods/add'),
						meta: { title: '添加商品', keepAlive: false }
					}
				]
      }
    ]
  },
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/site/login'),
		meta: { title: 'login' }
	}

]

export default routes