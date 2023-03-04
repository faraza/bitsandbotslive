import { c as create_ssr_component, e as escape, n as null_to_empty, b as add_attribute, v as validate_component, d as createEventDispatcher, f as each } from "../../chunks/index2.js";
import { w as writable } from "../../chunks/index.js";
import "openai";
const TextButton_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: "button.svelte-pww6vo{cursor:pointer;border:none;background:black;color:white;text-transform:uppercase;padding:16px;font-size:medium}",
  map: null
};
const TextButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$8);
  return `<button class="${"svelte-pww6vo"}">${slots.default ? slots.default({}) : ``}
</button>`;
});
const InputButtonCombo_svelte_svelte_type_style_lang = "";
const css$7 = {
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
  $$result.css.add(css$7);
  return `<div class="${escape(null_to_empty(horizontal ? "horizontal" : ""), true) + " svelte-1sgo4cn"}"><input${add_attribute("placeholder", placeholder, 0)} class="${"svelte-1sgo4cn"}"${add_attribute("value", value, 0)}>
	${validate_component(TextButton, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}
</div>`;
});
const CredentialsPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let apiKey2 = "";
  createEventDispatcher();
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div>${`${validate_component(InputButtonCombo, "InputButtonCombo").$$render(
      $$result,
      {
        placeholder: "Enter API Key",
        value: apiKey2
      },
      {
        value: ($$value) => {
          apiKey2 = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `Confirm
    `;
        }
      }
    )}`}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const Frame_svelte_svelte_type_style_lang = "";
