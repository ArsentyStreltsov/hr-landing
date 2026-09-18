import { AudiencesVariant } from './platform/AudiencesVariant'

export function PlatformOverview() {
  return (
    <section id="capabilities" className="section-pad relative py-16 lg:py-24">
      <div className="container-page">
        <AudiencesVariant />
      </div>
    </section>
  )
}
