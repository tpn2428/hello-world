<template>
  <v-app class="app">
    <router-view class="flex-item-variable"></router-view>
    <navigation-bar></navigation-bar>
  </v-app>
</template>

<script lang="ts" src="./app.vue.ts"></script>

<style lang="scss">
html {
  overflow-y: hidden !important;
}
.app {
  height: 100%;
}
.flex-container {
  display: flex;
  flex-direction: column;
}
.flex-container-row {
  display: flex;
  flex-direction: row;
}
.flex-item-variable {
  flex: 1 1 auto;
}
</style>