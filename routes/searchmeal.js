const express = require("express");
const path = require("path");
const router = express.Router();


router.get('/',(req,res) => {
    res.render('searchmeal.html')
})
router.get('/',(req,res) => {
    res.render('searchmeal2.js')
})

module.exports = router;

