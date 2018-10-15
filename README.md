# Redux Feedback Loop

### SETUP
Create your database and tables using the provided `data.sql` file. Start the server.
```
npm install
npm run server
npm run client
```

### INSTRUCTIONS GIVEN
- Create a multi-part form that allows users to leave feedback for today. There will be 4 views for the form parts
- While there is no nav bar, each part of the form should be at its own route. Clicking next should move the user to the appropriate step in the process.
- When the form is complete, save the submission in the database. The user should see a submission success page. 
- Display all of the existing feedback at the route /admin. The most recently added feedback should appear at the top of the list. Allow the user to delete existing feedback. Prompt the user to confirm prior to deleting the feedback from the database.

### PROJECT GOALS
- Build a multi-view feedback management react application with client-side-routing
- Use redux to manage the state of the application across multiple views
- Experiment with + implement @material-ui components and styling
- Have well segmented, commented, easily readable code
- Learn how to develop an efficient component structure to reduce redundant code 


