import AccordionExample from './AccordionExample';
import CarouselExample from './CarouselExample';
import GridExample from './GridExample';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Spinner from 'react-bootstrap/Spinner';


function ReactBootstrap() {
    return (<>
        <h1>React Bootstrap Module Example</h1>
        <AccordionExample />
        <CarouselExample />
        <GridExample />
        <ProgressBar animated now={45} />;
        <Spinner animation="border" variant="primary" />
    </>);
}

export default ReactBootstrap;