// function fetchById(movieId){
//     return fetch(`http://localhost:3000/movies${movieId}`)
//     .then( response => response.json())

// }

// fetchById(7)

const BASE_URL = 'http://localhost:3000'

const newMovie1 = {

        title: "HTML",
        director: "CSS",
        genres: ["JS"],
        rating: 8
}


// function createMovie(newMovie){
//     const options = {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify(newMovie)
//     }

//     return fetch(`${BASE_URL}/movies`, options).then(response => response.json())
// }

// createMovie(newMovie1)


// function deleteMovieById(id){
//     const options = {
//         method: 'DELETE',
        
//     }
//     return fetch(`${BASE_URL}/movies/${id}`, options).then(response => response.json())
// }

// deleteMovieById('6c85')

updates ={
    title:"52"
}


function updateMovieById(id, updates){
    const options ={
        method:'PATCH',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(updates)
    }
    return fetch(`${BASE_URL}/movies/${id}`, options).then(response => response.json())
}

updateMovieById("0e04", updates)