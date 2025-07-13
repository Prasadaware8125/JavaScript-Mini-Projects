document.getElementById("bmi-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const gender = document.getElementById("gender").value;
    const age = parseInt(document.getElementById("age").value);
    const height_feet = parseInt(document.getElementById("height-feet").value);
    const height_inches = parseInt(document.getElementById("height-inches").value);
    const weight = parseFloat(document.getElementById("weight").value);

    if( gender && age && height_feet && height_inches && weight) {
        const heightInMeters = ( (height_feet * 12) + height_inches) * 0.0254;  // height in meters
        const bmi = weight / (heightInMeters * heightInMeters);
        
        const result = document.getElementById("result");
        let category = "";

        if( bmi < 18.5 ) {
            category = "Under Weight";
        } else if( bmi >= 18.5 && bmi < 24.9 ) {
            category = "Normal Weight";
        } else if( bmi >= 25 && bmi < 29.9 ) {
            category = "Over Weight";
        } else {
            category = "Obese";
        }

        let resultMessage = 'Your BMI : ' + bmi.toFixed(2) + '<br>';
        resultMessage += category;    
        
        result.innerHTML = resultMessage;
    }
});