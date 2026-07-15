import { Router } from 'express'
import { sendContactEmail } from './contact.controller.js'

const router = Router()

router.post('/', sendContactEmail)

export default router
