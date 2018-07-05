import React from 'react';
import './Button.css';

class Button extends React.Component {
	render() {
		return (
			<button
				type="button"
				title={this.props.title}
				className={this.props.class}
				onClick={this.props.onclick}
				disabled={this.props.isDisabled}
			>
				{this.props.title}
			</button>
		);
	}
}

export default Button;
