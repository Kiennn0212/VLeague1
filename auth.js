document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");

    // Đăng Ký
    if (signupForm) {
        signupForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const username = document.getElementById("signup-username").value;
            const password = document.getElementById("signup-password").value;

            // Lưu thông tin đăng ký vào localStorage
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);

            alert("Successfully! Log in now.");
            window.location.href = "login.html";
        });
    }

    // Đăng Nhập
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            // Lấy thông tin từ localStorage
            const storedUsername = localStorage.getItem("username");
            const storedPassword = localStorage.getItem("password");

            // Kiểm tra thông tin đăng nhập
            if (username === storedUsername && password === storedPassword) {
                alert("Successfully!");
                window.location.href = "home.html";
            } else {
                alert("Error!");
            }
        });
    }
});
