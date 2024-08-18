import "./Footer.css";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <div className="footer">
        <div className="footer-top footer-element">
          <div className="support-footer">
            <ul>
              <li>Support</li>
              <li>Help Center</li>
              <li>NestCover</li>
              <li>Anti-discrimination</li>
              <li>Disability support</li>
              <li>Cancellation options</li>
              <li>Report neighborhood concern</li>
            </ul>
          </div>
          <div className="hosing-footer">
            <ul>
              <li>Hosting</li>
              <li>Nestify your home</li>
              <li>NestCover for Hosts</li>
              <li>Hosting resources</li>
              <li>Community forum</li>
              <li>Hosting responsibly</li>
              <li>Nestify-friendly apartments</li>
              <li>Join a free Hosting class</li>
            </ul>
          </div>
          <div className="airbnb-footer">
            <ul>
              <li>Nestify</li>
              <li>Newsroom</li>
              <li>New features</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Gift cards</li>
              <li>Nestify.org emergency stays</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom footer-element">
          <div className="footer-left">
            <span>&copy; {year},Inc </span>
            <span>. Terms</span>
            <span>. Sitemap</span>
            <span>. Privacy</span>
          </div>
          <div className="footer-right">
            <Facebook />
            <Twitter />
            <Instagram />
          </div>
        </div>
      </div>
    </footer>
  );
}
