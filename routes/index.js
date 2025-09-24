import express from 'express';
const router = express.Router();

router.get('/hello', (req, res) => {
    res.json({ message: 'Hello from the API route!' });
});
router.get('/ip', (req, res) => {
    const clientIp = req.connection.remoteAddress;
  console.log('Client IP:', clientIp);
  res.json({ message: 'Hello from the API route!', ip: clientIp });
});

export default router;