const db = require('../config/db');
const User = db.User;

/** Get a specific user from the database */
exports.get = async (req, res) => { 
    console.log("I MADE IT HERE")
    const id = req.params.id;
    const user = await User.findAll({
        where: {
            id: id
        }
    });

    if (!user) return res.status(404).send("User not found");
    return res.status(200).send(user);
}

/** Get all users from the database */
exports.getAll = async (req, res) => {
    const users = await User.findAll();
    return res.status(200).send(users);
}

/** Handle the login sequence for a user */
exports.login = async (req, res) => { }

/** Create a new user */
exports.create = async (req, res) => {
    const newUser = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    newUser.save();
    return res.status(200).send(newUser);
}

/** Edit an existing user */
exports.edit = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.update(req.body, {
            where: {
                id: id
            }
        });
        return res.status(200).send("User updated");
    } catch (error) {
        return res.status(500).send(`Error updating user: ${error}`);
    }
}

/** Delete a user from the database */
exports.delete = async (req, res) => {
    const id = req.params.id;
    try {
        await User.destroy({
            where: {
                id: id
            }
        });
        return res.status(200).send("User deleted");
    } catch (error) {
        return res.status(500).send(`Error deleting user: ${error}`);
    }
}