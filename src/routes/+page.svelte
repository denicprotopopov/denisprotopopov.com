<script>
	import Card from '../lib/Card.svelte';

	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
	<title>Denis Protopopov</title>
	<meta property="og:title" content="Denis Protopopov" />
	<meta
		property="og:description"
		content="Artist and researcher that works at the intersection of technologies, media, visual and performative arts."
	/>

	<meta name="twitter:title" content="Denis Protopopov" />
	<meta
		name="twitter:description"
		content="Artist and researcher that works at the intersection of technologies, media, visual and performative arts."
	/>
</svelte:head>

<main class="container">
	<Card class="blue card">
		<a href="/about">
			<p class="header-in-box">Denis Protopopov</p>
			<p class="text-in-box">
				Artist, researcher, educator and creative developer, working at the intersection of
				technologies, media, visual and performative arts.
			</p>
		</a>
	</Card>

	<Card class="orange card">
		<a href="/art">
			<p class="header-in-box">Art Projects and Coding</p>
			<p class="text-in-box">
				Augmented reality, algorithmic theater, artificial intelligence, games and visual novels. My
				projects explore algorithmic biases, queering technologies and machine magic to open the
				‘black box’ of modern tech.
			</p>
		</a>
	</Card>
	<Card class="violet card">
		<a href="/edu">
			<p class="header-in-box">Educational Projects</p>
			<p class="text-in-box">
				I develop STEM educational projects for artists, performers and activists. Their curriculum
				design helps to better understand politics and aesthetics of data processing and algorithms,
				questioning binary logic, hierarchies and biases.
			</p>
		</a>
	</Card>
	<Card class="green card">
		<a href="/writing">
			<p class="header-in-box">Selected Publications</p>
			<p class="text-in-box">
				Texts and articles on technologies, society and media. History of digital art, low-tech web
				and algorithmic biases.
			</p>
		</a>
	</Card>

	<Card class="grey card">
		<a href="mailto:protdenden@gmail.com">
			<p class="header-in-box">Contacts</p>
			<p class="text-in-box">email: protdenden@gmail.com</p>
		</a>
	</Card>

	<Card class="brown card">
		<a
			href="https://drive.google.com/file/d/1u29eXYOTaHS5TlJzdCoaY97ie2_qg_Ze/preview"
			target="_blank"
		>
			<p class="header-in-box">CV & Portfolio</p>
			<p class="text-in-box">CV and Portfolio in PDF.</p>
		</a>
	</Card>
</main>

<style>
	p {
		font-family: 'Cooshing-Book', regular;
		color: rgb(255, 255, 255);
		margin: 0;
		padding: 10% 10% 10%;
		position: absolute;
		left: 0;
		right: 0;
	}
	.container {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
	}
	.header-in-box {
		font-size: clamp(17px, 4vh, 30px);
	}

	.text-in-box {
		font-size: clamp(12px, 3vh, 18px);
		bottom: 0;
	}
	.container :global(.blue) {
		background-color: rgb(52, 72, 252);
	}
	.container :global(.orange) {
		background-color: rgb(234, 119, 52);
	}
	.container :global(.violet) {
		background-color: rgb(148, 66, 252);
	}
	.container :global(.green) {
		background-color: rgb(83, 179, 29);
	}
	.container :global(.brown) {
		background-color: rgb(173, 83, 47);
	}
	.container :global(.grey) {
		background-color: rgb(94, 97, 122);
	}
	.container :global(.eusz) {
		background-image: url(images/euzs.png);
	}

	a {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}
</style>
