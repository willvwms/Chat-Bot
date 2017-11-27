    $(document).ready(function() {

      //--------------------------------
      // VARIABLES
      //--------------------------------

      var conversation = [];

      var computerQuestion;
      var userAnswer;
      var computerAnswer;

      // Counter used move the user-computer exchange through the question and answer arrays 
      var exchangeCounter = 0;

      //--------------------------------
      // FUNCTIONS
      //--------------------------------

      // This function will scroll to the bottom of the chat div;
      // Call scroll() every time an element (<p>) is dynamically added
      function scroll() {
        $(".area-2").animate({scrollTop: $(".area-2").get(0).scrollHeight}, .5 * 1000);  
      }

      // Renders a "typer loader" animation to gives the impression that the chat bot is typing/composing a response
      function appendLoader () {
        $(".area-2").append(`${loader}`);
      }

      // Clears the loader immediately before the chat bot's response is displayed
      function removeLoader() {
        $("#loader-container").remove();
      }

      // Varies the length of the "typing loader" animation according to the length of the string 
      // (i.e., length of animation depends on length of the chat bot's response)
      function calculateTimeout(counter, array) {
        var computerMessageLength = array[(counter)].length;
        var timeoutFactor = (computerMessageLength / 30);
        console.log(`Number of seconds for typing loader / setTimeout: ${timeoutFactor.toFixed(1)} seconds`)
        return (timeoutFactor * 1000); // multiple timeout factor by 1000 miliseconds for setTimeout length
      }

      // The following 4 functions contain lines of code that are passed to the setTimeout method but which MUST execute synchronously (hence the function names) 
      // They are structured as nested callbacks to ensure that the final line (exchangeCounter++) does not run before the others, and end up appending the wrong exchange

      // "first" re-displays the question and the user's answer 
      function first() {
        $(".area-2").append(` <p  class="computer" > ${conversation[exchangeCounter].computerQuestion} </p> <br> `);
        $(".area-2").append(` <p  class="user" > ${conversation[exchangeCounter].userAnswer} </p> <br> `);
        appendLoader();
        scroll();
        second();
      }

      // "second" pauses execution for a few seconds, then displays the computer's answer
      function second() {
        setTimeout(
          (
            function() 
            {
            removeLoader();
            $(".area-2").append(` <p class="computer" > ${answers[(exchangeCounter)]} </p> <br> `);
            appendLoader();
            scroll();
            third();
            }
          )
          , 
          ( calculateTimeout(exchangeCounter, answers) ) // returns proportional number of miliseconds for setTimeout   
          ); // close setTimeout
      }

      // "third" waits a few more seconds, then displays the next question
      function third() {
        setTimeout(
          (
            function() 
            {
            removeLoader();
            $(".area-2").append(` <p class="computer" > ${questions[(exchangeCounter+1)]} </p> <br> `);
            scroll();
            fourth();
            }
          )
          , 
          ( calculateTimeout( (exchangeCounter + 1 ), questions) ) // returns proportional number of miliseconds for setTimeout   
          ); // close setTimeout
      }

      // "fourth" handles the following tasks before the Click-handler can be called again
      function fourth() {
        // Increment counter
        exchangeCounter++;

        // Re-enable the form elements, unblur .area-3
        $("#text-input-area, #submit-button").prop("disabled", false);
        $(".area-3").removeClass( "blurred" );
        
        // Give focus to the text area input
        $("#text-input-area").focus();

        // Scroll to bottom of chat messages
        scroll();
      }

      //--------------------------------
      // MAIN PROCESS
      //--------------------------------

      // Populate .area-1 with the Headline and Subhead (introduction to the app)
      $(".area-1").append(`<h1> ${headerContent} </h1>`);

      // Populate .area-2 with the initial question  
      $(".area-2").append(`<p  class="computer" > ${questions[0]} </p>`);

      // Populate .area-3 with the text-area and submit button:
      $(".area-3").append(` <textarea id="text-input-area"></textarea> `);      
      $(".area-3").append(` <button id="submit-button" class="button">✓</button> `);

      // Give focus to the text area input
      $("#text-input-area").focus();

      // Click handler for submit button associated with text area
      $("#submit-button").on("click", function(event) {

        // Prevent page reload
        event.preventDefault();

        // Check that user input isn't blank;
        var userInput = $("#text-input-area").val().trim();
        console.log("User input: " + userInput);
        
        if (!userInput)
        {
          alert("No empty"); // make a modal
          return;
        }

        // Check if 36 questions are already finished; if so, display some graphic (need function) and exit click handler
        if (exchangeCounter === 36)
        {
          // graphic function call goes here
          alert("End of questions.")
          return          
        }

        // Disable form elements (text area, button) until function calls (first, second, third) finish executing; 
        // The functions use timing events, so additional   user input during this time will disorganize the order of messages
        $("#text-input-area, #submit-button").prop("disabled", true);
        $(".area-3").addClass( "blurred" );

        var exchange = {
          "computerQuestion": questions[exchangeCounter],
          "userAnswer": $("#text-input-area").val().trim(),
          "computerAnswer" : answers[exchangeCounter]
        };

        console.log(JSON.stringify(exchange));

        conversation.push(exchange);

        // Clear the text-input-area when the button is clicked
        $("#text-input-area").val("");

        // Clear (empty) the chat history each time -- fill it back up with the for loop (next step)
        $(".area-2").empty();

        // For loop renders all exchanges except the current one (see next)
        for (i = 0; i < (conversation.length - 1); i++)
        {
          // Append contents (three properties) of each exchance object inside the conversation array
          $(".area-2").append(` <p class="computer" > ${conversation[i].computerQuestion} </p> <br>`);
          $(".area-2").append(` <p class="user" > ${conversation[i].userAnswer} </p> <br>`);
          $(".area-2").append(` <p class="computer" > ${conversation[i].computerAnswer} </p> <br>`);

        }

        // Call the series of nested callbacks for delayed processing
        first();

      }); // close click handler

      // Keyup handler for 'Enter' if pressed while text area has focus
      $("#text-input-area").keyup(function(event){
          if(event.keyCode == 13){
              $("#submit-button").click();
          }
      }); // close keyup handler

    }); // closes the on-ready function
