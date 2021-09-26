
export const getImage = (path) => {
    const imgName = path.replace('https://minio.thecoffeehouse.com/image/menufrontend/', '')
    return `https://api.thecoffeehouse.com/${imgName}`
}