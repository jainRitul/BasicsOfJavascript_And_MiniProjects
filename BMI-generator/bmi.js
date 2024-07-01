const form = document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
    const weight = document.querySelector('#weight').value
    const height = document.querySelector('#height').value
    const result = document.querySelector('#result')
    console.log(weight);
    
    if (weight <= 0 || isNaN(weight)) {
        result.innerHTML = `Please enter a valid weight`;
    } else if (height <= 0 || isNaN(height)) {
        result.innerHTML = `Please enter a valid height`;
    } else {
        const BMI = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span>${BMI}</span>`;
    }
});