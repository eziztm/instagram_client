var axios = require('axios');

function getLoginLink() {
    var clientid = "9f26a69647ed45098b123ccdc864d6ee";
    var redirect = "http://localhost:8080/";
    return "https://api.instagram.com/oauth/authorize/?client_id=" + clientid + "&redirect_uri=" + redirect + "&response_type=code";
}

function ping2() {

    var clientid = "9f26a69647ed45098b123ccdc864d6ee";
    var redirect = "http://localhost:8080/";
    var url = "https://api.instagram.com/oauth/authorize/?client_id=" + clientid + "&redirect_uri=" + redirect + "&response_type=code";

    axios.get(url)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

}

function ping() {

    axios.get('https://api.github.com/users/eziztm')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

module.exports = {
    getLoginLink,
    ping,
    ping2
}