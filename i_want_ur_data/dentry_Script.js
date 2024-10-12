


var users= [];

class User {
    constructor(uname) {
      this._username = uname;
      this._current_o_bit = null;
      this._num_prev_attempts = 0;
      this._prev_attempt_list = [4];
    }

    add_attempt(pwd){
        if (this._num_prev_attempts < 4){
            this._prev_attempt_list[this._num_prev_attempts] = pwd;
            this._num_prev_attempts +=1;
        } else {
            return -1;
        }
    }

    get uname() {return this._username};
    get obit() {return this._current_o_bit};
    set obit(no_bit) {this._current_o_bit = no_bit;}
  }

//CLIENT SECTION

var my_last_o_bit = null;
var currUname = "";

const form = document.getElementById("loginForm");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = form.elements.username.value;
    const password = form.elements.password.value;
    console.log("Username:", username);
    console.log("Password:", password);
    if (client_IsGoodUname(username)){
        client_SubmitPwd(username, password);
    } else {
        client_display({1: "Please enter your given username."});
    }
});

const client_display = (message_list) => {
    for (m in message_list){
        console.log(message_list.get(m));
    }
}

const client_IsGoodUname = (username) => {
    return (username in ["ben", "tyler"]);
}

const client_SubmitPwd = (username, password) => {
    
}

const client_onSubmitUname = (username) => {
    if (currUname){ return true;}
    else {
        no_bit = request_new_session(username);
        if (no_bit > 0) {
            my_last_o_bit = no_bit;
            currUname = username;}
        else {
            client_display({0: "I think you are being naughty.", 5: "Wait for a few seconds and then try again."});
            return false;
        }
    }
}

const client_onSubmitPassword = (pwd) => {
    servResp = server_requestAuth(currUname, my_last_o_bit, pwd, thresh);
    if (servResp === "success"){
        client_display({0: "Login Successful."});
    }
    
}


const suttff = (dfd) => {
    const fs = require('fs');

// Read the JSON file
const jsonData = fs.readFileSync('data.json');

// Parse the JSON data into an object
const data = JSON.parse(jsonData);

// Create a new user object with a username, password, and identifier
const newUser = {
  username: 'user3',
  password: 'password3',
  identifier: 1234
};

// Add the new user object to the users array
data.users.push(newUser);

// Convert the updated data object to a JSON string
const updatedData = JSON.stringify(data, null, 2);

// Write the updated data back to the JSON file
fs.writeFileSync('data.json', updatedData);

console.log('Data written to file successfully!');

}
//SERVER SECTION

const open_user_session = (uname) => {
    let found_bool = false;

    for (user in users){
        if (user.uanme === uname) {
            found_bool = true;
            if (user.obit != null){
                return -1;
            }
            o_bit = Math.random() * 30;
            newUser.obit= o_bit;
            return o_bit;
        }
    }

    if (!found_bool){
        newUser = new User(uname);
        no_bit = Math.random() * 30;
        newUser.obit = no_bit;
        return no_bit;
    }
}

const process_password = (uname, o_bit, password) => {
    
    for (user in users){
        if (user.uname === uname){
            if (user.obit === o_bit){
                user.add_attempt(password);
                prob_of_attempt = get_prob(user.prev_attempts, o_bit);
                return prob_of_attempt;
            } else {
                return -1;
            }
        }
    }
    return -1;
}

const get_prob = (password_list, o_bit, thresh) => {
    result = Math.random();
    if (result > thresh){
        return true;
    } else {

    }
    return (Math.random())
}