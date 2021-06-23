function stopWatch(timeInSeconds){
  time = 0;
  setInterval(function(){
    if(time === timeInSeconds){
      console.log("Completed");
      return;
    }



    let sec = time > 60 ? time%60 : time;
    let min = time > 60 ? Math.floor(time/60) : 0;
    let hr = time > 3600 ? Math.floor(time/3600) : 0;

   console.log(`${hr}h ${min}m ${sec}s`);
   time++;
 }, 1000);
}

//stopWatch(300);
