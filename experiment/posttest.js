/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join("")} </div>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                //answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");


    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the above code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////






    /////////////// Write the MCQ below in the exactly same described format ///////////////


    const myQuestions = [
        {
            question: "1. What does AdEx model mathematically describes?", ///// Write the question inside double quotes
            
            answers: 
            {
                a: "Membrane potential and adaptation current", ///// Write the option 1 inside double quotes
                b: "Membrane depolarization and hyperpolarization", ///// Write the option 2 inside double quotes
                c: "Sodium and potassium channels", ///// Write the option 2 inside double quotes
                d: "None of the above", ///// Write the option 2 inside double quotes
            },
            
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },



        {
            question: "2. Which of the following are examples (s) of spiking neuron model?", ///// Write the question inside double quotes
            
            answers: 
            {
                a: "Integrate and fire model", ///// Write the option 1 inside double quotes
                b: "Spike response model", ///// Write the option 2 inside double quotes
                c: "Izhikevich neuron model", ///// Write the option 2 inside double quotes
                d: "All the above", ///// Write the option 2 inside double quotes
            },
            
            correctAnswer: "d" ///// Write the correct option inside double quotes
        },




        {
            question: "3. Which of the following ion channels are responsible for spiking behavior ?", ///// Write the question inside double quotes
            
            answers: 
            {
                a: " Chloride", ///// Write the option 1 inside double quotes
                b: "Sodium and potassium", ///// Write the option 2 inside double quotes
                c: "Calcium", ///// Write the option 2 inside double quotes
                d: "All of the above", ///// Write the option 2 inside double quotes
            },
            
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },



        {
            question: "Modeling neuron behavior depends on which of the following ?", ///// Write the question inside double quotes
            
            answers: 
            {
                a: "Sodium and potassium channels", ///// Write the option 1 inside double quotes
                b: "Proteins complex", ///// Write the option 2 inside double quotes
                c: "Phospholipid bilayer", ///// Write the option 2 inside double quotes
                d: "All of the above", ///// Write the option 2 inside double quotes
            },
            
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },


        
    ];




    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the below code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////


    // display quiz right away
    buildQuiz();

    // on submit, show results
    submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
