function darkMode(){
    const html = document.documentElement;
    const wasDarkMode = localStorage.getItem('darkMode') === 'true';
    const aside = document.querySelector('aside');

    localStorage.setItem('darkMode', !wasDarkMode)
    html.classList.toggle('dark-mode', wasDarkMode)
    aside.classList.toggle('dark-mode', wasDarkMode)
}

function changeImage(){
    var img = document.getElementById('.nightModeIcon');
    img.src = '/static/imgs/day-mode.png';
}


document.querySelector('.btn').addEventListener('click', darkMode); 