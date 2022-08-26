<template>

    <div :class="filter + ' filter-item'" :style="`background-image:url(${urlr})`" @click="setFilter">
      <slot></slot>
      <!-- <slot name="a"></slot>
      <slot name="b"></slot>       -->
    </div>

    
</template>

<script>
export default {
    props : {
       urlr : String, 
       filter : String
    },
    methods : {
      setFilter(){
        this.emitter.emit('setFilter', this.filter)
      }
    }
}
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>