//Write a JavaScript program to find 1st January is being a Sunday 
//between 2014 and 2050. 
for (var year = 2014; year <= 2050; year++)
    {//Date(year,month,date)
    var d = new Date(year, 0, 1);
    if ( d.getDay() === 0 )// day == 0 is sunday
        console.log("1st January is being a Sunday  "+year);
    }