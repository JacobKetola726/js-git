window.addEventListener("DOMContentLoaded", domLoaded);

// When the DOM has finished loading, add the event listeners.
function domLoaded() {
   const convertBtn = document.getElementById("convertButton");
   const cInput = document.getElementById("C_in");
   const fInput = document.getElementById("F_in");
   const msg = document.getElementById("message");

   cInput .addEventListener("input", function(){
      fInput.value = "";
      lastEdited = "C";
   });

   fInput.addEventListener("input", function(){
      cInput.value = "";
      lastEdited = "F";
   });

   convertBtn.addEventListener("click", function(){

      if(lastEdited === "C" && cInput.value !== ""){
         let c = parseFloat(cInput.value);
         let f = convertCtoF(c);
         fInput.value = f.toFixed(1);
         updateWeatherIcon(f);

      } else if (lastEdited === "F" && fInput.value !== ""){
         let f = parseFloat(fInput.value);
         let c = convertFtoC(f);
         cInput.value = c.toFixed(1);
         updateWeatherIcon(f);

      } else{
         msg.textContent = "Enter a temperature to convert.";
         updateWeatherIcon(null);
      }
   });

   // TODO: Use addEventListener() to register a click event handler for the convert button.
   // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#add_a_simple_listener

   // Add event listeners to handle clearing the box that WAS NOT clicked,
   // e.g., the element C_in listens for 'input', with a callback fn to
   // execute after that event does happen. 
   // You don't send arguments to the event handler function.
   // So, if you want the event handler to call another function that
   // DOES take arguments, you can send that other function as a callback.
   // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#event_listener_with_anonymous_function
   // Here is an example of anonymous event handler fn that calls alert with an argument:
   // document.getElementById("weatherIcon").addEventListener("click", function() {alert("You clicked the icon.")})

}
// TODO: (Part of the above is to write the functions to be executed when the event handlers are invoked.)


function convertCtoF(C) {
   // TODO: Return temp in °F. 
   // °F = °C * 9/5 + 32
   return C * (9/5) + 32;
}

function convertFtoC(F) {
   // TODO: Return temp in °C. 
   // °C = (°F - 32) * 5/9
   return (F - 32) * (5/9);
}

// TODO: write a fn that can be called with every temp conversion
// to display the correct weather icon.
// Based on degrees Fahrenheit:
// 32 or less, but above -200: cold
// 90 or more, but below 200: hot
// between hot and cold: cool
// 200 or more, -200 or less: dead
// both input fields are blank: C-F

function updateWeatherIcon(F){
   const icon = document.getElementById("weatherIcon");

   if (F === null || isNaN(F)){
      icon.src = "images/C-F.png";
      icon.alt = "C and F";
      return;
   }
   if (F <= 32 && F > -200){
      icon.src = "images/cold.png";
      icon.alt = "Cold";
   } else if(F >= 90 && F < 200){
      icon.src = "images/hot.png";
      icon.alt = "Hot";
   } else if(F > 32 && F < 90){
      icon.src = "images/cool.png";
      icon.alt = "Cool";
   } else {
      icon.src = "images/dead.png";
      icon.alt = "Dead";
   }
}
