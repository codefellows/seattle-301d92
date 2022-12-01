import React from "react";
import HornedBeast from "./HornedBeast";
// import SelectedBeast from './SelectedBeast';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Main extends React.Component {

    render() {
        return (
            <Container>
                <Row lg={10} xs={5} sm={3} md={4}>
                    {this.props.allBeast.map(hornedInfo => (
                        <Col key={hornedInfo._id}>
                            <HornedBeast openModal={this.props.openModal} key={hornedInfo._id} title={hornedInfo.title} imageUrl={hornedInfo.image_url} description={hornedInfo.description} />
                        </Col>))}
                </Row>
            </Container>
        )
    }
}



export default Main;
