import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function AccessibleNavigationAnnouncer() {
  const [message, setMessage] = useState('')
  const location = useLocation()

  useEffect(() => {
    // ignore the /
    //added cleanups so that when the component unmounts does not cause memory leaks (it was this time in console) or any other unexpected behaviour
    // let timeoutId;
    if (location.pathname.slice(1)) {
      // make sure navigation has occurred and screen reader is ready
      setTimeout(() => setMessage(`Navigated to ${location.pathname.slice(1)} page.`), 500)
    } else {
      setMessage('')
    }
    // return () => {
    //   // Clear the timeout when the component unmounts
    //   clearTimeout(timeoutId);
    // };
  }, [location])

  return (
    <span className="sr-only" role="status" aria-live="polite" aria-atomic="true">
      {message}
    </span>
  )
}

export default AccessibleNavigationAnnouncer;



