const plugins= []
if(process.env.NODE_ENV === 'production') {
  plugins.push("transform-remove-console")
}
module.exports = {
  presets: [["@babel/preset-env",{"modules":"amd"}]],
  plugins:plugins
}
