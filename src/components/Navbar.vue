<template>
<nav class="navbar calcite-navbar navbar-fixed-top calcite-text-light calcite-bg-dark">
      <div class="dropdown calcite-dropdown calcite-text-dark calcite-bg-light" role="presentation" v-on:click="dropdownToggleClicked = !dropdownToggleClicked">
        <a class="dropdown-toggle" data-toggle="dropdown" role="menubutton" aria-haspopup="true" aria-expanded="false" tabindex="0">
          <div class="calcite-dropdown-toggle" v-bind:class="{open: dropdownToggleClicked}">
            <span class="sr-only">Toggle dropdown menu</span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </a>
        <ul class="dropdown-menu" role="menu">
          <navbar-dropdown-link v-for="(panel, index) in $parent.panels" @click.native="updatePanel(panel.panelid, panel.position)" :key="index+1" :panelid="panel.panelid"
            :name="panel.name" :glyphicon="panel.glyphicon"></navbar-dropdown-link>
        </ul>
      </div>
      <!-- Menu -->
      <!-- Title -->
      <div class="calcite-title calcite-overflow-hidden">
        <span class="calcite-title-main" v-once>{{$parent.title}}</span>
        <span class="calcite-title-divider hidden-xs"></span>
        <span class="calcite-title-sub hidden-xs">{{$parent.subtitle}}</span>
      </div>
      <!-- Nav -->
      <ul class="nav navbar-nav calcite-nav">
        <li>
          <div class="calcite-navbar-search calcite-search-expander">
            <div id="searchWidgetDiv"></div>
          </div>
        </li>
      </ul>
    </nav></template>
<script>
import NavbarDropdownLink from './NavbarDropdownLink.vue';
export default {
  data() {
    return {
      dropdownToggleClicked: false
    };
  },
   methods:{
      updatePanel: function(panelid, position){
        this.$emit('panel-change', panelid, position);
      }
    },
    components:{'navbar-dropdown-link': NavbarDropdownLink}
};</script>
<style></style>