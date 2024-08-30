const buttonLogin = document.querySelector("#sendLogin");

buttonLogin.addEventListener("click", async () => {
  try {
   window.location.href = '/api/sessions/login' 
  } catch (e) {
    console.log("error", e);
  }
});
