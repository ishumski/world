/*34. Дан инпут. В него вводится число. По потери фокуса сделайте так, чтобы каждая цифра вставилась в новый инпут.
Инпутов для цифр изначально не существует, они должны создаться в процессе работы скрипта. */

const input = document.querySelector("input");

input.addEventListener("blur", (event) => {

    let arrFromValue = event.currentTarget.value.split("");

    arrFromValue.forEach(elem => {
        const newInput = document.createElement("input");
        newInput.style.display = "flex";
        newInput.value = elem;
        input.parentElement.append(newInput);
    });
})