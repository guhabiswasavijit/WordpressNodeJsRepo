import axios from "axios";

const WP_SERVICE_URL = 'http://www.devilsparadise.com:8081/index.php?rest_route=/fetchCustomTables/v1/author=admin';

axios.get(WP_SERVICE_URL).then(response => {
    console.log("got nearby hotels:",response.data);
}).catch(err => {
    console.log("error in request", err);
});