const accordion = document.querySelectorAll('question-answer');


accordion.forEach((item, index) =>{
  const question = item.querySelector('.question');
    question.addEventListener('click', () =>{
        item.classList.toggle('open');

  const answer = item.querySelector('.answer');
      if(item.classList.contains('open')){
        answer.style.height =`${answer.scrollHeight}px`;
      }
      else{
        answer.style.height = '0px';
      }
    
    });
});



