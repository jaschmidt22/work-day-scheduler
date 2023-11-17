//GIVEN I am using a daily planner to create a schedule
//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar
//WHEN I scroll down
//THEN I am presented with time blocks for standard business hours of 9am to 5pm
//WHEN I view the time blocks for that day
//THEN each time block is color-coded to indicate whether it is in the past, present, or future
//WHEN I click into a time block
//THEN I can enter an event
//WHEN I click the save button for that time block
//THEN the text for that event is saved in local storage
//WHEN I refresh the page
//THEN the saved events persist


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id

    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
   
   
  $(document).ready(function() {
    var timeDisplayEl = $('#time-display');
    
    function displayTime() {
    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm a');
    timeDisplayEl.text(rightNow);
  }
    
    function updateCurrentTime() {
      var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm a');
      $('#rightnow').text(rightNow);
    
      var currentTime24hr = dayjs().format('HH:mm');
    
      var currentTime12hr = dayjs(currentTime24hr, 'HH:mm').format('h:mm A');
  
      $('.time-display').text(currentTime12hr);

    }
    
    // Call the function to set the current time
    updateCurrentTime();
    
    // Use setInterval to update the current time every second
    setInterval(updateCurrentTime, 60000);
  })  

  function updateBlockColors() {
    // Get the current hour in 24-hour format
    var currentHour = dayjs().format('H');
    console.log("Current Hour:", currentHour);
  
    // Loop through all the time blocks
    $('.time-block').each(function () {
      // remove the hour from the time block's ID
      var hour = parseInt(this.id.split('-').pop());   
                                                                            
        // Check if the hour is in the past, present, or future
        if (hour < currentHour) {
        
          $(this).addClass("past");
      
        } else if (hour === currentHour) {                                           
        
          $(this).addClass("present");
     
        } else {
        
          $(this).addClass("future");
      }
    });
  }
  
  // Call the function to set the colors
  updateBlockColors();
  
  setInterval(updateBlockColors, 60000); // Update every minute
  





    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    
    
    // TODO: Add code to display the current date in the header of the page.
 