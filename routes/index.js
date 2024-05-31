import express from 'express';
const router = express.Router();

router.post('/novo-pedido', async (req, res) => {

});

router.post('/aplicar-desconto', async (req, res) => {

});

router.get('/test-backend', async (req, res) => {
    return res.status(200).json('Backend está funcionando normalmente!')
});



export default router
