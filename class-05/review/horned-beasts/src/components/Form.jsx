// import React from 'react';

// class Form extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       numHorns: '',
//     }
//   }

//   handleChange = (event) => {
//     console.log(event.target.name);
//     let { name } = event.target;
//     console.log('input', name);
//     this.setState({ name });
//     // this.setState({

//     // })
//   }
//   handleSubmit = (event) => {
//     event.preventDefault();
//   }


//   render() {
//     return (
//       <form id="myForm" onSubmit={this.handleSubmit}>
//         <p>this is working</p>
//         <label for="number">Number of Horns</label>
//         <input onChange={this.handleChange} type="text" name="number of horns" id="name" />
//         <br />
//         <input type="submit" />
//       </form>
//     )
//   }
// }

// export default Form;