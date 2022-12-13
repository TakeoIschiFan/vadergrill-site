const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["background.jpg","favicon.png","testfoto.jpg","vadergrill.svg"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"_app/immutable/start-2a681276.js","imports":["_app/immutable/start-2a681276.js","_app/immutable/chunks/index-a04286cd.js","_app/immutable/chunks/control-03134885.js"],"stylesheets":[]},
		nodes: [
			() => import('./chunks/0-6751f588.js'),
			() => import('./chunks/1-c67e11c9.js'),
			() => import('./chunks/2-4e55c0b0.js'),
			() => import('./chunks/3-72b3a1e7.js'),
			() => import('./chunks/4-3b51b893.js'),
			() => import('./chunks/5-c13e4316.js'),
			() => import('./chunks/6-23c775e2.js'),
			() => import('./chunks/7-c5ca129f.js'),
			() => import('./chunks/8-3a522526.js')
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
