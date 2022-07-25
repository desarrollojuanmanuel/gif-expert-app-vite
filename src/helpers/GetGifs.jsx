export const getGifs = async (category) => {
    const resp = await fetch(`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=100&api_key=9wJeeGyRE72ynQwYZWraOh5ZEQLuPjQ7`)
    const { data } = await resp.json()
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs
}