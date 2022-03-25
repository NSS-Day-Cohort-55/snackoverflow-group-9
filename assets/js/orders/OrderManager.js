const apiURL = "http://localhost:8088";


export const createOrder = (orderObj) => {
    return fetch(`${apiURL}/orders`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(orderObj)
    })
        .then(response => response.json())
}