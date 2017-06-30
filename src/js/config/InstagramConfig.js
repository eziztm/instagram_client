
var axios = require('axios')
var querystring = require('querystring')

const api_url = 'https://api.instagram.com/v1';
const client_id = 'xx';
const client_secret = 'xx';
const redirect_uri = 'http://localhost:3000/authenticate';

function getLoginURL() {
    return 'https://api.instagram.com/oauth/authorize/?client_id=' + client_id 
    + '&redirect_uri=' + redirect_uri 
    + '&response_type=code'
    + '&scope=follower_list+relationships';
}

function authenticate(code) {
    return axios.post('https://api.instagram.com/oauth/access_token',
        querystring.stringify({
            client_id: client_id,
            client_secret: client_secret,
            grant_type: 'authorization_code',
            redirect_uri: redirect_uri,
            code: code
        }))
}


function getSelfInfo(access_token) {
    return getSelf('/users/self', access_token);
}

function getSelfFollowers(access_token) {
    return getSelf('/users/self/follows', access_token);
}

function getSelfFollowing(access_token) {
    return getSelf('/users/self/followed-by', access_token);
}

function getSelf(path, access_token) {
    return axios.get(api_url + path, {
        params: {
            access_token: access_token
        }
    })
}


module.exports = {
    loginUrl: getLoginURL(),
    authenticate: authenticate,
    getInfo: getSelfInfo,
    getFollowers: getSelfFollowers,
    getFollowing: getSelfFollowing
}