
## 🚀 About Me
I'm a Teacher turned to Frontend Developer. ReactJS | Javascript | HTML | CSS | Bootstrap


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://amrishpratapsingh.com/)

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/amrishkush)

User Management Application Link: https://usermanagement.amrishpratapsingh.com 

# User Management Application

This is a User Management application built using React. It allows you to add, edit, and delete user details. The app utilizes various React features such as hook useState and components to manage the user data.

## Libraries Used

- ReactJs
- Bootstrap

## Features of ReactJs Used (Mainly)
- useState
- Components

## How It Works

- The `Function` component is the main component of the application. This receives data from other components and create a user or edit it.
The component initializes the `users` state with an empty array and `userForEdit` state with `null`.

- The `addUser` function is used for adding a new user to the `users` state. It creates a new user object with a unique ID and merges it with the existing users using the spread operator. The `users` state is then updated with the new array of users.
- The `editUser` function sets the selected user for editing by updating the `userForEdit` state with the selected user object.
- The `updateUser` function is called when the user submits the updated user details in the Edit component. It maps through the existing users, updates the user with the matching ID, and creates a new array of updated users. The `users` state and `userForEdit` state are then updated accordingly.
- The `deleteUser` function removes a user from the `users` state by filtering out the user with the matching ID.
- The `closeEdit` function resets the `userForEdit` state to `null`, effectively closing the edit form.
- The `deleteAll` function is triggered when the user clicks the "Delete All Users" button. It clears the `users` state and closes the edit form.
- The user interface is working using HTML elements and Bootstrap classes. It displays the user management header, the Add and Edit components (if `userForEdit` is not null), and the list of users rendered using the User component.
- The User component displays individual user details, including the user's name, image, email, and phone number. It also provides options to edit or delete the user.
- The Add component renders a form for adding a new user. It collects input for the user's name, email, phone number, and image. On form submission, the `addUser` function is called with the entered details.
- The Edit component renders a form for editing an existing user. It pre-fills the form fields with the user's current details and allows the user to make updates. On form submission, the `updateUser` function is called with the updated details.

Thank You! Always Open for the Suggestions!





