// Go Rest API

// https://gorest.co.in/

// The Go Rest API is an open Web API, meaning that it allows all registered users to make changes to a shared database using the GET, POST, PUT/PATCH, and DELETE http methods.

// Your mission is to create a Web application (HTML + JS) that has a user interface for all the above methods.

// There are many different types of information stored on the Go Rest API but for this assignment you should focus on the user data.

// GET

// Create a simple text input, and submit button. The text input should tell the user to enter a user ID. Once the submit button is clicked, if the user is found. The user data should display somewhere on the webpage. You can either create an output display area for all request forms, or one for each individual form.

// DELETE

// Delete will be similar to GET in that it only requires one input, user ID. This time you will have to send a DELETE request instead and you should inform the user if a user was successfully deleted upon submitting the request and received the response from GO REST

// POST

// The POST request is to create a new user on the database. For this portion you will need to create a form that includes all the required fields. I recommend using Postman to first test a request and see what the required fields are before working on your UI.

// There should be  a submit button when pressed the client should be informed if there request was successful, if so you should output the users information as well as there user ID

// PUT/PATCH


// Start by creating a form similar to the POST form. Now add a user-id input box. This will allow you to make a request with the POST information while also targeting a specific user by id. Again use Postman to test a request first before implementing it into your application. 

// Once it is working when you enter in the data manually  you will need to implement a search feature. This will be done by adding a secondary submit button next to the user-id input box. This will allow your program to autofill the input boxes for the PUT/PATCH request using a user-id. If no user is found the user should be informed of that. Otherwise the inputs should autofill with the found information.



const baseUrl = "https://gorest.co.in/public-api/users"
const token = "Bearer 339706618bfe891f02eb86c87d851ec35d31d6c5ae4c5893bdd375183f111d5d"

function GETrest() {

    let userId = document.getElementById("user-id").value
    const getUrl = `https://gorest.co.in/public-api/users/${userId}`

    let xhr = new XMLHttpRequest()

    xhr.open("GET", getUrl)

    xhr.onload = () => {

        let data = JSON.parse(xhr.response)
        // console.log(data)
        let userId = data.data.id
        let userName = data.data.name
        let userEmail = data.data.email
        let userGender = data.data.gender
        let userStatus = data.data.status
        document.getElementById("get-user-id").innerText = `User id: ${userId}`
        document.getElementById("get-user-name").innerText = `User name: ${userName}`
        document.getElementById("get-user-email").innerText = `User email: ${userEmail}`
        document.getElementById("get-user-gender").innerText = `User gender: ${userGender}`
        document.getElementById("get-user-status").innerText = `User status: ${userStatus}`
    }

    xhr.send()
    document.getElementById("user-id-form").reset()

}



function POSTrest() {

    let generatedUser = {}

    generatedUser.id = document.getElementById("post-user-id").value
    generatedUser.name = document.getElementById("post-user-name").value
    generatedUser.email = document.getElementById("post-user-email").value
    generatedUser.gender = document.getElementById("post-user-gender").value
    generatedUser.status = document.getElementById("post-user-status").value


    let postUser = JSON.stringify(generatedUser)

    let xhr = new XMLHttpRequest();
    xhr.open("POST", baseUrl);
    xhr.setRequestHeader("Authorization", token)
    xhr.setRequestHeader("Content-type", "application/json")

    xhr.send(postUser)

    xhr.onload = () => alert(xhr.response);
    document.getElementById("post-form").reset()
}



function PATCHrest() {

    let userId2 = document.getElementById("patch-user-id").value
    const getUrl = `https://gorest.co.in/public-api/users/${userId2}`

    let editUser = {}

    
        editUser.id = document.getElementById("patch-user-id").value
        editUser.name = document.getElementById("patch-user-name").value
        editUser.email = document.getElementById("patch-user-email").value
        editUser.gender = document.getElementById("patch-user-gender").value
        editUser.status = document.getElementById("patch-user-status").value
    
    
        let editedUser = JSON.stringify(editUser)
    
        let xhr = new XMLHttpRequest()
    
        xhr.open("PATCH", `https://gorest.co.in/public-api/users/${userId2}`)
        xhr.setRequestHeader("Authorization", token)
        xhr.setRequestHeader("Content-type", "application/json-patch+json")
    
        
        xhr.send(editedUser)
        xhr.onload = () => alert(xhr.response);                                                 
        document.getElementById("patch-form").reset()



}



function DELETErest() {

    let del_userId = document.getElementById("delete-user-id").value
    let url = `https://gorest.co.in/public-api/users/${del_userId}`

    let xhr = new XMLHttpRequest()
    xhr.open("DELETE", url)
    xhr.setRequestHeader("Authorization", token)

    xhr.send()

    xhr.onload = () => alert(xhr.response);
    document.getElementById("delete-form").reset()

}