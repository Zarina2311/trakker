const checkForErrors = (res) => {
  if (!res.ok) throw new Error("Unexpected non-OK HTTP status");
  return res.json();
};

//const API_ROOT = "https://job-trakker-api.herokuapp.com"; // heroku
const API_ROOT = "http://localhost:3001";

const api = (path, method = "GET", body) => {
  let options;

  if (method === "POST" || method === "PUT") {
    options = {
      method,
      headers: new Headers({
        "Content-Type": "application/x-www-form-urlencoded",
      }),
      body: new URLSearchParams(body),
    };
  } else {
    options = { method };
  }

  return fetch(`${API_ROOT}${path}`, options)
    .then(checkForErrors)
    .catch((error) => console.log("error", error));
};

// GET
export function getColumns({ auth0_id }) {
  return api(`/user/${auth0_id}/column`);
}

export function getCardsForColumn({ auth0_id, columnId }) {
  return api(`/user/${auth0_id}/column/${columnId}`);
}

// POST column
export function addColumn({ auth0_id, name }) {
  return api(`/user/${auth0_id}/column`, "POST", { name });
}

// POST card
export function addCard({ auth0_id, name, columnId }) {
  return api(`/user/${auth0_id}/column/${columnId}/card`, "POST", { name });
}

// PUT card (drag and drop)
export function moveCard({ auth0_id, cardId, newColumnId }) {
  return api(`/user/${auth0_id}/card/${cardId}`, "PUT", {
    new_col_id: newColumnId,
  });
}

// DELETE column
export function deleteColumn({ auth0_id, columnId }) {
  return api(`/user/${auth0_id}/column/${columnId}`, "DELETE");
}

export function deleteCard({ auth0_id, cardId }) {
  return api(`/user/${auth0_id}/card/${cardId}`, "DELETE");
}
