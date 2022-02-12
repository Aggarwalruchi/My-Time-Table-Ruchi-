// date variable
var date = new Date();
//console.log(date);
var day = date.getDay(); // 0-6 sun->0 saturday->6
var hour = date.getHours(); // format 24 hr
var min = date.getMinutes(); //0-59
//console.log(day, hour, min);

// monday
if (day == 1) {
    if ((hour == 7 && min >= 30) || (hour == 8 && min <= 15)) {
        var monday = document.getElementById('mon-1');
        monday.classList.add("active");
    } else if ((hour == 8 && min > 15) || (hour == 9 && min <= 0)) {
        var monday = document.getElementById('mon-2');
        monday.classList.add("active");
    } else if ((hour == 9 && min > 0) || (hour == 9 && min <= 45)) {
        var monday = document.getElementById('mon-3');
        monday.classList.add("active");
    } else if ((hour == 9 && min > 45) || (hour == 10 && min <= 30)) {
        var monday = document.getElementById('mon-4');
        monday.classList.add("active");
    } else if ((hour == 10 && min > 30) || (hour == 10 && min <= 50)) {
        var monday = document.getElementById('mon-5');
        monday.classList.add("active");
    } else if ((hour == 10 && min > 50) || (hour == 11 && min <= 30)) {
        var monday = document.getElementById('mon-6');
        monday.classList.add("active");
    } else if ((hour == 11 && min > 30) || (hour == 12 && min <= 15)) {
        var monday = document.getElementById('mon-7');
        monday.classList.add("active");
    } else if ((hour == 12 && min > 15) || (hour == 13 && min <= 0)) {
        var monday = document.getElementById('mon-8');
        monday.classList.add("active");
    }
}
// tuesday
if (day == 2) {
    if ((hour == 7 && min >= 30) || (hour == 8 && min <= 15)) {
        var tuesday = document.getElementById('tue-1');
        tuesday.classList.add("active");
    } else if ((hour == 8 && min > 15) || (hour == 9 && min <= 0)) {
        var tuesday = document.getElementById('tue-2');
        tuesday.classList.add("active");
    } else if ((hour == 9 && min > 0) || (hour == 9 && min <= 45)) {
        var tuesday = document.getElementById('tue-3');
        tuesday.classList.add("active");
    } else if ((hour == 9 && min > 45) || (hour == 10 && min <= 30)) {
        var tuesday = document.getElementById('tue-4');
        tuesday.classList.add("active");
    } else if ((hour == 10 && min > 30) || (hour == 10 && min <= 50)) {
        var tuesday = document.getElementById('tue-5');
        tuesday.classList.add("active");
    } else if ((hour == 10 && min > 50) || (hour == 11 && min <= 30)) {
        var tuesday = document.getElementById('tue-6');
        tuesday.classList.add("active");
    } else if ((hour == 11 && min > 30) || (hour == 12 && min <= 15)) {
        var tuesday = document.getElementById('tue-7');
        tuesday.classList.add("active");
    } else if ((hour == 12 && min > 15) || (hour == 13 && min <= 0)) {
        var tuesday = document.getElementById('tue-8');
        tuesday.classList.add("active");
    }
}
// wednesday
if (day == 3) {
    if ((hour == 7 && min >= 30) || (hour == 8 && min <= 15)) {
        var wednesday = document.getElementById('wed-1');
        wednesday.classList.add("active");
    } else if ((hour == 8 && min > 15) || (hour == 9 && min <= 0)) {
        var wednesday = document.getElementById('wed-2');
        wednesday.classList.add("active");
    } else if ((hour == 9 && min > 0) || (hour == 9 && min <= 45)) {
        var wednesday = document.getElementById('wed-3');
        wednesday.classList.add("active");
    } else if ((hour == 9 && min > 45) || (hour == 10 && min <= 30)) {
        var wednesday = document.getElementById('wed-4');
        wednesday.classList.add("active");
    } else if ((hour == 10 && min > 30) || (hour == 10 && min <= 50)) {
        var wednesday = document.getElementById('wed-5');
        wednesday.classList.add("active");
    } else if ((hour == 10 && min > 50) || (hour == 11 && min <= 30)) {
        var wednesday = document.getElementById('wed-6');
        wednesday.classList.add("active");
    } else if ((hour == 11 && min > 30) || (hour == 12 && min <= 15)) {
        var wednesday = document.getElementById('wed-7');
        wednesday.classList.add("active");
    } else if ((hour == 12 && min > 15) || (hour == 13 && min <= 0)) {
        var wednesday = document.getElementById('wed-8');
        wednesday.classList.add("active");
    }
}
// thursday
if (day == 4) {
    if ((hour == 7 && min >= 30) || (hour == 8 && min <= 15)) {
        var thursday = document.getElementById('thu-1');
        thursday.classList.add("active");
    } else if ((hour == 8 && min > 15) || (hour == 9 && min <= 0)) {
        var thursday = document.getElementById('thu-2');
        thursday.classList.add("active");
    } else if ((hour == 9 && min > 0) || (hour == 9 && min <= 45)) {
        var thursday = document.getElementById('thu-3');
        thursday.classList.add("active");
    } else if ((hour == 9 && min > 45) || (hour == 10 && min <= 30)) {
        var thursday = document.getElementById('thu-4');
        thursday.classList.add("active");
    } else if ((hour == 10 && min > 30) || (hour == 10 && min <= 50)) {
        var thursday = document.getElementById('thu-5');
        thursday.classList.add("active");
    } else if ((hour == 10 && min > 50) || (hour == 11 && min <= 30)) {
        var thursday = document.getElementById('thu-6');
        thursday.classList.add("active");
    } else if ((hour == 11 && min > 30) || (hour == 12 && min <= 15)) {
        var thursday = document.getElementById('thu-7');
        thursday.classList.add("active");
    } else if ((hour == 12 && min > 15) || (hour == 13 && min <= 0)) {
        var thursday = document.getElementById('thu-8');
        thursday.classList.add("active");
    }
}

