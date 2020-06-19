<template>
  <v-bottom-navigation grow>
    <div class="flex-container-row flex-item-variable" style="justify-content: space-between">
      <v-btn @click="directToHome()">Home</v-btn>
      <v-btn @click="directToFunMath()">Fun Math</v-btn>
      <v-btn @click="directToProject()">Project</v-btn>
      <v-btn @click="directToAbout()">About</v-btn>
      <v-btn @click="directToMeme()">Meme</v-btn>
    </div>
  </v-bottom-navigation>
</template>

<script lang="ts" src="./navigator-bar.vue.ts"></script>