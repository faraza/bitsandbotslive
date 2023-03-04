<script lang="ts">
	import Button from './TextButton.svelte'

	export let placeholder: string | undefined
	export let horizontal: boolean = false
	export let value: string = ''
</script>

<div class={horizontal ? 'horizontal' : ''}>
	<input {placeholder} bind:value />
	<Button on:click><slot /></Button>
</div>

<style lang="scss">
	div {
		border: 1px solid black;

		display: flex;
		flex-direction: column;

		&.horizontal {
			background: red;
			flex-direction: row;
		}
	}

	input {
		border: none;
		background: white;

		padding: 16px 16px;
		font-size: medium;
		text-align: center;
		text-transform: uppercase;
	}
</style>
