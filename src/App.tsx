import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ContactModalProvider } from './context/ContactModalContext'
import { ContactModal } from './components/layout/ContactModal'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { ScrollToHash } from './components/layout/ScrollToHash'
import { CasesPage } from './pages/CasesPage'
import { LandingPage } from './pages/LandingPage'

function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <ContactModalProvider>
      <ScrollToHash />
      <div className="min-h-screen overflow-x-hidden">
        <Header />
        <main>{children}</main>
        <Footer />
        <ContactModal />
      </div>
    </ContactModalProvider>
  )
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route
          path="/"
          element={
            <AppShell>
              <LandingPage />
            </AppShell>
          }
        />
        <Route
          path="/cases"
          element={
            <AppShell>
              <CasesPage />
            </AppShell>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
