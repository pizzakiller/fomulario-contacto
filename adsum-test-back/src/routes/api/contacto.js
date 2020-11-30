const router = require('express').Router()
const { Contacto }  = require('../../database')
router.get('/', (req, res) => {
    res.send("funka")
    })

router.post('/agregar', async (req, res)=>{
    console.log(req)
   const contacto = await Contacto.create(req.body)
   res.json(contacto)
})

module.exports = router
