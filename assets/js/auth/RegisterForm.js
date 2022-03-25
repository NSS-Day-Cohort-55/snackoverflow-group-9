import * as UserManager from "./UserManager.js";
import {FoodList} from "../menu/FoodsList.js"
import {NavBar} from "../NavBar.js"

export const RegisterForm = () => {
  return `
  <div>
    <h3>Register</h3>
    <div class="input-group input-group-sm mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">Name</span>
      </div>
        <input type="text" class="form-control" aria-label="Default" 
        aria-describedby="inputGroup-sizing-default"
        value=""
        name="name"
        type="text"
        id="register_name"
         />
    </div>
    <div class="input-group input-group-sm mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">Email</span>
      </div>
      <input type="text" class="form-control" aria-label="Default" 
       aria-describedby="inputGroup-sizing-default"
        value=""
        name="email"
        type="text"
        id="register_email"
        placeholder="name@place.com" />
  </div>
  <div class="input-group input-group-sm mb-3">
    <button type="button" class="btn btn-primary" id="register__submit">Register</button>
  </div>
</div>
	`;
};

const contentElement = document.querySelector("main");
contentElement.addEventListener("click", (event) => {
  if (event.target.id === "register__submit") {
    const userObject = {
      name: document.querySelector("#register_name").value,
      email: document.querySelector("#register_email").value,
      isAdmin: false,
    };
    UserManager.registerUser(userObject).then(() => {
      NavBar();
      FoodList();
    });
  }
});
