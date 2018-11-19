import React from 'react';
import styled from 'styled-components';
import {
	ShakeHard,
	ShakeSlow,
} from 'reshake';

export const AppWrapper = styled.div`
	width: 100%;
	min-height: 100vh;
	text-align: center;
	background-color: #0C1E42;
	// background-image: linear-gradient(to bottom, #0C1E42, white);
	display: flex;
	justify-content: center;
`;

export const Content = styled.div`
	font-family: roboto, sans-serif;
	color: aliceblue;
	align-self: center;
	max-width: 50%;
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


export class ShakeyBeer extends React.Component {
	render() {
	  return (
		<IceCool>
			<ShakeHard fixed='true'>
				<Emoji>🍺</Emoji>
			</ShakeHard>
			<ShakeHard>
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
				<Title>ROBINS KEGERATOR IS {this.props.temp}°C</Title>
			</ShakeSlow>
		</IceCool>
	  );
	}
}