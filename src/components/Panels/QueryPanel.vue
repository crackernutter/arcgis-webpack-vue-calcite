<template>
<div class="form-group">
  <label v-show="!updating" for="sel1">Filter by trail type</label>
  <label v-show="updating" for="sel1">Updating.....</label>
  <select v-model="chosenValue" class="form-control" id="sel1">
    <option v-for="option in options" :key=option>{{option}}</option>
  </select>
</div>
</template>
<script>
export default {
  props: ["mapinfo"],
  data() {
    return {
      options: [
        "ALL TRAILS",
        "ALL MOTORIZED/NON-MOTORIZED",
        "ALL NON-MOTORIZED",
        "BIKE ONLY",
        "HIKE/BIKE ONLY"
      ],
      chosenValue: "HIKE/BIKE ONLY",
      updating: false,
      opsLayer: null
    };
  },
  computed: {
    searchQuery: function() {
      return this.chosenValue == "ALL TRAILS"
        ? null
        : `USAGE = '${this.chosenValue}'`;
    }
  },
  methods: {
    setDefExp() {
      this.opsLayer.definitionExpression = this.searchQuery;
    }
  },
  watch: {
    chosenValue: function() {
      this.setDefExp();
    },
    mapinfo: function(val) {
      //console.log("Map Info Set");
     this.opsLayer = this.mapinfo.map.layers.getItemAt(0);
      this.mapinfo.whenLayerView(this.opsLayer).then(layerView => {
        layerView.watch("updating", value => {
          this.updating = value;
        });
      });
      if (val) {
        this.setDefExp();
      }
    }
  },
  mounted: function() {
    //console.log("Query Panel Mounted");
  }
};
</script>
<style scoped></style>