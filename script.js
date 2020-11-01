
moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));
var currentHour = moment();
currentHour = currentHour.startOf("hour");

var starHour = moment().startOf('day').add(10, "hours");


var time10am = starHour.add(0, "h");
$(".block10").text(time10am.format('hh:mm A'));

var time11am = starHour.add(1, "h");
$(".block11").text(time11am.format('hh:mm A'));

var time12am = starHour.add(1, "h");
$(".block12").text(time12am.format('hh:mm A'));

var time1pm = starHour.add(1, "h");
$(".block13").text(time1pm.format('hh:mm A'));

var time2pm = starHour.add(1, "h");
$(".block14").text(time2pm.format('hh:mm A'));



function timeFunction() {

    time10am = moment().startOf('day').add(10, "hours");

    currentHour = currentHour.startOf("hour");
    if (currentHour.isAfter(time10am)) {
        $(".form10").addClass("past");
    }
    else if (currentHour.isBefore(time10am)) {
        $(".form10").addClass("future");
    }
    else if (currentHour.isSame(time10am)) {
        $(".form10").addClass("present");
    };
    
    time11am = moment().startOf('day').add(11, "hours");

    currentHour = currentHour.startOf("hour");
    if (currentHour.isAfter(time11am)) {
        $(".form11").addClass("past");
    }
    else if (currentHour.isBefore(time11am)) {
        $(".form11").addClass("future");
    }
    else if (currentHour.isSame(time11am)) {
        $(".form11").addClass("present");
    };
    time12pm = moment().startOf('day').add(12, "hours");

    currentHour = currentHour.startOf("hour");
    if (currentHour.isAfter(time12pm)) {
        $(".form12").addClass("past");
    }
    else if (currentHour.isBefore(time12pm)) {
        $(".form12").addClass("future");
    }
    else if (currentHour.isSame(time12pm)) {
        $(".form12").addClass("present");
    };
    time1pm = moment().startOf('day').add(13, "hours");

    currentHour = currentHour.startOf("hour");
    if (currentHour.isAfter(time1pm)) {
        $(".form13").addClass("past");
    }
    else if (currentHour.isBefore(time1pm)) {
        $(".form13").addClass("future");
    }
    else if (currentHour.isSame(time1pm)) {
        $(".form13").addClass("present");
    };
    time2pm = moment().startOf('day').add(14, "hours");

    currentHour = currentHour.startOf("hour");
    if (currentHour.isAfter(time2pm)) {
        $(".form14").addClass("past");
    }
    else if (currentHour.isBefore(time2pm)) {
        $(".form14").addClass("future");
    }
    else if (currentHour.isSame(time2pm)) {
        $(".form14").addClass("present");
    };

}

timeFunction()

var formsArray= [10, 11, 12, 13, 14];
for (var j = 0; j < formsArray.length; j++) {
    var newHour= localStorage.getItem(formsArray[j]);
    $(".form"+ formsArray[j]).val(newHour);
}
    $(".saveBtn").click(function () {
    

    var newValue = $(this).siblings(".form-control").val();
    var formItem = $(this).parent().data("hour");
    localStorage.setItem(formItem, newValue);
});
