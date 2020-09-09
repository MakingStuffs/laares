import { msQueryAll } from "making-stuffs-queries";
(function () {
  const buttons = [
    ...msQueryAll(".stuffs-drawer-menu__button"),
    ...msQueryAll(".stuffs-drawer-menu__close"),
  ];
  const menus = msQueryAll(".stuffs-drawer-menu");

  function toggle() {
    if (this === document) return;
    
    const associatedMenu = Array.from(menus).find(
      (menu) => menu.id === this.getAttribute("aria-controls")
    );
    
    const outsideClickListener = (event) => {
      if ( event.target === associatedMenu ) {
        associatedMenu.onclick = null;
        toggle.call(this);
      };
    };

    if (associatedMenu.getAttribute("aria-expanded") === "true") {
      associatedMenu.setAttribute("aria-expanded", "false");
      associatedMenu.blur();
      associatedMenu.onclick = null;
      document.removeEventListener('click', toggle);
      this.blur();
      return;
    } else {
      associatedMenu.setAttribute("aria-expanded", "true");
      associatedMenu.focus();
      associatedMenu.onclick = outsideClickListener;
      document.addEventListener('click', toggle);
      this.blur();
      return;
    }
  }

  buttons.forEach((button) => button.addEventListener("click", toggle));
})();
