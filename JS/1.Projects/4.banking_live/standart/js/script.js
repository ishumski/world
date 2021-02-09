const button = document.querySelector('button');

function newData(event) {
    event.preventDefault();

    const formData = new FormData(document.querySelector("form"));

    const email = formData.get("email");
    const password = formData.get("password");

    let newUser = {
        email: email,
        password: password,
    }

    localStorage.setItem("newUser", JSON.stringify(newUser));
   
    newUser = JSON.parse(localStorage.getItem("newUser"));
    console.log(newUser);

}

button.addEventListener("click", newData);

