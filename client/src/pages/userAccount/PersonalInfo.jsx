import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Breadcrumb from "../../components/ui/BreadCrumb/BreadCrumb";
import TextField from "@mui/material/TextField";
import { toast } from "react-toastify";
import "./PersonalInfo.css";

export default function PersonalInfo({ isAuthenticated, setIsAuthenticated }) {
    const [editClicked, setEditClicked] = useState({
        name: false,
        email: false,
        phone: false,
        address: false,
        emergencyContact: false
    });

    function handleClick(triggeredField) {
        setEditClicked((prevStates) => ({
            ...prevStates,
            [triggeredField]: !prevStates[triggeredField]
        }));
    }

    const [userData, setUserData] = useState({
        userName: "",
        userEmail: "",
        userPhoneNumber: "",
        userAddress: "",
        userZipCode: "",
    });

    console.log(userData)
    const [newUserData, setNewUserData] = useState({
        newUserName: "",
        newUserEmail: "",
        newUserPhoneNumber: "",
        newUserAddress: "",
        newUserZipCode: "",
    });

    const getUserData = async () => {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:3000/account", {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        try {
            if (!response.ok) {
                const errorResult = await response.json();
                toast.error(errorResult);
                return;
            }
            const data = await response.json();
            setUserData({
                userName: data.username,
                userEmail: data.email,
                userPhoneNumber: data.phoneNumber,
                userAddress: data.address,
                userZipCode: data.zipCode,
                userEmergencyContact: data.emergencyContact
            });
        } catch (error) {
            console.error(error.message);
        }
    };

    const handleSave = () => {
        console.log(newUserData)
    }

    useEffect(() => {
        getUserData();
    }, []);

    return (
        <>
            <Header
                showPropertyOptions={false}
                showSearch={false}
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
            />
            <section className="personal-info-container">
                <Breadcrumb />
                <div className="personal-info-header">
                    <h1>Personal Info</h1>
                </div>

                <div className="personal-info">
                    <div className="personal-info-item personal-info-item-1">
                        <div className="personal-data">
                            <h3>Profile name</h3>
                            {editClicked.name ? (
                                <>
                                    <TextField
                                        id="outlined-basic"
                                        label="userName"
                                        variant="outlined"
                                        className="text-field"
                                        value={newUserData.newUserName}
                                        onChange={(e) => setNewUserData(e.target.value)}
                                    />
                                    <button onClick={handleSave}>Save</button>
                                </>
                            ) : (
                                <span>{userData.userName}</span>
                            )}
                        </div>
                        <div className="edit-personal-data">
                            <button onClick={() => handleClick("name")}>
                                {editClicked.name ? "Cancel" : "Edit"}
                            </button>
                        </div>
                    </div>
                    <div className="personal-info-item personal-info-item-2">
                        <div className="personal-data">
                            <h3>Email address</h3>
                            {editClicked ? (
                                <>
                                    <TextField
                                        id="outlined-basic"
                                        label="email"
                                        variant="outlined"
                                        className="text-field"
                                        value={newUserData.newUserName}
                                        onChange={(e) => setNewUserData(e.target.value)}
                                    />
                                    <button onClick={handleSave}>Save</button>
                                </>
                            ) : (
                                <span>{userData.userEmail}</span>
                            )}
                        </div>
                        <div className="edit-personal-data">
                            <button onClick={handleClick}>
                                {editClicked ? "Cancel" : "Edit"}
                            </button>
                        </div>
                    </div>
                    <div className="personal-info-item personal-info-item-3">
                        <div className="personal-data">
                            <h3>Phone number</h3>
                            {editClicked ? (
                                <>
                                    <TextField
                                        id="outlined-basic"
                                        label="userName"
                                        variant="outlined"
                                        className="text-field"
                                        value={newUserData.newUserName}
                                        onChange={(e) => setNewUserData(e.target.value)}
                                    />
                                    <button onClick={(e) => e.target.handleSave()}>Save</button>
                                </>
                            ) : (
                                <span>{userData.userPhoneNumber ? userData.userPhoneNumber : "Not provided"}</span>
                            )}
                        </div>
                        <div className="edit-personal-data">
                            <button onClick={handleClick}>
                                {editClicked ? "Cancel" : "Edit"}
                            </button>
                        </div>
                    </div>
                    <div className="personal-info-item personal-info-item-4">
                        <div className="personal-data">
                            <h3>Address</h3>
                            {editClicked ? (
                                <>
                                    <TextField
                                        id="outlined-basic"
                                        label="userName"
                                        variant="outlined"
                                        className="text-field"
                                        value={newUserData.newUserName}
                                        onChange={(e) => setNewUserData(e.target.value)}
                                    />
                                    <button onClick={handleSave}>Save</button>
                                </>
                            ) : (
                                <span>{userData.userAddress ? userData.userAddress : "Not provided"}</span>
                            )}
                        </div>
                        <div className="edit-personal-data">
                            <button onClick={handleClick}>
                                {editClicked ? "Cancel" : "Edit"}
                            </button>
                        </div>
                    </div>
                    <div className="personal-info-item personal-info-item-5">
                        <div className="personal-data">
                            <h3>Emergency contact</h3>
                            {editClicked ? (
                                <>
                                    <TextField
                                        id="outlined-basic"
                                        label="userName"
                                        variant="outlined"
                                        className="text-field"
                                        value={newUserData.newUserName}
                                        onChange={(e) => setNewUserData(e.target.value)}
                                    />
                                    <button onClick={handleSave}>Save</button>
                                </>
                            ) : (
                                <span>{userData.userEmergencyContact ? userData.userEmergencyContact : "Not Provided"}</span>
                            )}
                        </div>
                        <div className="edit-personal-data">
                            <button onClick={handleClick}>
                                {editClicked ? "Cancel" : "Edit"}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}