
      const editButton = document.getElementById("editButton");
      const popupbox = document.getElementById("popupbox");
      const firstnameInput = document.getElementById("firstname");
      const lastnameInput = document.getElementById("Lastname");
      const professionInput = document.getElementById("Profession");
    
      editButton.addEventListener("click", () => {
        popupbox.style.display = "flex";
        firstnameInput.value = document.querySelector("#reset-style1").textContent;
        lastnameInput.value = document.querySelector("#reset-style2").textContent;
        professionInput.value = document.querySelector("#pro").textContent;
      });
    
      const saveButton = document.getElementById("saveButton");
      saveButton.addEventListener("click", () => {
        document.querySelector("#reset-style1").textContent = firstnameInput.value;
        document.querySelector("#reset-style2").textContent = lastnameInput.value;
        document.querySelector("#pro").textContent = professionInput.value;
        popupbox.style.display = "none";
      });