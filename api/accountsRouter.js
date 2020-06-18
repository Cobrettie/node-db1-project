const express = require('express');

// database access using knex
const knex =  require('../data/dbConfig.js');

const router = express.Router();

// CRUD endpoints

// Create
router.post('/', async (req, res) => {
  const accountData = req.body;

  try {
    const numberOfAccounts = await knex('accounts').insert(accountData)
    res.status(201).json(numberOfAccounts);
  } catch (err) {
    console.log("Error: ", err);
    res.status(500).json({
      errorMessage: "Failed to create new account"
    })
  }
})

// Read
// router.get('/', (req, res) => {
//   knex('accounts')
//     .then(accounts => {
//       res.status(200).json(accounts)
//     })
//     .catch(err => {
//       console.log("Error: ", err)
//       res.status(500).json({
//         errorMessage: "Problem with db"
//       })
//     })
// })

router.get('/', async (req, res) => {
  try {
    const accounts = await knex('accounts');
    res.status(200).json(accounts)
  } catch (err) {
    console.log("Error: ", err)
    res.status(500).json({
      errorMessage: "Problem with db"
    })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const account = await knex('accounts').where({
      id: id
    })
    res.status(200).json(account)
  } catch (err) {
    console.log("Error: ", err);
    res.status(500).json({
      errorMessage: "Could not retrieve account"
    })
  }
})

// Update
router.put('/:id', (req, res) => {
  // try{
    
  // } catch (err) {

  // }

})

// Delete
router.delete('/:id', (req, res) => {

})

module.exports = router;