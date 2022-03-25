import * as MenuManger from './MenuManger.js';
import { FoodCard } from './FoodCard.js'

const cardElement = document.querySelector(".card-body");


export const FoodList = () => {
    const contentTarget = document.querySelector("main")
    let HTMLString = `<div class='row' id='menu-category'>`
        MenuManger.getMenus()
        .then(menus => {
            menus.forEach(menu => {
                document.getElementById("menu-category").innerHTML += `<h2>${menu.name}</h2><div class='row' id='food-list-${menu.id}'></div>`
                MenuManger.getFoodsByMenu(menu.id).then(foodArray => {
                    document.getElementById(`food-list-${menu.id}`).innerHTML += foodArray.map(food => FoodCard(food)).join('')
                });
            });
        })

    HTMLString += `</div>`

    if(HTMLString){
        contentTarget.innerHTML = HTMLString;
    }
}
