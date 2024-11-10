document.addEventListener("DOMContentLoaded", () => {
  const forms = Array.from(document.querySelectorAll(".js-form"));
  const success = document.querySelector("#success-modal");

  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const validator = form.validator;
      controller = new AbortController();
      const signal = controller.signal;
      validator.validate();
      if (validator.valid) {
        fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          signal: signal,
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error("Response is not OK");
            }

            document.body.classList.add("modal-open");
            form.closest(".js-modal")?.classList.remove("active");
            success?.classList.add("active");
          })
          .catch((err) => {
            console.error(err);
            form.closest(".js-modal")?.classList.remove("active");
            success?.classList.add("active");
            document.body.classList.add("modal-open");
          });
      }
    });
  });
});
