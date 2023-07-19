

// const buttonDiversidadCultural = document.querySelector('.diversidadCultura');
const buttonDiversidadCultural2 = document.querySelector('.diversidadCultura2');
const buttonPueblosIndigenasGobierno = document.querySelector('.pueblosIndigenasGobierno');

// const imgDiversidadCultural = document.querySelector('.imgDiversidadCultural');
const imgDiversidadCultural2 = document.querySelector('.imgDiversidadCultural2');
const imgPueblosIndigenasGobierno = document.querySelector('.imgPueblosIndigenasGobierno');


const imagenVisible = ( button, image ) => {

    let visible = false;
    button.addEventListener('click', () => {

        visible = !visible;

        if( !visible ) {
            return image.setAttribute(`style`, `display: none`);
        }
        console.log('funcion');
        return image.setAttribute(`style`, ``);

    });

}

imagenVisible( buttonDiversidadCultural2, imgDiversidadCultural2 );
imagenVisible( buttonPueblosIndigenasGobierno, imgPueblosIndigenasGobierno );