//Write a JavaScript program to get the current date.
//Expected Output : 
//mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

var d = new Date();
var dd = d.getDate();
var mm = d.getMonth()+1;
var yyyy = d.getFullYear()
if(dd<10){
  dd = '0'+dd;
}
if(mm<10){
  mm = '0'+mm;
}
console.log(mm+"-"+dd+"-"+yyyy)