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

<main>
	<div class="container">
		<div class="content">
			<div class="row">
				<div class="cell">
					<div class="title-logo">
						<div>
							<h1>Research and Writing</h1>
							<p>
								Texts on technologies, society and media, that cover algorithmic biaces and costs of
								acceleration.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="row">
				<a class="cell" href="https://theblueprint.ru/culture/specials/restore-tsifrovoe-iskusstvo">
					<div class="with-arrow">
						<h3>
							Black — White — Digital: Unpacking Contemporary Digital Art, The Blueprint, 2024
						</h3>
						<div class="arrow"></div>
					</div>
				</a>
			</div>

			<div class="row">
				<a class="cell" href="https://theblueprint.ru/culture/specials/kaspersky-open-bodies">
					<div class="with-arrow">
						<h3>
							Open Bodies: The Shape of Human–Technology Synergy, The Blueprint, 2024
						</h3>
						<div class="arrow"></div>
					</div>
				</a>
			</div>

			<div class="row">
				<a class="cell" href="https://inclusion.yandex.ru/setters-project">
					<div class="with-arrow">
						<h3>
							Without Exclusion. Why Accessibility in Technology Matters, Yandex, 2024
						</h3>
						<div class="arrow"></div>
					</div>
				</a>
			</div>

			<div class="row">
				<a class="cell" href="https://us5.campaign-archive.com/?u=4ea5740c1fe71d71fea4212ee&id=aafee9f20f">
					<div class="with-arrow">
						<h3>
							Online Longing: Why We Suffer Yet Still Go Online, Kit, 2023
						</h3>
						<div class="arrow"></div>
					</div>
				</a>
			</div>

			<div class="row">
				<a class="cell" href="https://bbbl.dev/articles/low-tech">
					<div class="with-arrow">
						<h3>
							What is Low-Tech Web Community and How Will It Help WIn The War Against Platforms,
							Bubble, 2022
						</h3>
						<div class="arrow"></div>
					</div>
				</a>
			</div>

			<div class="row">
				<a class="cell" href="https://supernova.is/pochemu-ii-kopiruet-nashi-predubezhdeniya-i-kak-eto-ispravit/">
					<div class="with-arrow">
						<h3>Why AI Copies Our Biases and How To Fix It, Supernova, 2022</h3>
						<div class="arrow"></div>
					</div>
				</a>
			</div>

			<div class="row">
				<a
					class="cell"
					href="https://nonfiction.ru/stream/algoritm-sluchajnoj-realnosti-mashinnyij-intellekt-v-iskusstve"
				>
					<div class="with-arrow">
						<h3>Random Reality Algorithm: Machine Intelligence in Art, Alpina Non-Fiction, 2021</h3>
						<div class="arrow"></div>
					</div>
				</a>
			</div>

			<div class="row">
				<a
					class="cell"
					href="https://web.archive.org/web/20230209123228/https://cognitive.sovremennik.ru/znanie/14-instrumenty-tsifrovogo-iskusstva"
				>
					<div class="with-arrow">
						<h3>Instruments of Digital Art, Cognitive, 2021</h3>
						<div class="arrow"></div>
					</div>
				</a>
			</div>
		</div>
	</div>
</main>

<style>
	* {
		box-sizing: border-box;
	}

	body {
		overflow-x: hidden;
	}

	html,
	body {
		width: 100vw;
		height: 100vh;
	}

	html,
	body,
	.container {
		margin: 0;
		padding: 0;
		border: 0;
	}

	.container {
		width: 100%;
		display: flex;
		position: relative;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 16px 10px 0;
	}

	.content {
		position: relative;
		max-width: 780px;
		width: 100%;
		transform-origin: 0 0;
	}

	body {
		background-color: black;
	}

	body,
	h1,
	h2,
	h2bright,
	h3,
	h3bright,
	p,
	footer {
		font-family: -apple-system, BlinkMacSystemFont, sans-serif;
	}

	h1 {
		padding: 0;
		margin: 0;
		color: white;
		font-weight: 700;
		font-size: clamp(10px, 8vw, 50px);
	}

	h2 {
		padding: 0;
		margin: 0;
		color: #0093ff;
		font-weight: 700;
		font-size: clamp(10px, 5vw, 42px);
	}

	h2bright {
		padding: 0;
		margin: 0;
		color: white;
		font-weight: 700;
		font-size: clamp(10px, 5vw, 42px);
	}

	h3 {
		font-size: clamp(10px, 4.2vw, 38px);
		font-weight: 500;
		color: white;
		padding: 0;
		margin: 0;
	}

	h3bright {
		font-size: clamp(10px, 4.2vw, 38px);
		font-weight: 500;
		color: #0093ff;
		padding: 0;
		margin: 0;
	}

	footer {
		font-size: clamp(10px, 10vw, 93px);
		color: #2c7cf5;
		white-space: nowrap;
		font-weight: 800;
		margin-top: 15px;
	}

	p {
		font-size: clamp(10px, 4vw, 36px);
		color: #949494;
		margin: 8px 0 0;
	}

	a {
		color: currentColor;
		text-decoration: none;
	}

	.link {
		color: #0093ff;
	}

	@media (hover: hover) and (pointer: fine) {
		.link:hover {
			text-decoration: underline;
		}

		a.cell:hover {
			background-color: #363636;
		}

		a.bright_cell:hover {
			background-color: #429eff;
		}

		a.cell:hover .arrow {
			border: solid white;
			border-width: 0 clamp(2px, 1vw, 5px) clamp(2px, 1vw, 5px) 0;
		}
	}

	.row {
		display: flex;
		align-items: stretch;
		width: 100%;
		margin-bottom: clamp(4px, 2vw, 12px);
	}

	.cell {
		display: flex;
		flex-direction: column;
		justify-content: center;
		flex: 1 1 auto;
		border-radius: 16px;
		background-color: #181818;
		transition: background-color 200ms;
		margin: 0 clamp(2px, 1vw, 6px);
		padding: 16px clamp(8px, 4vw, 20px);
	}

	.bright_cell {
		display: flex;
		flex-direction: column;
		justify-content: center;
		flex: 1 1 auto;
		border-radius: 16px;
		background-color: #0093ff;
		transition: background-color 200ms;
		margin: 0 clamp(2px, 1vw, 6px);
		padding: 16px clamp(8px, 4vw, 20px);
	}

	.centered {
		justify-content: center;
		align-items: center;
	}

	.arrow {
		border: solid #949494;
		border-width: 0 clamp(2px, 1vw, 5px) clamp(2px, 1vw, 5px) 0;
		display: inline-block;
		padding: clamp(4px, 1.4vw, 7px);
		border-radius: 3px;
		transform: rotate(-45deg);
		-webkit-transform: rotate(-45deg);
		transition: border 200ms;
	}

	.with-arrow {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo {
		width: clamp(60px, 20vw, 138px);
		height: clamp(60px, 20vw, 138px);
		object-fit: contain;
		margin-right: 12px;
		position: relative;
		top: 2px;
	}

	.title-logo {
		display: flex;
		align-items: center;
		margin: clamp(0, 0.8vw, 8px) 0;
	}

	.back-logo {
		width: 200px;
		height: 200px;
	}

	.image {
		position: relative;
		max-width: 780px;
		width: 100%;
		transform-origin: 0 0;
	}
</style>
