

// const buttonDiversidadCultural = document.querySelector('.diversidadCultura');
const buttonDiversidadCultural2 = document.querySelector('.diversidadCultura2');

const imgDiversidadCultural = document.querySelector('.imgDiversidadCultural');
const imgDiversidadCultural2 = document.querySelector('.imgDiversidadCultural2');


let visible = false;
let visible2 = false;

// buttonDiversidadCultural.addEventListener( 'click', () => {

//     visible = !visible;

//     if( visible ) {
//         imgDiversidadCultural.setAttribute(`style`, `display: none`);
//     } else {
//         imgDiversidadCultural.setAttribute(`style`, ``);
//     }


//     console.log('Hola mundo');

// });

buttonDiversidadCultural2.addEventListener( 'click', () => {

    visible2 = !visible2;

    if( visible2 ) {
        imgDiversidadCultural2.setAttribute(`style`, ``);
    } else {
        imgDiversidadCultural2.setAttribute(`style`, `display: none`);
    };
});