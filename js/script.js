const achtergronden = document.querySelectorAll('.container__contentVak > div');
const text2 = document.querySelector('#text2');
const text3 = document.querySelector('#text3');
const seeScrolling = () => {
    let vensterTop = -window.pageYOffset;
    let VenterTopPlus = window.pageYOffset;
    achtergronden[0].style.backgroundPosition = 'center ' + vensterTop / 8  + 'px';
    if (VenterTopPlus > 600) {
        achtergronden.forEach(createClass => {
            createClass.classList.add("addColor");
        });
    } else {
        achtergronden.forEach(createClass => {
            createClass.classList.remove("addColor");
        });
    }
    text2.style.marginLeft = -650 + VenterTopPlus * 1.5 + 'px';
    achtergronden[1].style.backgroundPosition = 'center ' + vensterTop / 8  + 'px';
    text3.style.fontSize = VenterTopPlus / 190 + 'vw';
    achtergronden[2].style.backgroundPosition = 'center ' + vensterTop / 8  + 'px';
    console.log(VenterTopPlus);
}

window.addEventListener('scroll', seeScrolling);