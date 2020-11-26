var btns = document.querySelectorAll("section#buttons button");

btns.forEach((btn) => {
  btn.addEventListener("click", copyToClipboard);
});

function copyToClipboard(e) {
  var btn = e.target;
  var btnText = btn.textContent;
  btn.textContent = "Copied!";
  setTimeout(() => {
    btn.textContent = btnText;
  }, 800);

  navigator.clipboard.writeText(btnText);
}

const menuTogglers = document.querySelectorAll(".menuToggler");
const menu = document.querySelector("nav.navbar");

menuTogglers.forEach((toggler) =>
  toggler.addEventListener("click", () => {
    menu.classList.toggle("active");
  })
);

// Dropdowns
let entryDropDownOpen = false;

const dropDownBacks = document.querySelectorAll(".dropdown-back");
const dropdownEnters = document.querySelectorAll(".dropdown-enter");

dropDownBacks.forEach((t) =>
  t.addEventListener("click", () => {
    const dropdownLi = t.parentElement.parentElement;

    // Check for entry dropdown
    if (dropdownLi.classList.contains("entry")) entryDropDownOpen = false;

    dropdownLi.classList.remove("active");
  })
);

dropdownEnters.forEach((t) =>
  t.addEventListener("click", () => {
    const dropdownLi = t.parentElement;

    // Check for entry dropdown
    if (dropdownLi.classList.contains("entry")) {
      if (entryDropDownOpen) return;

      // Open this entry dropdown

      // Close all other entry dropdowns
      const entryDropDowns = document.querySelectorAll(
        "nav.navbar .dropdown.entry"
      );
      entryDropDowns.forEach((t) => t.classList.remove("active"));
    }

    dropdownLi.classList.add("active");
  })
);
