document.querySelectorAll('.question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        // Toggle the display style between 'none' and 'block'
        answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
    });
});