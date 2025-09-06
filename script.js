// --- Event Handling Demo ---
    const button = document.getElementById("showMessageBtn");
    const message = document.getElementById("message");
    button.addEventListener("click", () => message.classList.toggle("hidden"));

    const hoverBtn = document.getElementById("hoverBtn");
    hoverBtn.addEventListener("mouseover", () => hoverBtn.classList.add("highlight"));
    hoverBtn.addEventListener("mouseout", () => hoverBtn.classList.remove("highlight"));

    const textInput = document.getElementById("textInput");
    const keyOutput = document.getElementById("keyOutput");
    textInput.addEventListener("input", e => keyOutput.textContent = "You typed: " + e.target.value);
    document.addEventListener("keydown", e => console.log("Key pressed:", e.key));
  
    // --- Dark Mode Toggle ---
    const darkModeBtn = document.getElementById("darkModeBtn");
    const body = document.body;
    darkModeBtn.addEventListener("click", () => body.classList.toggle("dark-mode"));

    // --- Counter Game ---
    let count = 0;
    const counterDisplay = document.getElementById("counter");
    const increaseBtn = document.getElementById("increaseBtn");
    const resetBtn = document.getElementById("resetBtn");
    const decreaseBtn = document.getElementById("decreaseBtn");
    const specialMessage = document.getElementById("specialMessage");

    increaseBtn.addEventListener("click", () => {
      count++;
      counterDisplay.textContent = count;
    });

    resetBtn.addEventListener("click", () => {
      count = 0;
      counterDisplay.textContent = count;
      specialMessage.textContent = "";
    });

    decreaseBtn.addEventListener("click", () => {
      count--;
      counterDisplay.textContent = count;
    });

    // --- Form Validation ---
    const form = document.getElementById("myForm");
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      let valid = true;
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;

      const nameError = document.getElementById("nameError");
      const emailError = document.getElementById("emailError");
      const passwordError = document.getElementById("passwordError");
      const confirmPasswordError = document.getElementById("confirmPasswordError");
      const successMessage = document.getElementById("successMessage");

      nameError.textContent = "";
      emailError.textContent = "";
      passwordError.textContent = "";
      confirmPasswordError.textContent = "";
      successMessage.textContent = "";

      if (name === "") {
        nameError.textContent = "Name is required.";
        valid = false;
      }

      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.match(emailPattern)) {
        emailError.textContent = "Please enter a valid email.";
        valid = false;
      }

      if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        valid = false;
      }

      if (confirmPassword !== password) {
        confirmPasswordError.textContent = "Passwords do not match.";
        valid = false;
      }

      if (valid) {
        successMessage.textContent = "✅ Registration successful!";
        form.reset();
      }
    });