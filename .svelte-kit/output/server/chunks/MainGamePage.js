import { c as create_ssr_component, e as escape, n as null_to_empty, d as add_attribute, v as validate_component, b as createEventDispatcher, f as each } from "./index2.js";
import { w as writable } from "./index.js";
import "openai";
const TextButton_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "button.svelte-pww6vo{cursor:pointer;border:none;background:black;color:white;text-transform:uppercase;padding:16px;font-size:medium}",
  map: null
};
const TextButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<button class="${"svelte-pww6vo"}">${slots.default ? slots.default({}) : ``}
</button>`;
});
const InputButtonCombo_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "div.svelte-1sgo4cn{border:1px solid black;display:flex;flex-direction:column}div.horizontal.svelte-1sgo4cn{background:red;flex-direction:row}input.svelte-1sgo4cn{border:none;background:white;padding:16px 16px;font-size:medium;text-align:center;text-transform:uppercase}",
  map: null
};
const InputButtonCombo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { placeholder } = $$props;
  let { horizontal = false } = $$props;
  let { value = "" } = $$props;
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.horizontal === void 0 && $$bindings.horizontal && horizontal !== void 0)
    $$bindings.horizontal(horizontal);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  $$result.css.add(css$4);
  return `<div class="${escape(null_to_empty(horizontal ? "horizontal" : ""), true) + " svelte-1sgo4cn"}"><input${add_attribute("placeholder", placeholder, 0)} class="${"svelte-1sgo4cn"}"${add_attribute("value", value, 0)}>
	${validate_component(TextButton, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}
</div>`;
});
const Frame_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".container.svelte-4h2zpx.svelte-4h2zpx{background:white;border:1px solid black;box-shadow:6px 6px 0 0 black}.container.svelte-4h2zpx .header.svelte-4h2zpx{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:0 8px;background:black;color:white}.container.svelte-4h2zpx .header .circle-row.svelte-4h2zpx{display:flex;gap:4px}.container.svelte-4h2zpx .header .circle-row .circle.svelte-4h2zpx{width:8px;height:8px;border:1.5px solid white;border-radius:16px}.container.svelte-4h2zpx .header p.svelte-4h2zpx{margin:0;text-transform:uppercase}.container.svelte-4h2zpx .header button.svelte-4h2zpx{cursor:pointer;background:none;border:none}.container.svelte-4h2zpx .header button img.svelte-4h2zpx{height:20px;margin-top:4px}",
  map: null
};
const Frame = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { collapsed = false } = $$props;
  let { collapsable = false } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.collapsed === void 0 && $$bindings.collapsed && collapsed !== void 0)
    $$bindings.collapsed(collapsed);
  if ($$props.collapsable === void 0 && $$bindings.collapsable && collapsable !== void 0)
    $$bindings.collapsable(collapsable);
  $$result.css.add(css$3);
  return `<div class="${"container svelte-4h2zpx"}"><div class="${"header svelte-4h2zpx"}"><div class="${"circle-row svelte-4h2zpx"}"><div class="${"circle svelte-4h2zpx"}"></div>
			<div class="${"circle svelte-4h2zpx"}"></div>
			<div class="${"circle svelte-4h2zpx"}"></div></div>

		<p class="${"svelte-4h2zpx"}">${escape(title)}</p>

		
		<div>${collapsable ? `<button class="${"clickable svelte-4h2zpx"}"><img${add_attribute(
    "src",
    collapsed ? "/icons/expand_icon.png" : "/icons/collapse_icon.png",
    0
  )} class="${"svelte-4h2zpx"}"></button>` : ``}</div></div>

	${!collapsed ? `<div class="${"content"}">${slots.default ? slots.default({}) : ``}</div>` : ``}
</div>`;
});
const Canvas_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".image-container.svelte-1fax2zr{min-width:256px;min-height:256px;background-color:white}p.svelte-1fax2zr{text-align:center;padding-left:5%;padding-right:5%}",
  map: null
};
const Canvas = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { imageSource = "" } = $$props;
  let { placeholderText = "A blank ~canvas~ has infinite possibilities" } = $$props;
  if ($$props.imageSource === void 0 && $$bindings.imageSource && imageSource !== void 0)
    $$bindings.imageSource(imageSource);
  if ($$props.placeholderText === void 0 && $$bindings.placeholderText && placeholderText !== void 0)
    $$bindings.placeholderText(placeholderText);
  $$result.css.add(css$2);
  return `<div><div class="${"image-container svelte-1fax2zr"}">${imageSource ? `<img${add_attribute("src", imageSource, 0)}${add_attribute("alt", "An AI generated image created with a secret prompt", 0)}>` : `<p class="${"svelte-1fax2zr"}">${escape(placeholderText)}</p>`}</div>    
</div>`;
});
var CanvasTypes = /* @__PURE__ */ ((CanvasTypes2) => {
  CanvasTypes2[CanvasTypes2["HostGenerator"] = 1] = "HostGenerator";
  CanvasTypes2[CanvasTypes2["PlayerGenerator"] = 2] = "PlayerGenerator";
  CanvasTypes2[CanvasTypes2["MainImage"] = 3] = "MainImage";
  CanvasTypes2[CanvasTypes2["PlayerCompetitor"] = 4] = "PlayerCompetitor";
  return CanvasTypes2;
})(CanvasTypes || {});
const apiKey = writable("");
const userName = writable("");
const isHost = writable(false);
const playersList = writable([]);
const playersAndImages = writable([["faraz", "https://picsum.photos/200/300"], ["thomas", "https://picsum.photos/200/300"]]);
const hostName = writable("");
const connectedToWebsocket = writable(false);
const websocket = writable();
const mainGenPrompt = writable("");
const mainGenURL = writable("");
const gameStarted = writable(false);
const roomCode = writable("");
const CanvasWindow_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".outer.svelte-1frg42h{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;width:100%}.bottom-bar-main-image.svelte-1frg42h{width:100%;background-color:#000000;color:#ffffff;display:flex;align-items:center;justify-content:center;padding-left:3px;padding-right:3px}.final-prompt-bar.svelte-1frg42h{width:100%;background-color:#000000;color:#ffffff;display:flex;align-items:center;justify-content:center;padding-left:3px;padding-right:3px}",
  map: null
};
const CanvasWindow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { imageSource = "" } = $$props;
  let { placeholderText = "A blank canvas has infinite possibilities" } = $$props;
  let { canvasType = 0 } = $$props;
  let { gameComplete = false } = $$props;
  let prompt = "";
  let { finalPrompt = "Luigi and Washington crossing the Delaware" } = $$props;
  apiKey.subscribe((value) => {
  });
  createEventDispatcher();
  if ($$props.imageSource === void 0 && $$bindings.imageSource && imageSource !== void 0)
    $$bindings.imageSource(imageSource);
  if ($$props.placeholderText === void 0 && $$bindings.placeholderText && placeholderText !== void 0)
    $$bindings.placeholderText(placeholderText);
  if ($$props.canvasType === void 0 && $$bindings.canvasType && canvasType !== void 0)
    $$bindings.canvasType(canvasType);
  if ($$props.gameComplete === void 0 && $$bindings.gameComplete && gameComplete !== void 0)
    $$bindings.gameComplete(gameComplete);
  if ($$props.finalPrompt === void 0 && $$bindings.finalPrompt && finalPrompt !== void 0)
    $$bindings.finalPrompt(finalPrompt);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"outer svelte-1frg42h"}">${validate_component(Frame, "Frame").$$render($$result, { title: "Bits&Bots" }, {}, {
      default: () => {
        return `${validate_component(Canvas, "Canvas").$$render($$result, { imageSource, placeholderText }, {}, {})}

    <div class="${"bottom-bar"}">${canvasType == CanvasTypes.MainImage ? `<div class="${"bottom-bar-main-image svelte-1frg42h"}"><h2>Try to recreate it!</h2></div>` : `${canvasType == CanvasTypes.PlayerGenerator ? `<div class="${"bottom-bar-player-generator"}">${!gameComplete ? `${validate_component(InputButtonCombo, "InputButtonCombo").$$render(
          $$result,
          {
            placeholder: "Enter your prompt",
            horizontal: true,
            value: prompt
          },
          {
            value: ($$value) => {
              prompt = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `Generate`;
            }
          }
        )}` : ``}</div>                
        ` : `${canvasType == CanvasTypes.HostGenerator ? `<div class="${"bottom-buttons"}">${validate_component(TextButton, "TextButton").$$render($$result, {}, {}, {
          default: () => {
            return `Generate`;
          }
        })}
                ${validate_component(TextButton, "TextButton").$$render($$result, {}, {}, {
          default: () => {
            return `Let&#39;s Go`;
          }
        })}</div>` : ``}`}`}

        <div class="${"final-prompt-bar svelte-1frg42h"}">${gameComplete ? `<p>Prompt: ${escape(finalPrompt)}</p>` : ``}</div></div>`;
      }
    })}
