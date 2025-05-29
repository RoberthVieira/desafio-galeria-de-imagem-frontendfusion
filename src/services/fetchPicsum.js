const url = 'https://picsum.photos/v2/list?page=1&limit=10';
export default function fetchPicsum(){
    return fetch(url)
        .then(response => response.json())
        .catch(error => {
            console.log('Error:', error);
            throw error;
        })
}
