import Config from './Config';
import "regenerator-runtime/runtime.js";
///////////////////////////
///// Register Event /////
///////////////////////////
let events = {};
export const Nui = {
	registerEmit: (type, func) => {
		events[type] = func;
	},
	async send(event, data = {}) {
		/// #if DEBUG
			return new Promise(resolve => setTimeout(resolve, 100));
		/// #endif
	
		/* eslint-disable no-unreachable */
			return fetch(`https://${Config.resName}/${event}`, {
			method: 'post',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify(data), 
			});
		/* eslint-enable no-unreachable  */
	  },
	  emulate(type, data = null) {
		window.dispatchEvent(
		  new MessageEvent('message', {
			data: {
			  type,
			  data,
			},
		  }),
		);
	  },
};

///////////////////////////
///// Nui Message /////
///////////////////////////
export const EventListener = () => {
	window.addEventListener('message', e => {
		if (!events[e.data.type]) return;
		events[e.data.type](e.data);
	});
	return null;
};
