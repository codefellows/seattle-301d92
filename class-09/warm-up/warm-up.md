# Warm-Up Exercise

## Overview

Create a `<Request>` component in React!

Use your knowledge of React to create a component that takes in 2 props:

- `url`
- `method`

the component should make a Web Request using axios, and displays the results in the render method.  Use the following code to get you started:

Here is a [Code Sandbox link](https://codesandbox.io/s/class-09-warm-up-nbcfg7?file=/src/Request.jsx
) if you want to get straight to code!

```jsx
import React from 'react';

class Request extends React.Component {
    constructor() {
        super();
        this.state = {
            response: {}
        }
    }

    componentDidMount = () => {
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <h2>Response</h2>
                {/** Display Results here */}
            </div>
        )
    }
}

```
