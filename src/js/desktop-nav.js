document.addEventListener("DOMContentLoaded", () => {
  const navWrapper = document.querySelector("#desktop-navigation");
  const navContainer = navWrapper.querySelector(".desktop-menu__container");
  const scrollButtons = navWrapper.querySelectorAll(
    ".desktop-menu__scroll-button"
  );

  const checkIfScrollable = () => {
    if (navWrapper.scrollWidth < navContainer.scrollWidth) {
      navWrapper.classList.add("scrollable");
      checkScrollPosition();
      scrollButtons.forEach((button) =>
        button.addEventListener("click", scroll)
      );
    } else {
      navWrapper.classList.remove("scrollable");
      checkScrollPosition();
      scrollButtons.forEach((button) =>
        button.removeEventListener("click", scroll)
      );
    }
  };

  const checkScrollPosition = (targetPosition = null) => {
    const leftButton = [...scrollButtons].find(
      (button) => button.dataset.direction === "left"
    );
    const rightButton = [...scrollButtons].find(
      (button) => button.dataset.direction === "right"
    );

    const checkIfScrollingFinished = setInterval(() => {
      if (targetPosition === null) {
        setButtons();
        console.log('no target');
        return clearInterval(checkIfScrollingFinished);
      }

      if (navContainer.scrollLeft === targetPosition) {
        console.log("done");
        setButtons();
        return clearInterval(checkIfScrollingFinished);
      }
    }, 50);

    const setButtons = () => {

      if (navContainer.scrollLeft <= 50) {
        leftButton.style.display = "none";
      } else if (navContainer.scrollLeft >= navContainer.clientWidth + 50) {
        rightButton.style.display = "none";
      } else {
        leftButton.style.display = "inline-block";
        rightButton.style.display = "inline-block";
      }
    };
  };

  function scroll() {
    if (this.dataset.direction === "right") {
      navContainer.scrollTo({
        top: 0,
        left: navContainer.scrollLeft + 100,
        behavior: "smooth",
      });
      checkScrollPosition(navContainer.scrollLeft + 100);
    } else {
      navContainer.scrollTo({
        top: 0,
        left: navContainer.scrollLeft - 100,
        behavior: "smooth",
      });
      checkScrollPosition(navContainer.scrollLeft - 100);
    }
  }

  window.addEventListener("resize", checkIfScrollable, { passive: true });
  navContainer.addEventListener("scroll", checkIfScrollable, { passive: true });
  checkIfScrollable();
});
