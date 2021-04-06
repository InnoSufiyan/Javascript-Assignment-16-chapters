// Chapters 17-20

// 1

// var multidimension = [[],[],[]];

// 2

// var multidimension = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];

// 3

// for(i=1;i<11;i++) {
//     document.write(i + "<br>");
// }

// 4

// var table = +prompt("Which number's Table you want to publish");
// var tableLength= +prompt("length of table");

// for(i=1;i<=tableLength;i++){
//     document.write(table + "x" + i + "=" + (table*i) + "<br>");
// }

// 5

// var fruits = ["apple","banana","mango","orange","strawberry"];

// for(i=0;i<fruits.length;i++) {
//     document.write("Element at index " + i + " is " + fruits[i] + "<br>")
// }

// 7

// var a = ["cake", "apple pie", "cookies", "chips", "patties"];
// var b = prompt("What do you want to order?");
// if(a.includes(b) == true) {
//     document.write("Your product is found, it is available on index " + a.indexOf(b))
// } else {
//     document.write("Out of Stock")
// }

// 7 another method

// var a = ["cake", "apple pie", "cookies", "chips", "patties"];
// var b = prompt("What do you want to order");
// var c = true;

// for (i=0; i<a.length; i++) {
//     if(a[i] == b) {
//         document.write("Your product is found, and is available on index " + i);
//         c = false;
//         break;
//     }
// }
// if (c == true) {
//     document.write("Your product is not found");
// }


// Question 8

// var a = [24,53,78,91,12];

// a.sort(function(a,b) {
//     return a-b
// })

// document.write(a[a.length-1]);

// Question 9

// var a = [24,53,78,91,12];

// a.sort(function(a,b) {
//     return a-b
// })

// document.write(a[0]);

// Question 10

// for (i=0 ; i<100 ; i+=5) {
//     document.write(i + ", ")
// }
