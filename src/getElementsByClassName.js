// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };
// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  //document.body , element.childNodes, element.classList
  var results = [];
  // var allElements = [];
  // var flattenedElements = []; 
  var allElements = flatten([], document.body);
  console.log(allElements)
  // debugger
  for (var i = 0; i < allElements.length; i++) {
    var element = allElements[i];
    if (element.classList) {
      if (element.classList.contains(className)) {
        results.push(element);
      }
    }
  }

  // console.log(results);
  return results;
  // return document.getElementsByClassName(className);
  // return results;
};


var flattenedElements = []; 
var flatten = function(flattenedElements, node) {
  // debugger
  flattenedElements.push(node);
  if (node.childNodes.length === 0 ) {
    // console.log(flattenedElements.concat(node))
    // flattenedElements.push(node)
    // console.log(flattenedElements)
    // return flattenedElements;
  } else {
    for (var i = 0; i < node.childNodes.length; i++) {
      // console.log(node.childNodes[i]);
      flatten(flattenedElements, node.childNodes[i]);
    }
  }
  return flattenedElements;
}
