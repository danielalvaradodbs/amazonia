/* Imagenes */
const imgMineriaPA = document.querySelector('.imgMineriaPA');
const imgPetroleoPA = document.querySelector('.imgPetroleoPA');
const imgHidroelectricaPA = document.querySelector('.imgHidroelectricaPA');
const imgDeforestacioPA = document.querySelector('.imgDeforestacioPA');

const imgTerritoriosTA = document.querySelector('.imgTerritoriosTA');
const imgAreasTA = document.querySelector('.imgAreasTA');

const imgRiosTI = document.querySelector('.imgRiosTI');
const imgResguardosTI = document.querySelector('.imgResguardosTI');
const imgAreasTI = document.querySelector('.imgAreasTI');
const imgTerritoriosTI = document.querySelector('.imgTerritoriosTI');

/* inputs */
const mineriaPA = document.querySelector('.mineriaPA');
const petroleoPA = document.querySelector('.petroleoPA');
const hidroelectricaPA = document.querySelector('.hidroelectricaPA');
const deforestacioPA = document.querySelector('.deforestacioPA');

const territoriosTA = document.querySelector('.territoriosTA');
const areasTA = document.querySelector('.areasTA');

const riosTI = document.querySelector('.riosTI');
const resguardosTI = document.querySelector('.resguardosTI');
const areasTI = document.querySelector('.areasTI');
const territoriosTI = document.querySelector('.territoriosTI');


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

imagenVisible(territoriosTA, imgTerritoriosTA);
imagenVisible(areasTA, imgAreasTA);

imagenVisible(riosTI, imgRiosTI);
imagenVisible(resguardosTI, imgResguardosTI);
imagenVisible(areasTI, imgAreasTI);
imagenVisible(territoriosTI, imgTerritoriosTI);

