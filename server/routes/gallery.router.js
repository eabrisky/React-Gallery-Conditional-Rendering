const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
// router.put('/:id', (req, res) => {

//     console.log('got to PUT');
//     console.log(req.params);
//     const galleryId = req.params.id;

//     const queryText = `UPDATE "gallery" SET "likes"=likes+1 WHERE "gallery".id = $1 ;`;

//     pool.query(queryText, [galleryId])
//     .then(result => {
//         res.sendStatus(200)
//     }) // end .then
//     .catch(err => {
//         console.log('error updating likes: ', err);
//         res.sendStatus(500);
//     }) // end .catch, end pool.query

// }); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "gallery" ORDER BY "likes" ASC;`;
    pool.query(queryText)
    .then(response => {
        console.log('Things we got from db: ', response.rows);
        res.send(response.rows);
    }) // end .then
    .catch(error => {
        console.log('error getting gallery from db: ', error);
        res.sendStatus(500);
    }) // end .catch, end pool.query
}); // END GET Route

module.exports = router;