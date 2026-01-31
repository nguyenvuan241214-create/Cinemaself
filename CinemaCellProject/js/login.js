const login = (event) => {
    event.preventDefault(); 

    const email = document.querySelector("#login-email").value.trim();
    const password = document.querySelector("#login-password").value.trim();

    let users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : {};

    let storedUser = users[email];

    if (storedUser && storedUser.password === password) {
        alert("Đăng nhập thành công!");
        window.location.href = "index.html"; 
    } else {
        alert("Email hoặc mật khẩu không đúng!");
    }
}
document.querySelector("#login-form").addEventListener("submit", login)