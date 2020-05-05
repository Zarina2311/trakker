const checkForErrors = (res) => {
  if (!res.ok) throw new Error("Unexpected non-OK HTTP status");
  return res.json();
};

const API_ROOT = "https://job-trakker-api.herokuapp.com";

export function getColumns({ userId }) {
  return fetch(`${API_ROOT}/user/${userId}`)
    .then(checkForErrors)
    .catch((error) => console.log("error", error));
}

export function getCardsForColumn({ userId, columnId }) {
  return fetch(`${API_ROOT}/user/${userId}/${columnId}`)
    .then(checkForErrors)
    .catch((error) => console.log("error", error));
}
