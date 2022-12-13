const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		entry: {"file":"_app/immutable/start-79f9fc8c.js","imports":["_app/immutable/start-79f9fc8c.js","_app/immutable/chunks/index-a04286cd.js","_app/immutable/chunks/control-03134885.js"],"stylesheets":[]},
		nodes: [
			() => import('./chunks/0-277ae453.js'),
			() => import('./chunks/1-bb938d6b.js'),
			() => import('./chunks/2-e994dc08.js'),
			() => import('./chunks/3-38bed878.js'),
			() => import('./chunks/4-17724322.js'),
			() => import('./chunks/5-be50615f.js'),
			() => import('./chunks/6-f7c350e8.js'),
			() => import('./chunks/7-f51ae6c8.js'),
			() => import('./chunks/8-b185ad0e.js')
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
