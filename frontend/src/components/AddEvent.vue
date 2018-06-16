<template lang="html">
  <v-layout >
         <v-flex xs 12>
           <panel title="Event-info" >
             <div class="pl-4 pr-4 pr-2 pb-2 inputs">
                 <v-text-field :rules="[required]" type="text" required v-model="occ.name"  label="Name" ></v-text-field >
                  <br>
                  <v-layout row>
                  <v-flex xs5>
                  <v-text-field  :rules="[required]" type="date" required v-model="occ.date"  label="Date" > </v-text-field >
                  </v-flex>
                   <v-flex xs6 offset-xs1>
                  <v-text-field :rules="[required]"  type="text" required v-model="occ.venue"  label="venue" ></v-text-field >
                    <br>
                  </v-flex>
                </v-layout>
                    <v-text-field :rules="[required]"  multi-line v-model="occ.description" required label="Description" ></v-text-field >
                        <br>
                <v-layout row>
                <v-flex xs6>  <v-text-field :rules="[required]"  type="text" required v-model="occ.image"  label="ImageLink" ></v-text-field >
                   <v-btn class="teal darken-4" type="button" dark  @click="postt({name:'DisplayEvents'})">Done</v-btn>
                </v-flex>
              <v-flex xs6>
              <v-card-media
                          class="white--text"
                          height="200px"
                          :src="occ.image" ></v-card-media> </v-flex>
                        </v-layout>

                </div></panel>

          </v-flex>
              <p class="red--text" v-html="error" dark>
                     </p>
      </v-layout>
</template>

<script>
import Panel from '@/components/panel'
import Events from '@/services/Events'
export default {
    data(){
      return {
        occ:{     image:null,
                  name:null,
                  date:null,
                  venue:null,
                  description:null},
        error:null,
      }
    },
    methods:{

        navigateTo(route){
           this.$router.push(route)
         },
         async postt(route){
            try{ await Events.postEvent(this.occ) ;
                 navigateTo(route);
                }
            catch(e){
              console.log(e)
            }
         },

    },
     components:{ Panel },

}
</script>

<style lang="css">
</style>
