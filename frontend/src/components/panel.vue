<template lang="html">
<div class="white elevation-3">
       <v-toolbar flat dense class="blue-grey darken-4" dark>
         <v-toolbar-title > {{ title }} </v-toolbar-title>
         <v-spacer></v-spacer>
         <div class="text-xs-center"  v-show="addbtn">
         <router-link :to="{name: 'AddEvent'}">
           <v-btn fab dark color="white" >
             <v-icon x-large color="teal darken-4" >add</v-icon>
          </v-btn>
        </router-link>
         </div>

       </v-toolbar>
       <slot>
       </slot>
       </div>
</template>

<script>

export default {
  name:'panel',
  props: ['title','addbtn'],
  data(){
    return {addbtn : false}
  }

}

</script>

</style>
