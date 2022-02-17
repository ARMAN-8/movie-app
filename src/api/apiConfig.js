const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '85e4f34c23fa6b469fdb86b539e72d4c',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig
