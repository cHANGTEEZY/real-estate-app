import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Breadcrumb from "../../components/ui/BreadCrumb/BreadCrumb";
import TextField from "@mui/material/TextField";
import { toast } from "react-toastify";
import { FolderLock, Eye, FileCog } from "lucide-react";
import "./PersonalInfo.css";

export default function PersonalInfo({ isAuthenticated, setIsAuthenticated }) {
    const [editClicked, setEditClicked] = useState({
        name: false,
        email: false,
        phone: false,
        address: false,
        zipcode: false,
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
                <div className="personal-info-component-container">
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
                                            sx={{
                                                width: "400px",
                                                height: "40px",
                                                '& .MuiInputBase-root': {
                                                    height: "40px",
                                                    marginTop: "10px"
                                                },
                                                '& .MuiInputLabel-root': {
                                                    top: "-6px",
                                                    marginTop: "8px",
                                                },
                                                '& .MuiOutlinedInput-root': {
                                                    borderRadius: '.6rem',
                                                },
                                            }}
                                            value={newUserData.newUserName}
                                            onChange={(e) => setNewUserData((prevValue) => ({ ...prevValue, newUserName: e.target.value }))}
                                        />
                                        <button onClick={handleSave}>Save</button>
                                    </>
                                ) : (
                                    <span className="account-user-name">{userData.userName}</span>
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
                                {editClicked.email ? (
                                    <>
                                        <TextField
                                            id="outlined-basic"
                                            label="email"
                                            variant="outlined"
                                            onChange={(e) => setNewUserData(e.target.value)}
                                            sx={{
                                                width: "400px",
                                                height: "40px",
                                                '& .MuiInputBase-root': {
                                                    height: "40px",
                                                    marginTop: "10px"
                                                },
                                                '& .MuiInputLabel-root': {
                                                    top: "-6px",
                                                    marginTop: "8px",
                                                },
                                                '& .MuiOutlinedInput-root': {
                                                    borderRadius: '.6rem',
                                                },
                                            }}
                                        />
                                        <button onClick={() => handleSave("email")}>Save</button>
                                    </>
                                ) : (
                                    <span>{userData.userEmail}</span>
                                )}
                            </div>
                            <div className="edit-personal-data">
                                <button onClick={() => handleClick("email")}>
                                    {editClicked.email ? "Cancel" : "Edit"}
                                </button>
                            </div>
                        </div>
                        <div className="personal-info-item personal-info-item-3">
                            <div className="personal-data">
                                <h3>Phone number</h3>
                                {editClicked.phone ? (
                                    <>
                                        <TextField
                                            id="outlined-basic"
                                            label="userName"
                                            variant="outlined"
                                            sx={{
                                                width: "400px",
                                                height: "40px",
                                                '& .MuiInputBase-root': {
                                                    height: "40px",
                                                    marginTop: "10px"
                                                },
                                                '& .MuiInputLabel-root': {
                                                    top: "-6px",
                                                    marginTop: "8px",
                                                },
                                                '& .MuiOutlinedInput-root': {
                                                    borderRadius: '.6rem',
                                                },
                                            }}
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
                                <button onClick={() => handleClick("phone")}>
                                    {editClicked.phone ? "Cancel" : "Edit"}
                                </button>
                            </div>
                        </div>
                        <div className="personal-info-item personal-info-item-4">
                            <div className="personal-data">
                                <h3>Address</h3>
                                {editClicked.address ? (
                                    <>
                                        <TextField
                                            id="outlined-basic"
                                            label="userName"
                                            variant="outlined"
                                            sx={{
                                                width: "400px",
                                                height: "40px",
                                                '& .MuiInputBase-root': {
                                                    height: "40px",
                                                    marginTop: "10px"
                                                },
                                                '& .MuiInputLabel-root': {
                                                    top: "-6px",
                                                    marginTop: "8px",
                                                },
                                                '& .MuiOutlinedInput-root': {
                                                    borderRadius: '.6rem',
                                                },
                                            }}
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
                                <button onClick={() => handleClick("address")}>
                                    {editClicked.address ? "Cancel" : "Edit"}
                                </button>
                            </div>
                        </div>
                        <div className="personal-info-item personal-info-item-5">
                            <div className="personal-data">
                                <h3>Zipcode</h3>
                                {editClicked.zipcode ? (
                                    <>
                                        <TextField
                                            id="outlined-basic"
                                            label="userName"
                                            variant="outlined"
                                            sx={{
                                                width: "400px",
                                                height: "40px",
                                                '& .MuiInputBase-root': {
                                                    height: "40px",
                                                    marginTop: "10px"
                                                },
                                                '& .MuiInputLabel-root': {
                                                    top: "-6px",
                                                    marginTop: "8px",
                                                },
                                                '& .MuiOutlinedInput-root': {
                                                    borderRadius: '.6rem',
                                                },
                                            }}
                                            value={newUserData.newUserName}
                                            onChange={(e) => setNewUserData(e.target.value)}
                                        />
                                        <button onClick={handleSave}>Save</button>
                                    </>
                                ) : (
                                    <span>{userData.userZipCode ? userData.userZipCode : "Not provided"}</span>
                                )}
                            </div>
                            <div className="edit-personal-data">
                                <button onClick={() => handleClick("zipcode")}>
                                    {editClicked.address ? "Cancel" : "Edit"}
                                </button>
                            </div>
                        </div>
                        <div className="personal-info-item personal-info-item-6">
                            <div className="personal-data">
                                <h3>Emergency contact</h3>
                                {editClicked.emergencyContact ? (
                                    <>
                                        <TextField
                                            id="outlined-basic"
                                            label="userName"
                                            variant="outlined"
                                            sx={{
                                                width: "400px",
                                                height: "40px",
                                                '& .MuiInputBase-root': {
                                                    height: "40px",
                                                    marginTop: "10px"
                                                },
                                                '& .MuiInputLabel-root': {
                                                    top: "-6px",
                                                    marginTop: "8px",
                                                },
                                                '& .MuiOutlinedInput-root': {
                                                    borderRadius: '.6rem',
                                                },
                                            }}
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
                                <button onClick={() => handleClick("emergencyContact")}>
                                    {editClicked.emergencyContact ? "Cancel" : "Edit"}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="personal-info-about">
                        <div className="personal-info-about-data personal-info-about-data-item-1">
                            <FolderLock size={50} strokeWidth={1.2} color="green" />
                            <h1>Why isn&apos;t my info shown</h1>
                            <p>We’re hiding some account details to protect your identity.</p>
                        </div>
                        <div className="personal-info-about-data personal-info-about-data-item-2">
                            <FileCog size={50} strokeWidth={1.2} color="green" />
                            <h1>Which details can be edited?</h1>
                            <p>
                                Contact info and personal details can be edited. If this info was used to verify your identity, you’ll need to get verified again the next time you book—or to continue hosting.
                            </p>
                        </div>
                        <div className="personal-info-about-data personal-info-about-data-item-3">
                            <Eye size={50} strokeWidth={1.2} color="green" />
                            <h1>What info is shared with others?</h1>
                            <p>Airbnb only releases contact information for Hosts and guests after a reservation is confirmed.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}