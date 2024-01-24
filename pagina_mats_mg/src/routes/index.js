import { Router } from 'express'
const router = Router()

//forma de crear rutas a otras paginas de forma sencilla
router.get('/', (req, res) => res.render('index', {title: 'Materiales MG'} ))
router.get('/ramir', (req, res) => res.render('ramir'))

export default router