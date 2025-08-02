<svelte:head>
	<title>Dislocated Gaps | Denis Protopopov</title>
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
							<h1>Dislocated Gaps</h1>
							<p>A sound walk</p>
						</div>
					</div>
				</div>
			</div>
			
			<div class="row">
				<div class="cell">
					<img class="image" src="../images/walk2.JPG" />
				</div>
			</div>

			<div class="row">
				<div class="cell">
					<p>
						This sound walk explored the multi-sensory urban environment of Yerevan. It was rooted in our personal experiences of being in the city in different circumstances, roles, times, places, communities, and emotional states. 
This sound walk interweaved these moments and personal stories with video game mechanics, allowing participants to perceive the city from another sonic, bodily and visual perspective.
					</p>
				</div>
			</div>

			<div class="row">
				<div class="cell">
					<img class="image" src="../images/walk1.JPG" />
				</div>
			</div>

			<div class="row">
				<div class="cell">
					<img class="image" src="../images/walk3.jpg" />
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
