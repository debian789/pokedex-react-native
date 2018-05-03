export const fetchDataServices = (url) => {
    return fetch(url)
    .then(response => {
        return Promise.all([response, response.json()])
    })
}