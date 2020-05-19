const axios = require('axios').default;


const getLocationLatLon = async (address) => {

    const addressDetails = `${address}`.toString();

    const encodedURL = encodeURI(addressDetails);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: {
            'X-RapidAPI-Key': '073ecddb8amsh4bff21418462f0dp169904jsn0212ddb3aff5'
        }
    });
    
    const response = await instance.get();
    
    const data = response.data.Results[0];

    if(data != undefined){
        const addressDescription = data.name; 
        const addressLat  = data.lat; 
        const addressLon  = data.lon; 
        
        return {
            addressDescription, 
            addressLat, 
            addressLon
        }

    }else{
        throw new Error(`No hay resultados para ${address}`);
    }
}

module.exports = {
    getLocationLatLon 
}

