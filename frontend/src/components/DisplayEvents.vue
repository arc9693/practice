<template lang="html">
  <panel title="Events" addbtn="true">
  <v-layout style="margin:10px;" >
    <v-flex xs12 sm6 offset-sm3 v-for="occ in occs" v-bind:key="occ.id" elevation-2 hover>
      <v-card style="border:1px solid grey">
        <v-card-media
          class="white--text"
          height="200px"
          :src="occ.image"
        >
         <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-center flexbox>
                <v-card-title class="headline display-3">{{occ.name}}</v-card-title>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
          <v-card-text>
          <div>
            <span>Date:{{occ.date}}</span><br>
            <span>Venue:{{occ.venue}}</span><br>
          </div>
        </v-card-text>
        <v-card-actions>
           <v-btn color="pink lighten-2"  @click="navigateTo({name:'viewEvent',params:{Eventid: occ.id }})" dark>view</v-btn>
           <v-btn color="grey" dark  @click="deleteEvent({name:'DisplayEvents'},occ.id)"><v-icon medium >delete</v-icon></v-btn>
        </v-card-actions>

      </v-card>
    </v-flex>
  </v-layout>
</panel>
</template>

<script>
import Panel from '@/components/panel'
import Events from '@/services/Events'
export default {
    data(){
      return {
        occs:[{id:1,
                  image:'https://i2.wp.com/beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg?resize=640%2C426',
                  name:'kitty party',
                  date:'21/08/2018',
                  venue:'Heaven'}],
        error:null
      }
    },
    methods:{
         navigateTo(route){
           this.$router.push(route)
         },
         async deleteEvent(route,id){
           try{ await Events.deleteEvent(id) ;
                navigateTo(route);
               }
           catch(e){
             this.error= e.error;
           }
         }
    },
    components:{ Panel },
   async mounted(){
        try {this.occs=(await Events.getEvents()).data}
        catch(e){
          this.error = e
        }
      }
}
</script>

<style lang="css">
</style>
