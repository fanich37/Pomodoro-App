function format(number) {
	return `${number}`.length > 1 ? `${number}` : `0${number}`;
}

export { format };

function timerFunc(min, sec, timerID) {
	const intMin = parseInt(min);
	const intSec = parseInt(sec);

	if (intMin === 0 && intSec === 1) {
		clearInterval(timerID);
		return {
			min: 0,
			sec: 0,
			timerID: null,
			timerState: 'finished'
		};
	}
	if (intSec === 0) {
		return {
			min: intMin - 1,
			sec: 59,
			timerID,
			timerState: 'running'
		};
	}
	return {
		min: intMin,
		sec: intSec - 1,
		timerID,
		timerState: 'running'
	};
}

export { timerFunc };
