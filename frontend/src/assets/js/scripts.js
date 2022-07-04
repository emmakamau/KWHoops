// Toggle between sign up and sign in form in overlay

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

window.onload=function(){
    signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});
}

window.onload=function(){
    signInButton.addEventListener('click', () => {
        container.classList.remove('right-panel-active');
    });
}
