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
    
    // Create new element for instruction text
    const instructionText = document.createElement('div');
    instructionText.className = 'matrix-text instruction';
    instructionText.style.opacity = '0';
    instructionText.style.fontSize = '1.5em';  // Slightly smaller than main text
    document.querySelector('.container').appendChild(instructionText);

    typeWriter(text1, "You've waited 12 years...");
    setTimeout(() => {
        typeWriter(text2, "Crime Pays!!!");
        bankImage.style.opacity = '1';
    }, 2500);

    // Show instruction text after 5 seconds
    setTimeout(() => {
        instructionText.textContent = "Click the picture to enter the bank";
        instructionText.style.opacity = '1';
    }, 9000);
} 