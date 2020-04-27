const router = require('express').Router();
const Forum = require('../../models/Forum/Forum');

//discussion forum add message
router.post('/add_message', async (req, res) => {
  try {
    const newMessage = new Forum({
      content: req.body.content,
      Date: req.body.Date
    });
    await newMessage.save();
    return res.status(200).json({
      message: 'successfully added'
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: error
    });
  }
});

router.post('/get_messages', async (req, res) => {
  try {
    const forum = await Forum.find({});
    return res.status(200).json({
      messages: forum
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: error
    });
  }
});

module.exports = router;
