import { useEffect } from 'react'
import { checkBackendHealth } from '../../services/api'

export default function ColdStartNotice() {
  useEffect(() => {
    checkBackendHealth().catch(() => {})
  }, [])

  return null
}
