


let convertToF = (celsius) => {
    let fahrenheit = 0; 
    fahrenheit = celsius * 9/5 + 32;
    return fahrenheit;
}



let reverseString = (str) => {
    let newStr = "";
   newStr = str.split("").reverse().join("");
    return newStr
}



function factNum(num){
  if(num === 0){
      return 1;
  }  
  return num * factNum(num - 1 );

}

let findTheLongestWordlength = (sentence) => {
    let newstr = sentence.split(' ');
    let maxlength = 0; 
    for(let i = 0; i < newstr.length ; i++){
        if(newstr[i].length > maxlength){
            maxlength = newstr[i].length
        }

    }
   return maxlength

}

let bigNumbersInArrays = (arr) => {
    let newarr = [];
    for(let i = 0; i < arr.length; i++){
       newarr.push(arr[i].reduce((current, prev) => current > prev ))
    }
    return newarr
}

console.log(bigNumbersInArrays([[4,5,1,3],[13,27,18,26],[32,35,37,39]]));
console.log('hello world');