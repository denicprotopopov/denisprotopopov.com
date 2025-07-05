<svelte:head>
	<title>Inner Emigration | Denis Protopopov</title>
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
							<h1>Inner Emigration</h1>
							<p>Multimedia Performance</p>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<a class="cell centered" href="https://vimeo.com/340257526">
					<h2>Watch Trailer</h2>
				</a>
			</div>

			<div class="row">
				<div class="cell">
					<p>
						Inner Emigration is a multimedia performance about the new state of queer bodies and
						sensuality in an algorithmic space. Communication protocols, interfaces, and devices
						change the way how people exist quietly. A cyborg nowadays is not a creature made of
						flesh and machine. It is something that mediated through relationships with digital
						objects. Hypertext narrative, augmented reality and multichannel video are used in this
						project to describe a disembodied senses of the relationship between human bodies in
						post-digital world.
					</p>
				</div>
			</div>

			<div class="row">
				<div class="cell">
					<img class="image" src="../images/ei1.jpeg" />
				</div>
			</div>

			<div class="row">
				<div class="cell">
					<p>
						The project tries to reveal a state of queer sensuality in a world where privacy and
						intimacy are under influence of protocols and interfaces. In this world, a division
						between real and virtual does not longer exist. Nowadays a swipe of a finger on a flat
						screen is almost as natural as a touch of our skin. Phantom-Vibrations-Syndrome is
						another example. It is a feeling of vibration when there is no vibration, it is a
						hallucination. It seems that when a person interacts with digital objects they become a
						cyborg, but not as a creature made of flesh and machine. This cyborg exists through
						interfaces and algorithms.
					</p>
				</div>
			</div>

			<div class="row">
				<div class="cell">
					<img class="image" src="../images/ie2.jpeg" />
				</div>
			</div>

			<div class="row">
				<div class="cell">
					<p>
						Katherine Hayles, an American electronic literature researcher, describes a cyborg as a
						being that can tear down or complicate traditional boundaries. The definition of a
						cyborg as a conceptual, not technological creature, is more reasonable. Then we have to
						find out how human relationship exists in this new state.
					</p>
				</div>
			</div>

			<div class="row">
				<div class="cell">
					<img class="image" src="../images/ei3.jpg" />
				</div>
			</div>

			<div class="row">
				<div class="cell">
					<p>
						We have to talk about the new state of queer bodies, their sensuality and corporeality
						through AI algorithms, data protocols and new interfaces. These topics have separate
						academic researches, but together they are our everyday experience. Only our personal
						experience and sensuality let us understand our state in today's world. An attempt to
						describe only the technological part of it increases the gap between us and digital
						development.
					</p>
				</div>
			</div>
			<div class="row">
				<div class="cell">
					<img class="image" src="../images/ie4.jpg" />
				</div>
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
		color: #cccccc;
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
			background-color: #7252e8;
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
