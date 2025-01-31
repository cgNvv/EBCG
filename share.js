window.onload = function() {
    const shareLink = document.getElementById('share-link');
    const copyButton = document.getElementById('copy-button');
    
    // Use the specific URL
    const linkToShare = 'https://9172013.com';
    
    // Display the link
    shareLink.textContent = linkToShare;
    
    // Copy functionality
    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(linkToShare);
        copyButton.textContent = 'Copied!';
        setTimeout(() => {
            copyButton.textContent = 'Copy Link';
        }, 2000);
    });
} 