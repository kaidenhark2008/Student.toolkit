// =========================================
// GET HTML ELEMENTS
// =========================================

const coursesContainer = document.querySelector("#courses");

const addCourseButton = document.querySelector("#addCourse");

const calculateButton = document.querySelector("#calculateGPA");

const gpaValue = document.querySelector("#gpaValue");



// =========================================
// COURSE NUMBER
// =========================================

let courseNumber = 1;



// =========================================
// ADD COURSE
// =========================================

addCourseButton.addEventListener("click", function () {

    courseNumber++;


    // Create a new course container
    const course = document.createElement("div");

    course.classList.add("course");


    // Put the course HTML inside it
    course.innerHTML = `

        <div class="course-name">

            <label>
                Course ${courseNumber}
            </label>

        </div>


        <div class="grade-container">

            <label>
                Grade
            </label>

            <select class="grade">

                <option value="4.0">A</option>

                <option value="3.0">B</option>

                <option value="2.0">C</option>

                <option value="1.0">D</option>

                <option value="0.0">F</option>

            </select>

        </div>


        <div class="credits-container">

            <label>
                Credits
            </label>

            <input
                type="number"
                class="credits"
                placeholder="3"
                min="0"
                step="0.5"
            >

        </div>

    `;


    // Add the new course to the page
    coursesContainer.appendChild(course);

});



// =========================================
// CALCULATE GPA
// =========================================

calculateButton.addEventListener("click", function () {

    // Get every grade dropdown
    const grades = document.querySelectorAll(".grade");

    // Get every credit input
    const credits = document.querySelectorAll(".credits");


    // Starting values
    let totalQualityPoints = 0;

    let totalCredits = 0;



    // Go through every course
    for (let i = 0; i < grades.length; i++) {

        // Get the GPA value
        const grade = Number(grades[i].value);


        // Get the number of credits
        const credit = Number(credits[i].value);


        // Make sure the user entered credits
        if (credit <= 0 || isNaN(credit)) {

            gpaValue.textContent = "Enter credits";

            return;
        }


        // Calculate quality points
        totalQualityPoints += grade * credit;


        // Add credits to total
        totalCredits += credit;

    }



    // Make sure we have credits
    if (totalCredits === 0) {

        gpaValue.textContent = "—";

        return;
    }



    // Calculate GPA
    const gpa = totalQualityPoints / totalCredits;



    // Display GPA
    gpaValue.textContent = gpa.toFixed(2);

});
