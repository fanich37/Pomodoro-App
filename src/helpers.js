function format(number) {
  const newNumber = `${number}`;
  return newNumber.length > 1 ? newNumber : `0${newNumber}`;
}

export { format };

function timerFunc(min, sec, timerID) {
  const intMin = parseInt(min, 10);
  const intSec = parseInt(sec, 10);

  if (intMin === 0 || (intMin === 0 && intSec === 1)) {
    clearInterval(timerID);
    return {
      min: 0,
      sec: 0,
      timerID: null,
      timerState: 'finished'
    };
  }
  // if (intMin === 0) {
  //   clearInterval(timerID);
  //   return {
  //     min: 0,
  //     sec: 0,
  //     timerID: null,
  //     timerState: 'finished'
  //   };
  // }
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
