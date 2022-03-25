const apiURL = "http://localhost:8088";

export const getFoods = () => {
    return fetch(`${apiURL}/foods`)
    .then(response => response.json())
}