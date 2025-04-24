const forms = document.querySelectorAll("form");
forms.forEach((form) => {
  if (form.querySelector("input[type='password']")) {
    console.log("Login form detected");
  }
});
