const getUserById = (req, res) => {
    const id = req.params.id;
    res.send('This is user with id: ' + id);
}

module.exports = {
    getUserById
}