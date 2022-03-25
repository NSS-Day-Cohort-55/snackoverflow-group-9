import * as MenuManger from './MenuManger.js';
import { FoodCard } from './FoodCard.js'

export const FoodList = () => {
    const contentTarget = document.querySelector("main")
    let HTMLString;
    MenuManger.getFoods()
    .then(foodArray => {
        HTMLString = `<div class="row">`
        HTMLString += foodArray.map(food => FoodCard(food)).join('')
        HTMLString += `</div>`
        contentTarget.innerHTML = HTMLString;
    })
    
}
