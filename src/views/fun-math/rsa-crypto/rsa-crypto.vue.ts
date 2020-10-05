import Vue from 'vue';
import Component from 'vue-class-component';
import { primes } from '../../../../core/primes';
import {RsaCryptoLogic} from '../../../../core/rsa-crypto';

@Component
export default class RsaCrypto extends Vue {
    public suggestedPrimes = primes.map((prime: number) => prime.toString().trim());
    public searchText = '';
    public selectedPrimes: number[] = [];
    public coPrimeOfPhi: number[] = [];

    public onSubmitClick() {
        if (this.selectedPrimes.length !== 2) {
            throw new Error('You must select two primes');
        }
        const firstPrime = this.selectedPrimes[0];
        const secondPrime = this.selectedPrimes[1];
        this.coPrimeOfPhi = RsaCryptoLogic.coPrimeOfPhi(firstPrime, secondPrime, 5);
        console.log(this.coPrimeOfPhi);
    }
}
