let currentImageIndex = -1;
const images = [
    'url("images/img1.jpg")',
   // 'url("images/img2.jpg")',
    'url("images/image6.jpg")',
    'url("images/img4.jpg")',
    'url("images/img5.jpg")'
];
const titles = [
    'Productivity',
    'Tranquility',
    'Twilight',
    
    'Companion'
];
let allowUpdate = true; // Flag to control update cycle

function typeTitle(title) {
    const titleElement = document.getElementById('dynamicTitle');
    titleElement.innerText = ''; // Clear current title
    let i = 0;
    const typingSpeed = 150; // Milliseconds between each letter

    function typing() {
        if (i < title.length && allowUpdate) {
            titleElement.innerText += title.charAt(i);
            i++;
            setTimeout(typing, typingSpeed);
        }
    }
    typing();
}

function updateContent() {
    if (allowUpdate) {
        currentImageIndex = (currentImageIndex + 1) % images.length; // Cycle through images
        document.body.style.backgroundImage = images[currentImageIndex]; // Update background image
        typeTitle(titles[currentImageIndex]); // Use typeTitle function for typing effect
    }

    // Set next timeout
    setTimeout(updateContent, 5000 + titles[currentImageIndex].length * 150); // Adjust delay for typing
}

document.body.addEventListener('mouseover', function() {
    allowUpdate = false; // Pause updating when cursor is on the screen
});

document.body.addEventListener('mouseout', function() {
    allowUpdate = true; // Resume updating when cursor leaves the screen
});

// Start the cycle immediately
updateContent();
