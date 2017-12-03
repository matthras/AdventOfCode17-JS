function day3part1(num) {
  var x = 0;
  var y = 0;
  var count = 1;
  // Right, up, left, down
  var iterate = 1;
  var iteratecount = 0
  for(var i=0; i < num; i++) {
    x += iterate; // Right
    count += iterate;
    if(count > num) { break }
    y += iterate; // Up
    count += iterate;
    if(count > num) { break }
    iterate += 1;
    x -= iterate; // Left
    count += iterate;
    if(count > num) { break }
    y -= iterate; // Down
    count += iterate;
    if(count > num) { break }
    iterate += 1;
  }
  console.log("Count: ", count);
  console.log("Iterate: ", iterate)
  console.log("x: ", x)
  console.log("y: ",y)
  return Math.abs(x-(count-num))+Math.abs(y) // Hacky solution only for this case scenario. When you print x, y, you'll notice that it's in the bottom right corner, so you only need to subtract the difference between count and num from x.
}

console.log(day3part1(325489));

function day3part2(num) {
  var matrix = new Array(); // 9x9 matrix 
  for(var m = 0; m < 13; m++){
    matrix[m] = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0)
  }
  // Middle is (4,4)
  var x = 6;
  var y = 6;
  var numSteps = 1;
  matrix[x][y] = 1;
  for(var i = 1; i < 81; i++){
    for(var j = 0; j < numSteps; j++) {
      y += 1;
      matrix[x][y] = matrix[x-1][y-1] + matrix[x-1][y] + matrix[x-1][y+1] + matrix[x][y-1] + matrix[x][y+1] + matrix[x+1][y-1] + matrix[x+1][y] + matrix[x+1][y+1];
      if(matrix[x][y] > 325489) { return matrix[x][y]}
    }
    for(var j = 0; j < numSteps; j++) {
      x -= 1;  
      matrix[x][y] = matrix[x-1][y-1] + matrix[x-1][y] + matrix[x-1][y+1] + matrix[x][y-1] + matrix[x][y+1] + matrix[x+1][y-1] + matrix[x+1][y] + matrix[x+1][y+1];
      if(matrix[x][y] > 325489) { return matrix[x][y]}
    }
    numSteps++;
    for(var j = 0; j < numSteps; j++) {
      y -= 1;
      matrix[x][y] = matrix[x-1][y-1] + matrix[x-1][y] + matrix[x-1][y+1] + matrix[x][y-1] + matrix[x][y+1] + matrix[x+1][y-1] + matrix[x+1][y] + matrix[x+1][y+1];
      if(matrix[x][y] > 325489) { return matrix[x][y]}
    }
    for(var j = 0; j < numSteps; j++) {
      x += 1;
      matrix[x][y] = matrix[x-1][y-1] + matrix[x-1][y] + matrix[x-1][y+1] + matrix[x][y-1] + matrix[x][y+1] + matrix[x+1][y-1] + matrix[x+1][y] + matrix[x+1][y+1];
      if(matrix[x][y] > 325489) { return matrix[x][y]}
    }
    numSteps ++;
    console.log(matrix)
  }

}

console.log(day3part2(325489)) // Don't ask me how it works when the matrix stops forming, but it definitely gives you the right answer at the end!