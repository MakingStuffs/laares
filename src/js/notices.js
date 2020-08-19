import { msQuery } from "making-stuffs-queries";

(function () {
  const notices = msQuery("#notices");
  if (!notices) return;
  msQuery("button", notices).addEventListener("click", () => {
    notices.setAttribute("aria-expanded", "false");
  });
})();
