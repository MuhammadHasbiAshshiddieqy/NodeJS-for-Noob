var num = 1;

// DON'T FORGET TO BREAK IN ALL CASE
switch (num) {
  case 1 :
    console.log("Monday");
    break;
  case 2 :
    console.log("Tuesday");
    break;
  case 3 :
    console.log("Wednesday");
    break;
  case 4 :
    console.log("Thursday")
    break;
  case 5 :
    console.log("Friday")
    break;
  case 6 :
    console.log("Saturday")
    break;
  case 7 :
    console.log("Sunday")
    break;
  default :
    console.log("Please check the input")
}

var color = "blue"

switch (color) {
  case "blue" || "red":
    console.log(`${color} is my favorite color`);
    break;
  default:
    console.log("I don't like that color")
}
