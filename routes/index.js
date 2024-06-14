import express from 'express';
const router = express.Router();

router.get('/test-backend', async (req, res) => {
    return res.status(200).json('Backend está funcionando!')
});

router.get('/users', async (req, res) => {
    
})

export default router
