import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { IMG } from '../lib/data'
import { Img, Reveal } from './ui/Primitives'
import { CheckIcon, ArrowUpRight } from '../lib/icons'

const SERVICE_OPTIONS = [
  'Kondicionieriaus montavimas',
  'Priežiūra ir valymas',
  'Remontas / gedimo šalinimas',
  'Sistemos keitimas',
  'Konsultacija',
  'Kita',
]
const URGENCY_OPTIONS = ['Skubu — kuo greičiau', 'Per 24 val.', 'Šią savaitę', 'Lankstus laikas']
const LOCATION_OPTIONS = ['1 objektas', '2–5 objektai', '6–10 objektų', 'Daugiau nei 10']

export function ScheduleForm() {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="bg-white px-3 py-10 sm:px-5 md:py-16">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-lg ring-1 ring-black/5">
            <Img
              src={IMG.ctaTech}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-ink-950/88 via-ink-950/78 to-brand-700/45" />

            <div className="relative grid grid-cols-1 gap-6 p-5 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
              {/* left — image panel */}
              <div className="relative min-h-[240px] overflow-hidden rounded-lg ring-1 ring-white/10">
                <Img
                  src={IMG.heroTech}
                  alt="MB Ventalisa specialistas"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-2xl font-semibold leading-tight text-white sm:text-3xl">
                    Užsisakykite
                    <br />
                    paslaugą
                  </h3>
                  <p className="mt-2 text-[13px] text-white/70">
                    Užpildykite formą arba skambinkite — atsakysime greitai
                  </p>
                </div>
              </div>

              {/* right — form */}
              <div className="rounded-lg bg-white p-6 sm:p-7">
                {sent ? (
                  <div className="flex h-full min-h-[320px] flex-col items-center justify-center text-center">
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-brand-100 text-brand-500">
                      <CheckIcon className="h-8 w-8" strokeWidth={2.2} />
                    </span>
                    <h3 className="mt-5 text-2xl font-semibold tracking-tight text-ink-900">
                      Užklausa gauta
                    </h3>
                    <p className="mt-2 max-w-xs text-[14px] text-ink-500">
                      Ačiū! Susisieksime su jumis per vieną darbo dieną ir suderinsime
                      patogų laiką.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="mt-6 rounded-lg px-5 py-3 text-sm font-medium text-ink-900 ring-1 ring-hairline transition-colors hover:bg-mist-50"
                    >
                      Siųsti dar kartą
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      setSent(true)
                    }}
                  >
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <Field label="Vardas, pavardė" required>
                        <input required type="text" placeholder="Vardenis Pavardenis" className="input" />
                      </Field>
                      <Field label="El. paštas" required>
                        <input required type="email" placeholder="vardas@pastas.lt" className="input" />
                      </Field>
                      <Field label="Telefonas" required>
                        <input required type="tel" placeholder="+370 6XX XXXXX" className="input" />
                      </Field>
                      <Field label="Įmonė (jei aktualu)">
                        <input type="text" placeholder="Įmonės pavadinimas" className="input" />
                      </Field>
                    </div>

                    <div className="mt-4">
                      <Field label="Reikalinga paslauga" required>
                        <select required defaultValue="" className="input appearance-none">
                          <option value="" disabled>
                            Pasirinkite paslaugą
                          </option>
                          {SERVICE_OPTIONS.map((o) => (
                            <option key={o}>{o}</option>
                          ))}
                        </select>
                      </Field>
                    </div>

                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <Field label="Skubumas" required>
                        <select required defaultValue="" className="input appearance-none">
                          <option value="" disabled>
                            Pasirinkite skubumą
                          </option>
                          {URGENCY_OPTIONS.map((o) => (
                            <option key={o}>{o}</option>
                          ))}
                        </select>
                      </Field>
                      <Field label="Objektų skaičius" required>
                        <select required defaultValue="" className="input appearance-none">
                          <option value="" disabled>
                            Pasirinkite objektų skaičių
                          </option>
                          {LOCATION_OPTIONS.map((o) => (
                            <option key={o}>{o}</option>
                          ))}
                        </select>
                      </Field>
                    </div>

                    <label className="mt-5 flex items-start gap-2.5 text-[12.5px] leading-relaxed text-ink-500">
                      <input
                        required
                        type="checkbox"
                        className="mt-0.5 h-4 w-4 shrink-0 rounded border-hairline accent-brand-500"
                      />
                      <span>
                        Sutinku, kad mano pateikti duomenys būtų tvarkomi siekiant atsakyti į
                        užklausą pagal{' '}
                        <Link
                          to="/privacy"
                          className="font-medium text-brand-600 underline underline-offset-2 hover:text-brand-700"
                        >
                          privatumo politiką
                        </Link>
                        .
                      </span>
                    </label>

                    <div className="mt-6 flex flex-wrap items-center gap-4">
                      <button
                        type="submit"
                        className="group inline-flex items-center gap-2.5 rounded-lg bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_-10px_rgba(25,141,212,0.65)] transition-all hover:bg-brand-600 hover:shadow-[0_16px_36px_-10px_rgba(25,141,212,0.75)] active:scale-[0.98]"
                      >
                        Gauti pasiūlymą
                        <span className="grid h-6 w-6 place-items-center rounded bg-white/20 transition-transform group-hover:translate-x-0.5">
                          <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
                        </span>
                      </button>
                      <span className="inline-flex items-center gap-2 text-[12px] text-ink-400">
                        <span className="h-2 w-2 rounded-full bg-green-500" />
                        Jūsų duomenys saugomi ir konfidencialūs
                      </span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Field({
  label,
  required,
  children,
}: {
  label: string
  required?: boolean
  children: ReactNode
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[12.5px] font-medium text-ink-700">
        {label} {required && <span className="text-brand-500">*</span>}
      </span>
      {children}
    </label>
  )
}
