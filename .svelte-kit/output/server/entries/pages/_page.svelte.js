import { c as create_ssr_component, b as createEventDispatcher, v as validate_component, d as add_attribute, f as each, e as escape } from "../../chunks/index2.js";
import { I as InputButtonCombo, a as apiKey, F as Frame, C as Canvas, T as TextButton, c as connectedToWebsocket, i as isHost, p as playersList, g as gameStarted, M as MainGamePage, m as mainGenPrompt, b as mainGenURL, u as userName, r as roomCode } from "../../chunks/MainGamePage.js";
import "openai";
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
const css$2 = {
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
  $$result.css.add(css$2);
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
