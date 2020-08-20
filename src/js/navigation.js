document.addEventListener("DOMContentLoaded", () => {
	const navMenu = document.getElementById("offscreen-menu");
	const menuList = navMenu.querySelector("ul.menu");
	const navButton = document.getElementById("offscreen-menu-button");
	const navContainer = document.querySelector(".stuffs-offscreen-nav__content");
	const header = document.getElementById("navMenuTitle");
	const basketButton = document.getElementById("offscreen-basket-button");
	const userButton = document.getElementById("offscreen-user-button");
  
	const getSubMenus = (menu) => menu.querySelectorAll(".sub-menu");
	const setMenuAttributes = (subMenus) => {
	  subMenus.forEach((subMenu) => {
		subMenu.setAttribute(
		  "data-parent",
		  subMenu.parentNode.getAttribute("id")
		);
	  });
	};
	const moveSubMenus = (subMenus, targetContainer) => {
	  subMenus.forEach((subMenu) => {
		targetContainer.appendChild(subMenu);
	  });
	};
	const addListenersToParent = (subMenus) => {
	  subMenus.forEach((subMenu) => {
		const parent = document.getElementById(`${subMenu.dataset.parent}`);
		parent.addEventListener("click", function () {
		  changeMenu.call(this);
		  changeHeader.call(this);
		});
	  });
	};
	const stripAnchorFromParentMenus = () => {
	  const links = document.querySelectorAll(".menu-item-has-children");
	  links.forEach((link) => {
		const anchor = link.querySelector("a");
		link.innerHTML = anchor.textContent;
		anchor.remove();
	  });
	};
	const resetMenu = () => {
	  const subMenus = getSubMenus(navMenu);
	  subMenus.forEach((menu) => menu.removeAttribute("active"));
	  menuList.setAttribute("active", "");
	  changeHeader("Main Menu");
	};
	function changeHeader(text = null) {
	  header.style.opacity = 0;
	  setTimeout(() => {
		header.innerHTML = text || this.textContent;
		if (!text) {
		  const backButton = document.createElement("span");
		  backButton.classList.add("menu-back-button");
		  header.appendChild(backButton);
		  backButton.addEventListener("click", resetMenu);
		}
		header.style.opacity = 1;
	  }, 300);
	}
	function changeMenu() {
	  this.parentNode.removeAttribute("active");
	  document
		.querySelector(`[data-parent="${this.getAttribute("id")}"]`)
		.setAttribute("active", "");
	}
	function toggleMenu() {
	  
	  const menu = document.getElementById(this.getAttribute("data-menu"));
	  const closeButton = menu.querySelector(".stuffs-close-button");
  
	  const outsideClickListener = (event) => {
		 if (event.target === menu) {
		   menu.onclick = null;
		   toggleMenu.call(this);
		};
	  };
  
	  const removeListeners = () =>
		document.removeEventListener("click", outsideClickListener);
  
	  if (menu.getAttribute("aria-expanded") === "true") {
		console.log('close');
		document.body.style.overflowY = "auto";
		menu.setAttribute("aria-expanded", "false");
		menu.onclick = null;
		closeButton.removeEventListener("click", toggleMenu);
		return resetMenu();
	  } else {
		console.log('open');
		document.body.style.overflowY = "hidden";
		menu.onclick = outsideClickListener;
		closeButton.addEventListener("click", toggleMenu);
		return menu.setAttribute("aria-expanded", "true");
	  }
	}
  
	if (navButton && navMenu) {
	  navButton.addEventListener("click", toggleMenu);
	}
  
	if (basketButton) {
	  basketButton.addEventListener("click", toggleMenu);
	}
  
	if (userButton) {
	  userButton.addEventListener('click', toggleMenu);
	}
  
	const subs = getSubMenus(menuList);
	setMenuAttributes(subs);
	moveSubMenus(subs, navContainer);
	addListenersToParent(subs);
	stripAnchorFromParentMenus();
	menuList.setAttribute("active", "");
  });