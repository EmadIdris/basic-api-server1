'use strict';

const express = require('express');
const Drink = require('../models/DrinkModel');
const drinks = new Drink();

const router = express.Router();

// Route Handlers
router.get('/drinks', getAllDrinks);
router.get('/drinks/:id', getDrink);
router.post('/drinks', createDrink);
router.put('/drinks/:id', updateDrink);
router.delete('/drinks/:id', deleteDrink);

// Get All Records
//     CRUD Operation: Read
//     REST Method: GET
//     Path: /food
//     Returns: An array of objects, each object being one entry from your database

function getAllDrinks(req, res) { 
  const allDrinks = drinks.get();
  res.status(200).json(allDrinks);
}

// Get One Record
//     CRUD Operation: Read
//     REST Method: GET
//     Path: /food/1
//     Returns: The object from the database, which has the id matching that which is in the path

function getDrink(req, res) { 
  const id = parseInt(req.params.id);
  const oneDrink = drinks.get(id);
  res.status(200).json(oneDrink);
}

// Add a Record
//     CRUD Operation: Create
//     REST Method: POST
//     Path: /food
//     Input: JSON Object in the Request Body
//     Returns: The record that was added to the database.
//         You must generate an ID and attach it to the object
//         You should verify that only the fields you define get saved as a record

function createDrink(req, res) { 
  
  console.log(req.body);
  const makeDrink = drinks.post(req.body);
  res.status(200).json(makeDrink);
}

// Update A Record
//     CRUD Operation: Update
//     REST Method: PUT
//     Path: /food/1
//     Input: JSON Object in the Request Body
//     Returns: The object from the database, which has the id matching that which is in the path, with the updated/changed data
//         You should verify that only the fields you define get saved as a record

function updateDrink(req, res) { 
  const id = parseInt(req.params.id);
  const drinkBody = req.body; 
  const updateDrink = drinks.update(id, drinkBody);
  res.status(200).json(updateDrink); 
}

// Delete A Record
//     CRUD Operation: Destroy
//     REST Method: DELETE
//     Path: /food/1
//     Returns: The record from the database as it exists after you delete it (i.e. null)

function deleteDrink(req, res) { 
  const id = parseInt(req.params.id);
  const removeDrink = drinks.delete(id); 
  res.status(200).json(removeDrink); 
}

module.exports = router;