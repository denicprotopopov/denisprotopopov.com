export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","fonts/Cushing-Book.otf","fonts/SuisseIntl-Regular.otf","images/.DS_Store","images/appstore.png","images/cv0.png","images/cv1.jpg","images/cv2.jpg","images/cv3.jpg","images/damn.jpeg","images/damn1.jpg","images/damn2.jpg","images/damn3.jpg","images/damn4.jpg","images/deep.jpg","images/deep0.jpg","images/deep1.jpg","images/deep2.jpg","images/deep3.jpg","images/deep4.jpg","images/ei1.jpeg","images/ei3.jpg","images/euzs.png","images/ie.png","images/ie0.jpg","images/ie2.jpeg","images/ie4.jpg","images/logo.png","images/logo_black.jpg","images/mm0.jpeg","images/mm1.jpeg","images/mm2.jpeg","images/mm3.jpeg","images/rockets0.jpg","images/rockets1.jpg","images/rockets2.jpg","images/rockets3.jpg","images/rockets4.jpg","images/rockets5.jpg"]),
	mimeTypes: {".png":"image/png",".otf":"font/otf",".jpg":"image/jpeg",".jpeg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.ca056518.js","app":"_app/immutable/entry/app.bb475857.js","imports":["_app/immutable/entry/start.ca056518.js","_app/immutable/chunks/index.6e0d029f.js","_app/immutable/chunks/singletons.f3f13965.js","_app/immutable/entry/app.bb475857.js","_app/immutable/chunks/index.6e0d029f.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/6.js'),
			() => import('../output/server/nodes/7.js'),
			() => import('../output/server/nodes/8.js'),
			() => import('../output/server/nodes/9.js'),
			() => import('../output/server/nodes/10.js'),
			() => import('../output/server/nodes/11.js'),
			() => import('../output/server/nodes/12.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/art",
				pattern: /^\/art\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/art/cv",
				pattern: /^\/art\/cv\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/art/damnthecomplexity",
				pattern: /^\/art\/damnthecomplexity\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/art/deepstopwords",
				pattern: /^\/art\/deepstopwords\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/art/ie",
				pattern: /^\/art\/ie\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/art/rockets",
				pattern: /^\/art\/rockets\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/edu",
				pattern: /^\/edu\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/edu/digitaltheater",
				pattern: /^\/edu\/digitaltheater\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/writing",
				pattern: /^\/writing\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
