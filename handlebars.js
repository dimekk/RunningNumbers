const Handlebars = require("handlebars");
const fs = require('fs');

// Helpers
Handlebars.registerHelper('and', function(v1, v2, options) {
  if(v1 && v2) {
    return options.fn(this);
  }
  return options.inverse(this);
});
Handlebars.registerHelper('var',function(name, value, context){
  this[name] = value;
});
Handlebars.registerHelper('equals',function(v1, v2, options){
  return v1 == v2;
});
Handlebars.registerHelper('gt',function(v1, v2, options){
  return v1 > v2;
});
Handlebars.registerHelper('lt',function(v1, v2, options){
  return v1 < v2;
});

const template = () => {
  const html = fs.readFileSync('./layout.html', 'utf8');
  return Handlebars.compile(html);
}

module.exports = {
  template,
}