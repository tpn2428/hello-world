<template>
  <v-bottom-navigation grow dark class="blue-grey darken-1 white--text">
    <div class="flex-container-row flex-item-variable justify-spaced-content">
      <v-btn flat @click="directToPath(AppRoute.Home)">
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn flat @click="directToPath(AppRoute.FunMath)">
        <span>Fun Math</span>
        <v-icon>mdi-format-superscript</v-icon>
      </v-btn>
      <v-btn flat @click="directToPath(AppRoute.Projects)">
        <span>Projects</span>
        <v-icon>mdi-xml</v-icon>
      </v-btn>
      <v-btn flat @click="directToPath(AppRoute.About)">
        <span>About</span>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
      <v-btn flat @click="directToPath(AppRoute.Meme)">
        <span>Meme</span>
        <v-icon>mdi-emoticon-cool</v-icon>
      </v-btn>
    </div>
  </v-bottom-navigation>
</template>

<script lang="ts" src="./navigator-bar.vue.ts"></script>

<style lang="scss" scoped>
.v-btn {
  font-size: 20px !important;
  text-align: center;
}
</style>
