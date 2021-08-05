
var secret = $(".secret")

var resultText = $(".result");

var submitQuiz = $(".submit-quiz");


var quiz_outcome = [
  { name: "Donate",
    description: " donate",
  },
  { name: "Volunteer",
    description: "volunteer",
  },
  { name: "About Us",
    description: "about us",
  }  
];

submitQuiz.on("click", getResult);

function getResult(event) {
  event.preventDefault();
  console.log("hello!");
  
  var total = 0;  
  if ($(`.Q1OP1:checked`).val())
  {
    total = 0;
    



  } else if ($(`.Q1OP2:checked`).val()) {
    total = 1;
  } else if ($(`.Q1OP3:checked`).val()) {
    total = 2;
  } 
  var result = Math.round((total / 1));
  console.log(total);
  console.log(result);

  // 


  
  resultText.html(`<p>To help fight period poverty you can start by heading over to our ${quiz_outcome[result].description} page!<p>`);
};


