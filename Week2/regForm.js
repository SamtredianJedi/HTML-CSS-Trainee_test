function myFunction() {
    var myname = document.getElementById("myname").value;
    var myphone = document.getElementById("myphone").value;
    var mycontry = document.getElementById("mycontry").value;
    var mymail = document.getElementById("mymail").value;
    result = myname + "," + myphone + "," + mycontry + "," + mymail;
    alert(result);
    return result;
}