const css$6 = {
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
  $$result.css.add(css$6);
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
const css$5 = {
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
  $$result.css.add(css$5);
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
const css$4 = {
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
  $$result.css.add(css$4);
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
const HostGeneratePage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  apiKey.subscribe((value) => {
  });
  let prompt = "";
  let imageURL = "";
  return `


<div>${validate_component(Frame, "Frame").$$render($$result, { title: "Your Artwork" }, {}, {
    default: () => {
      return `${validate_component(Canvas, "Canvas").$$render($$result, { imageSource: imageURL }, {}, {})}
        
        <h3>Get Creative</h3>
        <input${add_attribute("value", prompt, 0)}>
        <div class="${"bottom-buttons"}">${validate_component(TextButton, "TextButton").$$render($$result, {}, {}, {
        default: () => {
          return `Generate`;
        }
      })}
            ${validate_component(TextButton, "TextButton").$$render($$result, {}, {}, {
        default: () => {
          return `Let&#39;s Go`;
        }
      })}</div>`;
    }
  })}</div>`;
});
const LandingPage_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "h1.svelte-1adcpsd.svelte-1adcpsd{font-size:4em;text-align:center}.outer.svelte-1adcpsd.svelte-1adcpsd{display:flex;justify-content:center;height:100%}div.svelte-1adcpsd.svelte-1adcpsd{display:flex;flex-direction:column;justify-content:center;width:256px;margin:auto}div.svelte-1adcpsd p.svelte-1adcpsd{text-align:center;margin:16px}",
  map: null
};
const LandingPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var SetupState = /* @__PURE__ */ ((SetupState2) => {
    SetupState2[SetupState2["Landing"] = 0] = "Landing";
    SetupState2[SetupState2["CredentialingHost"] = 1] = "CredentialingHost";
    SetupState2[SetupState2["CredentialingGuest"] = 2] = "CredentialingGuest";
    SetupState2[SetupState2["HostGenerating"] = 3] = "HostGenerating";
    return SetupState2;
  })(SetupState || {});
  let roomCode2;
  let isConnectedToServer = false;
  let curMainGeneration = { imageURL: "", imagePrompt: "" };
  connectedToWebsocket.subscribe((value) => {
    if (value == isConnectedToServer) {
      return;
    }
    isConnectedToServer = value;
    if (isConnectedToServer) {
      console.log("Connected to server received. Sending setup complete message");
      if (setupState == 2) {
        dispatch("guestSetupComplete", {
          roomCode: roomCode2
          /* CredentialingGuest */
        });
      } else if (setupState == 3) {
        dispatch("hostSetupComplete", {
          "mainGeneration": curMainGeneration
          /* HostGenerating */
        });
      } else {
        console.log("ERROR Connected to server received, but not in a state to send setup complete message");
      }
    }
  });
  const dispatch = createEventDispatcher();
  let setupState = 0;
  $$result.css.add(css$3);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"outer svelte-1adcpsd"}"><div class="${"svelte-1adcpsd"}">${setupState == SetupState.Landing ? `<h1 class="${"svelte-1adcpsd"}">BITS&amp;BOTS</h1>
		${validate_component(TextButton, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `Get Started`;
      }
    })}
		<p class="${"svelte-1adcpsd"}">OR</p>
		${validate_component(InputButtonCombo, "InputButtonCombo").$$render(
      $$result,
      {
        placeholder: "Enter Room Code",
        value: roomCode2
      },
      {
        value: ($$value) => {
          roomCode2 = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `Join Room
		`;
        }
      }
    )}` : `${setupState == SetupState.CredentialingHost || setupState == SetupState.CredentialingGuest ? `${validate_component(CredentialsPage, "CredentialsPage").$$render($$result, {}, {}, {})}` : `${setupState == SetupState.HostGenerating ? `${validate_component(HostGeneratePage, "HostGeneratePage").$$render($$result, {}, {}, {})}` : ``}`}`}</div>
</div>`;
  } while (!$$settled);
  return $$rendered;
});
const WaitingRoom = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let amIHost = true;
  isHost.subscribe((value) => {
    amIHost = value;
  });
  createEventDispatcher();
  let guest_list = [];
  playersList.subscribe((value) => {
    guest_list = value;
  });
  return `<div>${amIHost ? `<h1>Click start when players have joined</h1>
        ${validate_component(TextButton, "TextButton").$$render($$result, {}, {}, {
    default: () => {
      return `Start`;
    }
  })}` : `<h3>Waiting for host to start the game</h3>`}    

    <h2>Current Players:</h2>
        ${each(guest_list, (guest) => {
    return `<li>${escape(guest)}
            </li>`;
  })}
</div>`;
});
websocket.subscribe((value) => {
});
const MainGamePage_svelte_svelte_type_style_lang = "";
const css$2 = {
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
  $$result.css.add(css$2);
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
const RoomPage_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".outer.svelte-6ifd07{padding-left:5%;padding-right:5%}",
  map: null
};
const RoomPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isWaiting = true;
  let { roomCode: roomCode2 = "" } = $$props;
  isHost.subscribe((value) => {
  });
  gameStarted.subscribe((value) => {
    if (value) {
      isWaiting = false;
    }
  });
  if ($$props.roomCode === void 0 && $$bindings.roomCode && roomCode2 !== void 0)
    $$bindings.roomCode(roomCode2);
  $$result.css.add(css$1);
  return `<div class="${"outer svelte-6ifd07"}"><h1>Room number: ${escape(roomCode2)}</h1>
	${isWaiting ? `${validate_component(WaitingRoom, "WaitingRoom").$$render($$result, {}, {}, {})}` : `${validate_component(MainGamePage, "MainGameScreen").$$render($$result, {}, {}, {})}`}
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-1m2yimu{font-size:4em;text-align:center}div.svelte-1m2yimu{display:flex;flex-direction:column;justify-content:center;width:256px;margin:auto}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var SetupState = /* @__PURE__ */ ((SetupState2) => {
    SetupState2[SetupState2["SettingUpRoom"] = 0] = "SettingUpRoom";
    SetupState2[SetupState2["Landing"] = 1] = "Landing";
    SetupState2[SetupState2["InRoom"] = 2] = "InRoom";
    return SetupState2;
  })(SetupState || {});
  let curState = 1;
  let curRoomCode = "";
  mainGenPrompt.subscribe((value) => {
    console.log("Main gen prompt changed to: " + value);
  });
  mainGenURL.subscribe((value) => {
    console.log("Main gen URL changed to: " + value);
  });
  userName.subscribe((value) => {
  });
  roomCode.subscribe((value) => {
    if (curRoomCode.length == 0)
      curRoomCode = value;
  });
  $$result.css.add(css);
  return `<div class="${"outer svelte-1m2yimu"}"><div class="${"svelte-1m2yimu"}">${curState == SetupState.SettingUpRoom ? `<h1 class="${"svelte-1m2yimu"}">Setting up room...</h1>` : `${curState == SetupState.Landing ? `${validate_component(LandingPage, "LandingPage").$$render($$result, {}, {}, {})}` : `${curState == SetupState.InRoom ? `${validate_component(RoomPage, "RoomPage").$$render($$result, { roomCode: curRoomCode }, {}, {})}` : ``}`}`}</div>
</div>`;
});
export {
  Page as default
};
