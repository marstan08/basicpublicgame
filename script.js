document.addEventListener('DOMContentLoaded', (event) => {
    let score = 0;
    let timeLeft = 10;
    let highScore = localStorage.getItem('highScore') || 0;

    const scoreDisplay = document.getElementById('score');
    const timeDisplay = document.getElementById('time');
    const highScoreDisplay = document.getElementById('highScore');
    const clickButton = document.getElementById('clickButton');
    const loginContainer = document.getElementById('login-container');
    const signupContainer = document.getElementById('signup-container');
    const gameContainer = document.getElementById('game-container');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const showSignup = document.getElementById('show-signup');
    const showLogin = document.getElementById('show-login');

    highScoreDisplay.textContent = highScore;

    function showGame() {
        loginContainer.style.display = 'none';
        signupContainer.style.display = 'none';
        gameContainer.style.display = 'block';
    }

    function showLogin() {
        loginContainer.style.display = 'block';
        signupContainer.style.display = 'none';
        gameContainer.style.display = 'none';
    }

    function showSignupForm() {
        loginContainer.style.display = 'none';
        signupContainer.style.display = 'block';
        gameContainer.style.display = 'none';
    }

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
        const storedPassword = localStorage.getItem(username);
        if (storedPassword === password) {
            showGame();
        } else {
            alert('Invalid username or password');
        }
    });

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('signup-username').value;
        const password = document.getElementById('signup-password').value;
        localStorage.setItem(username, password);
        alert('Signup successful! Please log in.');
        showLogin();
    });

    showSignup.addEventListener('click', showSignupForm);
    showLogin.addEventListener('click', showLogin);

    clickButton.addEventListener('click', () => {
        score++;
        scoreDisplay.textContent = score;
        moveButton();
    });

    function moveButton() {
        const x = Math.floor(Math.random() * 80
