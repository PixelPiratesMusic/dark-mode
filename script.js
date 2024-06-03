window.onload = function () {
    const button = document.querySelector('#toggle-button');
    button.addEventListener('click', toggle);

    const body = document.querySelector('body');
    const gradient = document.querySelector('.background-gradient');
    const logo = document.querySelector('.logo');
    const headline = document.querySelector('#headline');
    const textDay = document.querySelector('.dark-mode-day');
    const textNight = document.querySelector('.dark-mode-night');
    const portrait = document.querySelector('.portrait');

    function toggle(event) {
        if(event.target.checked){
            goDark();
        } else {
            goLight();
        }
    }

    function goDark(){
        body.style.backgroundImage = 'linear-gradient(180deg, #060c15 0%, #172443 100%)';
        body.style.color = '#ffffff';
        gradient.src = 'images/dark-bg.png'
        logo.src = 'images/logo-light.png';
        headline.innerHTML = 'Dark';
        textDay.style.color = '#ffffff4d';
        textNight.style.color = '#ffffff';
        portrait.style.filter = 'grayscale(0.3) brightness(0.5)';
    }

    function goLight() {
        body.style.backgroundImage = 'linear-gradient(180deg, #cbd3f1 0%, #ffffff 100%)';
        body.style.color = '#000000';
        gradient.src = 'images/light-bg.png'
        logo.src = 'images/logo-dark.png';
        headline.innerHTML = 'Light';
        textDay.style.color = '#000000';
        textNight.style.color = '#0000004d';
        portrait.style.filter = 'grayscale(0) brightness(1)';
    }
};