const API_KEY = "b20e9c6b793d8fcd8ea3cc4618ea4ee8"

const requests = {
    fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated : `/discover/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`, 
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US`,
    fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US`,
    fetchMyList: `/movie/my_list?api_key=${API_KEY}&language=en-US`,
}

export default requests;

// https://api.themoviedb.org/3

// https://api.themoviedb.org/3/discover/tv?api_key=b20e9c6b793d8fcd8ea3cc4618ea4ee8&with_networks=213

//https://api.themoviedb.org/3/movie/343611?api_key=b20e9c6b793d8fcd8ea3cc4618ea4ee8