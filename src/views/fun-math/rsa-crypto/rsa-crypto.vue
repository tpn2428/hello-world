<template>
    <div class="flex-container flex-item-variable">
        <v-card>
            <v-autocomplete
                v-model="selectedPrimes"
                :items="suggestedPrimes"
                :search-input.sync="searchText"
                color="white"
                label="Primes"
                multiple
                placeholder="Start typing to Search"
                prepend-icon="mdi-database-search"
            ></v-autocomplete>
            <v-btn @click="onSubmitClick">
                Submit
            </v-btn>
        </v-card>
    </div>
</template>

<script lang="ts" src="./rsa-crypto.vue.ts"></script>