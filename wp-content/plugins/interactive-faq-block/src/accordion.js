document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', function() {
            const isVisible = answer.style.display === 'block';
            // Hide all answers first
            document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');
            
            // Toggle current answer visibility
            answer.style.display = isVisible ? 'none' : 'block';
        });
    });
});
