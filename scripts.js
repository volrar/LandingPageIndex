const faqItems = document.querySelectorAll('.question'); // Selects all faq questions and names them 'faqItems'

faqItems.forEach((item) => { //for Each 'item' in faqItems
  item.addEventListener('click', () => {//add an event listener for the 'click' event.
    const answer = item.nextElementSibling; //selects the next sibling of question (faq-answer) and set's that to the const answer
    answer.classList.toggle('visible'); //toggles the visible class for faq-answer (display initiall set to none)
  });
});