// call API function
// use to fetch user contacts 
// input  : baseURL and path 
// output : response in json format
export default async function callAPI(baseURL, path) {
    return fetch(`${baseURL}/${path}`)
        .then(response => {
        return response.json();
    })
    .catch(error => {
        console.error(error);
    })
}