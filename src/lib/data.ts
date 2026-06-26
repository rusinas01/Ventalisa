/* ============================================================
   MB VENTALISA — turinys (LT)
   Oro kondicionavimo sistemų montavimas, priežiūra ir aptarnavimas
   Vilnius ir 30 km spinduliu · 18 m. patirtis
   ============================================================ */

export const IMG = {
  /* Nuotraukos, kurias naudoja atskiri komponentai (Hero, „Apie mus", „Kaip dirbame",
     montavimo skiltis). Paslaugų kortelės ir „Darbai" naudoja tiesiogines nuorodas. */
  heroBg:
    'https://images.unsplash.com/photo-1698479603408-1a66a6d9e80f?auto=format&fit=crop&w=1600&q=80', // hero fonas — blokai ant stogo
  heroTech: '/gallery/valymas2.webp', // „Apie mus" — meistras montuoja bloką
  team: '/gallery/po.avif', // „Apie mus" sekcija
  process: '/gallery/darb.webp', // „Kaip dirbame" sekcija
  case1: '/gallery/inst.avif', // montavimo skiltis (InstallationFeature)
}

export const BRAND = {
  name: 'MB Ventalisa',
  tagline: 'Oro kondicionavimas',
  phone: '+370 644 22558',
  phoneHref: 'tel:+37064422558',
  email: 'info@ventalisa.lt',
  area: 'Vilnius ir 30 km spinduliu',
  experience: '18 m. patirtis',
  rate: 'Nuo 200 €/val.',
}

export const NAV: { label: string; to: string }[] = [
  { label: 'Pradžia', to: '/' },
  { label: 'Apie mus', to: '/about' },
  { label: 'Paslaugos', to: '/services' },
  { label: 'Darbai', to: '/results' },
  { label: 'Kontaktai', to: '/contact' },
]

export type ServiceCard = {
  title: string
  desc: string
  features: string[]
  img: string
}

export const SERVICE_TABS: {
  id: string
  label: string
  cards: ServiceCard[]
}[] = [
  {
    id: 'gyvenamosios',
    label: 'Gyvenamosios patalpos',
    cards: [
      {
        title: 'Kondicionierių montavimas',
        desc: 'Profesionalus oro kondicionierių montavimas namuose ir butuose.',
        img: '/gallery/inst.avif',
        features: [
          'Sieninių blokų montavimas',
          'Optimalios vietos parinkimas',
          'Tvarkingas trasų išvedžiojimas',
          'Paleidimas ir derinimas',
          'Konsultacija prieš pirkimą',
          'Garantija atliktiems darbams',
        ],
      },
      {
        title: 'Priežiūra ir valymas',
        desc: 'Reguliari priežiūra užtikrina švarų orą ir ilgesnį sistemos veikimą.',
        img: '/gallery/maint.avif',
        features: [
          'Filtrų valymas ir keitimas',
          'Sistemos dezinfekcija',
          'Freono lygio patikra',
          'Profilaktinė apžiūra',
          'Sezoninis aptarnavimas',
          'Efektyvumo patikrinimas',
        ],
      },
      {
        title: 'Remontas ir aptarnavimas',
        desc: 'Greitas gedimų šalinimas ir garantinis aptarnavimas.',
        img: '/gallery/rep.jpg',
        features: [
          'Gedimų diagnostika',
          'Komponentų keitimas',
          'Freono papildymas',
          'Skubus atvykimas',
          'Visų gamintojų aptarnavimas',
          'Skaidrios kainos',
        ],
      },
    ],
  },
  {
    id: 'komercines',
    label: 'Komercinės patalpos',
    cards: [
      {
        title: 'Biurai ir patalpos',
        desc: 'Tylus ir efektyvus vėsinimas biurams ir darbo patalpoms.',
        img: '/gallery/biurai.jpg',
        features: [
          'Multi-split sistemos',
          'Atskirų zonų valdymas',
          'Tylus veikimas',
          'Energetinis efektyvumas',
          'Profilaktinė priežiūra',
          'Projektavimas pagal poreikį',
        ],
      },
      {
        title: 'Parduotuvės ir HoReCa',
        desc: 'Patikimas vėsinimas patalpoms su dideliu žmonių srautu.',
        img: '/gallery/rs.avif',
        features: [
          'Galingos vėsinimo sistemos',
          'Greitas patalpų atvėsinimas',
          'Patikima techninė priežiūra',
          'Skubus aptarnavimas',
          'Garantinis servisas',
          'Konsultacijos ir parinkimas',
        ],
      },
      {
        title: 'Komercinis montavimas',
        desc: 'Sprendimai verslui — nuo projekto iki paleidimo.',
        img: '/gallery/kond.avif',
        features: [
          'Objekto įvertinimas',
          'Tinkamos sistemos parinkimas',
          'Profesionalus montavimas',
          'Paleidimas ir derinimas',
          'Garantinis aptarnavimas',
          'Nuolatinė techninė priežiūra',
        ],
      },
    ],
  },
]

export type BenefitIcon = 'clock' | 'dollar' | 'award' | 'calendar'

