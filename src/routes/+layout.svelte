<img src="/background/sphere_grid.png" />
<img class="inner-img" src="/background/dotted_grid.png" />

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
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;

		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}

	.inner-img {
		position: fixed;
		top: 40px;
		left: 40px;
		right: 40px;
		bottom: 40px;

		width: calc(100% - 80px);
		height: calc(100% - 80px);
		object-fit: cover;
		object-position: center;

		border: 2px solid black;
	}

	main {
		position: fixed;

		background: url();
		position: absolute;
		top: 40px;
		left: 40px;
		width: calc(100vw - 80px);
		height: calc(100vh - 80px);

		z-index: 0;
	}
</style>
