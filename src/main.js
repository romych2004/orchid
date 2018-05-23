// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import axios from 'axios';
import moment from 'moment';
import Toasted from 'vue-toasted';

Vue.config.productionTip = false;

/**
 * 			ADDITIONAL CONFIGS
 */
const axiosConfig = {
	baseURL: 'http://127.0.0.1:3000/',
	timeout: 30000
};

const axiosInstance = axios.create(axiosConfig);
/** axiosInstance.interceptors.response.use((response) => {
	return response;
}, (error) => {
	Vue.toasted.error('???Error');
	console.error(error);
	debugger;
	return Promise.reject(error);
}); */

const toastedConfig = {
	position: 'top-right',
	duration: 10000,
	action: {
		text: '???Close',
		onClick: (e, toastObject) => {
			toastObject.goAway(0);
		}
	}
};

/**
 * 			VUE EXTENTIONS
 */
Vue.use(Toasted, toastedConfig);

Object.defineProperty(Vue.prototype, '$date', { value: moment });
Object.defineProperty(Vue.prototype, '$http', {
	value: axiosInstance
});
Vue.config.errorHandler = function (err, vm, info) {
	// handle error
	// `info` is a Vue-specific error info, e.g. which lifecycle hook
	// the error was found in. Only available in 2.2.0+
	console.error(err);
};

/**
 * 			APP
 */
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
});
