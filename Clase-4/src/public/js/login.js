const buttonLogin = document.querySelector("#sendLogin");

buttonLogin.addEventListener("click", async () => {
  try {
    await fetch("/api/sessions/login");
  } catch (e) {
    console.log("error", e);
  }
});
