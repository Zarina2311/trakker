const checkForErrors = (res) => {
  if (!res.ok) throw new Error("Unexpected non-OK HTTP status");
  return res.json();
};

const API_ROOT = "https://job-trakker-api.herokuapp.com";

//GET
export function getColumns({ auth0_id }) {
  return fetch(`${API_ROOT}/user/${auth0_id}`)
    .then(checkForErrors)
    .catch((error) => console.log("error", error));
}

export function getCardsForColumn({ auth0_id, columnId }) {
  return fetch(`${API_ROOT}/user/${auth0_id}/${columnId}`)
    .then(checkForErrors)
    .catch((error) => console.log("error", error));
}

//POST
export function addColumn({ auth0_id, name }) {
  return fetch(`${API_ROOT}/user/${auth0_id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  })
    .then(checkForErrors)
    .catch((error) => console.log("error", error));
}

export function addCard({ auth0_id, name }) {
  return fetch(`${API_ROOT}/user/${auth0_id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  })
    .then(checkForErrors)
    .catch((error) => console.log("error", error));
}

//DELETE
export function deleteColumn({ columnId }) {
  return fetch(`${API_ROOT}/user${columnId}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "DELETE",
  })
    .then(checkForErrors)
    .catch((error) => console.log("error", error));
}

export function deleteCard({ cardId }) {
  return fetch(`${API_ROOT}/user/${cardId}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "DELETE",
  })
    .then(checkForErrors)
    .catch((error) => console.log("error", error));
}
