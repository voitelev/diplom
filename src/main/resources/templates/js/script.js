let text = "Привет пока как дела что делаешь для чего за чем";
let time;
let nowTime;
let timeDown;
let timeUp;
let timeBetweenKeys = 0;
let countTab = 0;
let printTime = 0;
let b = 0;

function stopDimensionSpeed() {
    nowTime = new Date();
    var countSymbol = document.getElementById("sped").value.length;
    printTime = ((nowTime - time) / 1000);
    console.log("Время " + +"Колличество символов " + countSymbol);
    console.log("Скорость печати" + printTime);
    console.log("Среднее время " + timeBetweenKeys / countTab);
    b = timeBetweenKeys / countTab;

    countTab = 0;
    timeDown = undefined;
    timeBetweenKeys = undefined;
}

function listnerChange() {

    if (time == null) {
        time = new Date();
    }
    timeUp = new Date();
    if(timeDown === undefined) {
        timeDown = new Date();
    } else if(countTab === 2){
        timeBetweenKeys = ((timeUp - timeDown) / 1000);
    } else {
        timeBetweenKeys += ((timeUp - timeDown) / 1000);
    }
    timeDown = new Date();
    countTab++;
    console.log("время между нажатиями сумма " + timeBetweenKeys + " Колличество нажатий " + countTab);
    // console.log(document.getElementById("sped").value);
    // console.log("Ввел букву");
}
function sendAjax(){
    $.ajax({
        url: "/request",
        type: "get", //send it through get method
        data: {
            time: printTime , // your get parameter(s)
            averageTime: b

        },
        success: function(response) {
            console.log(response.get());
            //Do Something on successful Ajax call
        },
        error: function(xhr) {
            //Do Something to handle error
        }
    });
}