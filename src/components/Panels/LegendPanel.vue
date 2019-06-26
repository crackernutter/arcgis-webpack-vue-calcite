<template>
<div id="legendDiv"></div>
</template>
<script>

import Legend from "esri/widgets/Legend";

export default {
  props:['mapinfo'],
  data() { return{}
  },
  methods: {
    createWidget() {
          new Legend({
            container: "legendDiv",
            view: this.mapinfo
          });
    }
  },
  watch: {
      mapinfo: function(){
          
          this.createWidget();
      }
  }
};
</script>
<style >
</style>