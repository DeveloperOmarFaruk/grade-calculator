const calc = () => {
    let bangla = document.getElementById('bangla').value;
    let english = document.getElementById('english').value;
    let math = document.getElementById('math').value;
    let general = document.getElementById('general').value;
    let social = document.getElementById('social').value;
    let ict = document.getElementById('ict').value;
    let grades = '';
    let pass = '';


    let totalGrades = parseFloat(bangla) + parseFloat(english) + parseFloat(math) + parseFloat(general) + parseFloat(social) + parseFloat(ict);

    let percentage = (totalGrades / 600) * 100;


    if (percentage <= 100 && percentage >= 80) {
        grades = 'A +';
    } else if (percentage <= 79 && percentage >= 70) {
        grades = 'A';
    } else if (percentage <= 69 && percentage >= 60) {
        grades = 'A -';
    } else if (percentage <= 59 && percentage >= 50) {
        grades = 'B';
    } else if (percentage <= 49 && percentage >= 40) {
        grades = 'C';
    } else if (percentage <= 39 && percentage >= 33) {
        grades = 'D';
    } else {
        grades = 'F';
    }


    if (parseFloat(bangla) >= 33 && parseFloat(english) >= 33 && parseFloat(math) >= 33 && parseFloat(general) >= 33 && parseFloat(social) >= 33 && parseFloat(ict) >= 33) {
        pass = "Pass";

    } else {
        pass = "Fail";
    }


    document.getElementById('showData').innerHTML = `
    Out of 600 your total is: ${totalGrades} <br> percentage is: ${percentage.toFixed(2)}% <br>
    Your grade is: ${grades} <br> You are ${pass}.
    `

}