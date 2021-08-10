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

export const reviews = [
  {
    authorPhoto: {
      src:
        "https://assets.maccarianagency.com/the-front/photos/people/veronica-adams.jpg",
      srcSet:
        "https://assets.maccarianagency.com/the-front/photos/people/veronica-adams@2x.jpg 2x",
    },
    authorName: "Veronica Adams",
    authorOccupation: "Growth Marketer, Crealytics",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    authorPhoto: {
      src:
        "https://assets.maccarianagency.com/the-front/photos/people/akachi-luccini.jpg",
      srcSet:
        "https://assets.maccarianagency.com/the-front/photos/people/akachi-luccini@2x.jpg 2x",
    },
    authorName: "Akachi Luccini",
    authorOccupation: "Lead Generation, Alternative Capital",
    feedback:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    authorPhoto: {
      src:
        "https://assets.maccarianagency.com/the-front/photos/people/jack-smith.jpg",
      srcSet:
        "https://assets.maccarianagency.com/the-front/photos/people/jack-smith@2x.jpg 2x",
    },
    authorName: "Jack Smith",
    authorOccupation: "Head of Operations, Parkfield Commerce",
    feedback:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    authorPhoto: {
      src:
        "https://assets.maccarianagency.com/the-front/photos/people/veronica-adams.jpg",
      srcSet:
        "https://assets.maccarianagency.com/the-front/photos/people/veronica-adams@2x.jpg 2x",
    },
    authorName: "Veronica Adams",
    authorOccupation: "Growth Marketer, Crealytics",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    authorPhoto: {
      src:
        "https://assets.maccarianagency.com/the-front/photos/people/akachi-luccini.jpg",
      srcSet:
        "https://assets.maccarianagency.com/the-front/photos/people/akachi-luccini@2x.jpg 2x",
    },
    authorName: "Akachi Luccini",
    authorOccupation: "Lead Generation, Alternative Capital",
    feedback:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    authorPhoto: {
      src:
        "https://assets.maccarianagency.com/the-front/photos/people/jack-smith.jpg",
      srcSet:
        "https://assets.maccarianagency.com/the-front/photos/people/jack-smith@2x.jpg 2x",
    },
    authorName: "Jack Smith",
    authorOccupation: "Head of Operations, Parkfield Commerce",
    feedback:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
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
          { titlePrice: "60 minut", cost: 500 },
          { titlePrice: "90 minut", cost: 550 },
          { titlePrice: "120 minut", cost: 650 },
        ],
      },
      {
        title: "2 KLIENTI (malá skupina)",
        price: [{ titlePrice: "60 minut", cost: 900 }],
      },
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
          { titlePrice: "60 minut", cost: 100 },
          { titlePrice: "10 + 1 vstup", cost: 1000 },
        ],
      },
      {
        title: "INDOOR",
        price: [
          { titlePrice: "60 minut", cost: 100 },
          { titlePrice: "10 + 1 vstup", cost: 1000 },
        ],
      },
    ],
    button: "chci trénovat",
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
