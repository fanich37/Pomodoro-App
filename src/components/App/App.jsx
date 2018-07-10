import React from 'react';
import Logo from '../Logo/Logo';
import Timer from '../Timer/Timer';
import Button from '../Button/Button';
import Range from '../Range/Range';
import { format, timerFunc } from '../../helpers';
import './App.css';

const defaultState = {
	min: 25,
	sec: 0,
	timerID: null,
	timerState: 'stop'
};

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = Object.assign({}, defaultState);
		this.setTime = this.setTime.bind(this);
		this.startTimer = this.startTimer.bind(this);
		this.pauseTimer = this.pauseTimer.bind(this);
		this.stopTimer = this.stopTimer.bind(this);
	}

	setTime(data) {
		const timerLength = Object.assign({}, this.state);
		timerLength.min = format(data);
		this.setState(timerLength);
	}

	startTimer() {
		const timerID = setInterval(() => {
			const timer = Object.assign({}, timerFunc(this.state.min, this.state.sec, timerID));
			this.setState(timer);
		}, 1000);
	}

	pauseTimer() {
		const timer = Object.assign({}, this.state);
		clearInterval(timer.timerID);
		timer.timerID = null;
		timer.timerState = 'paused';
		this.setState(timer);
	}

	stopTimer() {
		const timerID = this.state.timerID;
		clearInterval(timerID);
		this.setState(defaultState);
	}

	render() {
		return (
			<div className="main">
				<div className="main__section">
					<Logo />
				</div>
				<div className="main__section">
					<Timer min={format(this.state.min)} sec={format(this.state.sec)} />
				</div>
				<div className="main__section">
					<Range defaultTimer={this.state.min} setTime={this.setTime} timerState={this.state.timerState} />
				</div>
				<div className="main__section">
					<Button
						title={this.state.timerState === 'paused' ? 'Continue' : 'Start'}
						class="button button_green"
						onclick={this.startTimer}
						isDisabled={
							this.state.timerState !== 'running' && this.state.timerState !== 'finished' ? false : true
						}
					/>
					<Button
						title="Pause"
						class="button button_orange"
						onclick={this.pauseTimer}
						isDisabled={this.state.timerState === 'running' ? false : true}
					/>
					<Button
						title={this.state.timerState !== 'finished' ? 'Stop' : 'Clear'}
						class="button button_red"
						onclick={this.stopTimer}
						isDisabled={this.state.timerState === 'stop' ? true : false}
					/>
				</div>
			</div>
		);
	}
}

export default App;
