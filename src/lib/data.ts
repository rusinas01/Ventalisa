/* ============================================================
   MB VENTALISA — turinys (LT)
   Oro kondicionavimo sistemų montavimas, priežiūra ir aptarnavimas
   Vilnius ir 30 km spinduliu · 18 m. patirtis
   ============================================================ */

export const IMG = {
  // Placeholder nuotraukos — pakeisti realiomis MB Ventalisa galerijos (11) nuotraukomis
  heroTech:
    'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1100&q=80',
  team: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=80',
  process:
    'https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?auto=format&fit=crop&w=900&q=80',
  case1:
    'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
  case2:
    'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80',
  case3:
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
  case4:
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
  ctaTech:
    'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80',
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
  img: keyof typeof IMG
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
        img: 'heroTech',
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
        img: 'case1',
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
        img: 'case3',
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
        img: 'case4',
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
        img: 'process',
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
        img: 'ctaTech',
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
  img: keyof typeof IMG
}

export const JOBS: Job[] = [
  {
    title: 'Sieninio kondicionieriaus montavimas',
    type: 'Butas · montavimas',
    location: 'Vilnius',
    img: 'heroTech',
  },
  {
    title: 'Multi-split sistema biurui',
    type: 'Biuras · montavimas',
    location: 'Vilnius',
    img: 'case2',
  },
  {
    title: 'Kondicionieriaus priežiūra ir valymas',
    type: 'Namas · priežiūra',
    location: 'Vilniaus r.',
    img: 'case1',
  },
  {
    title: 'Parduotuvės vėsinimo sprendimas',
    type: 'Komercija · montavimas',
    location: 'Vilnius',
    img: 'process',
  },
  {
    title: 'Gedimo diagnostika ir remontas',
    type: 'Butas · remontas',
    location: 'Vilnius',
    img: 'case3',
  },
  {
    title: 'Šilumos siurblys oras–oras',
    type: 'Namas · montavimas',
    location: 'Vilniaus r.',
    img: 'ctaTech',
  },
]
