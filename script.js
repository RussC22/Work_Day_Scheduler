// Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.

  dayjs().format()
  console.log(dayjs().format('MM/DD/YYYY'))
  console.log(dayjs().format('H:mm:ss'))
  
  
var rowTimeBlockPast = $('past');
var rowTimeBlockPresent = $('present');
var rowTimeBlockFuture = $('future');
var timeSec= dayjs().format('H:mm:ss');
var timeDay= dayjs().format('MM/DD/YYYY');
$('#currentDay').textContent=timeDay + " " + timeSec
// save button variable
var buttonEl = $('save');


// current time

const d = new Date();
let hour = d.getHours();
  console.log(hour)


// if this condition is met it is in the past, present, or

$('.time-block').each(function () { 
  var currentHour = parseInt( $(this).attr('id'));

    if (currentHour < hour ) {$(this).addClass('past');}
    if (currentHour > hour ) {$(this).addClass('future');}
    if (currentHour === hour ) {$(this).addClass('present');}
});
// save button event function
function saveToLs(event) {  
  // console.dir (this)
  var value= $(this).siblings('.description').val()
  console.log(value)
  var time= $(this).parent().attr('id')
  console.log(time)
  var allTimes=JSON.parse(localStorage.getItem('time'))||{};
    allTimes[time]=value
  localStorage.setItem('time',JSON.stringify(allTimes))
}
// 
function loadFromLs() { 
  var allTimes=JSON.parse(localStorage.getItem('time'))||{};

 }
 loadFromLs()
// Save button
$(".saveBtn").on('click', saveToLs)