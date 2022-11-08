var strArr=["MA", "SA", "I", "SCH", "OOL"];
convert(strArr);

function convert(arr){
  var small="abcdefghijklmnopqrstuvwxyz";
  var capital="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  console.log(arr);
  //console.log(capital[1]);
  var emptyArr=[];
  for(var i=0; i<arr.length; i++){
    var word=arr[i];
    var word1="";
    //console.log(arr[i]);
    for(var j=0; j<word.length; j++){
      for(var k=0; k<26; k++){
       if(word[j] == capital[k]){
          word[j] = small[k];
          word1+=small[k];                  
        }              
      }
    }
    emptyArr.push(word1);
  }
//   var split_string = emptyArr.split(" ");
console.log(emptyArr);
}