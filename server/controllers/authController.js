const authService = require('../services/authService');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
  try {
    let { name, email, password, passwordConfirm } = req.body;
    console.log(req.body);

    if (!name || !email || !password || !passwordConfirm) {
      return res.status(400).json({
        message: 'Please, fill out the form',
      });
    } else if (password !== passwordConfirm) {
      return res.status(400).json({
        message: 'Passwords do not match',
      });
    }

    const isUserExist = await authService.getUser(email);

    if (isUserExist.length > 0) {
      return res.status(200).json({
        message: 'That email is already in use',
      });
    }

    password = await bcrypt.hash(password, 8);
    console.log(password);

    const newUser = await authService.register(name, email, password);

    return res.status(200).json({
      message: 'User registered',
      data: newUser,
    });
  } catch (err) {
    console.error('authContoller-register', err);
  }
};
