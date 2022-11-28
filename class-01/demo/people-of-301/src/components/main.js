import React from "react";

class Person extends React.Component {
    render() {
        return (<>
            <p>I am {this.props.name}</p>
            <p>My fave color is {this.props.faveColor}</p>
        </>
        )
    }
}

class Main extends React.Component {
    render() {
        return (
            <div>
                <h1>People of 301</h1>
                <Person name="Deiosha" faveColor="pink" />
                <Person name="Adrian" faveColor="blue" />
                <Person name="Sharmarke" faveColor="green" />
            </div>
        );
    }
}

export default Main;