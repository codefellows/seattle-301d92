import React from "react";
import HornedBeast from "./HornedBeast";
import SelectedBeast from "./SelectedBeast";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form } from "react-bootstrap";
import hornData from "../data.json"

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            hornData: hornData,
            filterData: hornData,
        }
    }

    filterHorns = (event) => {
        let horns = parseInt(event.target.value)
        let filterBeast = this.state.hornData.filter(beast => beast.horns === horns)
        console.log(hornData);
        this.setState({
            filterData: filterBeast
        }, console.log(this.state.filterData))

    }


    render() {
        console.log(this.state);
        return (
            <Container>
                <Form.Label>Horns of the Beast</Form.Label>
                <Form.Select onChange={this.filterHorns}>
                    <option value="">All</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </Form.Select>
                <Row lg={10} xs={5} sm={3} md={4}>
                    {this.state.filterData.map(hornedInfo => (
                        <Col key={hornedInfo._id}>
                            <HornedBeast openModal={this.props.openModal} key={hornedInfo._id} title={hornedInfo.title} imageUrl={hornedInfo.image_url} description={hornedInfo.description} />
                        </Col>))}
                </Row>
                {/* <SelectedBeast showModal={false} beast={this.props.allBeast[0]} /> */}

            </Container>
        )

    }
}



export default Main;
