import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { IdCard, ShieldHalf, House, Eye, TicketPlus, CreditCard } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./Account.css"
import { BrowserRouter as Routes, Route } from "react-router-dom";
import PersonalInfo from "./PersonalInfo";

export default function Account({ isAuthenticated, setIsAuthenticated }) {

    const [username, setUsername] = useState("");
    const navigate = useNavigate();
    const getUserName = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                toast.error("Unauthorized");
                toast.error("Redirect to Login page");
                navigate("/login");
            }
            const response = await fetch("http://localhost:3000/account", {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            if (response.ok) {
                const data = await response.json();
                setUsername(data.username);
            } else {
                const data = await response.json();
                console.log(data.message);
            }
        } catch (err) {
            console.error(err.message)
        }
    }
    useEffect(() => {
        getUserName();
    }, [])

    return (
        <div>
            <Header
                showPropertyOptions={false}
                showSearch={false}
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
            />
            <section className="account-container">
                <section className="account-title">
                    <h1>Account</h1>
                    <span>Welcome back, {username}. Manage your account settings, bookings, and more from here.</span>
                </section>
                <section className="account-grid-container">
                    <div className="account-settings-grid">
                        <div className="account-card account-profile">
                            <Link to="personal-info">
                                <div className="account-card-top">
                                    <IdCard size={38} strokeWidth={1.3} />
                                </div>
                                <div className="account-card-bottom">
                                    <h1>Personal info</h1>
                                    <p>Provide personal details and how we can reach you</p>
                                </div>
                            </Link>
                        </div>
                        <div className="account-card account-security">
                            <Link to="login-and-security">
                                <div className="account-card-top">
                                    <ShieldHalf size={38} strokeWidth={1.3} />
                                </div>
                                <div className="account-card-bottom">
                                    <h1>Login & Security</h1>
                                    <p>Update your password & secure your account</p>
                                </div>
                            </Link>
                        </div>
                        <div className="account-card account-payment">
                            <Link to="payments">
                                <div className="account-card-top">
                                    <CreditCard size={38} strokeWidth={1.3} />
                                </div>
                                <div className="account-card-bottom">
                                    <h1>Payments & payouts</h1>
                                    <p>Review payments, payouts, coupons, and gift cards</p>
                                </div>
                            </Link>
                        </div>
                        <div className="account-card account-booking">
                            <Link to="booking">
                                <div className="account-card-top">
                                    <TicketPlus size={38} strokeWidth={1.3} />
                                </div>
                                <div className="account-card-bottom">
                                    <h1>Bookings</h1>
                                    <p>Manage your upcoming and past bookings, and view details of your reservations.</p>
                                </div>
                            </Link>
                        </div>
                        <div className="account-card account-nestify">
                            <Link to="nestify">
                                <div className="account-card-top">
                                    <House size={38} strokeWidth={1.3} />
                                </div>
                                <div className="account-card-bottom">
                                    <h1>Hosting</h1>
                                    <p>Manage your listings, check your bookings, and connect with guests.</p>
                                </div>
                            </Link>
                        </div>
                        <div className="account-card account-privacy">
                            <Link to="privacy-and-sharing">
                                <div className="account-card-top">
                                    <Eye size={38} strokeWidth={1.3} />
                                </div>
                                <div className="account-card-bottom">
                                    <h1>Privacy & sharing</h1>
                                    <p>Manage your personal data, connected services, and data sharing settings</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
            </section>
            <Footer />



        </div>
    );
}
