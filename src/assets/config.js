export const appconfig = {
template : {  // autocasts as new PopupTemplate()
    title: "{SYSTEM} - {TRAILNAME}",
    content: [{
      type: "fields",
      fieldInfos: [{
        fieldName: "RATING",  // The field whose values you want to format
        label: "Rating",
        visible: true
      }, {
        fieldName: "LENGTH_MILES",  // The field whose values you want to format
        label: "Length",
        visible: true,
        format: {
          digitSeparator: true,  // Uses a comma separator in numbers >999
          places: 2  // Sets the number of decimal places to 0 and rounds up
        }
      }, {
        fieldName: "USAGE",  // The field whose values you want to format
        label: "Usage",
        visible: true
      }, {
        fieldName: "MGMTAGENCY",  // The field whose values you want to format
        label: "Agency",
        visible: true
      }]
    }]
  },
  renderer : {
    type: "unique-value",
    field: "USAGE",
    uniqueValueInfos:[
      {
        // All features with value of "North" will be blue
        value: "ALL MOTORIZED/NON-MOTORIZED",
        symbol: {
          type: "simple-line",
          width: "2pt",  // autocasts as new SimpleFillSymbol()
          color: "blue"
        }
      },
      {
        // All features with value of "North" will be blue
        value: "ALL NON-MOTORIZED",
        symbol: {
          type: "simple-line",
          width: "2pt",  // autocasts as new SimpleFillSymbol()
          color: "green"
        }
      },
      {
        // All features with value of "North" will be blue
        value: "BIKE ONLY",
        symbol: {
          type: "simple-line",
          width: "2pt",  // autocasts as new SimpleFillSymbol()
          color: "red"
        }
      },
      {
        // All features with value of "North" will be blue
        value: "HIKE/BIKE ONLY",
        symbol: {
          type: "simple-line",
          width: "2pt",  // autocasts as new SimpleFillSymbol()
          color: "orange"
        }
      }
    ]
  }
}
