import { Hero } from '../components/sections/Hero'
import { PlatformOverview } from '../components/sections/PlatformOverview'
import { Integrations } from '../components/sections/Integrations'
import { GameMechanics } from '../components/sections/GameMechanics'
import { HRProjectConfigurator } from '../components/sections/HRProjectConfigurator'
import { PlatformAnalytics } from '../components/sections/PlatformAnalytics'
import { CasesTeaser } from '../components/sections/CasesTeaser'
import { FAQ } from '../components/sections/FAQ'
import { FinalCTA } from '../components/sections/FinalCTA'

export function LandingPage() {
  return (
    <>
      <Hero />
      <PlatformOverview />
      <Integrations />
      <GameMechanics />
      <HRProjectConfigurator />
      <PlatformAnalytics />
      <CasesTeaser />
      <FAQ />
      <FinalCTA />
    </>
  )
}
