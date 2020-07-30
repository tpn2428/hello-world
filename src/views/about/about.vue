<template>
  <div class="flex-container flex-item-variable brown lighten-4">
    <h1>About Me</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Explicabo eaque non velit quaerat nihil in amet a fugiat. 
      Consequuntur dignissimos suscipit minus voluptatem aut velit 
      nulla necessitatibus ex eaque fuga.</p>
      <v-expansion-panels>
        <v-expansion-panel class="grey lighten-2">
          <v-expansion-panel-header>
            <span>
              <span class="panel-header text-decoration-underline">Contact Me</span>
              <v-icon right>mdi-account-plus</v-icon>
            </span>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <span>
              <a href="https://www.linkedin.com/in/thu-nguyen-ab29a4156/">
                <v-icon large>mdi-linkedin</v-icon>
              </a>
              <a href="mailto:nguyenphamanhthu2508@gmail.com">
                <v-icon large>mdi-email</v-icon>
              </a>
              <v-icon large>mdi-github</v-icon>
            </span> 
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>       
  </div>
</template>
<script lang="ts" src="./about.vue.ts"></script>

<style lang="scss" scoped>
.panel-header {
  font-size: 18px;
  color: darken($color: #01579B, $amount: 4);
}
a {
  text-decoration: none;
}
</style>