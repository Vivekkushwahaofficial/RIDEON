/* ==========================
      POPUP HANDLING
========================== */

// OPEN LOGIN POPUP
function openLogin() {
    document.getElementById("loginPopup").style.display = "flex";
    document.getElementById("signupPopup").style.display = "none";
}

// CLOSE LOGIN POPUP
function closeLogin() {
    document.getElementById("loginPopup").style.display = "none";
}

// OPEN SIGNUP POPUP
function openSignup() {
    document.getElementById("signupPopup").style.display = "flex";
    document.getElementById("loginPopup").style.display = "none";
}

// CLOSE SIGNUP POPUP
function closeSignup() {
    document.getElementById("signupPopup").style.display = "none";
}

// CLOSE POPUP WHEN CLICKING OUTSIDE
window.addEventListener("click", function (e) {
    if (e.target.classList.contains("popup")) {
        e.target.style.display = "none";
    }
});


/* ==========================
      USER REGISTRATION
========================== */
function registerUser() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value;
    let cpassword = document.getElementById("cpassword").value;

    if (!name || !email || !phone || !password || !cpassword) {
        alert("All fields are required!");
        return;
    }
    if (password !== cpassword) {
        alert("Passwords do not match!");
        return;
    }
    if (localStorage.getItem(email)) {
        alert("Account already exists!");
        return;
    }

    let userData = { name, email, phone, password };
    localStorage.setItem(email, JSON.stringify(userData));
    alert("Account Created Successfully!");

    openLogin(); // show login form after registering
}


/* ==========================
      USER LOGIN
========================== */
function loginUser() {
    let email = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value;

    if (!email || !password) {
        alert("Please enter both email and password!");
        return;
    }

    let storedUser = localStorage.getItem(email);
    if (!storedUser) {
        alert("User does not exist!");
        return;
    }

    let userObj = JSON.parse(storedUser);
    if (userObj.password !== password) {
        alert("Incorrect password!");
        return;
    }

   alert(`Welcome back, ${userObj.name}!`);
    closeLogin();
}


/* ==========================
      BIKE RENT BUTTON
========================== */
document.querySelectorAll(".rent-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        alert("Login required to rent a bike!");
        openLogin();
    });
});