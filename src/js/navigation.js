document.addEventListener("DOMContentLoaded", () => {

  const siteNavigationContainer = document.querySelector("#site-navigation");
  if (typeof siteNavigationContainer === "undefined") {
    return;
  }
  const drawerMenu = siteNavigationContainer.querySelector(".stuffs-drawer-menu");
  if (typeof drawerMenu === "undefined") {
    return;
  }

  const menuItemList = drawerMenu.querySelector("#primary-menu-list");
  if (typeof menuItemList === "undefined") {
    return;
  }

  const itemsWithSubMenus = menuItemList.querySelectorAll('.menu-item-has-children');
  if ( typeof itemsWithSubMenus === "undefined" ) {
	  return;
  }

  itemsWithSubMenus.forEach(item => item.addEventListener('click', handleSubMenuClick));

  function handleSubMenuClick (event) {
	  event.preventDefault();
	  console.log(this);
  };
  

  console.log(siteNavigationContainer, drawerMenu, menuItemList);
});
