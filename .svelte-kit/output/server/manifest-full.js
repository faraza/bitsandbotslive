export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["background/dotted_grid.png","background/sphere_grid.png","favicon 3.png","favicon.png","icons/caret_icon.png","icons/close_icon.png","icons/collapse_icon.png","icons/expand_icon.png","icons/help_icon.png","icons/image_icon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.7a98548d.js","imports":["_app/immutable/entry/start.7a98548d.js","_app/immutable/chunks/index.337f5233.js","_app/immutable/chunks/singletons.c3d32845.js","_app/immutable/chunks/paths.9e3b9d32.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.1a5c3365.js","imports":["_app/immutable/entry/app.1a5c3365.js","_app/immutable/chunks/index.337f5233.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
