import React from 'react';
import Card from 'react-bootstrap/Card'

class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0
    };
  }

  handleClick = () => {
    this.setState({ clickCount: this.state.clickCount + 1 });
    this.props.openModal(this.props.title)

  };


  render() {
    return (
      <>
        <Card onClick={this.handleClick}>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Img src={this.props.imageUrl} id={this.props.id} alt={this.props.description} onClick={() => this.props.openModal(this.props.title)} />
          {
            this.state.shouldShowDescription &&

            <Card.Body>{this.props.description}</Card.Body>
          }
          <Card.Body>Number of Clicks: <img src="https://i.pinimg.com/236x/45/2b/6d/452b6da158fd90d7c2f086aa427b862e.jpg" onClick={this.handleClick} alt='' height="70px" width="70px" />{this.state.clickCount}</Card.Body>
          {/* <Card.Text>
            {this.props.description}

          </Card.Text> */}
        </Card>

      </>
    );
  }
}

export default HornedBeast;