document.addEventListener("DOMContentLoaded", function() {

    // DROPDOWN FAQS

    const questions = document.querySelectorAll('.faq .question');

    questions.forEach(question => {
      question.addEventListener('click', () => {
         const answer = question.nextElementSibling;

         if (answer.style.display === 'block') {
            answer.style.display = 'none';
            question.style.marginBottom = '30px';
            question.querySelector('p').style.backgroundImage = 'url("img/icons/arrow-down.svg")';
         } else {
            answer.style.display = 'block';
            question.style.marginBottom = '0';
            question.querySelector('p').style.backgroundImage = 'url("img/icons/arrow-up.svg")';
         }
      });
    });

    // COUNTDOWN

    var eventDate = new Date(2023, 9, 25, 0, 0, 0).getTime();

    var countdown = setInterval(function() {
        
        var currentDate = new Date().getTime();
        var timeLeft = eventDate - currentDate;

        if (timeLeft <= 0) {
        clearInterval(countdown);
        } else {
        var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        }
    }, 1000);
});
