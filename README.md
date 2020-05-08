# Trakker

Trakker is a full-stack web app to track job search. Users can organize their application submissions, interviews and overall job hunt progress.
The project is written in ReactJS, Node/Express and PostgreSQL.

## Features include:

- Sign Up form via Auth0
- Log In form via Auth0
- Log Out via Auth0
- Personal board
- Add new column
- Create name for new column
- Add new card
- Create name for new card
- Drag and drop
- Delete column
- Delete card
- Undo new card input

## Setup Instructions:

### Database

```
createdb trakker
run trakker.sql on Postgres
```

### Express

```
cd express-server
npm install
npm start
```

### React

```
cd react-client
npm install
npm start
```

Once both servers are running (Express on port 3001 and React on port 3000), open http://localhost:3000 to view the app in the browser.
