
function convertValue(value, sourceUnit, targetUnit) {
    if (sourceUnit === "m" && targetUnit === "ft") {
        return value * 3.28084;
    }
    else if (sourceUnit === "m" && targetUnit === "in") {
        return value * 39.3701;
    }
    else if (sourceUnit === "ft" && targetUnit === "m") {
        return value / 3.28084; 
    }
    else if (sourceUnit === "ft" && targetUnit === "in") {
        return value * 12; 
    }
    else if (sourceUnit === "in" && targetUnit === "m") {
        return value / 39.3701;
    }
    else if (sourceUnit === "in" && targetUnit === "ft") {
        return value / 12;
    }
    else {
        return value;
    }
}

function convert() {
    var value = parseFloat(document.getElementById("value").value);
    var sourceUnit = document.getElementById("sourceUnit").value;
    var targetUnit = document.getElementById("targetUnit").value;
    var result = convertValue(value, sourceUnit, targetUnit);

    // Hiển thị kết quả
    document.getElementById("result").innerText = "Kết quả: " + result + " " + targetUnit;
}
