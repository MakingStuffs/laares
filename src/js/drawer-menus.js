import { msQueryAll } from "making-stuffs-queries";
(function () {
  const buttons = [
    ...msQueryAll(".stuffs-drawer-menu__button"),
    ...msQueryAll(".stuffs-drawer-menu__close"),
  ];
  const menus = msQueryAll(".stuffs-drawer-menu");

  function toggle() {
    const associatedMenu = Array.from(menus).find(
      (menu) => menu.id === this.getAttribute("aria-controls")
    );
    console.log(associatedMenu);
    console.log(this);
    console.log(menus);
    if (associatedMenu.getAttribute("aria-expanded") === "true") {
      associatedMenu.setAttribute("aria-expanded", "false");
      associatedMenu.blur();
      this.blur();
    } else {
      associatedMenu.setAttribute("aria-expanded", "true");
      associatedMenu.focus();
      this.blur();
    }
  }

  buttons.forEach((button) => button.addEventListener("click", toggle));
})();
