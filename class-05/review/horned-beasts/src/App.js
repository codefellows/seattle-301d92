import React from "react";
import hornedData from "./data.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./components/main.js";
import SelectedBeast from './components/SelectedBeast';
import Container from "react-bootstrap";




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allBeast: hornedData,
      displayModal: false,
      selectedBeast: {},
    }
  }

  openModal = (name) => {
    const clickedBeast = hornedData.find(beast => beast.title === name);
    this.setState({
      selectedBeast: clickedBeast,
      displayModal: true,
    });
  }
  hideModal = () => {
    this.setState({ selectedBeast: false, displayModal: false });
  }


  render() {

    return (
      <>
        {/* // <Container > */}
        <Main openModal={this.openModal} allBeast={this.state.allBeast} displayModal={this.state.displayModal}/>
      <SelectedBeast
          hideModal={this.hideModal}
          showModal={this.state.displayModal}
          beast={this.state.selectedBeast}
          />
      {/* </Container > */}
      </>

  );
  }
}
export default App;
