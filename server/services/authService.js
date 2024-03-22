const { User } = require('../models');

exports.getUser = async (email) => {
  try {
    console.log(User);
    const isUserExist = await User.findAll({ where: { email: email } });
    return isUserExist;
  } catch (err) {
    console.error('authService-getUser', err);
  }
};

exports.register = async (name, email, password) => {
  try {
    const newUser = await User.create({ name, email, password });
    return newUser;
  } catch (err) {
    console.error('authService-register', err);
  }
};
