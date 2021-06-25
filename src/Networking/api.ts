const axios = require('axios');

class Api {
    static async GET(external_api: String) {
        const res = await axios
            .get(external_api)
            .then((response: any) => {
                return response;
            })
            .catch((error: Error) => {
                console.log(error);
            });

        return res.data;
    }
}

export default Api;
