//let toggleContent = document.querySelectorAll('.toggle-content'); // контент, который будет скрываться-раскрываться
let togglerContent = document.querySelectorAll('.toggler'); // toggler - кнопка, при нажатии на которую будет скрываться-раскрываться контент

togglerContent.forEach((e) => {
    e.addEventListener('click', (event) => {
        let toggleContent = e.nextSibling.nextSibling
        console.log(toggleContent)
        if (!toggleContent.classList.contains('show')) {
            toggleContent.classList.add('show');
            e.classList.add('toggled');
            toggleContent.style.height = 'auto';
            let height = toggleContent.clientHeight + 'px';
            toggleContent.style.height = '0px';
            setTimeout(function () {
                toggleContent.style.height = height;
            }, 0);
        } else {
            toggleContent.style.height = '0px';
            e.classList.remove('toggled');
            toggleContent.addEventListener('transitionend', () => {
                toggleContent.classList.remove('show');
            }, {once: true});
        }
    })
})

// togglerContent.addEventListener('click', (event) => {
//     if (!toggleContent.classList.contains('show')) {
//         toggleContent.classList.add('show');
//         togglerContent.classList.add('toggled');
//         toggleContent.style.height = 'auto';
//         let height = toggleContent.clientHeight + 'px';
//         toggleContent.style.height = '0px';
//         setTimeout(function () {
//             toggleContent.style.height = height;
//         }, 0);
//     } else {
//         toggleContent.style.height = '0px';
//         togglerContent.classList.remove('toggled');
//         toggleContent.addEventListener('transitionend', () => {
//             toggleContent.classList.remove('show');
//         }, {once: true});
//     }
// });