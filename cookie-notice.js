document.addEventListener('DOMContentLoaded', function () {
    const cookieConsent = document.getElementById('cookieConsent');
    const acceptCookies = document.getElementById('acceptCookies');

    // Check if cookies have already been accepted
    if (localStorage.getItem('cookiesAccepted') !== 'true') {
        cookieConsent.style.display = 'flex';
    }

    acceptCookies.addEventListener('click', function () {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieConsent.style.display = 'none';
    });
});