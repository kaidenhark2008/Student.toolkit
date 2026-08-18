let timerInterval;

let isRunning = false;

let isFocus = true;

let sessionsCompleted = 0;

let timeLeft = 25 * 60;


function updateDisplay() {

    const minutes =
        Math.floor(timeLeft / 60);

    const seconds =
        timeLeft % 60;

    document.getElementById("timer").textContent =
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");
}


function startTimer() {

    if (isRunning) {
        return;
    }

    isRunning = true;

    timerInterval = setInterval(function () {

        timeLeft--;

        updateDisplay();

        if (timeLeft <= 0) {

            clearInterval(timerInterval);

            isRunning = false;

            if (isFocus) {

                sessionsCompleted++;

                document.getElementById("sessions").textContent =
                    sessionsCompleted;
            }

            switchMode();
        }

    }, 1000);
}


function pauseTimer() {

    clearInterval(timerInterval);

    isRunning = false;
}


function resetTimer() {

    clearInterval(timerInterval);

    isRunning = false;

    isFocus = true;

    const focusMinutes =
        Number(document.getElementById("focusLength").value);

    timeLeft =
        focusMinutes * 60;

    document.getElementById("mode").textContent =
        "Focus Time";

    updateDisplay();
}


function skipSession() {

    clearInterval(timerInterval);

    isRunning = false;

    switchMode();
}


function switchMode() {

    isFocus = !isFocus;

    if (isFocus) {

        const focusMinutes =
            Number(document.getElementById("focusLength").value);

        timeLeft =
            focusMinutes * 60;

        document.getElementById("mode").textContent =
            "Focus Time";

    }

    else {

        const breakMinutes =
            Number(document.getElementById("breakLength").value);

        timeLeft =
            breakMinutes * 60;

        document.getElementById("mode").textContent =
            "Break Time";
    }

    updateDisplay();
}


document
    .getElementById("focusLength")
    .addEventListener("change", function () {

        if (!isRunning && isFocus) {

            timeLeft =
                Number(this.value) * 60;

            updateDisplay();
        }
    });


document
    .getElementById("breakLength")
    .addEventListener("change", function () {

        if (!isRunning && !isFocus) {

            timeLeft =
                Number(this.value) * 60;

            updateDisplay();
        }
    });


updateDisplay();
