import {Connection, PublicKey, Transaction} from "@solana/web3.js";
import Vue from 'vue'

const cluster = "https://api.mainnet-beta.solana.com";
const connection = new Connection(cluster, "confirmed");

Vue.mixin({
	methods:{
		async getTotalParticipation() {
			return await connection.getTokenAccountBalance(new PublicKey("7Q8fFx3gwS43ZxxbmqXfoTwRudbmQANP4VVDMGFi7K1M"));
		},
	}
});
