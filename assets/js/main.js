
// import "../../node_modules/popper.js/dist/popper.min.js"
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import { FoodList } from './menu/FoodsList.js'
import { NavBar } from "./NavBar.js";
import * as UserManager from './auth/UserManager.js'; 
import { CheckForUser } from "./auth/CheckForUser.js";
import { Footer } from "./Footer.js";

////////////// app declarations ///////////////////////
// const headerElement = document.querySelector("header");
const contentElement = document.querySelector("main");

////////////// event listeners ////////////////////////

const headerElement = document.querySelector("header");

    headerElement.addEventListener("click", event => {
        if (event.target.id === "logout") {
          UserManager.logoutUser();
          NavBar();
          FoodList();
        }
    })



///////////// end event listeners /////////////////////


// const checkForUser = () => {
//     if (sessionStorage.getItem("SOUser")){
//       UserManager.setLoggedInUser(JSON.parse(sessionStorage.getItem("SOUser")));
//     }
//     //   startSO();
//     // }else {
//     //   //show login/register
//     //   console.log("no user showLogin")
//     // }

//     NavBar();
//     contentElement.innerHTML = FoodList();
//   }

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
