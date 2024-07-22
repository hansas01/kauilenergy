import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption, Button } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import { houseImages, houseImgNotCarousel } from '../app/assets/shared/HOUSE'; // Adjust the path as needed
import '../css/HousePage.css'; // Import the CSS file
import FeatureGrid from '../components/HouseFeatureGrid'; //the feature grid for the house imported here
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';


const HousePage = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

  const onExiting = () => setAnimating(true);
  const onExited = () => setAnimating(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === houseImages.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? houseImages.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = houseImages.map((item) => {
    return (
      <CarouselItem
        onExiting={onExiting}
        onExited={onExited}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Container>
      <SubHeader current='Construcción' />
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators items={houseImages} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-light">Te presentamos la Casa Kauil. <span className="text-muted">Creemos que te va a gustar...</span></h2>
          <p className="lead text-muted">La Casa Kauil viene con banco de baterías para operar sin la Comisión Federal de Electricidad cuando hay fallas de electricidad. Con los aires acondicionados te mantienes fresco durante un apagón y siempre estarás comunicado con tus familiares durante un sismo.</p>
          <Button color="btn btn-primary btn-lg rounded-pill" type="button">¡La quiero!</Button>
        </div>
        <div className="col-md-5">
          <img 
            className="featurette-image img-fluid mx-auto rounded-4" 
            src={houseImgNotCarousel[0].src} alt="Generic placeholder" 
            style={{ 
              borderRadius: '0.375rem', 
              width: '80%', 
              maxWidth: '800px'  // Adjust this value as needed
            }} // Optional: add rounded corners if needed
            />
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading fw-light">Paneles solares que te durarán 25 años <span className="text-muted"> Deja el aire acondicionado a tu gusto sin preocuparte por el recibo</span></h2>
          <p className="lead text-muted">No importa si tienes hijos que necesitan estudiar o necesitas dormir agusto, la Casa Kauil te mantiene fresco todo el año y especialmente durante la ola de calor. Cocina con parrilla eléctrica y olvídate de recargar gas por completo.</p>
        </div>
        <div className="col-md-5 order-md-1">
          <img 
            className="featurette-image img-fluid mx-auto rounded-4" 
            src={houseImages[0].src} alt="Generic placeholder"
            style={{ 
              borderRadius: '0.375rem', 
              width: '100%', 
              maxWidth: '800px'  // Adjust this value as needed
            }} // Optional: add rounded corners if needed 
          />
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-light">Perfecto para retirados o nuevas familias <span className="text-muted">Con un solo piso ya no tendrás que preocuparte por las escaleras</span></h2>
          <p className="lead text-muted">Si decides aumentar el tamaño de tu familia, hemos diseñado la cimentación para aguantar un segundo piso y el baño de visitas está diseñado para poner una escalera.</p>
        </div>
        <div className="col-md-5">
          <img 
            className="featurette-image img-fluid mx-auto rounded-4" 
            src={houseImages[7].src} 
            alt="Generic placeholder" 
            style={{ 
              borderRadius: '0.375rem', 
              width: '100%', 
              maxWidth: '800px'  // Adjust this value as needed
            }} // Optional: add rounded corners if needed
            />
        </div>
      </div>

      <hr className="featurette-divider" />

      {/* Add FeatureGrid component here, see file in components folder HouseFeatureGrid.js */}
      <FeatureGrid />

      <hr className="featurette-divider" />
      
      {/* Embed Google Map here, using ***npm install mdb-react-ui-kit'***;. Used this website: https://mdbootstrap.com/docs/react/extended/maps/ */}
      <div className='justify-content-center d-flex'>    
        <MDBRow className='w-100'>
            <MDBCol className='ms-auto'>
                <iframe
                title='Map'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.0809777598985!2d-98.9338012!3d18.9299337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce6d0074e4a59b%3A0xf8630cd108be0df8!2sResidencial%20Los%20Olivos!5e0!3m2!1sen!2smx!4v1624513189157!5m2!1sen!2smx'
                className='w-100'
                height='400'
                loading='lazy'
                ></iframe>
            </MDBCol>
        </MDBRow>
      </div>
    </Container>
  );
};

export default HousePage;
