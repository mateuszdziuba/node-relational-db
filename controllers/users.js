const router = require('express').Router()

const { User, Note, Blog } = require('../models')

router.get('/', async (req, res) => {
  const users = await User.findAll({
    include: [
      {
        model: Note,
        attributes: { exclude: ['userId'] },
      },
      { model: Blog },
    ],
  })
  res.json(users)
})

router.post('/', async (req, res) => {
  try {
    const user = await User.create({
      ...req.body,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    res.json(user)
  } catch (error) {
    return res.status(400).json({ error })
  }
})

router.get('/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id)
  if (user) {
    res.json(user)
  } else {
    res.status(404).end()
  }
})

router.put('/:username', async (req, res) => {
  const user = await User.findOne({ where: { username: req.params.username } })
  if (user) {
    user.username = req.body.username
    user.updatedAt = new Date()
    await user.save()
    res.json(user)
  } else {
    res.status(404).end()
  }
})

module.exports = router
