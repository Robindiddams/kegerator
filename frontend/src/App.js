import React, { Component } from 'react';
import { 
	AppWrapper,
	Content,
	FallingSnowflakes,
} from './components';


class App extends Component {

	state = {
		tempFound: false,
	}

	render() {
		return (
			<AppWrapper>
				{this.state.tempFound ? <FallingSnowflakes/> : ''}
				<Content onUpdate={() => {
					if (!this.state.tempFound) {
						this.setState({tempFound:true});
					}
				}}/>
			</AppWrapper>
		);
	}
}

export default App;
