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