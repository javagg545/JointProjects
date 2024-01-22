import { Router } from 'express'
const router = Router()

//forma de crear rutas a otras paginas de forma sencilla
router.get('/', (req, res) => res.render('index', {title: 'Materiales MG'} ))
router.get('/about', (req, res) => res.render('about'))
router.get('/contact', (req, res) => res.render('contact'))

export default router