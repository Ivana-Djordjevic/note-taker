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
[deployed link](google.com) (fake one)

screenshots:

## Installation

- Express
- UUID

## Usage 

To create save and keep track of notes.

## License

This application is covered under: MIT License.  

## Credit 

*[UCD readme file](https://git.bootcampcontent.com/University-of-California---Davis/UCD-VIRT-FSF-PT-09-2023-U-LOLC/-/blob/main/11-Express/02-Challenge/README.md)

__________________________________________________________
## Getting Started

The following HTML routes should be created:

* `GET *` should return the `index.html` file.
  --> shouldn't that be for the 404?
  why use the * for the home page/??

## Bonus

You haven’t learned how to handle DELETE requests, but this application offers that functionality on the front end. As a bonus, try to add the DELETE route to the application using the following guideline:

* `DELETE /api/notes/:id` should receive a query parameter that contains the id of a note to delete. To delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

## Review

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository, with a unique name and a README describing the project.

- - -
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
