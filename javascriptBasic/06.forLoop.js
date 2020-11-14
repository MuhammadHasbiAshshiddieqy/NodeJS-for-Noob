array = ["cat", "cow", "horse"] // list or array
for (var i = 0; i < array.length; i++) {
  if (i == 2){
    break; // break when i = 2, horse isn't printed
  }
  console.log(`index ${i} => ${array[i]}`);
}
