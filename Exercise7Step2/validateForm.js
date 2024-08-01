function validateForm() {
  let isValid = true;
  const fields = document.querySelectorAll('#findPetForm [required]');

  fields.forEach(field => {
    if (!field.value.trim()) {
      isValid = false;
      alert('Please fill out all required fields.');
      field.classList.add('error');
      field.focus();
    }
  });

  return isValid; // Return false to prevent form submission if validation fails
}

document.getElementById('findPetForm').addEventListener('submit', function(event) {
  if (!validateForm()) {
    event.preventDefault(); // Prevent the form from submitting if validation fails
  }
});