export const BENEFITS: { icon: BenefitIcon; title: string; desc: string }[] = [
  {
    icon: 'clock',
    title: 'Greitas atvykimas',
    desc: 'Operatyviai reaguojame ir atvykstame būtent tada, kada jums reikia.',
  },
  {
    icon: 'dollar',
    title: 'Skaidrios kainos',
    desc: 'Galutinę kainą sužinosite dar prieš pradedant darbus — jokių paslėptų mokesčių ar netikėtų staigmenų.',
  },
  {
    icon: 'award',
    title: '18 metų patirtis',
    desc: 'Sertifikuoti meistrai su įvertintu PRO statusu.',
  },
  {
    icon: 'calendar',
    title: 'Garantinis aptarnavimas',
    desc: 'Ilgalaikė techninė priežiūra ir reguliarūs profilaktiniai patikrinimai.',
  },
]

export const FAQS = [
  {
    q: 'Kiek kainuoja oro kondicionieriaus montavimas?',
    a: 'Kaina priklauso nuo pasirinktos sistemos ir objekto. Darbo įkainis — nuo 200 €/val. Prieš darbus pateikiame nemokamą konsultaciją ir tikslų pasiūlymą. Skambinkite +370 644 22558.',
  },
  {
    q: 'Ar atvykstate už Vilniaus ribų?',
    a: 'Taip. Dirbame Vilniuje ir 30 km spinduliu aplink miestą. Dėl tolimesnių objektų pasiteiraukite telefonu — suderinsime sąlygas.',
  },
  {
    q: 'Ar teikiate garantinį aptarnavimą?',
    a: 'Taip — atliekame garantinį ir pogarantinį aptarnavimą, profilaktinę priežiūrą bei gedimų šalinimą visų gamintojų sistemoms.',
  },
  {
    q: 'Per kiek laiko galite sumontuoti kondicionierių?',
    a: 'Dažniausiai darbus suplanuojame per kelias dienas, o skubūs gedimai sprendžiami pirmumo tvarka. Tikslų laiką suderiname po konsultacijos.',
  },
]

export const BRANDS = [
  'Daikin',
  'Mitsubishi Electric',
  'LG',
  'Samsung',
  'Toshiba',
  'Panasonic',
  'Gree',
  'AUX',
]

export const SERVICE_AREAS = ['Vilnius', 'Vilniaus rajonas', '30 km spinduliu nuo Vilniaus']

export const MAP_EMBED =
  'https://www.google.com/maps?q=Vilnius,+Lithuania&z=11&output=embed'

export const HERO_STATS = [
  { value: '18+', label: 'Metų patirtis' },
  { value: 'PRO', label: 'Patvirtinta tapatybė' },
  { value: 'Vilnius', label: '+30 km aplink' },
  { value: '200€/val', label: 'Įkainis nuo' },
  { value: 'Garantija', label: 'Atliktiems darbams' },
]

export const TESTIMONIALS = [
  {
    name: 'Tomas K.',
    role: 'Namo savininkas · Vilnius',
    quote:
      'Kondicionierių sumontavo greitai ir labai tvarkingai. Viską aiškiai paaiškino, jokio bardako — tikrai rekomenduoju.',
    rating: 5,
  },
  {
    name: 'Rūta J.',
    role: 'Buto savininkė · Vilnius',
    quote:
      'Pasiūlė tinkamiausią sprendimą pagal mano poreikius ir biudžetą. Kaina aiški, darbas kokybiškas.',
    rating: 5,
  },
  {
    name: 'Mindaugas P.',
    role: 'Biuro vadovas · Vilnius',
    quote:
      'Prižiūri mūsų biuro sistemas jau kelis sezonus — reaguoja greitai, dirba profesionaliai.',
    rating: 5,
  },
]

export type Job = {
  title: string
  type: string
  location: string
  img: string
}

export const JOBS: Job[] = [
  {
    title: 'Sieninio kondicionieriaus montavimas',
    type: 'Butas · montavimas',
    location: 'Vilnius',
    img: '/gallery/atl1.jpg',
  },
  {
    title: 'Multi-split sistema biurui',
    type: 'Biuras · montavimas',
    location: 'Vilnius',
    img: '/gallery/atl2.jpg',
  },
  {
    title: 'Kondicionieriaus priežiūra ir valymas',
    type: 'Namas · priežiūra',
    location: 'Vilniaus r.',
    img: '/gallery/atl3.jpg',
  },
  {
    title: 'Parduotuvės vėsinimo sprendimas',
    type: 'Komercija · montavimas',
    location: 'Vilnius',
    img: '/gallery/atl4.jpg',
  },
  {
    title: 'Gedimo diagnostika ir remontas',
    type: 'Butas · remontas',
    location: 'Vilnius',
    img: '/gallery/atl5.jpg',
  },
  {
    title: 'Šilumos siurblys oras–oras',
    type: 'Namas · montavimas',
    location: 'Vilniaus r.',
    img: '/gallery/atl6.jpg',
  },
]
