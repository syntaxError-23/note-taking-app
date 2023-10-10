// DECLARE DOM OBJECTS
const body = document.getElementsByTagName('body')[0];
const noteList = document.getElementById('note-list');
const noteInput = document.getElementById('note-input');
const submitButton = document.getElementById('submit-button');
const testButton = document.getElementById('test-button');

let notes = 1

//TEST FUNCTION
const test = () => {
    noteInput.value = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' ;
    submitNote();
}

//FUNCTION TO SUBMIT NOTES
const submitNote = () => {

//new note created

const newNote = document.createElement('div'); //box to contain entire note
newNote.classList.add('new-note');

const noteTitle = document.createElement('h3') //note title
noteTitle.classList.add('note-title');

const noteContent = document.createElement('p'); //note contents
noteContent.classList.add('note-content');

const contentWrap = document.createElement('div'); //wrapper for note contents (for styling purposes)
contentWrap.classList.add('content-wrap');

const detailsButton = document.createElement('button'); //view details button
detailsButton.classList.add('details-button');
detailsButton.innerHTML = 'view details'

noteContent.innerHTML = noteInput.value; //get text from input and store in note

noteTitle.innerHTML = ('Note ' +  notes)

//Modal box created (will not be appended until details button is clicked)

const overlayWrap = document.createElement('div');
overlayWrap.classList.add('overlay-wrap');

const noteOverlay = document.createElement('div'); //modal box containing content
noteOverlay.classList.add('note-overlay');

const xButton = document.createElement('span'); //button to close modal
xButton.classList.add('x-button');
xButton.innerHTML = '&times';

const xWrap = document.createElement('div'); //div to wrap x button so it can be styled with flexbox
xWrap.classList.add('x-wrap');

const fullContent = document.createElement('p'); //p to show full note contents
fullContent.classList.add('full-content');
fullContent.innerHTML = noteContent.innerHTML;

detailsButton.onclick = () => {

    console.log('the view details button has been pressed');

    body.append(overlayWrap);
    overlayWrap.appendChild(noteOverlay);
    xWrap.appendChild(xButton)
    noteOverlay.appendChild(xWrap);
    noteOverlay.appendChild(fullContent)

}

//remove overlay when x button is clicked

xButton.onclick = () => {
    body.removeChild(overlayWrap);
}

//append newly created elements to ul (declared in html)

noteList.appendChild(newNote); //append note to ul
newNote.appendChild(noteTitle); //append note title to note div
contentWrap.appendChild(noteContent); //append note content to content wrap
newNote.appendChild(contentWrap); //append content wrap to note div
newNote.appendChild(detailsButton); //append details button to note div

noteInput.value = ''; //reset input
notes++; //increment title suffix

}

submitButton.onclick = submitNote;

//If enter key is pressed, content of input is added as note
noteInput.addEventListener('keydown', function(e){

    if(e.key === 'Enter'){
        submitNote();
    }
})

testButton.onclick = test;

testButton.addEventListener('click', function(whatever){
    console.log(whatever);
})