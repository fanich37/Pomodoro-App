import React from 'react';
import InputRange from 'react-input-range';
import './Range.css';
import './Input-Range.css';

class Range extends React.Component {
	constructor(props) {
		super(props);
	}

	changeHandler(value) {
		this.setState({ value });
		this.props.setTime(value);
	}

	render() {
		return (
			<div className="range">
				<div className="range__inner">
					<InputRange
						minValue={0}
						maxValue={60}
						value={+this.props.defaultTimer}
						onChange={value => this.changeHandler(value)}
						disabled={this.props.timerState !== 'stop' ? true : false}
					/>
				</div>
			</div>
		);
	}
}

export default Range;
