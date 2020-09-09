document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.querySelector("#account-login");
  const registerButton = document.querySelector("#account-register");

  if (!loginButton || !registerButton) return;

  function toggle() {
    event.preventDefault();

    const associatedMenu = document.querySelector(
      `#${this.getAttribute("aria-controls")}`
    );
    const currentlyActive = document.querySelector(
      ".account-login-register-form.is-active"
    );

    associatedMenu.classList.add("is-active");
    currentlyActive.classList.remove("is-active");
  }

  [loginButton, registerButton].forEach((button) =>
    button.addEventListener("click", toggle)
  );
});
