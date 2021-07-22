const { Router } = require('express'); 
const { clima  } = require('../controllers/clima');

const router = Router(); 

router.get('/', clima );



module.exports = router; 