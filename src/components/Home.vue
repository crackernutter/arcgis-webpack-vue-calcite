<template>
  <!-- Navbar -->

  <div id="Home">
    <navbar @panel-change="handlePanel"></navbar>
    <!-- Map  -->
    <esri-map></esri-map>
    <panel-template v-for="(panel, index) in panels" :title="panel.name" :panelid="panel.panelid" :glyphicon="panel.glyphicon" :key="index+1" :position="panel.position">
      <component v-bind:is="panel.panelid" v-bind:mapinfo="mapView"></component>
    </panel-template>

  </div>
</template>

<script>

import Panel from './Panel.vue';
import Navbar from './Navbar.vue';
import EsriMap from './Map.vue';

import InfoPanel from './Panels/InfoPanel.vue';
import LegendPanel from './Panels/LegendPanel.vue';
import QueryPanel from './Panels/QueryPanel.vue';
import LoginPanel from './Panels/LoginPanel.vue';
import BottomPanel from './Panels/BottomPanel.vue'; 
 
//const req = require.context('./Panels', true, /.*\.vue$/)
//console.log(req.keys());

export default {
  name: 'Home',
  props: {
    msg: String
  },
   methods:{
    handlePanel: function(chosenpanel, position){
        //remove panel with same position
        this.activePanels = this.activePanels.filter(panel=>panel.position!=position);
        //get new panel
        let newPanel = this.panels.filter(panel=>panel.panelid==chosenpanel);
        this.activePanels.push(newPanel[0])
      //}
      
    }
  },
  data: function() { return {
      panels:[
        {"panelid": "info-panel", "name": "Info", "glyphicon": "glyphicon glyphicon-info-sign"},
        {"panelid": "legend-panel", "name": "Legend", "glyphicon": "glyphicon glyphicon-th"},
        {"panelid": "query-panel", "name": "Query", "glyphicon": "glyphicon glyphicon-search"},
        {"panelid": "login-panel", "name": "Login", "glyphicon": "glyphicon glyphicon-user"},
        {"panelid": "bottom-panel", "name": "Bottom", "glyphicon": "glyphicon glyphicon-list-alt", "position":"bottom"}
      ],
       activePanels: [],
      //just used to map intialPanels to active panels so as not to repeat code...
      initialPanels:['query-panel'],
      mapView:null,
      title: "ArcGIS Webpack Vue Boilerplate",
      subtitle: "A Vue CLI 3 Starter Template using ArcGIS Webpack Plugin"
      
    }},
    components: {"bottom-panel": BottomPanel, "navbar": Navbar, "panel-template":Panel, "info-panel":InfoPanel, "esri-map": EsriMap, "legend-panel":LegendPanel, "query-panel":QueryPanel, "login-panel":LoginPanel},
    beforeMount: function(){
      this.activePanels = this.panels.filter((panel)=>{
        let iPanels = this.initialPanels;
        return iPanels.includes(panel.panelid);
      });
    }
}
</script>