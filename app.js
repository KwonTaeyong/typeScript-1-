var url = 'https://jsonplaceholder.typicode.com/users/1';

var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');
var user = {};


/**
 * @typedef {Object} Address
 * @property {String} street
 * @property {String} city
 */

/**
 * @typedef {Object} User
 * @property {String} name 
 * @property {String} email
 * @property {Address} address
 */

/**
 * @returns {Promise<user>} 
 */

function fetchUser() {
    return axios.get(url);
}

fetchUser().then(function (response) {
    response.address.city
})

function startApp() {
    fetchUser()
    //  .then(function (response) {
    //     user = response.data;
    //     console.log(user);
    //     username.innerText = user[0].name;
    //     email.innerText = user[0].email;
    //     address.innerText = user[0].address.street;
    //  })
    //  .catch(function (error) {
    //     console.log(error);
    //   });
}

startApp();