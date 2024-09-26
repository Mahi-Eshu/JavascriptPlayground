function clearAll() {
    document.querySelectorAll('.error-message').forEach(error => error.textContent = '');
    document.querySelectorAll('input').forEach(element => element.classList.remove('error'));
}

document.getElementById('userForm').onsubmit = (event) => {
    event.preventDefault();
    clearAll();

    let isValid = true;
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const sex = document.getElementById('sex').value;
    const mobile = document.getElementById('mobile').value;

    if(!/^[A-Za-z\s]+$/.test(name)){
        document.getElementById('nameError').textContent = 'Invalid name! Only letters are allowed.';
        document.getElementById('name').classList.add('error')
        isValid = false;
    }
    if(!/^\d{2}-\d{2}-\d{4}$/.test(dob)){
        document.getElementById('dobError').textContent = 'Invalid date format! Use MM-DD-YYYY.';
        document.getElementById('dob').classList.add('error');
        isValid = false;
    }
    if(!sex){
        document.getElementById('sexError').textContent = 'Please select your sex.';
        isValid = false;
    }
    if(mobile && !/^\d{10}$/.test(mobile)){
        document.getElementById('mobileError').textContent = 'Invalid mobile number! Must be 10 digits.';
        document.getElementById('mobile').classList.add('error');
        isValid = false;
    }
    if(isValid){
        document.getElementById('result').style.display = "block"
        document.getElementById('result').innerHTML = `
            <strong>Submitted Data:</strong><br>
            Name: ${name}<br>
            Date of Birth: ${dob}<br>
            Sex: ${sex}<br>
            Mobile No: ${mobile || 'N/A'}
        `;
    }
};