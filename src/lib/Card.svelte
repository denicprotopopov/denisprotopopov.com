<div class="card {$$props.class}">
	<slot />
	<slot />
</div>

<style>
	.card {
		background-position: center;
		background-size: cover;
		border-radius: 13%;
		height: 0;
		position: relative;
		display: inline-block;
		vertical-align: top;
		width: 30%;
		padding-bottom: 30%;
		transition: filter 1s;
	}

	.card:hover {
		-webkit-filter: blur(6px);
		filter: blur(6px);
	}

	@media screen and (min-width: 100px) {
		.card {
			width: 90%;
			padding-bottom: 90%;
		}
	}

	@media screen and (min-width: 550px) {
		.card {
			width: 40%;
			padding-bottom: 40%;
		}
	}

	@media screen and (min-width: 1200px) {
		.card {
			width: 35%;
			padding-bottom: 35%;
		}
	}
</style>
