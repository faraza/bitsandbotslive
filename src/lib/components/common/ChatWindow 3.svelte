<script lang="ts">
	import Frame from './Frame.svelte'
	import IconButton from './IconButton.svelte'

	export let messages: string[] = []

	let collapsed: boolean = false

	function sendMessage() {
		// TODO: figure out how thomas wants this sent
	}
</script>

<div class="container">
	<Frame title="Chat" {collapsed} collapsable={true}>
		<div class="messages">
			{#each messages as message}
				<p>{message}</p>
			{/each}
		</div>

		<div class="input-row">
			<input placeholder="say something" />
			<IconButton on:click={sendMessage}>
				<img src="/icons/caret_icon.png" width="24px" />
			</IconButton>
		</div>
	</Frame>
</div>

<style lang="scss">
	.container {
		width: 256px;

		position: absolute;
		top: 16px;
		right: 16px;
	}

	.messages {
		flex-direction: column-reverse;
		overflow-y: scroll;

		min-height: 128px;
	}

	.input-row {
		display: flex;
		margin: 8px;
		width: calc(100% - 16px);

		border: 1px solid black;

		input {
			border: none;
			width: 100%;
			border-radius: 0;
			padding-left: 8px;
		}

		img {
			margin: -2px;
			padding: 0;
			width: 32px;
			height: 32px;
		}
	}
</style>
