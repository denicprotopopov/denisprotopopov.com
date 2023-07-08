import { c as create_ssr_component, e as escape } from "./index.js";
const Card_svelte_svelte_type_style_lang = "";
const css = {
  code: ".card.svelte-18zqvxh{background-position:center;background-size:cover;border-radius:13%;height:0;position:relative;display:inline-block;vertical-align:top;width:30%;padding-bottom:30%;transition:filter 1s}.card.svelte-18zqvxh:hover{-webkit-filter:blur(6px);filter:blur(6px)}@media screen and (min-width: 100px){.card.svelte-18zqvxh{width:90%;padding-bottom:90%}}@media screen and (min-width: 550px){.card.svelte-18zqvxh{width:40%;padding-bottom:40%}}@media screen and (min-width: 1200px){.card.svelte-18zqvxh{width:35%;padding-bottom:35%}}",
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"card " + escape($$props.class, true) + " svelte-18zqvxh"}">${slots.default ? slots.default({}) : ``}
	${slots.default ? slots.default({}) : ``}
</div>`;
});
export {
  Card as C
};
