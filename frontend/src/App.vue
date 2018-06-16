<template>
  <div id="app">
    <v-app>
      <main>
       <Pageheader/>
      <v-content color="grey lighten-1">
       <v-container fluid>
       <router-view/></v-container>
      </v-content>
    </main>
</v-app>


  </div>
</template>

<script>

import Pageheader from './components/Header'
export default {
  name: 'App',
  components:{ Pageheader}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
