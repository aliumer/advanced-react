import React from "react";
import ReactDOM from "react-dom";


class App extends React.Component {
  state = {
    value: 32
  }

  asyncFunc = () => {
    return Promise.resolve(10);
  }

  async componentDidMount() {
    this.setState({
      value: await this.asyncFunc()
    })
  }

  render() {
    return (<h2>hellow from class -- { this.state.value }</h2>);
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
