const spriteContainer = document.getElementById('spriteContainer');
const spriteWidth = 100; // Width of individual image
const spriteHeight = 100; // Height of individual image

function showImage() {
    const row = document.getElementById('row').value;
    const column = document.getElementById('column').value;

    if (row === '' && column === '') {
        alert('Please enter a row or column number.');
        return;
    }

    if (row !== '' && column === '') {
                // Show all images in the specified row
        spriteContainer.style.width = `${spriteWidth}px`; // Assuming 5 images in a row
        spriteContainer.style.height = `${spriteHeight}px`;
        spriteContainer.style.backgroundPosition = `0px -${row * spriteHeight}px`;
    } else if (column !== '' && row === '') {
                // Show all images in the specified column
        spriteContainer.style.width = `${spriteWidth}px`;
        spriteContainer.style.height = `${spriteHeight * 5}px`; // Assuming 5 images in a column
        spriteContainer.style.backgroundPosition = `-${column * spriteWidth}px 0px`;
    } else {
                // Show a single image based on row and column
        spriteContainer.style.width = `${spriteWidth}px`;
        spriteContainer.style.height = `${spriteHeight}px`;
        spriteContainer.style.backgroundPosition = `-${column * spriteWidth}px -${row * spriteHeight}px`;
    }
}

// Reset the sprite container to default
function resetImages() {
    spriteContainer.style.backgroundPosition = '0px 0px';
    spriteContainer.style.width = `${spriteWidth}px`;
    spriteContainer.style.height = `${spriteHeight}px`;
    document.getElementById('row').value = '';
    document.getElementById('column').value = '';
}