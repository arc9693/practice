import Api from './Api'

export default {

   getEvents(){
     return Api().get('Events')
   },

   viewEvent(id)
   {
     return Api().get(`Events/${id}`)
   },

   updateEvent(id,credentials)
   {
     return Api().put(`Events/${id}`,credentials)
   },
   postEvent(credentials){
     return Api().post('Events',credentials)
   },
   deleteEvent(id){
     return Api().delete(`Events/${id}`)
   }

}
