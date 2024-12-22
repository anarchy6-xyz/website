document.querySelectorAll('.copyButton').forEach(button => {
    button.addEventListener('click', function() {
        const copyText = this.getAttribute('data-copytext');
        const button = this;
        navigator.clipboard.writeText(copyText).then(function() {
            button.textContent = 'Copied!';
            setTimeout(() => {
                button.textContent = 'Copy';
            }, 2000);
        }).catch(function(err) {
            console.error('Could not copy text: ', err);
        });
    });
});
