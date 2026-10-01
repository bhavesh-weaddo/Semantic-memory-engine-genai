import express from 'express'
import MemoryController from '../controllers/Memory.controller.js'
let router = express.Router()

router.post('/', MemoryController.store)
router.post('/search', MemoryController.search)
router.post('/llm-call', MemoryController.llmCall)
router.post('/detect-duplicate',MemoryController.memorySearch)
router.post('/hybrid-search',MemoryController.hybridSearch)

export default router;