<!--suppress HtmlUnknownAttribute -->
<template>
	<footer class="">
		<div class="mx-auto max-w-7xl px-5 py-5 lg:py-10 grid grid-cols-3">
			<div class="space-y-8 col-span-12 lg:col-span-1 justify-center items-center lg:items-start flex flex-col">
				<NuxtLink to="/" class="flex-shrink-0 flex items-center">
					<img class="h-8 lg:h-12 w-auto mr-2" src="https://raw.githubusercontent.com/parasol-finance/white-paper/main/logo.png" alt="Workflow">
					<h1 class="text-2xl font-bold leading-7">Parasol <span class="">Finance</span></h1>
				</NuxtLink>
				<p class="text-gray-500 text-base">
					Parasol Finance is the first-ever community governed IDO platform built on Solana with the needs of both projects and investors alike.
				</p>
				<div class="space-x-6 flex">
					<a href="https://github.com/parasol-finance" target="_blank" class="text-gray-400 hover:text-gray-500">
						<span class="sr-only">GitHub</span>
						<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
						</svg>
					</a>
					<a href="https://twitter.com/parasol_finance" target="_blank" class="text-gray-400 hover:text-gray-500">
						<span class="sr-only">Twitter</span>
						<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
						</svg>
					</a>
					<a href="https://t.me/parasolfinance" target="_blank" class="text-gray-400 hover:text-gray-500">
						<span class="sr-only">Telegram</span>
						<svg class="h-6 w-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path></svg>
					</a>
					<a href="https://discord.gg/JBzVvUVZPn" target="_blank" class="text-gray-400 hover:text-gray-500">
						<span class="sr-only">Discord</span>
						<svg class="h-6 w-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9.593 10.971c-.542 0-.969.475-.969 1.055 0 .578.437 1.055.969 1.055.541 0 .968-.477.968-1.055.011-.581-.427-1.055-.968-1.055zm3.468 0c-.542 0-.969.475-.969 1.055 0 .578.437 1.055.969 1.055.541 0 .968-.477.968-1.055-.001-.581-.427-1.055-.968-1.055z"></path><path d="M17.678 3H4.947A1.952 1.952 0 0 0 3 4.957v12.844c0 1.083.874 1.957 1.947 1.957H15.72l-.505-1.759 1.217 1.131 1.149 1.064L19.625 22V4.957A1.952 1.952 0 0 0 17.678 3zM14.01 15.407s-.342-.408-.626-.771c1.244-.352 1.719-1.13 1.719-1.13-.39.256-.76.438-1.093.562a6.679 6.679 0 0 1-3.838.398 7.944 7.944 0 0 1-1.396-.41 5.402 5.402 0 0 1-.693-.321c-.029-.021-.057-.029-.085-.048a.117.117 0 0 1-.039-.03c-.171-.094-.266-.16-.266-.16s.456.76 1.663 1.121c-.285.36-.637.789-.637.789-2.099-.067-2.896-1.444-2.896-1.444 0-3.059 1.368-5.538 1.368-5.538 1.368-1.027 2.669-.998 2.669-.998l.095.114c-1.71.495-2.499 1.245-2.499 1.245s.21-.114.561-.275c1.016-.446 1.823-.57 2.156-.599.057-.009.105-.019.162-.019a7.756 7.756 0 0 1 4.778.893s-.751-.712-2.366-1.206l.133-.152s1.302-.029 2.669.998c0 0 1.368 2.479 1.368 5.538 0-.001-.807 1.376-2.907 1.443z"></path></svg>
					</a>
					<a href="https://medium.com/@parasol.finance" target="_blank" class="text-gray-400 hover:text-gray-500">
						<span class="sr-only">Medium</span>
						<svg class="h-6 w-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4.285 7.269a.733.733 0 0 0-.24-.619l-1.77-2.133v-.32h5.498l4.25 9.32 3.736-9.32H21v.319l-1.515 1.451a.45.45 0 0 0-.168.425v10.666a.448.448 0 0 0 .168.425l1.479 1.451v.319h-7.436v-.319l1.529-1.487c.152-.15.152-.195.152-.424V8.401L10.95 19.218h-.575L5.417 8.401v7.249c-.041.305.06.612.275.833L7.684 18.9v.319H2.036V18.9l1.992-2.417a.971.971 0 0 0 .257-.833V7.269z"></path></svg>
					</a>
				</div>
			</div>
			<div class="mt-12 grid-cols-2 hidden lg:grid gap-8 xl:mt-0 xl:col-span-2 text-right">
				<div class="md:grid md:grid-cols-2 md:gap-8">
					<div>
						<h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">About Parasol</h3>
						<ul role="list" class="mt-4 space-y-4">
							<li>
								<a href="#features" class="text-base text-gray-500 hover:text-gray-300">Introducing Parasol</a>
							</li>
							<li>
								<a href="https://docs.parasol.finance" target="_blank" class="text-base text-gray-500 hover:text-gray-300">Documentation</a>
							</li>
							<li>
								<a href="https://github.com/parasol-finance" target="_blank" class="text-base text-gray-500 hover:text-gray-300">Github Organization</a>
							</li>
							<li>
								<a href="https://explorer.solana.com/address/Hmatmu1ktLbobSvim94mfpZmjL5iiyoM1zidtXJRAdLZ" target="_blank" class="text-base text-gray-500 hover:text-gray-300">Token Address</a>
							</li>
						</ul>
					</div>
					<div class="mt-12 md:mt-0">
						<h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Useful Links</h3>
						<ul role="list" class="mt-4 space-y-4">
							<li>
								<NuxtLink :to="{path: '/', hash: 'features'}" v-scroll-to="{el: '#features'}" class="text-base text-gray-500 hover:text-gray-300">Features</NuxtLink>
							</li>
							<li>
								<NuxtLink :to="{path: '/', hash: 'roadmap'}" v-scroll-to="{el: '#roadmap'}" class="text-base text-gray-500 hover:text-gray-300">Roadmap</NuxtLink>
							</li>
							<li>
								<a href="https://app.parasol.finance/presale" target="_blank" class="text-base text-gray-500 hover:text-gray-300">Pre-sale</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="md:grid md:grid-cols-2 md:gap-8">
					<div>
						<h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Social Links</h3>
						<ul role="list" class="mt-4 space-y-4">
							<li>
								<a href="https://twitter.com/parasol_finance" class="text-base text-gray-500 hover:text-gray-300">Twitter</a>
							</li>
							<li>
								<a href="https://t.me/parasolfinance" class="text-base text-gray-500 hover:text-gray-300">Telegram</a>
							</li>
							<li>
								<a href="https://discord.gg/JBzVvUVZPn" class="text-base text-gray-500 hover:text-gray-300">Discord</a>
							</li>
							<li>
								<a href="https://medium.com/@parasol.finance" class="text-base text-gray-500 hover:text-gray-300">Medium</a>
							</li>
						</ul>
					</div>
					<div class="mt-12 md:mt-0">
						<h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
						<ul role="list" class="mt-4 space-y-4">
							<li>
								<a href="mailto:contact@parasol.finance" class="text-base text-gray-500 hover:text-gray-300">Contact Us</a>
							</li>
							<li>
								<a href="#" class="text-base text-gray-500 hover:text-gray-300">Terms of Service</a>
							</li>
							<li>
								<a href="#" class="text-base text-gray-500 hover:text-gray-300">Privacy Policy</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="py-10">
			<div class="mx-auto max-w-7xl px-5 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-0 lg:text-base text-sm">
				<p class="text-gray-400 lg:text-left text-center">Copyright &copy; {{ new Date().getFullYear() }} Parasol Finance. All rights reserved. </p>
				<p class="flex-1 text-gray-400 lg:text-right text-center">
					Build with 💜 in Europe, Enjoy Fork, We believe in open-source.
				</p>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: "Footer"
}
</script>

<style scoped>

</style>
