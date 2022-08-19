const apiConfig = {
    baseUrl : 'https://api.themoviedb.org/3/',
    apiKey:'ec16b9cc33cbf1bc0fd093a34f196a38',
    orginalImage:(imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image:(imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`

}

export default apiConfig