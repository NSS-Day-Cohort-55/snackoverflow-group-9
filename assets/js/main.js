
// import "../../node_modules/popper.js/dist/popper.min.js"
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import { FoodList } from './menu/FoodsList.js'
import { NavBar } from "./NavBar.js";
import * as UserManager from './auth/UserManager.js'; 
import * as MenuManger from './menu/MenuManger.js'
import { CheckForUser } from "./auth/CheckForUser.js";
import { Footer } from "./Footer.js";
import { createOrder } from "./orders/OrderManager.js";
import { getFoodsByMenu } from "./menu/MenuManger.js";

////////////// app declarations ///////////////////////
// const headerElement = document.querySelector("header");
const contentElement = document.querySelector("main");
const cardElement = document.querySelector(".card-body");
const buttonElement = document.querySelector("#order--btn")
////////////// event listeners ////////////////////////

const headerElement = document.querySelector("header");

    headerElement.addEventListener("click", event => {
        if (event.target.id === "logout") {
          UserManager.logoutUser();
          NavBar();
          FoodList();
        }
    })


    const promiseFoods = new Promise((resolve, reject) => {
        resolve(MenuManger.getFoods().then(foods => {
            return foods
        })
    )})

    const promiseMenus = new Promise((resolve, reject) => {
        resolve(MenuManger.getMenus().then(menus => {
            return menus
        })
    )})
    const promiseFoodsMenus = new Promise((resolve, reject) => {
        resolve(MenuManger.getFoodsByMenu().then(foodsByMenu => {
            return foodsByMenu
        })
    )})

    Promise.all([promiseFoods, promiseMenus, promiseFoodsMenus]).then(results => {
        promiseFoods.then(foods => {
            promiseMenus.then(menus => {
                promiseFoodsMenus.then(foodsByMenu => {
                    console.log("inside promise all");
                    contentElement.addEventListener("click", event => {
                        
                        for (const food of foods) {
                            
                            if (event.target.id.startsWith("order") &&
                                parseInt(event.target.id.split("--")[1]) == parseInt(food.id) ) { 
                
                                    const orderObject = {
                                        userId: UserManager.getLoggedInUser.id,
                                        food: food.name,
                                        notes: "",
                                        price: food.price,
                                        timestamp: Math.round(new Date().getTime()/1000),
                                        isPickedUp: false
                                    }  
                                    createOrder(orderObject)         
                            }                           
                        }                        
                    })
                });
            })
        })
    });

const checkForUser = () => {
    if (sessionStorage.getItem("SOUser")){
      UserManager.setLoggedInUser(JSON.parse(sessionStorage.getItem("SOUser")));
    
      startSO();
    }else {
      //show login/register
      console.log("no user showLogin")
    }

    NavBar();
    contentElement.innerHTML = FoodList();
  }

    const showLoginRegister = () => {
        showNavBar();
        const entryElement = document.querySelector(".entryForm");
        //template strings can be used here too
        entryElement.innerHTML = `${LoginForm()} <hr/> <hr/> ${RegisterForm()}`;
        //make sure the post list is cleared out too
        const postElement = document.querySelector(".postList");
        postElement.innerHTML = "";
    }

// This function invokes modules in the view
const startSO = () => {
    CheckForUser();
    // NavBar();
    // headerElement.innerHTML = NavBar(); 
    // contentElement.innerHTML += FoodList();
    Footer();
}

// application checks for a user
// checkForUser();
startSO()
