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
  

  // TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage. HINT: What does `this` reference in the click listener function? 
  
  


  // TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. HINTS: How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes? How can Day.js be used to get the current hour in 24-hour time?
  


  // TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. HINT: How can the id attribute of each time-block be used to do this?
  


  // TODO: Add code to display the current date in the header of the page.


// });
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

function loadFromLs() { 
  var allTimes=JSON.parse(localStorage.getItem('time'))||{};

 }
 loadFromLs()
//  for loop through a object: "allTimes"


$(".saveBtn").on('click', saveToLs)