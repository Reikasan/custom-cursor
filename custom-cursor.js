const cursor = document.querySelector('.cursor');
const heartCursor = document.querySelector('.cursor--heart');
const starCursor = document.querySelector('.cursor--star');
const textCursor = document.querySelector('.cursor--for-text');

const mouseStalker = document.querySelector('.mouse-stalker');
const mouseStalkerText = document.querySelector('.mouse-stalker--text');
const hoverEffectElements = document.querySelectorAll('.hover-effect');

let msPos = {
    // mouse stalker position
    stalker: {
        x: document.documentElement.clientWidth / 2,
        y: document.documentElement.clientHeight / 2
    },
    // mouse position
    mouse: {
        x: document.documentElement.clientWidth / 2,
        y: document.documentElement.clientHeight / 2
    }
};

// mouse stalker activate for non-touch devices
if(window.matchMedia("(pointer: fine)")) {
    document.addEventListener('mouseover', customCursorActivate);
}

// custom cursor and mouse stalker activate
function customCursorActivate() {
    console.log("activate");
    cursor.classList.add('isActive');
    mouseStalker.classList.add('isActive');

    document.removeEventListener('mouseover', customCursorActivate);
    
    // set mouse position by mousemove
    document.addEventListener('mousemove', mousemove);

    requestAnimationFrame(update);
}

function mousemove(e) {
    msPos.mouse.x = e.clientX;
    msPos.mouse.y = e.clientY;
}

// update function
function update() {
    // update mouse stalker position
    msPos.stalker.x += (msPos.mouse.x - msPos.stalker.x) * 0.1;
    msPos.stalker.y += (msPos.mouse.y - msPos.stalker.y) * 0.1;

    // round to 0.1
    const mouseX = Math.round(msPos.mouse.x);
    const mouseY = Math.round(msPos.mouse.y);
    const stalkerX = Math.round(msPos.stalker.x * 10) / 10;
    const stalkerY = Math.round(msPos.stalker.y * 10) / 10;

    // update mouse stalker style
    cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) scale(1)`;
    mouseStalker.style.transform = `translate(${stalkerX}px, ${stalkerY}px)`;

    // start animation
    requestAnimationFrame(update);
};

// add event listener to each selected area
hoverEffectElements.forEach(element => {
    element.addEventListener('mouseover', () => {
        addHoverEffectClass(element);
    });
    element.addEventListener('mouseout', () => {
        removeHoverEffectClass(element);
    });
});

// add hover effect classes
function addHoverEffectClass(hoveredElement) {
    if(hoveredElement.classList.contains('cursor-area--heart')) {
        heartCursor.classList.add('show');
    } 
    if(hoveredElement.classList.contains('cursor-area--for-text')) {
        heartCursor.classList.add('hide');
        textCursor.classList.add('show');
    } 
    if(hoveredElement.classList.contains('change-shape')) {
        heartCursor.classList.add('hide');
        starCursor.classList.add('show');
    } 
    if(hoveredElement.classList.contains('bounce--heart')) {
        heartCursor.classList.add('bounce');
    }
    if(hoveredElement.classList.contains('bounce--text')) {
        mouseStalkerText.classList.add('bounce');
    }
    if(hoveredElement.classList.contains('change-color')) {
        heartCursor.classList.add('change-color');
    } 
    if(hoveredElement.classList.contains('spinning-heart')) {
        heartCursor.classList.add('spinning');
    } 
    if(hoveredElement.classList.contains('expand')) {
        heartCursor.classList.add('expand');
    } 
    if(hoveredElement.classList.contains('show-text')) {
        mouseStalkerText.classList.add('show');
    }
}

// remove hover effect classes
function removeHoverEffectClass(hoveredElement) {
    if(hoveredElement.classList.contains('cursor-area--heart')) {
        heartCursor.classList.remove('show');
    }
    if(hoveredElement.classList.contains('cursor-area--for-text')) {
        textCursor.classList.remove('show');
        heartCursor.classList.remove('hide');
    }  
    if(hoveredElement.classList.contains('change-shape')) {
        starCursor.classList.remove('show');
        heartCursor.classList.remove('hide');
    } 
    if(hoveredElement.classList.contains('bounce--heart')) {
        heartCursor.classList.remove('bounce');
    }
    if(hoveredElement.classList.contains('bounce--text')) {
        mouseStalkerText.classList.remove('bounce');
    }
    if(hoveredElement.classList.contains('change-color')) {
        heartCursor.classList.remove('change-color');
    } 
    if(hoveredElement.classList.contains('spinning-heart')) {
        heartCursor.classList.remove('spinning');
    } 
    if(hoveredElement.classList.contains('expand')) {
        heartCursor.classList.remove('expand');
    } 
    if(hoveredElement.classList.contains('show-text')) {
        mouseStalkerText.classList.remove('show');
    }
}


