import { c as create_ssr_component } from "../../chunks/index2.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: '*{font-family:"IBM Plex Mono", monospace}body{margin:0}img.svelte-c0zai9{position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100%;object-fit:cover;object-position:center}.inner-img.svelte-c0zai9{position:fixed;top:40px;left:40px;right:40px;bottom:40px;width:calc(100% - 80px);height:calc(100% - 80px);object-fit:cover;object-position:center;border:2px solid black}main.svelte-c0zai9{position:fixed;background:url();position:absolute;top:40px;left:40px;width:calc(100vw - 80px);height:calc(100vh - 80px);z-index:0}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<img src="${"/background/sphere_grid.png"}" class="${"svelte-c0zai9"}">
<img class="${"inner-img svelte-c0zai9"}" src="${"/background/dotted_grid.png"}">

<main class="${"svelte-c0zai9"}">${slots.default ? slots.default({}) : ``}
</main>`;
});
export {
  Layout as default
};
