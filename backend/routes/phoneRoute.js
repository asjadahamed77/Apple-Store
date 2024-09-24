import express from 'express'
import { addPhone, editPhone, getPhone, removePhone, viewPhone } from '../controllers/phoneController.js'
import upload from '../middleware/multer.js'

const phoneRouter = express.Router()

phoneRouter.post('/add',upload.array('phoneImage', 8),addPhone)
phoneRouter.delete('/remove/:id',removePhone)
phoneRouter.post('/get',getPhone)
phoneRouter.put('/edit/:id',editPhone)
phoneRouter.get('/view',viewPhone)

export default phoneRouter