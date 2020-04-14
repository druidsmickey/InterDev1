const jwt = require('jsonwebtoken');
const User = require('../../../models/user');

exports.register = (req, res) => {
    const { username, email, password } = req.body;
    let newUser = null;

    const create = (user) => {
        if(user) {
            throw new Error('username exists');
        } else {
            return User.create(username, email, password);
        }
    }

    const count = (user) => {
        newUser = user;
        return User.count({}).exec();
    }

    const assign = (count) => {
        if(count === 1) {
            return newUser.assignAdmin();
        } else {
            return Promise.resolve(false);
        }
    }

    const respond = (isAdmin) => {
        res.json({
            message: 'registered successfully',
            admin: isAdmin ? true : false
        })
    }

    const onError = (error) => {
        res.status(409).json({
            message: error.message
        })
    }

    User.findOneByUsername(username)
    .findOneByEmail(email)
    .then(create)
    .then(count)
    .then(assign)
    .then(respond)
    .catch(onError);
}

exports.test = (req, res) => {
  res.json({
    message: 'Post Successfully!'
  });
}

exports.login = (req, res) => {
    const { username, password } = req.body;
    const secret = req.app.get('jwt-secret');

    const check = (user) => {
        if(!user) {sss
            throw new Error('login failed');
        } else {
            if(user.verify(password)) {
                const p = new Promise((resolve, reject) => {
                    jwt.sign(
                        {
                            _id: user._id,
                            username: user.username,
                            admin: user.admin
                        }, 
                        secret,
                        (err, token) => {
                            if (err) reject(err)
                            resolve(token) 
                        })
                })
                return p;
            } else {
                throw new Error('login failed');
            }
        }
    }

    const respond = (token) => {
        res.json({
            message: 'logged in successfully',
            token
        })
    }

    const onError = (error) => {
        res.status(403).json({
            message: error.message
        })
    }

    User.findOneByUsername(username)
    .then(check)
    .then(respond)
    .catch(onError);

}
