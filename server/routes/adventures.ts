import express from 'express'
import * as db from '../db/adventures'

const router = express.Router()

// GET /api/users/:username/adventures
router.get('/users/:username/adventures', async (req, res) => {
  try {
    const username = req.params.username
    const adventures = await db.getAdventuresByUsername(username)
    res.json({ adventures })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Error fetching adventures' })
  }
})

export default router
