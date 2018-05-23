import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
	linkExactActiveClass: 'active',
	routes: [
		{
			path: '/',
			component: () => import(/* webpackChunkName: "group-home" */ '@pages/home/'),
			children: [
				{
					path: '/',
					name: 'feed',
					component: () => import('@pages/home/feed/')
				}, {
					path: '/messages',
					name: 'messages',
					component: () => import('@pages/home/messages/')
				}, {
					path: '/users',
					name: 'users',
					component: () => import('@pages/home/users/')
				}
			]
		}
	]
});
