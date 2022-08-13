const { sendMail } = require('../../controllers/api/usersController');

router.post('/send-mail', sendMail)
module.exports = router;