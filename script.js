document.addEventListener('DOMContentLoaded', () => {
    const moveLeft = document.getElementById('moveLeft');
    const moveRight = document.getElementById('moveRight');
    const moveForward = document.getElementById('moveForward');
    const moveBack = document.getElementById('moveBack');
    const container = document.querySelector('.container');

    let containerTransform = { x: 0, y: 0, z: 0 };
    let zoomLevel = 1;

    // Function to update both translation and scaling
    function updateTransform() {
        container.style.transform = `translate3d(${containerTransform.x}px, ${containerTransform.y}px, ${containerTransform.z}px) scale(${zoomLevel})`;
    }

    moveLeft.addEventListener('click', () => {
        if (containerTransform.x < 500) { 
            containerTransform.x += 100; // Move left
            updateTransform();
        }
    });

    moveRight.addEventListener('click', () => {
        if (containerTransform.x > -500) { 
            containerTransform.x -= 100; // Move right
            updateTransform();
        }
    });

    moveForward.addEventListener('click', () => {
        zoomLevel += 0.1;  // Zoom in
        updateTransform();
});

    moveBack.addEventListener('click', () => {
        if (zoomLevel > 0.8) {  
            zoomLevel -= 0.1;  // Zoom out
            updateTransform();
        }
    });
});










