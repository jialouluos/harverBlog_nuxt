export default (
  el: HTMLElement,
  classArray: string[],
  duration: number = 1000
) => {
  const isFinish = ref(false);
  const startUse = () => {
    if (!isFinish.value) {
      el.classList.add(...classArray);
      setTimeout(() => {
        finishUse();
      }, duration);
    }
  };
  const finishUse = () => {
    if (!isFinish.value) {
      el.classList.remove(...classArray);
      isFinish.value = true;
    }
  };
  return [startUse, finishUse];
};
