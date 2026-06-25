import Carousel from "./Carousel";
import Accordion from "./Accordion";
import Spinner from "./Spinner";
import ProgressBar from "./ProgressBar";
import Button from 'react-bootstrap/Button';
import Grid from "./Grid";

function CoreBootstrap() {
    return (<>
        <div className="container">

            <div className="row">
                <div className="col-12">
                    <Grid />
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <h1>Core Bootstrap Example</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-4">
                    <button type="button">Without class Button</button> {/* Write own css code */}
                </div>
                <div className="col-4">
                    <button type="button" className="btn btn-primary">With Class Button</button> {/* using bootstrap class for button */}
                </div>
                <div className="col-4">
                    <Button variant="primary">React Bootstrap Module Button</Button> {/* Button component */}
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <Carousel />
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <Accordion />
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <Spinner />
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <ProgressBar />
                </div>
            </div>
        </div>
    </>);
}

export default CoreBootstrap;