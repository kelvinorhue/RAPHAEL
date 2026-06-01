// Handle Get Started button click
document.addEventListener('DOMContentLoaded', function() {
    const getStartedBtn = document.querySelector('.cta-btn');
    
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', function() {
            alert('Welcome to Ralph\'s Remove.BG! Upload your image to get started.');
            // You can replace this with actual functionality like:
            // - Opening a file upload dialog
            // - Redirecting to an upload page
            // - Opening a modal
        });
    }
});
