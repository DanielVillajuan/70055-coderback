const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')
const sendButton = document.querySelector('#sendNewPassword')

const user = {
    email: "",
    password: "",
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    user[name] = value;
  };

  emailInput.addEventListener('input', handleChange)
  passwordInput.addEventListener('input', handleChange)

  sendButton.addEventListener('click', async () => {
    const response = await fetch('/api/sessions/recuperarPassword', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json",
          }
    })
    if(response.status >= 200){
        window.location.href = '/login'
    }
  })
