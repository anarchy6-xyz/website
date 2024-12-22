document.addEventListener('DOMContentLoaded', function () {
    const cookieConsent = document.getElementById('cookieConsent');
    const acceptCookies = document.getElementById('acceptCookies');

    // Function to check if cookies have been accepted
    function checkCookieConsent() {
        if (localStorage.getItem('cookiesAccepted') === 'true') {
            cookieConsent.style.display = 'none';
        } else {
            cookieConsent.style.display = 'block';
        }
    }

    // Initial check
    checkCookieConsent();

    acceptCookies.addEventListener('click', function () {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieConsent.style.display = 'none';
    });
});