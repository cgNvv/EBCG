function typeWriter(element, text, speed = 100) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

window.onload = function() {
    const code = document.getElementById('code');
    const hiddenButton = document.getElementById('hidden-button');
    const hint = document.getElementById('hint');
    const helperText = document.getElementById('helper-text');

    typeWriter(code, "1-999-724-6545537");

    hiddenButton.addEventListener('click', () => {
        const contractAddress = "5M1pQzET7hQAE91C6RPgHbHLyrcSucFW3orFn9GRpump";
        navigator.clipboard.writeText(contractAddress);
        window.location.href = 'share.html';
    });

    // Show helper text immediately for 0.5 seconds
    helperText.textContent = "Here you idiot!";
    helperText.style.opacity = '1';
    setTimeout(() => {
        helperText.style.opacity = '0';
    }, 500);

    // Show hint after 7 seconds
    setTimeout(() => {
        hint.style.opacity = '1';
        hint.textContent = "Find the Address to the Bank on this page";
    }, 7000);

    // Show hidden button and helper text permanently after 20 seconds
    setTimeout(() => {
        hiddenButton.style.opacity = '0.9';
        hiddenButton.textContent = "5M1pQzET7hQAE91C6RPgHbHLyrcSucFW3orFn9GRpump";
        helperText.style.opacity = '1';
        helperText.textContent = "Here you idiot!";
    }, 20000);
} 