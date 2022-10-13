const calenderTitle = document.getElementById("calendar_Titles");
const calenderWeek01 = document.getElementById("calendar_Week01");
const calenderWeek02 = document.getElementById("calendar_Week02");
const calenderWeek03 = document.getElementById("calendar_Week03");
const calenderWeek04 = document.getElementById("calendar_Week04");
const calenderWeek05 = document.getElementById("calendar_Week05");
const calenderWeek06 = document.getElementById("calendar_Week06");
var monthAtCurrent = 0;
var yearAtCurrent = 0;
//Populates as dd,mm,yyyy
calendarPopulateMonth(10, 10, 2022);

function changeCalendar(whichWay) {
    switch (whichWay) {
        case 1:
            monthAtCurrent = monthAtCurrent + 1;
            if (monthAtCurrent == 13) {                
                monthAtCurrent = 1;
                yearAtCurrent = parseInt(yearAtCurrent) + 1;
            }
            break;
        case 0:
                monthAtCurrent = monthAtCurrent - 1;
                if (monthAtCurrent == 0) {
                    monthAtCurrent = 12;
                    yearAtCurrent = parseInt(yearAtCurrent) - 1;
                }
                break;
        default:
            break
    }

    calendarPopulateMonth(01, monthAtCurrent, yearAtCurrent);
}

function calendarPopulateMonth(dayCheck, monthCheck, yearCheck) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const today = new Date(yearCheck + "-" + monthCheck + "-" + dayCheck);
    const monthString = monthNames[today.getMonth()];
    const yearString = today.getFullYear();
    monthAtCurrent = today.getMonth() + 1;
    yearAtCurrent = parseInt(today.getFullYear());
    calenderTitle.textContent = monthString + " " + yearString; //Add the month and year.

    //get the number of days in the month. Need to add 1 to month due to 0 index start.
    const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();


    //get the 1st day 0 = sunday, 1 = monday...
    var firstDayOfMonth = parseInt(new Date(today.getFullYear() + "-" + (today.getMonth() + 1) + "-1").getDay());

    if (firstDayOfMonth == 0) { firstDayOfMonth = 7 }; //Sets Sunday to start on week one.
    //Week One
    calenderWeek01.innerHTML = "";
    var calenderNumber = 0;
    for (i = 1; i < 8; i++) {
        if (i < firstDayOfMonth) {
            calenderWeek01.innerHTML += "&nbsp;&#x2022;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        } else {
            calenderNumber = i - firstDayOfMonth + 1;
            if (calenderNumber < 10) {
                calenderNumber = "0" + calenderNumber;
            }
            calenderWeek01.innerHTML += calenderNumber + "&nbsp;&nbsp;&nbsp;&nbsp;";
        }

    }
    //Week two
    calenderWeek02.innerHTML = "";
    for (i = 1; i < 8; i++) {
        calenderNumber = (parseInt(calenderNumber) + 1);
        if (calenderNumber < 10) {
            calenderNumber = "0" + calenderNumber;
        }
        calenderWeek02.innerHTML += calenderNumber + "&nbsp;&nbsp;&nbsp;&nbsp;";
    }

    //Week three
    calenderWeek03.innerHTML = "";
    for (i = 1; i < 8; i++) {
        calenderNumber = (parseInt(calenderNumber) + 1);
        if (calenderNumber < 10) {
            calenderNumber = "0" + calenderNumber;
        }
        calenderWeek03.innerHTML += calenderNumber + "&nbsp;&nbsp;&nbsp;&nbsp;";
    }

    //Week four
    calenderWeek04.innerHTML = "";
    for (i = 1; i < 8; i++) {
        calenderNumber = (parseInt(calenderNumber) + 1);
        if (calenderNumber < 10) {
            calenderNumber = "0" + calenderNumber;
        }
        calenderWeek04.innerHTML += calenderNumber + "&nbsp;&nbsp;&nbsp;&nbsp;";
    }

    //Week five
    calenderWeek05.innerHTML = "";
    for (i = 1; i < 8; i++) {
        calenderNumber = (parseInt(calenderNumber) + 1);
        if (calenderNumber < 10) {
            calenderNumber = "0" + calenderNumber;
        }
        if (calenderNumber < daysInMonth + 1) {
            calenderWeek05.innerHTML += calenderNumber + "&nbsp;&nbsp;&nbsp;&nbsp;";
        } else {
            calenderWeek05.innerHTML += "&nbsp;&#x2022;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        }
    }

    //Week six
    calenderWeek06.innerHTML = "";
    if (calenderNumber < daysInMonth + 1) {
        for (i = 1; i < 8; i++) {
            calenderNumber = (parseInt(calenderNumber) + 1);
            if (calenderNumber < 10) {
                calenderNumber = "0" + calenderNumber;
            }
            if (calenderNumber < daysInMonth + 1) {
                calenderWeek06.innerHTML += calenderNumber + "&nbsp;&nbsp;&nbsp;&nbsp;";
            } else {
                calenderWeek06.innerHTML += "&nbsp;&#x2022;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
            }

        }
    }



}

