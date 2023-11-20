
   
   //wait for document to load before running code
  $(document).ready(function() {
    updateBlockColors();   //call function to update block colors
    
    var timeDisplayEl = $('#time-display');
    
    //function to disaply current time 
    function displayTime() {
    var rightNow = dayjs().format('MMM DD, YYYY [at] h:mm:ss a');
    timeDisplayEl.text(rightNow);
  }
    //function to update current time
    function updateCurrentTime() {
      var rightNow = dayjs().format('MMM DD, YYYY [at] h:mm:ss a');
      $('#rightnow').text(rightNow);
    
      var currentTime24hr = dayjs().format('H');     //switch time to 24hr format 
      var currentTime12hr = dayjs(currentTime24hr, 'H').format('h');
      $('.time-display').text(currentTime12hr);
  }
    
    // Call the function to set the current time
    updateCurrentTime();
    
    // Update current time every minute (1000 milliseconds)
    setInterval(updateCurrentTime, 1000);
  })  
    //function to update colors of time blocks based on the current time
  function updateBlockColors() {
    // Get the current hour in 24hr format
    var currentHour = dayjs().hour();
    console.log("Current Hour:", currentHour);
  
    // Loop through all the time blocks
    $('.time-block').each(function () {
      // remove the hour from the time block's ID
      var hour = parseInt(this.id.split('-').pop());   
                                                                            
        // Check if the hour is in the past, present, or future and add proper classes 
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
 
  //update block colors every minute (60000 milliseconds)
  setInterval(updateBlockColors, 60000);
  
     /// Event listener for save buttons
$('.saveBtn').on('click', function () {
  
  // Find the closest time-block element
  var timeBlock = $(this).closest(".time-block");
  
  // Remove the ID from the time-block element
  var timeBlockId = timeBlock.attr("id");
  
  // Get the added text from the text area
 var userInput = timeBlock.find(".description").val();
  
  // Save the added text in local storage 
  localStorage.setItem(timeBlockId, userInput);
});


$('.description').each(function () {
  //retrieves ID from description element 
  var textareaId = $(this).attr('id');
 
  //look for previously stored data in local storage
  var savedText = localStorage.getItem(textareaId);

  if (savedText !== null) {    //restores users previously stored data to the text area
    $(this).val(savedText);
  }
});

// Add event listener for saving text to local storage
$('.saveBtn').on('click', function () {
  
  //Find closest description element, retrieve ID and store it
  var textareaId = $(this).siblings('.description').attr('id');
  
  //Find closest description element, retrieve added text and store it
  var text = $(this).siblings('.description').val();

  //save to local storage
  localStorage.setItem(textareaId, text);
});


     
