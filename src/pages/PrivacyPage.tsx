import { Navbar } from '../components/Navbar'
import { Seo } from '../components/Seo'
import { Footer } from '../components/Footer'
import { Reveal, SectionTag } from '../components/ui/Primitives'
import { BRAND } from '../lib/data'

const UPDATED = '2026-06-25'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-9">
      <h2 className="text-xl font-semibold tracking-tight text-ink-900 sm:text-2xl">{title}</h2>
      <div className="mt-3 space-y-3 text-[14px] leading-relaxed text-ink-500">{children}</div>
    </div>
  )
}

export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Privatumo politika — MB Ventalisa"
        description="MB Ventalisa privatumo politika: kokius asmens duomenis renkame per kontaktinę formą, kokiu tikslu juos tvarkome ir kokios yra jūsų teisės."
      />
      <Navbar />
      <main>
        <section className="bg-white px-5 pt-12 pb-6 md:pt-16">
          <div className="mx-auto max-w-3xl">
            <Reveal className="flex flex-col items-center text-center">
              <SectionTag>Privatumas</SectionTag>
              <h1 className="mt-6 text-4xl font-semibold tracking-tightest text-ink-900 sm:text-5xl">
                Privatumo politika
              </h1>
              <p className="mt-4 text-[13px] text-ink-400">Atnaujinta: {UPDATED}</p>
            </Reveal>
          </div>
        </section>

        <section className="bg-white px-5 pb-16">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <p className="text-[14px] leading-relaxed text-ink-500">
                Ši privatumo politika paaiškina, kaip {BRAND.name} tvarko asmens duomenis,
                kuriuos pateikiate naudodamiesi šia svetaine ar kontaktine forma. Saugome jūsų
                privatumą ir duomenis tvarkome laikydamiesi Bendrojo duomenų apsaugos
                reglamento (BDAR) reikalavimų.
              </p>

              <Section title="1. Duomenų valdytojas">
                <p>
                  Duomenų valdytojas — {BRAND.name}.
                  <br />
                  Tel.: {BRAND.phone}
                  <br />
                  El. paštas: {BRAND.email}
                </p>
              </Section>

              <Section title="2. Kokius duomenis renkame">
                <p>
                  Kai užpildote kontaktinę formą arba su mumis susisiekiate, galime rinkti šiuos
                  duomenis: vardą ir pavardę, telefono numerį, el. pašto adresą, įmonės
                  pavadinimą (jei nurodote) bei jūsų užklausos turinį (pageidaujamą paslaugą,
                  skubumą, objektų skaičių).
                </p>
                <p>
                  Renkame tik tuos duomenis, kuriuos pateikiate savanoriškai. Jokios papildomos
                  informacijos be jūsų sutikimo nekaupiame.
                </p>
              </Section>

              <Section title="3. Kokiu tikslu tvarkome duomenis">
                <p>
                  Jūsų duomenis naudojame tik tam, kad galėtume atsakyti į užklausą,
                  pasikonsultuoti, pateikti pasiūlymą ir suteikti užsakytą paslaugą. Duomenų
                  nenaudojame rinkodarai be atskiro jūsų sutikimo ir neparduodame trečiosioms
                  šalims.
                </p>
              </Section>

              <Section title="4. Teisinis pagrindas">
                <p>
                  Duomenis tvarkome remdamiesi jūsų sutikimu (BDAR 6 str. 1 d. a punktas) ir
                  poreikiu imtis veiksmų jūsų prašymu prieš sudarant sutartį arba ją vykdant
                  (BDAR 6 str. 1 d. b punktas).
                </p>
              </Section>

              <Section title="5. Saugojimo terminas">
                <p>
                  Užklausų duomenis saugome ne ilgiau, nei būtina nurodytam tikslui pasiekti —
                  paprastai iki 12 mėnesių nuo paskutinio kontakto, o sudarius sutartį — tiek,
                  kiek reikalauja teisės aktai (pvz., apskaitos ir mokestiniai reikalavimai).
                  Pasibaigus terminui duomenys saugiai sunaikinami.
                </p>
              </Section>

              <Section title="6. Duomenų perdavimas">
                <p>
                  Jūsų duomenų neperduodame trečiosioms šalims, išskyrus atvejus, kai to
                  reikia paslaugai suteikti (pvz., patikimiems partneriams ar paslaugų
                  tiekėjams) arba kai to reikalauja teisės aktai. Visi tvarkytojai įsipareigoja
                  užtikrinti tinkamą duomenų apsaugą.
                </p>
              </Section>

              <Section title="7. Slapukai (cookies)">
                <p>
                  Svetainė gali naudoti būtinuosius slapukus, reikalingus tinkamam veikimui, ir
                  anoniminės statistikos slapukus, padedančius suprasti, kaip lankytojai naudoja
                  svetainę. Statistikos duomenys yra apibendrinti ir nesusiję su jūsų tapatybe.
                  Slapukus galite valdyti naršyklės nustatymuose.
                </p>
              </Section>

              <Section title="8. Jūsų teisės">
                <p>Pagal BDAR turite teisę:</p>
                <ul className="ml-5 list-disc space-y-1.5">
                  <li>susipažinti su savo tvarkomais duomenimis;</li>
                  <li>reikalauti ištaisyti netikslius duomenis;</li>
                  <li>reikalauti ištrinti duomenis („teisė būti pamirštam“);</li>
                  <li>apriboti duomenų tvarkymą arba nesutikti su juo;</li>
                  <li>atšaukti duotą sutikimą bet kuriuo metu;</li>
                  <li>pateikti skundą Valstybinei duomenų apsaugos inspekcijai (vdai.lrv.lt).</li>
                </ul>
                <p>
                  Norėdami pasinaudoti šiomis teisėmis, susisiekite su mumis el. paštu{' '}
                  {BRAND.email} arba telefonu {BRAND.phone}.
                </p>
              </Section>

              <Section title="9. Kontaktai">
                <p>
                  Kilus klausimų dėl šios privatumo politikos ar asmens duomenų tvarkymo,
                  rašykite {BRAND.email} arba skambinkite {BRAND.phone}.
                </p>
              </Section>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
