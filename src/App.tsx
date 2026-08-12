import { ContactModalProvider } from './context/ContactModalContext'
import { ContactModal } from './components/layout/ContactModal'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { AdminDashboard } from './components/sections/AdminDashboard'
import { Analytics } from './components/sections/Analytics'
import { BuildVsPlatform } from './components/sections/BuildVsPlatform'
import { Cases } from './components/sections/Cases'
import { CustomBranding } from './components/sections/CustomBranding'
import { EmployeeJourney } from './components/sections/EmployeeJourney'
import { FAQ } from './components/sections/FAQ'
import { FinalCTA } from './components/sections/FinalCTA'
import { GameMechanics } from './components/sections/GameMechanics'
import { GamificationSystem } from './components/sections/GamificationSystem'
import { Hero } from './components/sections/Hero'
import { HRProjectConfigurator } from './components/sections/HRProjectConfigurator'
import { Integrations } from './components/sections/Integrations'
import { LiveExperience } from './components/sections/LiveExperience'
import { OfflineVsPlatform } from './components/sections/OfflineVsPlatform'
import { Personalization } from './components/sections/Personalization'
import { PlatformOverview } from './components/sections/PlatformOverview'
import { PortalComparison } from './components/sections/PortalComparison'
import { Services } from './components/sections/Services'
import { UseCases } from './components/sections/UseCases'
import { YearRoundPlatform } from './components/sections/YearRoundPlatform'

export default function App() {
  return (
    <ContactModalProvider>
      <div className="min-h-screen overflow-x-hidden">
        <Header />
        <main>
          <Hero />
          <OfflineVsPlatform />
          <UseCases />
          <PlatformOverview />
          <EmployeeJourney />
          <GameMechanics />
          <LiveExperience />
          <GamificationSystem />
          <Integrations />
          <HRProjectConfigurator />
          <Personalization />
          <CustomBranding />
          <AdminDashboard />
          <Analytics />
          <Cases />
          <YearRoundPlatform />
          <PortalComparison />
          <BuildVsPlatform />
          <Services />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
        <ContactModal />
      </div>
    </ContactModalProvider>
  )
}
