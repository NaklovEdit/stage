document.addEventListener('DOMContentLoaded', () => {
    const applicationForm = document.getElementById('applicationForm');
    const feedback = document.getElementById('formFeedback');

    if (applicationForm) {
        applicationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(applicationForm);
            const name = formData.get('firstName');

            feedback.style.color = 'green';
            feedback.innerHTML = `Merci ${name}, votre candidature a été envoyée avec succès !`;
            
            applicationForm.reset();
        });
    }

    const dropdowns = document.querySelectorAll('.has-dropdown');
    dropdowns.forEach(drop => {
        drop.addEventListener('mouseenter', () => {
            drop.querySelector('.dropdown-panel').style.animation = 'fadeIn 0.3s';
        });
    });
});