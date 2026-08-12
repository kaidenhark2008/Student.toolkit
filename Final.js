function calculateFinalGrade() {

    const currentGrade =
        Number(document.getElementById("currentGrade").value);

    const targetGrade =
        Number(document.getElementById("targetGrade").value);

    const finalWeight =
        Number(document.getElementById("finalWeight").value);

    const result =
        document.getElementById("result");

    const requiredGrade =
        document.getElementById("requiredGrade");

    const message =
        document.getElementById("message");


    if (
        currentGrade < 0 ||
        currentGrade > 100 ||
        targetGrade < 0 ||
        targetGrade > 100 ||
        finalWeight <= 0 ||
        finalWeight > 100
    ) {

        alert("Please enter valid numbers between 0 and 100.");

        return;
    }


    const currentWeight =
        100 - finalWeight;


    const needed =
        (
            targetGrade -
            (currentGrade * currentWeight / 100)
        ) /
        (finalWeight / 100);


    result.style.display = "block";


    if (needed <= 0) {

        requiredGrade.textContent = "0%";

        message.textContent =
            "You have already reached your target grade.";

    }

    else if (needed > 100) {

        requiredGrade.textContent =
            needed.toFixed(1) + "%";

        message.textContent =
            "You would need more than 100% on the final to reach your target.";

    }

    else {

        requiredGrade.textContent =
            needed.toFixed(1) + "%";

        message.textContent =
            "That's the score you need on your final exam to reach your target grade.";
    }
}