</div>`;
  } while (!$$settled);
  return $$rendered;
});
websocket.subscribe((value) => {
});
const MainGamePage_svelte_svelte_type_style_lang = "";
const css = {
  code: ".winner-picking-button.svelte-wlj57a{padding-top:3px;display:flex;justify-content:center}",
  map: null
};
const MainGamePage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mainImage = "";
  let mainPrompt = "";
  let nameOfHost = "";
  let curPlayersAndImages = [];
  let amIHost = false;
  let timeRemaining = 20;
  let gameComplete = false;
  playersAndImages.subscribe((value) => {
    curPlayersAndImages = value;
  });
  isHost.subscribe((value) => {
    amIHost = value;
  });
  hostName.subscribe((value) => {
    nameOfHost = value;
  });
  mainGenURL.subscribe((value) => {
    mainImage = value;
  });
  mainGenPrompt.subscribe((value) => {
    mainPrompt = value;
  });
  userName.subscribe((value) => {
  });
  $$result.css.add(css);
  return `<div>${`<div class="${"timer-container"}"><h2>Time: ${escape(timeRemaining)} seconds</h2></div>`}
    <h1>${escape(nameOfHost)}&#39;s Image</h1> 
    
    ${validate_component(CanvasWindow, "CanvasWindow").$$render(
    $$result,
    {
      imageSource: mainImage,
      canvasType: CanvasTypes.MainImage,
      gameComplete,
      finalPrompt: mainPrompt
    },
    {},
    {}
  )}

    ${!amIHost ? `<h2>You</h2>
    ${validate_component(CanvasWindow, "CanvasWindow").$$render(
    $$result,
    {
      canvasType: CanvasTypes.PlayerGenerator,
      gameComplete
    },
    {},
    {}
  )}` : ``}

    ${each(curPlayersAndImages, (playerAndImage) => {
    return `<h2>${escape(playerAndImage[0])}</h2>
    ${validate_component(CanvasWindow, "CanvasWindow").$$render(
      $$result,
      {
        canvasType: CanvasTypes.PlayerCompetitor,
        placeholderText: playerAndImage[0] + " is generating an image",
        gameComplete,
        imageSource: playerAndImage[1],
        finalPrompt: playerAndImage[2]
      },
      {},
      {}
    )}
    <div class="${"winner-picking-button svelte-wlj57a"}">${``}
    </div>`;
  })}
</div>`;
});
export {
  Canvas as C,
  Frame as F,
  InputButtonCombo as I,
  MainGamePage as M,
  TextButton as T,
  apiKey as a,
  mainGenURL as b,
  connectedToWebsocket as c,
  gameStarted as g,
  isHost as i,
  mainGenPrompt as m,
  playersList as p,
  roomCode as r,
  userName as u
};
