import Router from 'express'
import OrgController from './OrgController.js'

const router = new Router()

router.use("/api")

router.post('/get_data', OrgController.get_data)

export default router