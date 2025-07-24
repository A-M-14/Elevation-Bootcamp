const submitBtn = document.getElementById('submitBtn');
const errorContainer = document.getElementById('errorContainer');

submitBtn.addEventListener('click', validateForm);

function validateForm() {
    clearErrors();
    
    const name = document.getElementById('name').value.trim();
    const salary = document.getElementById('salary').value;
    const birthday = document.getElementById('birthday').value;
    const phone = document.getElementById('phone').value.trim();
    
    const errors = [];
    
    if (name.length <= 2) {
        errors.push('Name must be longer than 2 characters');
    }
    
    const salaryNum = parseFloat(salary);
    if (isNaN(salaryNum) || salaryNum <= 10000 || salaryNum >= 16000) {
        errors.push('Salary must be greater than 10,000 but less than 16,000');
    }
    
    if (!birthday) {
        errors.push('Birthday is required');
    }
    
    const phoneDigits = phone.replace(/\D/g, ''); // Remove non-digit characters
    if (phoneDigits.length !== 10) {
        errors.push('Phone number must be exactly 10 digits long');
    }
    
    if (errors.length > 0) {
        displayErrors(errors);
    } else {
        displaySuccess();
    }
}

function clearErrors() {
    errorContainer.innerHTML = '';
}

function displayErrors(errors) {
    errors.forEach(error => {
        const errorElement = document.createElement('div');
        errorElement.className = 'error';
        errorElement.textContent = error;
        errorContainer.appendChild(errorElement);
    });
}

function displaySuccess() {
    const successElement = document.createElement('div');
    successElement.className = 'success';
    successElement.textContent = '✅ Form submitted successfully! All validation checks passed.';
    errorContainer.appendChild(successElement);
    
    setTimeout(() => {clearForm()}, 3000);
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('salary').value = '';
    document.getElementById('birthday').value = '';
    document.getElementById('phone').value = '';
    clearErrors();
}
