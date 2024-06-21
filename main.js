const toolBtns = document.querySelectorAll(".tool");
const toolForms = document.querySelectorAll(".tool-form");



const speechTextArea = document.querySelector("#speech-form textarea");
const speechSubmitBtn = document.querySelector(`#speech-form button[type="submit"]`);
const speechTokenCounter = document.querySelector(`#speech-form #character-counter`);
const SPEECH_MAX_CHARACTERS = 20;
speechTextArea.addEventListener('input', function() {
    const numChars = speechTextArea.value.length;

    speechTokenCounter.textContent = `${numChars}/${SPEECH_MAX_CHARACTERS}`;

    if (numChars === 0) {
        speechSubmitBtn.disabled = true;
        speechSubmitBtn.style.opacity = "60%";
    } else {
        speechSubmitBtn.disabled = false;
        speechSubmitBtn.style.opacity = "100%";
    }

    if (numChars >= SPEECH_MAX_CHARACTERS) {
        speechTextArea.value = speechTextArea.value.substring(0, SPEECH_MAX_CHARACTERS - 1);
    }
});


function openOverlay(id) {
    document.getElementById(id).style.opacity = `100%`;
}

function closeOverlay(id) {
    document.getElementById(id).style.opacity = `0%`;
}

function clickTool(btn, tabName) {
    toolBtns.forEach(element => {
        element.classList.remove("select");
    });

    toolForms.forEach(element => {
        element.style.opacity = `0%`;
    });

    btn.classList.add("select");
    
    if (tabName == "speech") {
        openOverlay(`${tabName}-form`, open=true);
    } 
}