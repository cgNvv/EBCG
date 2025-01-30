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
    const text1 = document.getElementById('text1');
    const text2 = document.getElementById('text2');
    const bankImage = document.querySelector('.bank-image');
    
    // Initially hide the bank image
    bankImage.style.opacity = '0';
    bankImage.style.transition = 'opacity 1s';

    typeWriter(text1, "You've waited 12 years...");
    setTimeout(() => {
        typeWriter(text2, "Crime Pays!!!");
        // Show the bank image
        bankImage.style.opacity = '1';
    }, 2500);
} 