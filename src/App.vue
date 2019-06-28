<template>
  <div id="app">
    <Home/>
  </div>
</template>
<script>


import 'calcite-maps/dist/css/calcite-maps-bootstrap.min-v0.10.css';
import 'calcite-maps/dist/css/calcite-maps-arcgis-4.x.min-v0.10.css';
import './assets/styles.css'; 

import Home from './components/Home.vue';
import "calcite-maps/lib/js/dojo-bootstrap/Dropdown";
//require("../dojo/Dropdown.js");
export default {
  name: 'app',
  components: {
    Home
  },
  mounted(){
    console.log('mounted app');
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>