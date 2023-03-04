<script lang="ts">
	export let title: string
	export let collapsed: boolean = false
	export let collapsable: boolean = false
</script>

<div class="container">
	<div class="header">
		<div class="circle-row">
			<div class="circle" />
			<div class="circle" />
			<div class="circle" />
		</div>

		<p>{title}</p>

		<!-- empty element for flex -->
		<div>
			{#if collapsable}
				<button class="clickable" on:click={() => (collapsed = !collapsed)}>
					<img src={collapsed ? '/icons/expand_icon.png' : '/icons/collapse_icon.png'} />
				</button>
			{/if}
		</div>
	</div>

	{#if !collapsed}
		<div class="content">
			<slot />
		</div>
	{/if}
</div>

<style lang="scss">
	.container {
		background: white;
		border: 1px solid black;

		box-shadow: 6px 6px 0 0 black;

		.header {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;

			padding: 0 8px;
			background: black;
			color: white;

			.circle-row {
				display: flex;
				gap: 4px;

				.circle {
					width: 8px;
					height: 8px;
					border: 1.5px solid white;
					border-radius: 16px;
				}
			}

			p {
				margin: 0;
				text-transform: uppercase;
			}

			button {
				cursor: pointer;
				background: none;
				border: none;

				img {
					height: 20px;
					margin-top: 4px;
				}
			}
		}
	}
</style>
