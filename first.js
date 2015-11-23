var nums = [1,2,3,4,5,6,7,8,9,10];

function cube(number){
  return Math.pow(number,3);
}

nums.map(cube).forEach(console.log.bind(console));




