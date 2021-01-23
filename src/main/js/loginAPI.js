
export const postLoginData = async (data) => {
  try {
    const response = await fetch('http://localhost:8080/login', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    console.log("on line 11 ")
    const isLoginDataValid = await response.text();
    console.log("login data", isLoginDataValid);

    if (isLoginDataValid == "false") {

      document.getElementById("login-app").innerHTML = "Error Signing in. Incorrect username / password";
    }
    else {
      let raps = isLoginDataValid;

      document.getElementById("container").innerHTML = isLoginDataValid;
      console.log(raps);
    }


  } catch (e) {
    console.log("ERROR: ", e);
  }
}

export const postRegistrationData = async (data) => {
  try {
    const response = await fetch('http://localhost:8080/register', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    const isRegistrationDataValid = await response.text();
    console.log("login data", isRegistrationDataValid);



    document.getElementById("login").innerHTML = isRegistrationDataValid;




  } catch (e) {
    console.log("ERROR: ", e);
  }
}