const router = require('express').Router();
const User = require('../../models/users');
const Joi = require('@hapi/joi')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const schemaRegister = Joi.object({
    Nombre: Joi.string().min(3).max(255).required(),
    Usuario: Joi.string().min(3).max(255).required(),
    Password: Joi.string().min(6).max(255).required()
})

const schemaLogin = Joi.object({
    Usuario: Joi.string().min(3).max(255).required(),
    Password: Joi.string().min(6).max(255).required()
})

router.get('/:usuario', async(req, res) => {
    const response = await User.findOne({ Usuario: req.params.usuario })
    res.json(response)
});

/* ---------------------------LOG IN---------------------------------------------------------*/
router.post('/login', async(req, res) => {
    const { error } = schemaLogin.validate(req.body)
    if (error) {
        return res.status(400).json({
            error: error.details[0].message
        })
    }

    const user = await User.findOne({ Usuario: req.body.Usuario })
    if (!user) {
        return res.status(400).json({
            error: true,
            message: 'Usuario no registrado'
        })
    }

    const passvalida = await bcrypt.compare(req.body.Password, user.Password)
    if (!passvalida) {
        return res.status(400).json({ error: true, message: 'Contraseña incorrecta' })
    }

    const token = jwt.sign({
        Nombre: user.Nombre,
        Role: user.Role,
        Usuario: user.Usuario,
        id: user._id
    }, process.env.TOKEN_SECRET)

    res.header('auth-token', token).json({
        error: null,
        data: { token }
    })
})


/*---------------------------SIGN IN---------------------------------------------------------*/
router.post('/registrar', async(req, res) => {
    const { error } = schemaRegister.validate(req.body)
    if (error) {
        return res.status(400).json({
            error: error.details[0].message
        })
    }

    const existeUsuario = await User.findOne({ Usuario: req.body.Usuario })
    if (existeUsuario) {
        return res.status(400).json({
            error: true,
            message: 'El Nombre de Usuario no está disponible'
        })
    }

    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.Password, salt)
    const user = new User({
        Nombre: req.body.Nombre,
        Usuario: req.body.Usuario,
        Password: password
    })
    try {
        const userDB = await user.save()
        res.json({
            error: null,
            data: userDB
        })

    } catch (error) {
        res.status(400).json(error)
    }
})



module.exports = router;