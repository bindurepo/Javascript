var d = new Date();
var day = d.getDay()
var dayList = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
console.log("Today is : "+dayList[day])
var hour = d.getHours()
var min = d.getMinutes()
var sec = d.getSeconds()

if((hour !== 0) && (hour < 12)){
  console.log("Current time is "+ hour+"AM : "+min+" : "+sec)
  }
  else if(hour > 12){
    console.log("Current time is "+ (hour-12)+"PM :"+min+" : "+sec)
  }
  else if(hour == 12){
    console.log("Current time is "+ hour+"PM :"+min+" : "+sec)
  }
  else if(hour === 0){
    console.log("Current time is "+ hour+"AM :"+min+" : "+sec)
  }
