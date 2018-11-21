import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import {
	ShakeHard,
	ShakeSlow,
} from 'reshake';

export const AppWrapper = styled.div`
	width: 100%;
	height: 100vh;
	text-align: center;
	display: flex;
	justify-content: center;
`;

const ContentWrapper = styled.div`
	font-family: roboto, sans-serif;
	color: aliceblue;
	align-self: center;
`;

const Title = styled.div`
	font-weight: bold;
	text-decoration: underline;
	font-size:200%;
`;

const Emoji = styled.span`
	font-size: 5em;
`;

const IceCool = styled.div`
	font-size: 30px;
`;

const move = keyframes`
	position: relative;
	0% {
		top: -5vh;
	}
	100% {
		top: 120vh;
	}
`;

const FallingBoy = styled.div`
	position: absolute;
	left: ${props => props.leftPosition || '50%'};
	font-size: 5px;
  animation: ${move} 5s infinite;
	animation-delay: ${props => props.delay || '0s'};
`;

export class ShakeyBeer extends React.Component {
	render() {
	  return (
		<IceCool>
			<ShakeHard fixed='true'>
				<Emoji>🍺</Emoji>
			</ShakeHard>
			<ShakeHard fixed='true'>
				<Title>CALCULATING KEGORATOR TEMPERATURE</Title>
			</ShakeHard>
		</IceCool>
	  );
	}
}

export class FrostyBeer extends React.Component {
	render() {
	  return (
		<IceCool>
			<ShakeSlow fixed='true'>
				<Emoji>🍺</Emoji>
			</ShakeSlow>
			<ShakeSlow fixed='true'>
				<Title>ROBIN'S KEGERATOR IS {this.props.temp}°C</Title>
			</ShakeSlow>
		</IceCool>
	  );
	}
}

export class Content extends React.Component {
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
		fetch(
			'https://8574rpcel7.execute-api.us-east-1.amazonaws.com/dev/temp',
			{
				method: 'GET',
				mode: 'cors',
			},
		).then(response => response.json()).then((data) => {
			this.setState({temp: data.temp.toFixed(1)});
			this.props.onUpdate(data.temp.toFixed(1));
		});
	}

	render() {
	  return (
		<ContentWrapper onClick={() => {
			this.setState({temp: 0});
			this.setTemp();
		}}>
			{ this.state.temp === 0 ? <ShakeyBeer/> : <FrostyBeer temp={this.state.temp}/> }
		</ContentWrapper>
	  );
	}
}

export class FallingSnowflakes extends React.Component {
	getRandomInt(max) {
		return Math.floor(Math.random() * Math.floor(max));
	}
	render() {
		let flakes = [];
		for (let i = 0; i < 25; i++) {
			flakes.push({
				position: `${this.getRandomInt(100)}%`,
				delay: `-${this.getRandomInt(100) / 10}s`
			});
		}
	  return (
			<div>
				{flakes.map((flake, i) => { return (
				<FallingBoy key={i} leftPosition={flake.position} delay={flake.delay}>
					<Emoji>❄️</Emoji>
				</FallingBoy>
				); })}
			</div>
	  );
	}
}