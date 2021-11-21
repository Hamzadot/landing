<template>
	<div id="app">
		<JoinCommunityModal />
		<div id="grid-particles" class="absolute opacity-90 bottom-0 w-full h-screen" style="top: 35vh;"></div>
		<AnnounceBar />
		<Header />
		<main role="main">
			<Nuxt />
		</main>
		<Footer />
	</div>
</template>

<script>
export default
{
	name: "default"
}
</script>

<style scoped>

</style>
