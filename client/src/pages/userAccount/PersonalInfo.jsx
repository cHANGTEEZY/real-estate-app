import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./PersonalInfo.css"

export default function PersonalInfo() {
    const [editClicked, setEditClicked] = useState(false);

    function handleClick() {
        setEditClicked((prevValue) => !prevValue);
    }

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
