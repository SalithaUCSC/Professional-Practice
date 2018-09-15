document.getElementById('login_button').addEventListener('click', ()=> {
    const username = document.getElementById('username_input').value;
    const password = document.getElementById('password_input').value;

    $.ajax({
        type: 'POST',
        url: 'http://localhost:3001/user/login',
        data: JSON.stringify({
            "username": $('#username_input').val(),
            "password": $('#password_input').val(),
        }),
        contentType: 'application/json',
        success: (response) => {
            window.location.replace("/home");
        }
    })
});

document.getElementById('login_form').addEventListener('submit', (event) => {
    event.preventDefault();
})