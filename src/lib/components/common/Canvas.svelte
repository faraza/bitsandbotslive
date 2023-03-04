<script lang="ts">
	export let imageSource = ''
	export let placeholderText = 'A blank canvas has infinite possibilities'
</script>

<div>
	<div class="image-container">
		{#if imageSource}
			<img src={imageSource} alt={'An AI generated image created with a secret prompt'} />
		{:else}
			<p>{placeholderText}</p>
		{/if}
	</div>
</div>

<style lang="scss">
	.image-container {
		min-width: 256px;
		min-height: 256px;
		background-color: white;
	}

	p {
		text-align: center;
		padding-left: 5%;
		padding-right: 5%;
	}
</style>
