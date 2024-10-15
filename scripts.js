document.addEventListener("DOMContentLoaded", () => {
    const questions = document.querySelectorAll(".questionContent");

    questions.forEach(question => {
        const header = question.querySelector(".question");
        const content = question.querySelector(".answer");

        header.addEventListener("click", () => {
            // Toggle active class for content
            console.log('we did it');
            content.classList.toggle("active");
            content.classList.toggle("inactive");
        });
    });
});