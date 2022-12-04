//below function executes on click of login button
function validate () {
    var username = document.getElementById("Student ID").value;
    var paswsord = document.getElementById("Password").value;
    alert ("Login successfully");
    window.location = "Duty page.html"
    return false
}

function Toggle() {
    var temp = document.getElementById("typepass");
    if (temp.type === "password"){
        temp.type = "text";
    }
    else {
        temp.type="password";
    }
}