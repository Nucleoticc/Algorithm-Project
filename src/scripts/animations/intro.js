import anime from "animejs";

export function animate(el) {
  return anime({
    targets: el,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 1500,
    delay: function(_el, i) {
      return i * 250;
    },
    complete: false,
  }).finished.then(completed);

  function completed() {
      return true;
  }
}
