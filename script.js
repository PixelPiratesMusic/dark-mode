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
        body.style.color = '#d3d3d3';
        gradient.setAttribute('src', 'images/dark-bg.png');
        logo.src = 'images/logo-light.png';
        headline.innerHTML = 'Dark';
        textDay.style.color = '#d3d3d34d';
        textNight.style.color = '#d3d3d3';
        portrait.style.filter = 'grayscale(0.3) brightness(0.5)';
    }

    function goLight() {
        body.style.backgroundImage = 'linear-gradient(180deg, #cbd3f1 0%, #ffffff 100%)';
        body.style.color = '#262626';
        gradient.setAttribute('src', 'images/light-bg.png');
        logo.src = 'images/logo-dark.png';
        headline.innerHTML = 'Light';
        textDay.style.color = '#262626';
        textNight.style.color = '#262626';
        portrait.style.filter = 'grayscale(0) brightness(1)';
    }
};