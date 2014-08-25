// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, element, results){
	var results = results || [];
	var element = element || document.body;

	if (element.classList.contains(className)){
		results.push(element)
	}

	if(element.children.length>0){
		for (var i=0; i<element.children.length; i++){
			var nextElement = element.children[i];
			getElementsByClassName(className, nextElement, results);
		}
	}
	return results;
};