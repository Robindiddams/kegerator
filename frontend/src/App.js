import React, { Component } from 'react';
import { 
  AppWrapper,
  ShakeyBeer,
  FrostyBeer,
  Content,
} from './components';


class App extends Component {
  constructor(props) {
    super(props)
    this.setTemp = this.setTemp.bind(this);
  }
  state = {
    temp: 0,
  }
  componentDidMount() {
    this.setTemp();
  }

  setTemp() {
    this.setState({temp: 0});
    fetch(
      'https://8574rpcel7.execute-api.us-east-1.amazonaws.com/dev/temp',
      {
        method: 'GET',
        mode: 'cors',
      },
    ).then(response => response.json()).then((data) => {
      this.setState({temp: data.temp.toFixed(1)});
    });
  }

  render() {
    return (
      <AppWrapper>
        <Content onClick={this.setTemp}>
          { this.state.temp === 0 ? <ShakeyBeer/> : <FrostyBeer temp={this.state.temp}/> }
        </Content>
      </AppWrapper>
    );
  }
}

export default App;
