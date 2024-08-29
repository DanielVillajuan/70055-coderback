const buttonLogin = document.querySelector("#sendLogin");

buttonLogin.addEventListener("click", async () => {
  try {
    const response = await fetch("/api/sessions/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200 || response.status < 300)
      window.location.href = "/perfil";
  } catch (e) {
    console.log("error", e);
  }
});
