window.onload = function() {
    const shareLink = document.getElementById('share-link');
    const copyButton = document.getElementById('copy-button');
    const contractButton = document.getElementById('contract-button');
    
    // Use the specific URL
    const linkToShare = 'https://9172013.com';
    
    // Display the link
    shareLink.textContent = linkToShare;
    
    // Copy link functionality
    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(linkToShare);
        copyButton.textContent = 'Copied!';
        setTimeout(() => {
            copyButton.textContent = 'Copy Link';
        }, 2000);
    });

    // Contract button functionality
    contractButton.addEventListener('click', () => {
        const contractAddress = "5M1pQzET7hQAE91C6RPgHbHLyrcSucFW3orFn9GRpump";
        navigator.clipboard.writeText(contractAddress);
        alert("Contract address copied to clipboard!");
    });
} 