console.log("clock app with logics");
let clock = document.getElementById('clock')
    function displayclock(){
        let currentdt = new Date();
        let currenthour = currentdt.getHours();
        let currentminiute = currentdt.getMinutes();
        let currentsecond = currentdt.getSeconds();
        let currentmillisec = currentdt.getMilliseconds();
        let timeOfDay = (currenthour < 12) ? "AM": "PM";
        

        currentsecond =(currentsecond < 10 ? "0" :"" ) + currentsecond;
        currentminiute =(currentminiute < 10  ? "0" : "") + currentminiute;
        

        currenthour = (currenthour > 12) ? currenthour - 12 : currenthour;
        
        let sumstr = currenthour + ":" + currentminiute + ":" + currentsecond  +" " + timeOfDay;
        
        clock.innerHTML = sumstr;   
    }
    setInterval(() => {
       displayclock() 
    }, 100);

    function displaydate() {
        let currentdate = new Date();
        let currmonth = currentdate.getMonth();
        let currdate = currentdate.getDate();
        let curryear = currentdate.getFullYear();

       currmonth = (currmonth == 0) ? +1 : currmonth;
       
       currdate = (currentdate < 10 ? "0" : "")+ currdate; 

        let datestr = currmonth + "/" + currdate + "/" + curryear;

        let showdate = document.getElementById('date');
        showdate.innerHTML = datestr;
    }
    setInterval(() => {
        displaydate();
    }, 100);