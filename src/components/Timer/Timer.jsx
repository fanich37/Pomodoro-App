import React from 'react';
import './Timer.css';

class Timer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="timer">
				<div className="timer__inner">
					<span className="timer__data">{this.props.min}</span>
					<span>:</span>
					<span className="timer__data">{this.props.sec}</span>
				</div>
			</div>
		);
	}
}

export default Timer;
