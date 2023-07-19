// Imagenes //

//const imgBasePA = document.querySelector('.imgBasePA');
const imgMineriaPA = document.querySelector('.imgMineriaPA');
const imgPetroleoPA = document.querySelector('.imgPetroleoPA');
const imgHidroelectricaPA = document.querySelector('.imgHidroelectricaPA');
const imgDeforestacioPA = document.querySelector('.imgDeforestacioPA');

/* inputs */

const mineriaPA = document.querySelector('.mineriaPA');
const petroleoPA = document.querySelector('.petroleoPA');
const hidroelectricaPA = document.querySelector('.hidroelectricaPA');
const deforestacioPA = document.querySelector('.deforestacioPA');

const imagenVisible = ( input, image ) => {

    let visible = false;
    input.addEventListener('click', () => {

        visible = !visible;

        if( !visible ) {
            return image.setAttribute(`style`, `display: none`);
        }
        
        return image.setAttribute(`style`, ``);

    });
}

/* imagen visible */
imagenVisible(mineriaPA, imgMineriaPA);
imagenVisible(petroleoPA, imgPetroleoPA);
imagenVisible(hidroelectricaPA, imgHidroelectricaPA);
imagenVisible(deforestacioPA, imgDeforestacioPA);

