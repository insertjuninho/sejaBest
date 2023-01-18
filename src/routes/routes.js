const express = require('express');
const router = express.Router();
 const controller = require('../controller/indexController'); 

router.get("/", (req, res) => {
    res.send('SEJA BEM VINDO A REST CRUD API, VOCÊ ESTÁ USANDO A VERSÃO V:1.0.0 E NO FUTURO NÂO TÂO DISTANTE IRÁ TER NOVAS VERSÕES');
})
router.post('/create', controller.create);
router.get('/full/:id', controller.full);
router.put('/update/:id', controller.update);
router.delete('/delete/:id', controller.delete);

module.exports = router
