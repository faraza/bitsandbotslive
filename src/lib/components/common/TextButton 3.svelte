<button on:click>
	<slot />
</button>

<style lang="scss">
	button {
		cursor: pointer;

		border: none;
		background: black;
		color: white;
		text-transform: uppercase;
		padding: 16px;
		font-size: medium;
	}
</style>
