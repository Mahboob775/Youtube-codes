function handleSubmit() {
  var name1 = document.getElementById("name1").value;

  console.log(name1);
  var letters = /^[a-zA-Z" "]+$/;
  if (name1.match(letters)) {
    console.log("Accepted");
  } else {
    alert("Name is not valid Please");
  }

  var password2 = document.getElementById("password2").value;

  var pattren = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,10}$/;

  if (password2.match(pattren)) {
    console.log("password is Accepted");
  } else {
    alert("wrong password");
    return false;
  }
}
