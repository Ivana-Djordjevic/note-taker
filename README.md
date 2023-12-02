# Note Taker

![License](https://img.shields.io/badge/License-MIT_License-lightblue.svg)

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credit](#credit)

## Description

### User Story*

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

### Acceptance Criteria*

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```

While the requirements have been met, i would like to point out some issues:
- when opening the 'notes' page, the placeholder for the text does not show 
- the delete button does not work on the front end (you can delete notes on the backend as i have made an httpp delete method for it)
both of these are issues with the starter code 

[deployed link](https://note-takerrrr-36143520f64a.herokuapp.com/)

Screenshots:
Home Page:
Note Page:
Creating New Note:
New Note Saved:

## Installation

- Express
- UUID

## Usage 

To create save and keep track of notes.

## License

This application is covered under: MIT License.  

## Credit 

*[UCD readme file](https://git.bootcampcontent.com/University-of-California---Davis/UCD-VIRT-FSF-PT-09-2023-U-LOLC/-/blob/main/11-Express/02-Challenge/README.md)
