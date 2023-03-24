
    function startTime() {
            const today = new Date();
            let h = today.getHours();
            let m = today.getMinutes();
            let s = today.getSeconds();
            m = checkTime(m);
            s = checkTime(s);
            document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
            setTimeout(startTime, 1000);
        }       

            function checkTime(i) {
              if (i < 10) {i = "0" + i}; 
              return i;
            }
            const d = new Date();
            let dd = d.toString()
            let dl = dd.split(' ')
            let day = dl[0]
            let mon = dl[1]
            let dt = dl[2]
            let yr = dl[3]
            let date = day+', '+dt+' '+mon+', '+yr
            document.getElementById('date').innerText = date

            startTime();