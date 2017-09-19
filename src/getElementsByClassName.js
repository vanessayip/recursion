// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };
// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  //document.body , element.childNodes, element.classList
  var results = [];
  var allElements = flatten([], document.body);
  
  for (var i = 0; i < allElements.length; i++) {
    var element = allElements[i];
    if (element.classList) {
      if (element.classList.contains(className)) {
        results.push(element);
      }
    }
  }

  return results;
};


var flattenedElements = []; 
var flatten = function(flattenedElements, node) {
  
  flattenedElements.push(node);
  if (node.childNodes.length !== 0 ) {
    for (var i = 0; i < node.childNodes.length; i++) {
      // console.log(node.childNodes[i]);
      flatten(flattenedElements, node.childNodes[i]);
    }
  } 
  return flattenedElements;
}
