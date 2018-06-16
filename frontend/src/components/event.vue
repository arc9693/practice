<template lang="html">
  <div>
   <v-layout style="margin:10px;" v-if="view">
    <v-flex xs12 sm6 offset-sm3 flat hover>
      <v-card style="border:1px solid grey">
        <v-card-media
          class="white--text"
          height="400px"
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
            <p>  {{occ.description}} </p>
        </v-card-text>
        <v-card-actions>

           <v-btn color="blue-grey darken-4" dark @click="changeView"><v-icon medium >update</v-icon></v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
  <v-layout v-if="!view">
         <v-flex xs4>
           <panel title="Event-info" >
             <div class="pl-4 pr-4 pr-2 pb-2 inputs">
                 <v-text-field :rules="[required]" type="text"required v-model="occ.name"  label="Name" ></v-text-field >
                  <br>
                  <v-text-field  :rules="[required]" type="date"required v-model="occ.date"  label="Date" ></v-text-field >
                   <br>
                  <v-text-field :rules="[required]"  type="text"required v-model="occ.venue"  label="venue" ></v-text-field >
                    <br>
                    <v-text-field :rules="[required]"  multi-line v-model="occ.description" required label="Description" ></v-text-field >
                        <br>
             </div>
           </panel>
         </v-flex>
          <v-flex xs8>
            <panel>

            <v-card-media
                  class="white--text"
                  height="400px"
                  :src="occ.image" ></v-card-media>
                  <v-text-field :rules="[required]"  type="text"required v-model="occ.image"  label="ImageLink" ></v-text-field >
                    <br>
             <v-btn class="teal darken-4" type="button" dark  @click="update({name:'DisplayEvents'})">Done</v-btn>
            </panel>

          </v-flex>
              <p class="red--text" v-html="error" dark>
                     </p>
      </v-layout>
  </div>
</template>

<script>
import Panel from '@/components/panel'
import Events from '@/services/Events'
export default {
    data(){
      return {
        occ:{     id:1,
                  image:'https://i2.wp.com/beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg?resize=640%2C426',
                  name:'kitty party',
                  date:'21/08/2018',
                  venue:'Heaven',
                  description:'THIS IS MY HOME AND I LOVE TO PARTYY YOU CAN GET LOST DO AS YOU WANT TO DO'},
        error:null,
        view:true,

      }
    },
    methods:{

        navigateTo(route){
           this.$router.push(route)
         },
         async update(route){
            try{ await Events.updateEvent(this.occ.id ,this.occ) ;
                 navigateTo(route);
                }
            catch(e){
              console.log(e)
            }
         },
          changeView(){
           this.view = false;
         }
    },
     components:{ Panel },

  async mounted(){
     try{
     const d= this.$store.state.route.params.Eventid
     this.occ = (await Events.viewEvent(d)).data
        }
   catch(e){
     this.error= e.error ;
   }
 }
}
</script>

<style lang="css">
</style>
