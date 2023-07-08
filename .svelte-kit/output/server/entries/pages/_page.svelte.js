import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
import { C as Card } from "../../chunks/Card.js";
import { inject } from "@vercel/analytics";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "p.svelte-1cnhdz{font-family:'Cooshing-Book', regular;color:rgb(255, 255, 255);margin:0;padding:10% 10% 10%;position:absolute;left:0;right:0}.container.svelte-1cnhdz{display:flex;flex-wrap:wrap;align-items:center;justify-content:center}.header-in-box.svelte-1cnhdz{font-size:clamp(17px, 4vh, 30px)}.text-in-box.svelte-1cnhdz{font-size:clamp(12px, 3vh, 18px);bottom:0}.container.svelte-1cnhdz .blue{background-color:rgb(52, 72, 252)}.container.svelte-1cnhdz .orange{background-color:rgb(234, 119, 52)}.container.svelte-1cnhdz .violet{background-color:rgb(148, 66, 252)}.container.svelte-1cnhdz .green{background-color:rgb(83, 179, 29)}.container.svelte-1cnhdz .brown{background-color:rgb(173, 83, 47)}.container.svelte-1cnhdz .grey{background-color:rgb(94, 97, 122)}.container.svelte-1cnhdz .eusz{background-image:url(images/euzs.png)}a.svelte-1cnhdz{position:absolute;top:0;bottom:0;left:0;right:0}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  inject({ mode: "production" });
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1r9fbvg_START -->${$$result.title = `<title>Denis Protopopov</title>`, ""}<meta property="og:title" content="Denis Protopopov"><meta property="og:description" content="Artist and researcher that works at the intersection of technologies, media, visual and performative arts."><meta name="twitter:title" content="Denis Protopopov"><meta name="twitter:description" content="Artist and researcher that works at the intersection of technologies, media, visual and performative arts."><!-- HEAD_svelte-1r9fbvg_END -->`, ""}

<main class="container svelte-1cnhdz">${validate_component(Card, "Card").$$render($$result, { class: "blue card" }, {}, {
    default: () => {
      return `<a href="/about" class="svelte-1cnhdz"><p class="header-in-box svelte-1cnhdz">Denis Protopopov</p>
		<p class="text-in-box svelte-1cnhdz">Artist, researcher, educator and creative developer, working at the intersection of technologies, media, visual and performative arts.
		</p></a>`;
    }
  })}

	${validate_component(Card, "Card").$$render($$result, { class: "orange card" }, {}, {
    default: () => {
      return `<a href="/art" class="svelte-1cnhdz"><p class="header-in-box svelte-1cnhdz">Art Projects and Coding</p>
		<p class="text-in-box svelte-1cnhdz">Augmented reality, algorithmic theater, artificial intelligence, games and visual novels. My projects explore algorithmic biases, queering technologies and machine magic to open the ‘black box’ of modern tech.
		</p></a>`;
    }
  })}
	${validate_component(Card, "Card").$$render($$result, { class: "violet card" }, {}, {
    default: () => {
      return `<a href="/edu" class="svelte-1cnhdz"><p class="header-in-box svelte-1cnhdz">Educational Projects</p>
		<p class="text-in-box svelte-1cnhdz">I develop STEM educational projects for artists, performers and activists. Their curriculum design helps to better understand politics and aesthetics of data processing and algorithms, questioning binary logic, hierarchies and biases.
		</p></a>`;
    }
  })}
	${validate_component(Card, "Card").$$render($$result, { class: "green card" }, {}, {
    default: () => {
      return `<a href="/writing" class="svelte-1cnhdz"><p class="header-in-box svelte-1cnhdz">Selected Publications</p>
		<p class="text-in-box svelte-1cnhdz">Texts and articles on technologies, society and media. History of digital art, low-tech web and algorithmic biases.
		</p></a>`;
    }
  })}

	${validate_component(Card, "Card").$$render($$result, { class: "grey card" }, {}, {
    default: () => {
      return `<p class="header-in-box svelte-1cnhdz">Contacts</p>
		<p class="text-in-box svelte-1cnhdz">Texts and articles on technologies, society and media. History of digital art, low-tech web and algorithmic biases.
		</p>`;
    }
  })}

	${validate_component(Card, "Card").$$render($$result, { class: "brown card" }, {}, {
    default: () => {
      return `<p class="header-in-box svelte-1cnhdz">CV &amp; Portfolio</p>
		<p class="text-in-box svelte-1cnhdz">Texts and articles on technologies, society and media. History of digital art, low-tech web and algorithmic biases.
		</p>`;
    }
  })}
</main>`;
});
export {
  Page as default
};
