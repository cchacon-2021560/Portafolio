import { useState, useCallback, createContext, useContext } from 'react'
import es from '../i18n/es.json'
import en from '../i18n/en.json'

const translations = { es, en }

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('lang') || 'es'
  })

  const toggleLanguage = useCallback(() => {
    setLanguage(prev => {
      const next = prev === 'es' ? 'en' : 'es'
      localStorage.setItem('lang', next)
      return next
    })
  }, [])

  const t = useCallback((key) => {
    const keys = key.split('.')
    let value = translations[language]
    for (const k of keys) {
      value = value?.[k]
    }
    return value ?? key
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}
