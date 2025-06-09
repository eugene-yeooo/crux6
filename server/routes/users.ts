import express from 'express'
import * as db from '../db/users.ts'

const router = express.Router()

// GET /api/users/:username
router.get('/:username', async (req, res) => {
  try {
    const username = req.params.username
    const user = await db.getUserByUsername(username)
    if (!user) return res.status(404).json({ message: 'User not found' })

    res.json({ user })
  } catch (err) {
    res.status(500).json({ message: 'Error fetching user' })
  }
})

export default router
