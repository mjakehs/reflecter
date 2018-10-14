const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "feedback" ORDER BY "id";`)
    .then(results => {
        res.send(results.rows);
    })
    .catch(err => {
        console.log('Error in /api/feedback get', err);
        res.sendStatus(500);
    })
});

router.post('/', (req, res) => {
    pool.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`, [req.body.feeling, req.body.comprehension, req.body.supported, req.body.comments])
    .then(() => {
        res.sendStatus(201);
    })
    .catch(err => {
        console.log('Error in /api/feedback post', err);
        res.sendStatus(500);
    })
});

router.delete('/', (req, res) => {
    pool.query(`DELETE FROM "feedback"
    WHERE "id"=$1;`, [req.query.id])
    .then(() => {
        res.sendStatus(200);
    })
    .catch(err => {
        console.log('Error in /api/feedback delete', err);
        res.sendStatus(500);
    })
});

router.put('/', (req, res) => {
    pool.query(`UPDATE "feedback"
    SET "flagged"=$1
    WHERE "id"=$2;`, [req.body.flagged, req.query.id])
    .then(() => {
        res.sendStatus(200);
    })
    .catch(err => {
        console.log('Error in /api/feedback delete', err);
        res.sendStatus(500);
    })
});


module.exports = router;