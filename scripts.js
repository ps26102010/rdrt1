function checkAnswers() {
    var answer1 = document.getElementById("answer1").value.trim().toUpperCase();

    if (answer1 === "AJITESH") {
        window.location.href = "https://cysx.000webhostapp.com/";
    } else {
        alert("youre very close, try not to die <3");
    }
}
