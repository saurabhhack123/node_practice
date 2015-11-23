// function OddSync(arr){
//    return arr.filter(function(num){
//    	return num%2;
//    });
// }

// var numbers = [1,2,3,4,5,6,7,8,9,10];
// var oddNums = OddSync(numbers);
// console.log(oddNums);


function OddaSync(arr, callback){
  
  var oddNums =	arr.filter(function(num){
  	return num%2;
  });

  var err = arr.length == 0 ? new Error('arr length 0 is not allowed'):null;

  setTimeout(function(){
    callback(err,oddNums);
  },1000);

}

var numbers = [1,2,4,5,6,7,8,9,10];

// var numbers = [];

OddaSync(numbers,function(err,data){
  
  if(err) throw err;
  console.log('data:' ,data);
});