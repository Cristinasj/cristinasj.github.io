const form = document.getElementById("pr-form");
const msg = document.getElementById("response-msg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbz9Eu-DIBttH8y0ivcdlM0QSGCYrxxLscp0ZKVqSz9LCvAF1RrZ8VGpH0vt_nHtWI_O/exec", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const result = await response.json();
    if (result.result === "success") {
      msg.textContent = "PR logged successfully!";
      form.reset();
    } else {
      msg.textContent = "Something went wrong.";
    }
  } catch (err) {
    console.error(err);
    msg.textContent = "Failed to connect to database.";
  }
});
