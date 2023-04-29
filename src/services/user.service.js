// services.js

const User = require("../configs/firebase.config");

async function fetchUsers() {
  const snapshot = await User.get();
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

async function addUser(data) {
  await User.add({ data });
}

async function modifyUser(id, data) {
  delete data.id;
  await User.doc(id).update(data);
}

async function removeUser(id) {
  await User.doc(id).delete();
}

module.exports = {
  fetchUsers,
  addUser,
  modifyUser,
  removeUser
};
