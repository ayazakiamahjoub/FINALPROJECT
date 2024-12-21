// Sélection des champs
const name = document.getElementById('name');
const birthdate = document.getElementById('birthdate');
const gender = document.getElementById('gender');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const address = document.getElementById('address');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const courses = document.getElementById('preferred-courses');
const form = document.querySelector('form');
const successMessage = document.getElementById('successMessage');
const errorMessage = document.getElementById('errorMessage');
form.addEventListener('submit', function (event) {
    event.preventDefault(); 
    clearErrors();
    let hasError = false;

    // Validation des champs
    if (name.value.trim() === '') {
        showError(name, "Erreur : Nom complet requis.");
        hasError = true;
    }

    if (birthdate.value.trim() === '') {
        showError(birthdate, "Erreur : Date de naissance requise.");
        hasError = true;
    }

    if (gender.value === '') {
        showError(gender, "Erreur : Genre requis.");
        hasError = true;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        showError(email, "Erreur : Email invalide.");
        hasError = true;
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone.value.trim())) {
        showError(phone, "Erreur : Numéro de téléphone invalide.");
        hasError = true;
    }

    if (address.value.trim() === '') {
        showError(address, "Erreur : Adresse requise.");
        hasError = true;
    }

    if (password.value.trim() === '') {
        showError(password, "Erreur : Mot de passe requis.");
        hasError = true;
    }

    if (confirmPassword.value.trim() === '') {
        showError(confirmPassword, "Erreur : Confirmation requise.");
        hasError = true;
    } else if (password.value !== confirmPassword.value) {
        showError(confirmPassword, "Erreur : Les mots de passe ne correspondent pas.");
        hasError = true;
    }

    // Vérifie si au moins un cours est sélectionné
    const selectedCourses = [...courses.options].filter(option => option.selected);
    if (selectedCourses.length === 0) {
        showError(courses, "Erreur : Sélectionnez au moins un cours.");
        hasError = true;
    }

    // Affichage des messages de succès ou d'erreur
    if (!hasError) {
        successMessage.textContent = "Inscription réussie !";
        successMessage.style.color = "green";
        form.reset(); // Réinitialise le formulaire après succès
    } else {
        errorMessage.textContent = "Veuillez corriger les erreurs ci-dessus.";
        errorMessage.style.color = "red";
    }
});

// Affiche un message d'erreur sous le champ
function showError(inputField, message) {
    const errorMessage = document.createElement("p");
    errorMessage.classList.add("error-message");
    errorMessage.style.color = "red";
    errorMessage.textContent = message;
    inputField.parentNode.insertBefore(errorMessage, inputField.nextSibling);
}

// Efface tous les messages d'erreur
function clearErrors() {
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(message => message.remove());
    successMessage.textContent = "";
    errorMessage.textContent = "";
}
