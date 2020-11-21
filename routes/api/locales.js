const router = require('express').Router();
const local = require('../../models/local')

router.get('/', async(req, res) => {
    const response = await local.find()
    res.json(response)
})

router.get('/:id', async(req, res) => {
    const response = await local.findById(req.params.id)
    res.json(response)
})
router.get('/promo/:dia', async(req, res) => {
    const response = await local.find({ PromoDia: req.params.dia })
    try {
        console.log('hoal')
        res.json(response)
    } catch (error) {
        res.status(400).json({
            error: true,
            message: "No hay promociones para este día"
        })
    }

})

module.exports = router