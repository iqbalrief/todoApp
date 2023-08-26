
const express = require('express');
const router = express.Router();
const {authJwt} = require("../middleware");
const indexCtrl = require("../controllers/index.Controller");


router.post('/', authJwt.saveToken, indexCtrl.TodosCtrl.CreateTodos )
router.put('/:id', authJwt.saveToken, indexCtrl.TodosCtrl.updateTodos )
router.get('/', authJwt.saveToken, indexCtrl.TodosCtrl.getAllTodos )
router.get('/:id', authJwt.saveToken, indexCtrl.TodosCtrl.getIdTodos )
router.delete('/:id', authJwt.saveToken, indexCtrl.TodosCtrl.deleteTodos )





module.exports = router