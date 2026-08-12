import { buildVsPlatform } from '../../data/comparison'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function BuildVsPlatform() {
  return (
    <section className="section-pad py-16 lg:py-24">
      <div className="container-page">
        <SectionHeading
          title="Не тратьте бюджет на повторную разработку стандартных механик"
          subtitle="Готовые модули сокращают объём разработки стандартных функций. Уникальные требования и интеграции оцениваются отдельно."
        />
        <Reveal className="mt-8 overflow-x-auto rounded-[1.5rem] border border-line bg-white shadow-soft">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-paper-2 text-ink">
              <tr>
                <th className="px-4 py-3 font-semibold">Функция</th>
                <th className="px-4 py-3 font-semibold">Разработка с нуля</th>
                <th className="px-4 py-3 font-semibold">Наша платформа</th>
              </tr>
            </thead>
            <tbody>
              {buildVsPlatform.map((row) => (
                <tr key={row.feature} className="border-t border-line">
                  <td className="px-4 py-3 font-medium">{row.feature}</td>
                  <td className="px-4 py-3 text-muted">{row.custom}</td>
                  <td className="px-4 py-3 font-semibold text-brand">{row.platform}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  )
}
