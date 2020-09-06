document.addEventListener("DOMContentLoaded", () => {
  const siteNavigationContainer = document.querySelector("#site-navigation");
  const drawerMenu = siteNavigationContainer.querySelector(
    ".stuffs-drawer-menu"
  );
  const menuItemContainer = drawerMenu.querySelector(".menu-primary-container");
  const menuItemList = drawerMenu.querySelector("#primary-menu-list");
  const itemsWithSubMenus = Array.from(
    menuItemList.querySelectorAll(".menu-item-has-children")
  );
  const subMenus = (() => {
    const subArray = Array.from(
      menuItemList.querySelectorAll(".sub-menu")
    ).map((menu) => menu.cloneNode(true));
    return subArray;
  })();

  const menuViews = [menuItemList.cloneNode(true), ...subMenus];

  const header = drawerMenu.querySelector("#menu-title");
  const backButton = drawerMenu.querySelector("#menu-back-button");

  const hide = (element) => (element.style.opacity = 0);
  const reveal = (element) => (element.style.opacity = 1);

  const getParentId = (id) => {
    const currentIdArray = id.split("-");
    currentIdArray[2] = parseInt(currentIdArray[2]) - 1;
    return currentIdArray.join("-");
  };

  const changeView = (newView) => {
    hide(menuItemContainer);

    setTimeout(() => {
      menuItemContainer.querySelector("ul").remove();
      menuItemContainer.append(newView);
      reveal(menuItemContainer);
    }, 400);
  };

  const changeTextContent = (element, text) => (element.textContent = text);

  const setBackButton = (dataId = null) => {
    if (!dataId) {
      backButton.setAttribute("aria-hidden", "true");
      delete backButton.dataset.id;
      return;
    }
    if (backButton.getAttribute("aria-hidden") === "true") {
      backButton.setAttribute("aria-hidden", "false");
    }
    backButton.dataset.id = dataId;
  };

  const getParentSubMenu = (id) => {
    let menu;
    subMenus.forEach((view) => {
      Array.from(view.children).filter((child) => {
        if (child.id === id) {
          menu = view;
        }
      });
    });
    return menu;
  };
  const getParentText = (id) => {

    const parentId = id
      .split("-")
      .map((fragment) =>
        /[0-9]/.test(fragment) ? parseInt(fragment) - 2 : fragment
      )
      .join("-");
      
    let text;

    subMenus.forEach((view) => {
      Array.from(view.children).filter((child) => {
        if (child.id === parentId) {
          console.log(child);
          text = child.querySelector("a").textContent;
        }
      });
    });

    if (!text) {
      const parent = menuViews[0].querySelector(`#${parentId}`);
      if (parent) {
        text = parent.querySelector("a").textContent;
      } else {
        text = "Main Menu";
      }
    }

    return text;
  };

  function handleSubMenuClick(event) {
    event.preventDefault();
    const newView = this.querySelector(".sub-menu");
    changeView(newView);
    changeTextContent(backButton, header.textContent);
    changeTextContent(header, this.querySelector("a").textContent);
    setBackButton(this.id);
  }

  function handleBackButtonClick(event) {
    const newView = (() => {
      const subMenuView = getParentSubMenu(this.dataset.id);

      return subMenuView
        ? subMenuView.cloneNode(true)
        : menuViews[0].cloneNode(true);
    })();

    changeView(newView);

    newView.querySelectorAll(".menu-item-has-children").forEach((item) => {
      item.addEventListener("click", handleSubMenuClick);
    });

    if (newView.id === "primary-menu-list") {
      changeTextContent(header, "Main Menu");
      changeTextContent(backButton, "Main Menu");
      return setBackButton();
    } else {
      changeTextContent(header, this.textContent);
      changeTextContent(backButton, getParentText(this.dataset.id));
      return setBackButton(getParentId(newView.querySelector("li").id));
    }
  }

  itemsWithSubMenus.forEach((item) =>
    item.addEventListener("click", handleSubMenuClick)
  );

  backButton.addEventListener("click", handleBackButtonClick);
});
