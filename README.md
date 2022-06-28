# Books-wizard

This React application is a simple wizard that will allow librarians to navigate through various steps in order to add a new book to the system. 

## Expectations
1. The wizard can have a maximum of 4 steps:
    a. Genre
    b. Subgenre
    c. Add subgenre
    d. Information
2. The number of steps can change dynamically depending on previously answered questions, with the steps indicator at the top of the page only displaying the available steps. Usually, you will have three steps, but if the user chooses to add a new genre,
you will have four steps.
3. A user can move to the next step only after they choose an answer (genre and subgenre), or populate and submit a form (add genre and information). The form should be submitted by using a ‘fake fetch’ technique that will console the log request.
4. The user can always navigate back to the beginning of the wizard.
5. The last step button should always have a Complete flow instead of a Next step label.
6. A description in the information form is required only if the selected substatus is flagged: “isDescriptionRequired”: true.
7. Aside from the description, only the title field is required.
8. When a user comes to the end, the wizard should be able to restart the wizard.


## Stacks used
1. React Js - Frontend implementations
2. Redux - To manage the states
3. Material Ui for styling across the app
4. React Testing Library for test
4. Github action and Heroku for CI/CD.

### URLS AND API
Hosted Frontend Url:  
GithUrl: https://github.com/Akius1/library-wizard,



### Getting Started:

1. Clone repository : https://github.com/Akius1/library-wizard.git
2. Install depencies : npm install
3. Start the application : npm run start
4. Or simply visit the Frontend URl: 

### Additional Features
1. CI/CD
2. Unit tested all endpoints