// friday
if (day == 5) {
    if ((hour == 7 && min >= 30) || (hour == 8 && min <= 15)) {
        var friday = document.getElementById('fri-1');
        friday.classList.add("active");
    } else if ((hour == 8 && min > 15) || (hour == 9 && min <= 0)) {
        var friday = document.getElementById('fri-2');
        friday.classList.add("active");
    } else if ((hour == 9 && min > 0) || (hour == 9 && min <= 45)) {
        var friday = document.getElementById('fri-3');
        friday.classList.add("active");
    } else if ((hour == 9 && min > 45) || (hour == 10 && min <= 30)) {
        var friday = document.getElementById('fri-4');
        friday.classList.add("active");
    } else if ((hour == 10 && min > 30) || (hour == 10 && min <= 50)) {
        var friday = document.getElementById('fri-5');
        friday.classList.add("active");
    } else if ((hour == 10 && min > 50) || (hour == 11 && min <= 30)) {
        var friday = document.getElementById('fri-6');
        friday.classList.add("active");
    } else if ((hour == 11 && min > 30) || (hour == 12 && min <= 15)) {
        var friday = document.getElementById('fri-7');
        friday.classList.add("active");
    } else if ((hour == 12 && min > 15) || (hour == 13 && min <= 0)) {
        var friday = document.getElementById('fri-8');
        friday.classList.add("active");
    }
}
// Saturday
if (day == 6) {
    if ((hour == 7 && min >= 30) || (hour == 8 && min <= 15)) {
        var saturday = document.getElementById('sat-1');
        saturday.classList.add("active");
    } else if ((hour == 8 && min > 15) || (hour == 9 && min <= 0)) {
        var saturday = document.getElementById('sat-2');
        saturday.classList.add("active");
    } else if ((hour == 9 && min > 0) || (hour == 9 && min <= 45)) {
        var saturday = document.getElementById('sat-3');
        saturday.classList.add("active");
    } else if ((hour == 9 && min > 45) || (hour == 10 && min <= 30)) {
        var saturday = document.getElementById('sat-4');
        saturday.classList.add("active");
    } else if ((hour == 10 && min > 30) || (hour == 10 && min <= 50)) {
        var saturday = document.getElementById('sat-5');
        saturday.classList.add("active");
    } else if ((hour == 10 && min > 50) || (hour == 11 && min <= 30)) {
        var saturday = document.getElementById('sat-6');
        saturday.classList.add("active");
    } else if ((hour == 11 && min > 30) || (hour == 12 && min <= 15)) {
        var saturday = document.getElementById('sat-7');
        saturday.classList.add("active");
    } else if ((hour == 12 && min > 15) || (hour == 13 && min <= 0)) {
        var saturday = document.getElementById('sat-8');
        saturday.classList.add("active");
    }
}
