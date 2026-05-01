const { Router } = require('express')
const {
  listarPeliculas,
  obtenerPelicula,
  crearPelicula,
  actualizarPelicula,
  eliminarPelicula,
  listarResenas,
  crearResena,
  obtenerEstadisticas,
  actualizarParcial,
  calificarPelicula
} = require('../controllers/peliculasController')

const router = Router()

router.get('/', listarPeliculas)
router.get('/:id', obtenerPelicula)
router.post('/', crearPelicula)
router.post('/:id/calificar', calificarPelicula)
router.put('/:id', actualizarPelicula)
router.delete('/:id', eliminarPelicula)
router.patch('/:id', actualizarParcial)

router.get('/:id/resenas', listarResenas)
router.post('/:id/resenas', crearResena)

module.exports = router
