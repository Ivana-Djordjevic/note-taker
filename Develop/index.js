const titleInput = document.querySelector('.note-title');
const textInput = document.querySelector('.note-textarea');
const saveNote = document.querySelector('.save-note');
const newNote = document.querySelector('.new-note');

console.log('linked')

//verifies if there is user input to reveal the save button
//does not work
function verifyInput () {
    const titleValue = titleInput.innerHTML
    const textValue = textInput.innerHTML
    console.log('text value ' + typeof textValue)
    console.log('what it shows for textValue innerHTML: ' + textValue)

    if (titleValue.trim().length > 0 && textValue.trim().length > 0) {
        saveNote.classList.remove('save-note'); // works independently
    }
};

verifyInput();

newNote.addEventListener('click', () => console.log('clicked new')) // works
saveNote.addEventListener('click', () => console.log('clicked save')) // works

