const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Please fill in all fields!");
  }
  const formData = {
    email: event.currentTarget.email.value,
    password: event.currentTarget.password.value,
  };
  console.log(formData);
  event.currentTarget.reset();
}
