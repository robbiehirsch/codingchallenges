
function preventDupNeighbors(arr) {
	// kill off duplicates, track occurences, sort by occs
	let noDups = Array.from(new Set(arr))
		.map(item => [item,occsOf(item,arr)])
		.sort((a,b)=>b[1]-a[1]);

	let returnArr = new Array(arr.length).fill(null);

	for (item in noDups){
		let firstNull = returnArr.indexOf(null);
		for (i=0;i<noDups[item][1];i++){
			returnArr[firstNull + (i*2)] = noDups[item][0];
		}
	}
	return returnArr;
}

function occsOf(el,arr){
	return arr.filter(e=>el==e).length
}


let arrayone = ['a','b','b','c','c','d','c','1','d','d','d','d'];
console.log(preventDupNeighbors(arrayone));
