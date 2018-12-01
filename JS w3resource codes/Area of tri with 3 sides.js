//Write a JavaScript program to find the area of a triangle where 
//lengths of the three of its sides are 5, 6, 7. 

var a = 5
var b = 6
var c = 7
var pmeter = (a+b+c)/2
var area = Math.sqrt(pmeter*((pmeter-a)*(pmeter-b)*(pmeter-c)))
console.log(area)