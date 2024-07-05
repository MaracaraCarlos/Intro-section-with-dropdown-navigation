import { createContext, useEffect, useState } from 'react'

export const WidthContext = createContext()

export function WidthProvider ({ children }) {
  const [desktopWidth, setDesktopWidth] = useState(true)
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const showMenu = () => {
    setShowMobileMenu(true)
  }
  const hideMenu = () => {
    setShowMobileMenu(false)
  }

  useEffect(() => {
    const handleResize = window.matchMedia('(min-width: 450px)')

    handleResize.addEventListener('change', (e) => {
      if (e.matches) {
        setDesktopWidth(true)
      } else {
        setDesktopWidth(false)
      }
    })
  }, [])

  return (
    <WidthContext.Provider value={{
      desktopWidth,
      showMenu,
      hideMenu,
      showMobileMenu
    }}
    >
      {children}
    </WidthContext.Provider>
  )
}
