require('dotenv').config()
const { Sequelize, Model, DataTypes, QueryTypes } = require('sequelize')
// const express = require('express')
// const app = express()
// app.use(express.json())

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
})

// class Note extends Model {}
// Note.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     content: {
//       type: DataTypes.TEXT,
//       allowNull: false,
//     },
//     important: {
//       type: DataTypes.BOOLEAN,
//     },
//     date: {
//       type: DataTypes.DATE,
//     },
//   },
//   {
//     sequelize,
//     underscored: true,
//     timestamps: false,
//     modelName: 'note',
//   }
// )

// app.get('/api/notes', async (req, res) => {
//   const notes = await Note.findAll()
//   res.json(notes)
// })

// app.post('api/notes', async (req, res) => {
//   try {
//     const note = await Note.create(req.body)
//     res.json(note)
//   } catch (error) {
//     return res.status(400).json({ error })
//   }
// })

const main = async () => {
  try {
    await sequelize.authenticate()
    const blogs = await sequelize.query('SELECT * FROM blogs', {
      type: QueryTypes.SELECT,
    })
    console.log(blogs)
    sequelize.close()
  } catch (error) {
    console.error('Unable to connect to the database: ', error)
  }
}

// const PORT = process.env.PORT || 3001
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`)
// })

main()
