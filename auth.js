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

document.querySelector(".like-btn").addEventListener("click", function() {
    let likeCountElement = document.getElementById("like-count");
    let likeCount = parseInt(likeCountElement.innerText);
    likeCountElement.innerText = likeCount + 1; // Tăng số lượt thích
});

// Xử lý sự kiện khi nhấn vào bình luận
document.querySelector(".comment-btn").addEventListener("click", function() {
    let comment = prompt("Nhập bình luận của bạn:"); // Mở hộp thoại để nhập bình luận
    if (comment) {
        let commentCountElement = document.getElementById("comment-count");
        let commentCount = parseInt(commentCountElement.innerText);
        commentCountElement.innerText = commentCount + 1; // Tăng số bình luận
        alert("Bình luận của bạn đã được ghi nhận!");
    }
});
