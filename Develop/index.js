const saveNote = document.querySelector('.save-note');
const inputField = document.querySelector('.input-value');

console.log('linked')

function removeClass() {
    saveNote.classList.remove('save-note'); 
}

function deleteValues() {
    const titleValue = document.querySelector('.note-title');
    const textValue = document.querySelector('.note-textarea');
    
    titleValue.value = '';
    textValue.value = '';
}

// verifies if there is user input to reveal the save button
// how to add conditional statements to prevent user from saving blank notes
// how to add a default title in case they dont have a title
inputField.addEventListener('input', removeClass)

// empties the input field allowing user to save a new Notes
newNote.addEventListener('click', deleteValues)


saveNote.addEventListener('click', () => console.log('clicked save')) // works
