// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

// console.log(JSON.stringify(obj)+"   <<--argument being passed")

	if (!str) {
		var str = "";
	}

	// The argument is a number, null, or boolean 
	// Argument gets wrapped in quotes, added to str, and returned
	if(typeof obj === 'number'){
		str = str+obj.toString();
	};
	if(obj === null) {
		str += 'null'
	};
	if(typeof obj === 'boolean'){
		if(obj){
			str += 'true'
		} else{
			str += 'false'
		}
	}

	// The argument is a string, add it to str
	if(typeof obj === "string"){
		str = str+'"'+obj+'"'
	}
	var objType = toString.call(obj);

	// If the argument is an array
	if(Array.isArray(obj)){
		str += "["
		var toAdd = []
		for(var i =0; i < obj.length ; i++){
			toAdd.push(stringifyJSON(obj[i]))
		}
		str += toAdd.join(',')
		str += "]"
	}

	// If the argument is an ojbect, but not null or an array
	if(typeof obj === 'object' && obj !== null && !Array.isArray(obj)){
		str += "{"
		var toAdd = [];
		// Creates an array, one element for each keyVal pair, then joins them and adds them to str
		for(var key in obj){ 
			if(obj[key] === undefined) continue;
			if(typeof obj[key] === 'function') continue;
			var keyVal = "";
			keyVal+= '"'+key+'":';
			var value = stringifyJSON(obj[key]);
			keyVal += value;
			toAdd.push(keyVal);
		}
		str += toAdd.join(',')
		str += "}"
	}
	return str;	
};




