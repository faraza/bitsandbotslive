export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["background/dotted_grid.png","background/sphere_grid.png","favicon 3.png","favicon.png","icons/caret_icon.png","icons/close_icon.png","icons/collapse_icon.png","icons/expand_icon.png","icons/help_icon.png","icons/image_icon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.f26a3234.js","imports":["_app/immutable/entry/start.f26a3234.js","_app/immutable/chunks/index.337f5233.js","_app/immutable/chunks/singletons.8e6f7e00.js","_app/immutable/chunks/paths.bff6e510.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.04934c2a.js","imports":["_app/immutable/entry/app.04934c2a.js","_app/immutable/chunks/index.337f5233.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
