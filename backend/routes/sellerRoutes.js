const express = require('express');
const { createseller, updateseller, signuprequest, loginseller, deleteseller, addrequest } = require('../controller/SellerController');
const { isAutharization, autherizesrole, isAdmin, isSeller } = require('../middleware/auth');
const app = express.Router()



// seller Routes
const CreateSeller = app.post('/new/seller',createseller)
const UpdateSeller = app.put('/update/seller/:id',updateseller)
const LoginSeller = app.post('/login/seller',loginseller)
const DeleteSeller = app.post('/delete/seller/:id', isAdmin , deleteseller)
const AddProdRequest = app.post('/addprod/:id' ,isSeller, addrequest)

// seller sign up request
const SignUpSeller = app.put('/request/signup',signuprequest)




module.exports = { CreateSeller ,SignUpSeller ,LoginSeller , DeleteSeller , AddProdRequest }