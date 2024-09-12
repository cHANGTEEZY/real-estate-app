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

export { accountGrid };
