const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		entry: {"file":"_app/immutable/start-e76041a7.js","imports":["_app/immutable/start-e76041a7.js","_app/immutable/chunks/index-a04286cd.js","_app/immutable/chunks/control-03134885.js"],"stylesheets":[]},
		nodes: [
			() => import('./chunks/0-7fa3ce19.js'),
			() => import('./chunks/1-c60aba78.js'),
			() => import('./chunks/2-d6769255.js'),
			() => import('./chunks/3-61e6c468.js'),
			() => import('./chunks/4-99119c04.js'),
			() => import('./chunks/5-80c27148.js'),
			() => import('./chunks/6-eac8ef27.js'),
			() => import('./chunks/7-1ee347e7.js'),
			() => import('./chunks/8-6e685fc1.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/activiteiten",
				pattern: /^\/activiteiten\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/activiteiten/[slug]",
				pattern: /^\/activiteiten\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				optional: [false],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/logout",
				pattern: /^\/logout\/?$/,
				names: [],
				types: [],
				optional: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-9eacd30d.js')
			},
			{
				id: "/over-ons",
				pattern: /^\/over-ons\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/register",
				pattern: /^\/register\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/woordenboek",
				pattern: /^\/woordenboek\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { manifest };
//# sourceMappingURL=manifest.js.map
