import { createStore } from 'vuex'
import axios from "axios"

const store = createStore({
  state(){
    return {
      name : "kim",
      age : 20,
      likeN : 0,
      press : false,
      more : {}
    }
  },
  mutations:{
    setMore(state,data){
      state.more = data
    },
    changeName(state){
        state.name = "박"
    },
    changeNum(sss, a){
        sss.age += a
    },
    PlusLike(a){
        // if(a.likeN == 1){
        //     a.likeN -= 1;
        //     return;
        // }
        if(a.press == true){
            a.likeN -= 1;
            a.press = false
            return;
        }
        a.likeN += 1;
        a.press = true
        
    }
  },
  actions : {
    getData(context){
      axios.get(`https://codingapple1.github.io/vue/more0.json`).then( result => {
        console.log(result);
        context.commit('setMore', result.data)
      }) 
    }
  }
})

export default store