// Add your code here
function submitData(name, email) {
    // Create the data object to be sent
    const formData = {
      name: name,
      email: email
    };
  
    // Create the configuration object for the fetch request
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };
  
    // Perform the fetch request and return the promise chain
    return fetch("http://localhost:3000/users", configurationObject)
      .then(function(response) {
        return response.json();
      })
      .then(function(object) {
        // Append the new id to the DOM
        const idElement = document.createElement('p');
        idElement.textContent = `ID: ${object.id}`;
        document.body.appendChild(idElement);
      })
      .catch(function(error) {
        // Append the error message to the DOM
        const errorElement = document.createElement('p');
        errorElement.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorElement);
      });
  }
  submitData("John Doe", "john.doe@example.com");
