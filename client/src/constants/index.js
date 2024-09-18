import {
  IdCard,
  ShieldHalf,
  House,
  Eye,
  TicketPlus,
  CreditCard,
} from "../assets/Index";

const accountGrid = [
  {
    id: 1,
    title: "Personal info",
    description: "Provide personal details and how we can reach you",
    icon: IdCard,
    iconSize: 38,
    iconStrokeWidth: 1.3,
    link: "personal-info",
  },
  {
    id: 2,
    title: "Login & Security",
    description: "Update your password & secure your account",
    icon: ShieldHalf,
    iconSize: 38,
    iconStrokeWidth: 1.3,
    link: "login-and-security",
  },
  {
    id: 3,
    title: "Payments & payouts",
    description: "Review payments, payouts, coupons, and gift cards",
    icon: CreditCard,
    iconSize: 38,
    iconStrokeWidth: 1.3,
    link: "payments",
  },
  {
    id: 4,
    title: "Bookings",
    description:
      "Manage your upcoming and past bookings, and view details of your reservations.",
    icon: TicketPlus,
    iconSize: 38,
    iconStrokeWidth: 1.3,
    link: "booking",
  },
  {
    id: 5,
    title: "Hosting",
    description:
      "Manage your listings, check your bookings, and connect with guests.",
    icon: House,
    iconSize: 38,
    iconStrokeWidth: 1.3,
    link: "nestify",
  },
  {
    id: 6,
    title: "Privacy & sharing",
    description:
      "Manage your personal data, connected services, and data sharing settings",
    icon: Eye,
    iconSize: 38,
    iconStrokeWidth: 1.3,
    link: "privacy-and-sharing",
  },
];

const nestifySetupDescription = [
  {
    title: "One-to-one guidance from a Superhost",
    description:
      "We’ll match you with a Superhost in your area, who’ll guide you from your first question to your first guest—by phone, video call, or chat.",
  },
  {
    title: "An experienced guest for your first booking",
    description:
      "For your first booking, you can choose to welcome an experienced guest who has at least three stays and a good track record on Airbnb.",
  },
  {
    title: "Specialized support from Airbnb",
    description:
      "New Hosts get one-tap access to specially trained Community Support agents who can help with everything from account issues to billing support.",
  },
];

const faqData = {
  rows: [
    {
      title: "Is my place right for Nestify",
      content:
        "Nestify guests are interested in all kinds of places. We have listings for tiny homes, cabins, treehouses, and more.",
    },
    {
      title: "Do I have to host all the time?",
      content:
        "Not at all—you control your calendar. You can host once a year, a few nights a month, or more often.",
    },
    {
      title: "How much should I interact with guests?",
      content:
        "It's up to you but interacting with the guest is a good idea lol",
    },
    {
      title: "Any tips on being a great Airbnb Host?",
      content:
        "Getting the basics down goes a long way. Keep your place clean, respond to guests promptly, and provide necessary amenities, like fresh towels. ",
    },
  ],
  styles: {
    bgColor: "rgb(247, 247, 247)",
    rowTitleTextSize: "17px",
    // rowContentPaddingTop: "20px",
    // rowContentPaddingBottom: "20px",
    // rowContentPaddingLeft: "50px",
    rowContentTextSize: "13px",
    rowContentColor: "grey",
  },
  config: {
    animate: true,
    arrowIcon: "V",
    openOnload: 0,
    expandIcon: "+",
    collapseIcon: "-",
  },
};

export { accountGrid, faqData, nestifySetupDescription };
