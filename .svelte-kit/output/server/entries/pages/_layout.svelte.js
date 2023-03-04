import { c as create_ssr_component } from "../../chunks/index2.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: '*{font-family:"IBM Plex Mono", monospace}body{margin:0}img.svelte-ebzrxi{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;object-fit:cover;object-position:center}main.svelte-ebzrxi{position:relative;background:url("/background/dotted_grid.png");position:absolute;top:40px;left:40px;width:calc(100vw - 80px);height:calc(100vh - 80px);border:2px solid black;z-index:0}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<img src="${"/background/sphere_grid.png"}" class="${"svelte-ebzrxi"}">

<main class="${"svelte-ebzrxi"}">${slots.default ? slots.default({}) : ``}
</main>`;
});
export {
  Layout as default
};
