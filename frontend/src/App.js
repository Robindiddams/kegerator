import React, { Component } from 'react';
import { 
  AppWrapper,
  ShakeyBeer,
  FrostyBeer,
  Content,
} from './components';


class App extends Component {
  state = {
    temp: 0,
  }
  componentDidMount() {
    fetch(
      'https://8574rpcel7.execute-api.us-east-1.amazonaws.com/dev/temp',
      {
        method: 'GET',
        mode: 'cors',
      },
    ).then(response => response.json()).then((data) => {
      console.log(JSON.stringify(data));
      this.setState({temp: data.temp});
    });
  }

  render() {
    return (
      <AppWrapper>
        <Content>
          { this.state.temp === 0 ? <ShakeyBeer/> : <FrostyBeer temp={this.state.temp}/> }
        </Content>
      </AppWrapper>
    );
  }
}

export default App;
