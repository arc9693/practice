<template lang="html">
  <v-toolbar  color="blue-grey darken-4" dark>
        <v-toolbar-title class="mr-4"><span class="home" @click="navigateTo({name:'root'})"><v-icon>home</v-icon></span></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat dark @click="navigateTo({name:'DisplayEvents'})" >
        Events
      </v-btn>
      </v-toolbar-items>
      </v-toolbar>
</template>

<script>
export default {
  name:'Pageheader',
  methods:{
      navigateTo(route){
      this.$router.push(route)
    }
  }
}
</script>

<style lang="css">
.home{
  cursor: pointer;
}
.home:hover{
  color:grey;
}
</style>
