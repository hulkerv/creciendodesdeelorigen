const getRemainTime = (deadline) => {
  let now = new Date();
  const remainTime = (new Date(deadline) - now + 1000) / 1000;
  const remainSeconds = ("0" + Math.floor(remainTime % 60)).slice(-2);
  const remainMinutes = ("0" + Math.floor((remainTime / 60) % 60)).slice(-2);
  const remainHours = ("0" + Math.floor((remainTime / 3600) % 24)).slice(-2);
  const remainDays = Math.floor(remainTime / (3600 * 24));

  return {
    remainTime,
    remainSeconds,
    remainMinutes,
    remainHours,
    remainDays,
  };
};

const countdown = (deadline, elem, finalMessage) => {
  const el = document.getElementById(elem);

  const timerUpdate = setInterval(() => {
    let time = getRemainTime(deadline);
    el.innerHTML = `Plantamos en : </br> ${time.remainDays}d : ${time.remainHours}h : ${time.remainMinutes}m : ${time.remainSeconds}s`;

    if (time.remainTime <= 1) {
      clearInterval(timerUpdate);
      el.innerHTML = finalMessage;
    }
  }, 1000);
};

countdown("Jun 01 2022 10:00:00 GMT-0500", "clock", "PROXIMAMENTE")