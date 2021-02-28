import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userData:{
      id: '-1',
      name: '',
    },
  },
  mutations: {
    setUID(state, id){
        state.userData.id = id;
        //console.log('UserId was set to ' + userId);
    },
    setFirstName(state, fn){
        state.userData.name = fn;
    }
  }
})

