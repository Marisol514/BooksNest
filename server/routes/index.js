const router = require('express').Router();
const path = require('path');

// Example route
router.get('/api/test', (req, res) => {
    res.json({ message: "Test route works!" });
});

module.exports = router;
