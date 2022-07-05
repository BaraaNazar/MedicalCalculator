function amoxyCalc() {
  let patientWeight = document.getElementById("weight").value;
  let patientAge = document.getElementById("age").value;
  if (patientAge <= 3) {
    document.getElementById("result1").innerHTML = (patientWeight * 30) + "mg to be given twice daily";
  } else if (patientAge > 3) {
    document.getElementById("result1").innerHTML = (patientWeight * 45 ) + "mg to be given twice daily";
}
}

function amikaCalc() {
    let patientWeight = document.getElementById("weight").value;
    let patientAge = document.getElementById("age").value;
    if (patientAge <= 1) {
      document.getElementById("result1").innerHTML = (patientWeight * 15) + "mg to be given every 36 hours";
    } else if (patientAge > 1) {
      document.getElementById("result1").innerHTML = (patientWeight * 22.5 ) + "mg to be given thrice daily";
    }
  }



function ceftriaxonCalc() {
    let patientWeight = document.getElementById("weight").value;
    let patientAge = document.getElementById("age").value;
    if (patientAge <= 1) {
      document.getElementById("result1").innerHTML = (patientWeight * 50) + "mg to be given twice daily";
    } else if (patientAge > 1) {
      document.getElementById("result1").innerHTML = (patientWeight * 75 ) + "mg to be given twice daily";
    }
  }


function gentamicinCalc() {
    let patientWeight = document.getElementById("weight").value;
    let patientAge = document.getElementById("age").value;
    if (patientAge <= 1) {
      document.getElementById("result1").innerHTML = (patientWeight * 2.5) + "mg to be given thrice daily";
    } else if (patientAge > 1) {
      document.getElementById("result1").innerHTML = (patientWeight * 2.5 ) + "mg to be given twice daily";
    }
  }

function VancomycinCalc() {
    let patientWeight = document.getElementById("weight").value;
    let patientAge = document.getElementById("age").value;
    if (patientAge <= 1) {
      document.getElementById("result1").innerHTML = (patientWeight * 10 ) + "mg to be given thrice daily";
    } else if (patientAge > 1) {
      document.getElementById("result1").innerHTML = (patientWeight * 10 ) + "mg to be given every 6 hours.";
    }
  }
function meropenemCalc() {
    let patientWeight = document.getElementById("weight").value;
    let patientAge = document.getElementById("age").value;
    if (patientAge <= 1) {
      document.getElementById("result1").innerHTML = (patientWeight * 20 ) + "mg to be given every 12 hours.";
    } else if (patientAge > 1) {
      document.getElementById("result1").innerHTML = (patientWeight * 40 ) + "mg to be given every 12 hours.";
    }
  }
function ceftazidimeCalc() {
    let patientWeight = document.getElementById("weight").value;
    let patientAge = document.getElementById("age").value;
    if (patientAge <= 1) {
      document.getElementById("result1").innerHTML = (patientWeight * 0 ) + "Safety and efficacy not established.";
    } else if (patientAge > 1) {
      document.getElementById("result1").innerHTML = (patientWeight * 50 ) + "mg to be given every 8 hours.";
    }
  }

function ampicillinCalc() {
    let patientWeight = document.getElementById("weight").value;
    let patientAge = document.getElementById("age").value;
    if (patientAge <= 1) {
      document.getElementById("result1").innerHTML = (patientWeight * 150 ) + "mg divided q6hr.";
    } else if (patientAge > 1) {
      document.getElementById("result1").innerHTML = (patientWeight * 300 ) + "mg divided q6hr.";
    }
  }


function cefotaximeCalc() {
    let patientWeight = document.getElementById("weight").value;
    let patientAge = document.getElementById("age").value;
    if (patientAge <= 12) {
      document.getElementById("result1").innerHTML = (patientWeight * 150 ) + "mg divided q6hr.";
    } else if (patientAge > 12) {
      document.getElementById("result1").innerHTML = "1-2g divided q6hr.";
    }
  }


