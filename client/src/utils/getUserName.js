import { toast } from "react-toastify";

const getUserName = async (setUsername, navigate) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Unauthorized");
      navigate("/login");
      return;
    }
    const response = await fetch("http://localhost:3000/account", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      setUsername(data.username); // Set the username in the state
    } else {
      const data = await response.json();
      console.log(data.message);
    }
  } catch (err) {
    console.error(err.message);
  }
};

export default getUserName;
