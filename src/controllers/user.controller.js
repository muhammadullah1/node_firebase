const { fetchUsers, addUser, modifyUser, removeUser } = require('../services/user.service');

const getUsers = async (req, res) => {
  try {
    const snapshot = await fetchUsers();
    const list = snapshot.map(({ id, data }) => ({ id, ...data }));
    res.send(list);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Error getting users' });
  }
};

const createUser = async (req, res) => {
  try {
    const data = req.body;
    await addUser(data);
    res.send({ msg: "User Added" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Error creating user' });
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.body.id;
    delete req.body.id;
    const data = req.body;
    await modifyUser(id, data);
    res.send({ msg: "Updated" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Error updating user' });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.body.id;
    await removeUser(id);
    res.send({ msg: "Deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Error deleting user' });
  }
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser
};