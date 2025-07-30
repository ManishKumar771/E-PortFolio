// Get the sword cursor element
const swordCursor = document.getElementById('sword-cursor');

// Mouse movement handler
function updateCursorPosition(e) {
    // Update cursor position with smooth transform
    swordCursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
}

// Click handler for slash animation
function handleClick(e) {
    // Create slash element
    const slash = document.createElement('div');
    slash.className = 'slash';
    
    // Position slash at click coordinates
    slash.style.left = e.clientX + 'px';
    slash.style.top = e.clientY + 'px';
    
    // Add slash to body
    document.body.appendChild(slash);
    
    // Remove slash element after animation completes
    setTimeout(() => {
        if (slash.parentNode) {
            slash.parentNode.removeChild(slash);
        }
    }, 300);
}

// Hover effect handlers
function handleMouseOver() {
    swordCursor.classList.add('hover-active');
}

function handleMouseOut() {
    swordCursor.classList.remove('hover-active');
}

// Initialize event listeners
function initSwordCursor() {
    // Mouse movement
    window.addEventListener('mousemove', updateCursorPosition);
    
    // Click events
    window.addEventListener('click', handleClick);
    
    // Hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .test-link, .test-button');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseover', handleMouseOver);
        element.addEventListener('mouseout', handleMouseOut);
    });
    
    // Handle dynamically added elements
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === 1) { // Element node
                    const newInteractiveElements = node.querySelectorAll ? 
                        node.querySelectorAll('a, button') : 
                        (node.matches && node.matches('a, button') ? [node] : []);
                    
                    newInteractiveElements.forEach(element => {
                        element.addEventListener('mouseover', handleMouseOver);
                        element.addEventListener('mouseout', handleMouseOut);
                    });
                }
            });
        });
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

// Performance optimization: Throttle mouse movement
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to mouse movement for better performance
const throttledUpdateCursor = throttle(updateCursorPosition, 16); // ~60fps

// Replace the original mouse move handler with throttled version
window.removeEventListener('mousemove', updateCursorPosition);
window.addEventListener('mousemove', throttledUpdateCursor);

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSwordCursor);
} else {
    initSwordCursor();
}

// Add some extra interactive features
document.addEventListener('DOMContentLoaded', () => {
    // Add keyboard support for testing
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            // Toggle cursor visibility with Escape key
            swordCursor.style.opacity = swordCursor.style.opacity === '0' ? '1' : '0';
        }
    });
    
    // Add touch support for mobile devices
    document.addEventListener('touchstart', (e) => {
        const touch = e.touches[0];
        const clickEvent = new MouseEvent('click', {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        handleClick(clickEvent);
    });
    
    // Prevent context menu on right click to avoid conflicts
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });
});

// Console message for debugging
console.log('⚔️ Sword Cursor initialized! Move your mouse and click to see the magic!'); 