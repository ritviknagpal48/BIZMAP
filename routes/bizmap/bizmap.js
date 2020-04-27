const router = require('express').Router();
const Forum = require('../../models/Forum/Forum');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const jwt = require('jsonwebtoken');
const OAuth2 = google.auth.OAuth2;
const config = require('config');
const oauth2Client = new OAuth2(
  '389790068785-osb9rej502bbdbt6kil1jjrvo825o6fr.apps.googleusercontent.com',
  'AVbe59TwBKQmN-bBU5DrR-Sh',
  'https://developers.google.com/oauthplayground'
);
oauth2Client.setCredentials({
  refresh_token:
    '1//04R3kx2jVZu4ZCgYIARAAGAQSNwF-L9IrCheKCfWnTvdmi6CsbDcZi9ULg2CFTcvJDQgdJJcqYZl6g9oSipnTsdZ_esddSlvVA6I'
});
const accessToken = oauth2Client.getAccessToken();
//discussion forum add message

router.get('/verify_message/:token', async (req, res) => {
  try {
    let obj = jwt.verify(req.params.token, config.get('emailSecret'));
    let id = obj.message.id;
    const map = await Forum.findById(id);
    map.verified = true;
    await map.save();
    return res.status(200).json({
      message: 'verified successfully'
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error
    });
  }
});
router.post('/add_message', async (req, res) => {
  try {
    const newMessage = new Forum({
      content: req.body.content,
      name: req.body.name
    });
    await newMessage.save();

    const messageToken = jwt.sign(
      {
        message: {
          id: newMessage._id
        }
      },
      config.get('emailSecret'),
      {
        // expiresIn: 36000
      }
    );
    const url = `http://localhost:5050/bizmap/verify_message/${messageToken}`;

    const output2 = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <title>New Message</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        />
    
        <style type="text/css"></style>
      </head>
      <body style="background-image: url('bg.jpg')">
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
          <tr>
            <td align="center">
              <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="100%"
                style="max-width: 600px;"
              >
                <tr>
                  <td
                    align="left"
                    style="padding: 0px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; "
                  >
                    <h1
                      style="margin: 0; font-size: 32px; font-weight: 700; letter-spacing: -1px; color:  #3C4E62; line-height: 48px; text-align: center"
                    >
                      New Message
                    </h1>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
    
          <tr>
            <td align="center">
              <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="100%"
                style="max-width: 600px;"
              >
                <tr>
                  <td
                    align="left"
                    style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;"
                  >
                    <p class="text-center" style="margin: 0; color:  #3C4E62">
                      Hi Team, ${newMessage.name} wants to add a new message to the discussion forum
                    </p>
                    <p class="text-center" style="margin: 0; color:  #3C4E62">
                      <span style="font-weight: bold">Message: </span> ${newMessage.content}
                    </p>
                    <p class="text-center" style="margin: 0; color:  #3C4E62">
                      Click on the button below to verify the message
                    </p>
                  </td>
                </tr>
    
                <tr>
                  <td align="left">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td align="center" style="padding: 12px;">
                          <table border="0" cellpadding="0" cellspacing="0">
                            <tr>
                              <td
                                align="center"
                                bgcolor="#1a82e2"
                                style="border-radius: 6px;"
                              >
                                <a
                                  href="${url}"
                                  target="_blank"
                                  style="display: inline-block; padding: 16px 36px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; color: #ffffff; background-color: #4FAC2D; text-decoration: none; border-radius: 6px;"
                                  >Verify</a
                                >
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
    
                <tr>
                  <td
                    align="left"
                    style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;"
                  >
                    <p class="" style="margin: 0; color:  #3C4E62">
                      Cheers,
                    </p>
                    <p class="" style="margin: 0; color:  #3C4E62">
                      Project Aashray
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
    
    
    `;

    let transporter = nodemailer.createTransport({
      // host: 'mail.google.com',
      // port: 587,
      // service: 'Gmail',
      // secure: false, // true for 465, false for other ports
      // auth: {
      //   user: config.get('gmailUsername'), // generated ethereal user
      //   pass: config.get('gmailPassword') // generated ethereal password
      // },
      // tls: {
      //   rejectUnauthorized: false
      // }
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'aashrayproject@gmail.com',
        clientId:
          '389790068785-osb9rej502bbdbt6kil1jjrvo825o6fr.apps.googleusercontent.com',
        clientSecret: 'AVbe59TwBKQmN-bBU5DrR-Sh',
        refreshToken:
          '1//04R3kx2jVZu4ZCgYIARAAGAQSNwF-L9IrCheKCfWnTvdmi6CsbDcZi9ULg2CFTcvJDQgdJJcqYZl6g9oSipnTsdZ_esddSlvVA6I',
        accessToken: accessToken
      }
    });

    // setup email data with unicode symbols
    let mailOptions = {
      from: '"Project Aashray" <aashrayproject@gmail.com>', // sender address
      to: 'aashrayproject@gmail.com', // list of receivers
      subject: 'New Message', // Subject line
      text: 'New Message ',
      html: output2
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return; // console.log(error);
      }
      // console.log('Message sent: %s', info.messageId);
      // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });

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
    const forum = await Forum.find({ verified: true });
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
