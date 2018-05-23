import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '*',
			redirect: '/home/404'
		}, {
			path: '/',
			redirect: '/home'
		}, {
			path: '/home',
			component: () => import(/* webpackChunkName: "group-home" */ '@pages/home/'),
			children: [
				{
					path: '404',
					name: '404',
					component: () => import('@pages/404/')
				}, {
					path: '',
					name: 'home',
					component: () => import('@pages/home/feed/')
				}, {
					path: 'messages',
					name: 'home/messages',
					component: () => import('@pages/home/messages/')
				}, {
					path: 'users',
					name: 'home/users',
					component: () => import('@pages/home/users/')
				}, {
					path: 'profile',
					name: 'home/profile',
					component: () => import('@pages/home/profile/')
				}, {
					path: 'groups',
					name: 'home/groups',
					component: () => import('@pages/home/groups/')
				}, {
					path: 'files',
					name: 'home/files',
					component: () => import('@pages/home/files/')
				}
			]
		}
	]
});
