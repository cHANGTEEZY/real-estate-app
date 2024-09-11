import Breadcrumb from "../../components/ui/BreadCrumb/BreadCrumb";
import Header from "../../components/Header/Header";
import "./LoginAndSecurity.css";
import { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import { ShieldHalf } from "lucide-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function LoginAndSecurity({
  isAuthenticated,
  setIsAuthenticated,
}) {
  const navigate = useNavigate();

  const [buttonClick, setButtonClick] = useState({
    update: false,
    delete: false,
  });

  const [changePassword, setChangePassword] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [passwordUpdatedDay, setPasswordUpdatedDay] = useState("");

  function handleButtonClick(clickedField) {
    setButtonClick((prevState) => ({
      ...prevState,
      [clickedField]: !prevState[clickedField],
    }));
  }

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(
      "http://localhost:3000/account/update/password",
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(changePassword),
      },
    );
    try {
      const result = await response.json();
      if (!response.ok) {
        toast.error(result.message);
      } else {
        toast.success(result.message);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    } catch (error) {
      console.error(error.message);
      toast.error("Something went wrong");
    }
  };

  const handleDelete = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(
      "http://localhost:3000/account/update/password",
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          Authorization: `Beader ${token}`,
        },
        body: JSON.stringify(changePassword),
      },
    );
    try {
      const result = await response.json();
      if (!response.ok) {
        toast.error(result.message);
      } else {
        toast.success(result.message);
        localStorage.removeItem("token");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch {
      const result = await response.json();
      toast.error(result.message);
    }
  };
  useEffect(() => {
    async function getPasswordUpdateDay() {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "http://localhost:3000/account/update/password",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      try {
        const result = await response.json();
        if (!response.ok) {
          console.log(result.message);
        } else {
          let passwordUpdateDay = result.message;
          setPasswordUpdatedDay(passwordUpdateDay);
        }
      } catch (error) {
        console.error(error.message);
      }
    }
    getPasswordUpdateDay();
  }, []);

  return (
    <>
      <Header
        showPropertyOptions={false}
        showSearch={false}
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      <section className="login-and-security-component-container">
        <Breadcrumb />
        <div className="login-and-security-header">
          <h1>Login & security</h1>
        </div>
        <div className="login-and-security-content-container">
          <div className="login-and-security-container">
            <div className="login-and-security">
              <div className="login-and-security-item">
                <div className="login-and-security-item-header">
                  <h2>Login</h2>
                </div>
                <div className="login-and-security-data">
                  <div className="login-data">
                    <h3>Password</h3>
                    {buttonClick.update ? (
                      <>
                        <label htmlFor="password">Current password</label>
                        <input
                          type="password"
                          value={changePassword.currentPassword}
                          onChange={(e) =>
                            setChangePassword((prevValue) => ({
                              ...prevValue,
                              currentPassword: e.target.value,
                            }))
                          }
                        />
                        <label htmlFor="newPassword">New password</label>
                        <input
                          type="password"
                          value={changePassword.newPassword}
                          onChange={(e) =>
                            setChangePassword((prevValue) => ({
                              ...prevValue,
                              newPassword: e.target.value,
                            }))
                          }
                        />
                        <label htmlFor="confirmPassword">
                          Confirm password
                        </label>
                        <input
                          type="password"
                          value={changePassword.confirmNewPassword}
                          onChange={(e) =>
                            setChangePassword((prevValue) => ({
                              ...prevValue,
                              confirmNewPassword: e.target.value,
                            }))
                          }
                        />
                        <button onClick={handleSubmit}>Update password</button>
                      </>
                    ) : (
                      <p>
                        {!passwordUpdatedDay
                          ? "Update your password"
                          : `Last updated ${passwordUpdatedDay}`}
                      </p>
                    )}
                  </div>

                  <div className="update-login-and-security-data">
                    <button onClick={() => handleButtonClick("update")}>
                      {buttonClick.update ? "Cancel" : "Update"}
                    </button>
                  </div>
                </div>
              </div>
              <div className="login-and-security-item">
                <div className="login-and-security-item-header">
                  <h2>Account</h2>
                </div>
                <div className="login-and-security-data">
                  <div className="deactivate-section">
                    <h3>Delete your account</h3>
                    {buttonClick.delete && (
                      <>
                        <label htmlFor="password">
                          Enter your password to confirm
                        </label>
                        <input
                          type="password"
                          value={changePassword.currentPassword}
                          onChange={(e) =>
                            setChangePassword((prevValue) => ({
                              ...prevValue,
                              currentPassword: e.target.value,
                            }))
                          }
                        ></input>
                        <button onClick={handleDelete}>Confirm</button>
                      </>
                    )}
                  </div>
                  <div className="deactivate-button-section">
                    <button onClick={() => handleButtonClick("delete")}>
                      {buttonClick.delete ? "Cancel" : "Delete"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="login-and-security-banner">
            <ShieldHalf size={51} strokeWidth={1.4} />
            <h3>Keeping your account secure</h3>
            <p>
              We regularly review accounts to make sure they&apos;re secure as
              possible. We&apos;ll also let you know if there&apos;s more we can
              do to increase the security of your account.
            </p>
            <p>Learn about safety tips for guests and hosts.</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
