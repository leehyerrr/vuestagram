<template>
  <div v-if="step == 0">
    <Post :Data="Data"/>
  </div>
<!-- 필터선택페이지 -->
  <div v-if="step == 1">
  <div :class="`${filter2} upload-image`" :style="{backgroundImage:`url(${urlr})`}"></div>
  <div class="filters">
    <FilterBox :urlr="urlr" v-for="(a,i) in filter" :key="i" :filter="filter[i]">
      <span class="black">{{a}}</span>
      <!-- <template v-slot:a>데이터1</template>
      <template v-slot:b>데이터2</template> -->
    </FilterBox> 
  </div>
    
  </div>

<!-- 글작성페이지 -->
  <div v-if="step == 2">
  <div :class="`${filter2} upload-image`" :style="{backgroundImage:`url(${urlr})`}"></div>
  <div class="write">
    <textarea class="write-box" @change="$emit('emitMessage', $event.target.value)">write!</textarea>
  </div>     
  </div>
 
</template>

<script>
import Post from "./Post"
import FilterBox from "./FilterBox"
export default {
  // name: container,
  data(){
    return {
      filter: [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
"inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
"reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
    }
  },
  components:{
    Post,
    FilterBox,
    
  },
  props:{
    Data : Object,
    step : Number,
    urlr : String,
    filter2 : String
  },

}
</script>

<style>
.black {color:black}
.upload-image{
width: 100%;
height: 450px;
background: cornflowerblue;
background-size : cover;
}
.filters{
overflow-x:scroll;
white-space: nowrap;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: cornflowerblue;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
}
</style>