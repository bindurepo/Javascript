function validate() {
    var name=document.getElementById("firstname")
    var lname=document.getElementById("lastname")
    var age=document.getElementById("agee")
    var laddress=document.getElementById("addressid")
    var emailidd=document.getElementById("emailid")
    var number1=document.getElementById("phoneid")
    var country =document.getElementById("country")
    var table=document.getElementById("mytable")
    var row = table.insertRow(1);
    
    console.log(name.value);
                   

 if (name.value == "") {
 document.getElementById("p1").innerHTML = "* please fill the firstname *"; // This segment displays the validation rule for all fields
 name.focus();
 
      }
      if (lname.value == "") {
 document.getElementById("p2").innerHTML = "* please fill the lastname *"; // This segment displays the validation rule for all fields
 name.focus();
 
      }
 if(emailidd.value =="") {
       document.getElementById("p4").innerHTML="* please fill the email id *";
       emailidd.focus();
       
   } 
   if(age.value==""){
//if no age was entered it will allow
document.getElementById('p3').innerHTML="enter your age";
    age.focus();
   }
//check if age is a number or less than or greater than 100
if ((isNaN(age.value)||(age.value<1)||(age.value>100)) &&(!age.value==""))
{ 
    document.getElementById("p3").innerHTML="age must be number between 1 to 100";
    
    
}   

   if(number1.value =="") {
    document.getElementById("p5").innerHTML="* please fill the phone number *";
    number1.focus();
    
} 
 
    var alphaExp = /^[a-zA-Z]+$/;
    if ((!name.value.match(alphaExp))&&(!name.value=="")) {
        document.getElementById("p1").innerHTML = "* only alphabates allowed *";
        name.focus();
}
     // This segment displays the validation rule for all fields

      
      var emailExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if ((!emailidd.value.match(emailExp))&&(!emailidd.value=="")){
        document.getElementById("p4").innerHTML = "*please give a correct email id*"; // This segment displays the validation rule for email.
        emailidd.focus();
    
}
var numericExpression = /^[0-9]+$/;
    if ((!number1.value.match(numericExpression))&&(!number1.value=="")) {
        document.getElementById("p5").innerHTML = "*please give the correct number*"; // This segment displays the validation rule for zip.
        number1.focus();
    
    } 
if(country.value == "-1" )
         {
            document.getElementById("p6").innerHTML = "*please select the country*";
            country.focus();
         }
    
if((!name.value == "")&&(!emailidd.value =="")&&(!number1.value =="")&&(!age.value=="")&&(!isNaN(age.value))&&(!(age.value<1))&&(!(age.value>100))&&(name.value.match(alphaExp))&&(emailidd.value.match(emailExp))&&(number1.value.match(numericExpression)))
    {
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    cell1.innerHTML = name.value
    cell2.innerHTML = lname.value
    cell3.innerHTML = age.value
    cell4.innerHTML = laddress.value
    cell5.innerHTML = emailidd.value
    cell6.innerHTML = number1.value
    cell7.innerHTML = country.value

    }
    
}
