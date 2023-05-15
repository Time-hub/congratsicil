window.onload = function () {
  "use strict";
  // scroll filter
  const ratio = 3; // set integer
  const init_ratio = 0; // init
  let height = 0;
  document.addEventListener("scroll", function () {
    height = document.body.clientHeight;
    height -= window.innerHeight;
    let scrollAmount = window.pageYOffset;
    scrollAmount = scrollAmount / height;

    document.documentElement.style.setProperty(
      "--animBlur-variable",
      scrollAmount * ratio + init_ratio + "px"
    );
    document.documentElement.style.setProperty(
      "--animGray-variable",
      scrollAmount
    );
    document.documentElement.style.setProperty(
      "--animHue-variable",
      (1 - scrollAmount) * 90 + "deg"
    );
    document.documentElement.style.setProperty(
      "--animGradient-variable",
      scrollAmount * 35 + 10 + "%"
    );
  });
  window.addEventListener("resize", function () {
    height = document.body.clientHeight;
    height -= window.innerHeight;
  });
};