const paginate = (followers) => {
    const perPages = 12;
    const newPage = Math.ceil(followers.length / perPages)
    const newFollowers = Array.from({ length: newPage }, (_, index) => {
        const start = index * perPages
        return followers.slice(start, start + perPages)
    })
    return newFollowers
}

export default paginate
