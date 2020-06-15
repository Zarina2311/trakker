const checkForErrors = (res) => {
  if (!res.ok) throw new Error("Unexpected non-OK HTTP status");
  return res.json();
};

//const API_ROOT = "https://job-trakker-api.herokuapp.com"; // heroku
const API_ROOT = "http://localhost:3001";

//GET
export function getColumns({ auth0_id }) {
  return fetch(`${API_ROOT}/user/${auth0_id}/column`)
    .then(checkForErrors)
    .catch((error) => console.log("error", error));
}

export function getCardsForColumn({ auth0_id, columnId }) {
  return fetch(`${API_ROOT}/user/${auth0_id}/column/${columnId}`)
    .then(checkForErrors)
    .catch((error) => console.log("error", error));
}

//POST column
export function addColumn({ auth0_id, name }) {
  return fetch(`${API_ROOT}/user/${auth0_id}/column`, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/x-www-form-urlencoded",
    }),
    body: new URLSearchParams({ name }),
  })
    .then(checkForErrors)
    .catch((error) => console.log("error", error));
}

//POST card
export function addCard({ auth0_id, name, columnId }) {
  return fetch(`${API_ROOT}/user/${auth0_id}/column/${columnId}/card`, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/x-www-form-urlencoded",
    }),
    body: new URLSearchParams({ name }),
  })
    .then(checkForErrors)
    .catch((error) => console.log("error", error));
}

// PUT card (drag and drop)
export function moveCard({ auth0_id, cardId, newColumnId }) {
  return fetch(`${API_ROOT}/user/${auth0_id}/card/${cardId}`, {
    method: "PUT",
    headers: new Headers({
      "Content-Type": "application/x-www-form-urlencoded",
    }),
    body: new URLSearchParams({ new_col_id: newColumnId }),
  })
    .then(checkForErrors)
    .catch((error) => console.log("error", error));
}

//DELETE column
export function deleteColumn({ auth0_id, columnId }) {
  return fetch(`${API_ROOT}/user/${auth0_id}/column/${columnId}`, {
    method: "DELETE",
  })
    .then(checkForErrors)
    .catch((error) => console.log("error", error));
}

export function deleteCard({ auth0_id, cardId }) {
  return fetch(`${API_ROOT}/user/${auth0_id}/card/${cardId}`, {
    method: "DELETE",
  })
    .then(checkForErrors)
    .catch((error) => console.log("error", error));
}
