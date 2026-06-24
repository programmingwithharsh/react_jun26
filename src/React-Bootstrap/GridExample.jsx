import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function GridExample() {
    return (
        <Container>
            <Row>
                <Col>1 of 2</Col>
                <Col>2 of 2</Col>
            </Row>
            <Row>
                <Col>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fugit officia natus repellat doloribus labore minus eveniet. Facilis pariatur repellendus harum fuga quam eos veniam fugit corrupti, natus dolorum est?</Col>
                <Col>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, aperiam. Omnis incidunt numquam beatae hic perferendis, quibusdam possimus corporis, dolor vel consectetur, ducimus consequatur libero suscipit odio a harum distinctio.</Col>
                <Col>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem odit adipisci sapiente itaque ipsam amet blanditiis ipsum hic est. Perferendis, rerum fugiat id itaque at alias eius magni excepturi fuga.</Col>
            </Row>
        </Container>
    );
}

export default GridExample;