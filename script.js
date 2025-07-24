const baseURL = "https://script.google.com/macros/s/YOUR_ID/exec";
const params = new URLSearchParams(data).toString();
const url = `${baseURL}?${params}`;

fetch(url)
  .then(res => res.json())
  .then(result => {
    if (result.result === "success") {
      msg.textContent = "PR logged!";
      form.reset();
    }
  })
  .catch(err => {
    console.error(err);
    msg.textContent = "Failed to log PR.";
  });
