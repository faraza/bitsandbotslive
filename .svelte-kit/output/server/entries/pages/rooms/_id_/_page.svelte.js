import { c as create_ssr_component, a as subscribe, e as escape, v as validate_component } from "../../../../chunks/index2.js";
import { p as page } from "../../../../chunks/stores.js";
import { i as isHost, M as MainGamePage } from "../../../../chunks/MainGamePage.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".outer.svelte-6ifd07{padding-left:5%;padding-right:5%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  isHost.subscribe((value) => {
  });
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div class="${"outer svelte-6ifd07"}"><h1>Room number: ${escape($page.params.id)}</h1>
	${`${validate_component(MainGamePage, "MainGameScreen").$$render($$result, {}, {}, {})}`}
</div>`;
});
export {
  Page as default
};
