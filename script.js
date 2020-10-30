
moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));
var currentHour = moment();
currentHour = currentHour.startOf("hour");

var starHour = moment().startOf('day').add(5, "hours");

var time5am = starHour.add(0, "h");
time5am = time5am.format('hh:mm A');
$(".block5").text(time5am);