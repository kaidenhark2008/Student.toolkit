// =========================================
// GET HTML ELEMENTS
// =========================================

const assignmentsContainer =
    document.querySelector("#assignments");

const addAssignmentButton =
    document.querySelector("#addAssignment");

const calculateGradeButton =
    document.querySelector("#calculateGrade");

const gradeValue =
    document.querySelector("#gradeValue");

const weightMessage =
    document.querySelector("#weightMessage");



// =========================================
// ASSIGNMENT NUMBER
// =========================================

let assignmentNumber = 1;



// =========================================
// ADD ASSIGNMENT
// =========================================

addAssignmentButton.addEventListener(
    "click",
    function () {

        assignmentNumber++;


        // Create a new assignment
        const assignment =
            document.createElement("div");


        assignment.classList.add(
            "assignment"
        );


        // Add HTML to the assignment
        assignment.innerHTML = `

            <div class="assignment-name">

                <label>
                    Assignment ${assignmentNumber}
                </label>

                <input
                    type="text"
                    class="name"
                    placeholder="Homework"
                >

            </div>


            <div>

                <label>
                    Grade %
                </label>

                <input
                    type="number"
                    class="grade"
                    placeholder="90"
                    min="0"
                    max="100"
                    step="0.1"
                >

            </div>


            <div>

                <label>
                    Weight %
                </label>

                <input
                    type="number"
                    class="weight"
                    placeholder="20"
                    min="0"
                    max="100"
                    step="0.1"
                >

            </div>

        `;


        // Add assignment to webpage
        assignmentsContainer.appendChild(
            assignment
        );

    }
);



// =========================================
// CALCULATE GRADE
// =========================================

calculateGradeButton.addEventListener(
    "click",
    function () {

        const grades =
            document.querySelectorAll(
                ".grade"
            );


        const weights =
            document.querySelectorAll(
                ".weight"
            );


        let totalGrade = 0;

        let totalWeight = 0;



        // Go through every assignment
        for (
            let i = 0;
            i < grades.length;
            i++
        ) {

            const grade =
                Number(
                    grades[i].value
                );


            const weight =
                Number(
                    weights[i].value
                );


            // Check that values were entered
            if (
                isNaN(grade) ||
                isNaN(weight) ||
                grade < 0 ||
                grade > 100 ||
                weight <= 0
            ) {

                gradeValue.textContent =
                    "Enter valid grades";

                weightMessage.textContent =
                    "";

                return;

            }


            // Calculate weighted grade
            totalGrade +=
                grade * (weight / 100);


            totalWeight += weight;

        }



        // Check total weight
        if (totalWeight !== 100) {

            gradeValue.textContent =
                "—";


            weightMessage.textContent =
                "Your assignment weights must add up to 100%.";

            return;

        }



        // Everything is valid
        weightMessage.textContent =
            "Weights add up to 100%";


        // Display grade
        gradeValue.textContent =
            totalGrade.toFixed(2) + "%";

    }
);