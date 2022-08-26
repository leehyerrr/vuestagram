import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      name : "kim",
      age : 20,
      likeN : 0,
      press : false
    }
  },
  mutations:{
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
  }
})

export default store