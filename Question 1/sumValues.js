exports.index = function (arr, target) {
    let results = [];
    let final= [];
    for (let i=0; i<arr.length; i++) {
        
      for (let j=i+1; j<arr.length; j++) {
    
        if (arr[j] === target - arr[i]) {

          results.push(i, j)
        }
      }
    }

    
  let b  =[... new Set(results)];
  

  for(k=0;k<b.length;k++){

  final.push(arr.indexOf(arr[b[k]]));
  
  }

    


return [...new Set(final)];
}



