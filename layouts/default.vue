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
	name: "default",
	mounted() {
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', 'G-6VTVXVGNCD');

		(function(h,o,t,j,a,r){
			h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
			h._hjSettings={hjid:2743772,hjsv:6};
			a=o.getElementsByTagName('head')[0];
			r=o.createElement('script');r.async=1;
			r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
			a.appendChild(r);
		})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
	}
}
</script>

<style scoped>

</style>
