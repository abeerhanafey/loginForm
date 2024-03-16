let mailInput = document.querySelector(".email input");
let passInput = document.querySelector(".pass input");
let mailLabel = document.querySelectorAll(".email label");
let passLabel = document.querySelectorAll(".pass label");

mailInput.onclick = function () {
    mailLabel.forEach((el) => {
        el.style.fontSize = "12px";
        el.style.transform = "translateY(-17px)";
    });
}

passInput.onclick = function () {
    passLabel.forEach((el) => {
        el.style.fontSize = "12px";
        el.style.transform = "translateY(-17px)";
    });
}

// api
let success = document.createElement("div");
success.innerHTML = `
    <i class="fa-regular fa-circle-check fa-beat"></i>
    <h2>login successfully</h2>
`;

success.style.display = "none";
success.setAttribute("class", "success");
document.body.appendChild(success);

let submitBtn = document.querySelector("input[type='submit']");
let registrationForm = document.getElementById("registrationForm");

// Handle form submission
registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // Get form data
    let userEmail = document.querySelector("input[type='email']").value;
    let userPassword = document.querySelector("input[type='password']").value;

    // Make API request
    let token = "";
    axios.post("https://reqres.in/api/login", {
        // user object 
        email: userEmail,
        password: userPassword
    }, {
        // config object 
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }).then((response) => {
        let token = response.data.token;
        localStorage.setItem("token", `${token}`);
        alert(`Login successfully`);
        setTimeout(() => {
            success.style.display = "flex";
            setTimeout(() => {
                success.style.display = "none";
                window.open("index2.html");
            }, 2000);
        }, 1000);
        console.log(token);
        console.log(localStorage.getItem("token"));
    }).catch((error) => {
        console.log(error);
        alert(error.response.data.error)
    })
});
// localStorage.clear();