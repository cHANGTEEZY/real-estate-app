import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./PersonalInfo.css"

export default function PersonalInfo() {
    const [editClicked, setEditClicked] = useState(false);
    let token = localStorage.getItem("token");

    const [userData, setUserData] = useState({
        userName: "",
        userEmail: "",
        userPhonumber: "",
        userAddress: "",
        userZipCode: ""
    });

    function handleClick() {
        setEditClicked((prevValue) => !prevValue);
    }

    const getUserData = async () => {

        const response = await fetch("http://localhost:3000/account", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        try {
            if (!response.ok) {
                const errorResult = await response.json();
                console.log(errorResult)
                return
            }
            const data = await response.json();
            setUserData({
                userName: data.username,
                userEmail: data.email,
                userPhonumber: data.phoneNumber,
                userAddress: data.address,
                userZipCode: data.zipCode
            });


        } catch (error) {
            console.error(error.message)
        }

    }



    useEffect(() => {
        getUserData();
    }, []);

    return (
        <>
            <Header showSearch={false} showPropertyOptions={false} />
            <section className="personal-info-container">
                <div className='personal-info-header'>
                    <h1>Personal Info</h1>
                </div>
                <div className="personal-info">
                    <div className="personal-info-item item-1">
                        <div className="personal-data">
                            <h3>User name</h3>
                            {editClicked ?
                                <>
                                    <p>Enter a new name  </p>
                                    <input />
                                    <button>Save</button>
                                </> : (
                                    <span>lol</span>
                                )
                            }
                        </div>
                        <div className="edit-personal-data">
                            <button onClick={handleClick}>{editClicked ? "Cancel" : "Edit"}</button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
