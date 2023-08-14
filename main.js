// Assigns button to variable and causes the click to trigger a function
let button = document.querySelector("button");
button.addEventListener("click", randPerson);

function randPerson() {
    // Generates a random number for a data set
    let randNum = Math.floor(Math.random() * 10)

    // Changes the information displayed to match that of a random data set
    let image = document.querySelector("img");
    image.src = `${data.results[randNum].picture.medium}`;

    let gender = document.getElementById("gender");
    gender.innerHTML = `Gender: ${data.results[randNum].gender}`;

    let name = document.getElementById("name");
    name.innerHTML = `${data.results[randNum].name.title}. ${data.results[randNum].name.first} ${data.results[randNum].name.last}`

    let dob = document.getElementById("dob");
    dob.innerHTML = `Date of Birth: ${data.results[randNum].dob.date} Age: ${data.results[randNum].dob.age}`

    let location = document.getElementById("location");
    location.innerHTML = `Address: ${data.results[randNum].location.street.name} ${data.results[randNum].location.street.number}`

    let email = document.getElementById("email");
    email.innerHTML = `Email Address: ${data.results[randNum].email}`

    let login = document.getElementById("login");
    login.innerHTML = `Username: ${data.results[randNum].login.username} || Password: ${data.results[randNum].login.password}`
}

// Calls the function to start with a random person
randPerson();
