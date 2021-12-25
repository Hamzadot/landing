<template>
	<div class="w-full h-screen flex flex-col gap-3 items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
		<h1 class="text-9xl font-bold">{{ this.toUsd(this.totalParticipation) }}</h1>
		<p class="text-6xl font-light">We reached {{ this.getParticipationProgress() }} % of presale.</p>
	</div>
</template>

<script>
export default {
	name: "broadcast",
	layout: 'empty',
	data() {
		return {
			totalParticipation: 0
		}
	},
	async mounted() {
		this.totalParticipation = (await this.getTotalParticipation()).value.uiAmount;
		setInterval(async () => this.totalParticipation = (await this.getTotalParticipation()).value.uiAmount, 5000);
	},
	methods: {
		joinCommunity: function() {
			this.$root.$emit('joinCommunity');
		},
		getParticipationProgress: function () {
			return Math.round(100 / (370440 / this.totalParticipation));
		},
		toUsd: function (value) {
			return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
		}
	}
}
</script>

<style scoped>

</style>
