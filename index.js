setInterval(()=>{
    d = new Date();
    hr = d.getHours();
    mins = d.getMinutes();
    sec = d.getSeconds();
    hrot = 30*hr + mins/2;
    mrot = 6*mins;
    srot = 6*sec;

    hour.style.transform= `rotate(${hrot}deg)`;
    min.style.transform= `rotate(${mrot}deg)`;
    secs.style.transform= `rotate(${srot}deg)`;
},1000);