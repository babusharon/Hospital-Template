function validation() {
    let x = document.getElementById("email").value;
    if (x == "") {
        alert("Enter emailid");
        return false;
    } else {
        return true;
    }
}
