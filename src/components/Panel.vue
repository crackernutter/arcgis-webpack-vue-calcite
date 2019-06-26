<template>
<transition name="slide-fade">
  <div class = 'calcite-panels calcite-panels-right calcite-text-light calcite-bg-dark panel-group' v-show="($parent.activePanels.map(panel=>panel.panelid)).includes(panelid)" v-bind:id="panelid" v-bind:class="position">
<div class="panel">
      <div id="headingInfo" class="panel-heading" role="tab">
        <div class="panel-title">
          <a class="panel-toggle" role="button"  aria-expanded="true" ><span :class="glyphicon" aria-hidden="true"></span><span class="panel-label">{{title}}</span></a> 
          <a class="panel-close" role="button" v-on:click="removePanel" tabindex="0" ><span class="esri-icon esri-icon-close" aria-hidden="true"></span></a>  
        </div>
      </div>
      <div id="collapseInfo" role="tabpanel" aria-labelledby="headingInfo">
        <div class="panel-body">
          <slot></slot>
        </div>
     </div>
    </div>
  </div>
</transition>
    </template>
    <script>
export default {
  //inject: ['mapView'],
  props: ['panelid', 'title', 'glyphicon', "position"],
  data() {
    return {};
  },
  methods:{
    removePanel: function(){
        this.$parent.activePanels = this.$parent.activePanels.filter(panel=>panel.panelid!=this.panelid);
    }
  }
};
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.slide-fade-enter-active {
  transition-delay:.2s;
  transition: all .2s ease;
}

/* .slide-fade-leave-active {
  transition: all .2s ease;
} */
.slide-fade-enter /*.slide-fade-leave-to*/
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(400px);
}

.bottom .panel-body {
  width: 100%;
  height: 250px;
}

.bottom{
  position: absolute;
  bottom: 0;
  top:auto!important;
  left: 0;
  right: 0;
  z-index: 300;
  margin-bottom: 0;
}

</style>