const router = require('express').Router();
const xlsxFile = require('read-excel-file/node');

router.get('/get_excel_file', async (req, res) => {
  xlsxFile('./data.xlsx').then(rows => {
    // console.log(rows);
  });
});

module.exports = router;
