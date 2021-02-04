export const getMovies = async (genre) => {
    const response = await fetch(`https://demo2092094.mockable.io/moodmovie/${genre}`);
    const json = await response.json();
    return json

};