// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var results = '';

  results = convertToString(obj);
  console.log('results: ' + results);
  return results;
};


var convertToString = function (element){
  var string = '';
  if (typeof element === "undefined"){
    string = undefined;
  } else if (typeof element === "function"){
    string = undefined;
  } else if (typeof element === "symbol"){
    string = undefined;
  } else if (typeof element === "boolean"){
    string += element;
  } else if (typeof element === "number"){
    string += element;
  } else if (typeof element === "string"){
    string += '\"' + element + '\"';
  } else if (element === null){
    string += 'null';
  } else if (Array.isArray(element)){
    if (element.length === 0){
      string += '[]';
    } else {
      for (var i = 0; i < element.length; i++){
        if (i === 0){
          string += '[';
        } 
        if (typeof element[i] === 'undefined' || typeof element[i] === 'function' || typeof element[i] === 'symbol'){
          string += null; 
        } else {
          string += convertToString(element[i]);
        }
        
        if (i !== element.length - 1){
          string += ',';
        }
        if (i === element.length - 1){
          string += ']';
        }
      }
    }
  } else if (typeof element === "object"){
    var keys = Object.keys(element);
    var values = Object.values(element);
    //var isAStringifyType = typeof values[i] !== 'undefined' && typeof values[i] !== 'function' && typeof values[i] !== 'symbol';
    //console.log('isStringify: ' + isAStringifyType);
    if (values.length === 0){
      string += '{}';
    } else {
      for (var i = 0; i < values.length; i++){
        if (i === 0){
          string += '{';
        } 
        if (typeof values[i] !== 'undefined' && typeof values[i] !== 'function' && typeof values[i] !== 'symbol'){
          //console.log('isAStringifyType: ' + (typeof values[i] !== 'undefined' && typeof values[i] !== 'function' && typeof values[i] !== 'symbol'));
          string += '\"' + keys[i] + '\"' + ':' + convertToString(values[i]);
        } 
        
        if (i !== values.length - 1 && (typeof values[i] !== 'undefined' && typeof values[i] !== 'function' && typeof values[i] !== 'symbol')){
          string += ',';
        }
        if (i === values.length - 1){
          string += '}';
        }

      }
    }
  }

  console.log('string: ' + string);
  return string;
};