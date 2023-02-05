<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <h2>Zin Htet Aung</h2>
  <Testing :age="age">{{age}}</Testing>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
import Testing from './components/Testing.vue'

export default {
  name: 'App',
  data(){
    return{
      age: 21,
    }
  },
  components:{
      Testing
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
