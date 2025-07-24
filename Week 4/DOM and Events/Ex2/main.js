const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
};

function checkReservation() {
  const nameInput = document.getElementById('nameInput');
  const name = nameInput.value.trim();
  const resultDiv = document.getElementById('result');
  
  // Clear any previous classes
  resultDiv.className = 'result';
  
  if (!name) {
    resultDiv.textContent = "Please enter a name";
    return;
  }
  
  if (reservations[name]) {
    if (reservations[name].claimed) {
      resultDiv.textContent = "Hmm, someone already claimed this reservation";
      resultDiv.classList.add('warning');
    } else {
      reservations[name].claimed = true;
      resultDiv.textContent = `Welcome, ${name}`;
      resultDiv.classList.add('success');
    }
  } 
  else {
    resultDiv.textContent = "You have no reservation";
    resultDiv.classList.add('error');
  }
  
  nameInput.value = '';
}