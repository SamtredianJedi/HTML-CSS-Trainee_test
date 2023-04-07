function myFunction() {
    let myname = document.getElementById("myname").value;
    let myphone = document.getElementById("myphone").value;
    let mycontry = document.getElementById("mycontry").value;
    let mymail = document.getElementById("mymail").value;
    result = myname + "," + myphone + "," + mycontry + "," + mymail;
    alert(result);
    return result;
}