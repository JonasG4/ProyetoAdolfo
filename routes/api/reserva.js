const router = require('express').Router();
const Reserva = require('../../models/Reservas');

router.get('/:usuario', async(req, res) => {
    const response = await Reserva.find({ Usuario: req.params.usuario })
    try {
        res.json(response)
    } catch (error) {
        res.status(400).json({
            error: true,
            message: "No se pudo procesar la consulta"
        })
    }
    res.json()
})

router.get('/admin/:estado', async(req, res) => {
    const { estado } = req.params
    const response = await Reserva.find({ Estado: estado })
    console.log(req.params.estado)
    try {
        res.json(response)
    } catch (error) {
        res.status(400).json({
            error: true,
            message: "No se pudo procesar la consulta"
        })
    }
    res.json()
})

router.post('/add', async(req, res) => {
    try {
        const newReserva = await new Reserva(req.body)
        newReserva.save();

        res.json({
            error: null,
            message: "Peticion agregada con éxito"
        })
    } catch (error) {
        res.status(400).json({
            error: true,
            message: 'Peticion no procesada'
        })
    }

})

router.put('/:id', async(req, res) => {
    const { Estado } = req.body
    await Reserva.findByIdAndUpdate(req.params.id, { Estado: Estado })
})


module.exports = router;