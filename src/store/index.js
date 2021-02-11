import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userData:{
      id: '9',
      firstname: '',
      lastname: ''
    },
  },
  mutations: {
    setUID(state, id){
        state.userId = id;
        console.log('UserId was set to ' + userId);
    },
    setFirstName(state, fn){
        state.userData.firstname = fn;
    }
  }
})
