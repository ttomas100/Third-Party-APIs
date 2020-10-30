
moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));
var currentHour = moment();
currentHour = currentHour.startOf("hour");

var starHour = moment().startOf('day').add(5, "hours");

var time5am = starHour.add(0, "h");
$(".block5").text(time5am.format('hh:mm A'));

var time6am = starHour.add(1, "h");
$(".block6").text(time6am.format('hh:mm A'));

var time7am = starHour.add(1, "h");
$(".block7").text(time7am.format('hh:mm A'));

var time8am = starHour.add(1, "h");
$(".block8").text(time8am.format('hh:mm A'));

var time9am = starHour.add(1, "h");
$(".block9").text(time9am.format('hh:mm A'));

var time10am = starHour.add(1, "h");
$(".block10").text(time10am.format('hh:mm A'));

var time11am = starHour.add(1, "h");
$(".block11").text(time11am.format('hh:mm A'));

var time12am = starHour.add(1, "h");
$(".block12").text(time12am.format('hh:mm A'));

var time1pm = starHour.add(1, "h");
$(".block13").text(time1pm.format('hh:mm A'));

var time2pm = starHour.add(1, "h");
$(".block14").text(time2pm.format('hh:mm A'));

var time3pm = starHour.add(1, "h");
$(".block15").text(time3pm.format('hh:mm A'));

var time4pm = starHour.add(1, "h");
$(".block16").text(time4pm.format('hh:mm A'));

var time5pm = starHour.add(1, "h");
$(".block17").text(time5pm.format('hh:mm A'));

var time6pm = starHour.add(1, "h");
$(".block18").text(time6pm.format('hh:mm A'));
