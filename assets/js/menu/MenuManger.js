const apiURL = "http://localhost:8088";

export const getFoods = () => {
    return fetch(`${apiURL}/foods?_sort=menuId`)
    .then(response => response.json())
}

export const getMenus = () => {
    return fetch(`${apiURL}/menus`)
    .then(response => response.json())
    .then(menus => {
        return menus
    })
}

export const getFoodsByMenu = (menuId) => {
    return fetch(`${apiURL}/foods?menuId=${menuId}&_sort=price`)
    .then(response => response.json())
    .then(foods => {
        return foods
    })
}

