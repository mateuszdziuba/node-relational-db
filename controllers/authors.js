const router = require('express').Router()
const sequelize = require('sequelize')
const { Blog } = require('../models')

router.get('/', async (req, res) => {
  const blogs = await Blog.findAll({
    attributes: [
      'author',
      [sequelize.fn('COUNT', sequelize.col('title')), 'articles'],
      [sequelize.fn('sum', sequelize.col('likes')), 'likes'],
    ],
    group: 'author',
  })
  res.json(blogs)
})

module.exports = router
