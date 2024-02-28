import InstagramIcon from "@material-ui/icons/Instagram"
import FacebookIcon from "@material-ui/icons/Facebook"
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined"
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined"
import YouTubeIcon from "@material-ui/icons/YouTube"
import { MinimizeOutlined } from "@material-ui/icons"

export const video = [
  "https://www.youtube.com/watch?v=C5Z2r66wHZ0",
  "https://www.youtube.com/watch?v=WqmRZYHaujU",
  "https://www.youtube.com/watch?v=oYxwBh8FNf8",
]

export const navigation = [
  { title: "home", slug: "#hero" },
  { title: "o mně", slug: "#aboutMe" },
  { title: "nabízím", slug: "#training" },
  { title: "ceník", slug: "#price" },
  { title: "video", slug: "#video" },
  { title: "recenze", slug: "#review" },
  { title: "kontakt", slug: "#contact" },
]

export const contact = {
  email: "jana.buthova@gmail.com",
  phone: "703681841",
  instagram: "https://www.instagram.com/janabuthovatrainer",
  facebook: "https://www.facebook.com/profile.php?id=100016775943875",
  youtube: "https://www.youtube.com/channel/UCptIuKxn8u8kICMJbckHKgg",
}

export const pricings = [
  {
    title: "OSOBNÍ TRÉNINK",
    features: [
      {
        title: "1 KLIENT",
        price: [
          { titlePrice: "60 minut", cost: 600 },
          { titlePrice: "90 minut", cost: 700 },
          { titlePrice: "120 minut", cost: 850 },
        ],
      },
      // {
      //   title: "2 KLIENTI (malá skupina)",
      //   price: [{ titlePrice: "60 minut", cost: 950 }],
      // },
    ],
    button: "chci trénovat",
  },

  {
    title: "SKUPINOVÝ TRÉNINK",
    subtitle: "Tréninky probíhají v Dolních Hbitech",
    features: [
      {
        title: "OUTDOOR",
        price: [
          { titlePrice: "75 minut", cost: 140 },
          { titlePrice: "5 vstup", cost: 600 },
          { titlePrice: "10 + 1 vstup", cost: 1400 },
        ],
      },
      {
        title: "INDOOR",
        price: [
          { titlePrice: "75 minut", cost: 140 },
          { titlePrice: "5 vstup", cost: 600 },
          { titlePrice: "10 + 1 vstup", cost: 1400 },
        ],
      },
    ],
    button: "chci trénovat",
  },

  {
    title: "DĚTSKÉ CVIČENÍ",
    subtitle: "Tréninky probíhají v Dolních Hbitech",
    features: [
      {
        title: "1 DÍTĚ",
        price: [
          { titlePrice: "60 minut", cost: 150 },
          { titlePrice: "3x vstup", cost: 450 },
          { titlePrice: "5x vstup", cost: 750 },
          { titlePrice: "10 + 1 vstup", cost: 1500 },
        ],
      },
    ],
    button: "mám zájem",
  },

  {
    title: "PORADENSTVÍ",
    features: [
      {
        title: "DIAGNOSTIKA",
        price: [
          {
            titlePrice: `vstupní pohovor + diagnostika pohybového aparátu + svalové testy`,
            cost: 1100,
          },
          { titlePrice: "Sestavení tréninkového plánu", cost: 500 },
        ],
      },
      {
        title: "VÝŽIVOVÉ PORADENSTVÍ",
        price: [
          { titlePrice: "vstupní konzultace + vážení", cost: 490 },
          { titlePrice: "kontrolní konzultace", cost: 290 },
          { titlePrice: "stravovací plán na 14dní ", cost: 2390 },
        ],
      },
    ],
    button: "mám zájem",
  },
]

export const TreninkTime = [
  { title: "Indoor", days: ["ÚT: 17:15 - 18:15", " ČT: 17:15 - 18:15 "] },
  { title: "Outoor", days: ["ÚT: 17:15 - 18:15", " ČT: 17:15 - 18:15 "] },
]
