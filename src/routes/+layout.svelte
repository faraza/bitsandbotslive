<img src="/background/sphere_grid.png" />

<main>
	<slot />
</main>

<style lang="scss">
	:global(*) {
		font-family: 'IBM Plex Mono', monospace;
	}

	:global(body) {
		margin: 0;
	}

	img {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;

		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}

	main {
		position: relative;

		background: url('/background/dotted_grid.png');
		position: absolute;
		top: 40px;
		left: 40px;
		width: calc(100vw - 80px);
		height: calc(100vh - 80px);
		border: 2px solid black;

		z-index: 0;
	}
</style>
