const nightmodeToggle = document.getElementById("night-mode");

function lightson() {
    nightmodeToggle.on = false; 
    document.body.setAttribute("data-theme", "light");
}

function lightsoff() {
    nightmodeToggle.on = true; 
    document.body.setAttribute("data-theme", "dark");
}

nightmodeToggle.addEventListener("change", () => {
  if (nightmodeToggle.on) {
    lightsoff();
    localStorage.setItem("theme", "dark");
  } else {
    lightson();
    localStorage.setItem("theme", "light");
  }
});

// check if entry exists in cache
const preferredTheme = localStorage.getItem("theme");
if (preferredTheme !== null) {
  switch(preferredTheme) {
    case "light": lightson(); break;
    case "dark": lightsoff(); break;
  }
}
// checking conditional twice for fallthrough in case an invalid value is found in localStorage
if (preferredTheme === null) {
  const prefersDarkmode = window.matchMedia('(prefers-color-scheme: dark)');
  if (prefersDarkmode) {
    nightmodeToggle.on = true; 
    document.body.setAttribute("data-theme", "dark");
  };
}

