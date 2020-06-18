const express = require('express');

// database access using knex
const knex =  require('../data/dbConfig.js');

const router = express.Router();

// CRUD endpoints

// Create
router.post('/', (req, res) => {

})
 
// Read
router.get('/', (req, res) => {

})

router.get('/:id', (req, res) => {

})

// Update
router.put('/:id', (req, res) => {

})

// Delete
router.delete('/:id', (req, res) => {

})

module.exports = router;