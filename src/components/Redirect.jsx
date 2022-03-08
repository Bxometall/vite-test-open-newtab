import { useEffect } from 'react'

const Redirect = ({ url, text }) => {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = url || 'https://www.google.com/'
    }, 1000)
  }, [])

  return <h2>{text}</h2>
}

export default Redirect
