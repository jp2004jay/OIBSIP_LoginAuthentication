import { auth } from "../firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SecretPage = () => {
    const [data, setData] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setData({ userName: user.displayName, email: user.email });
            } else {
                navigate("/");
            }
        })
    }, []);

    const handleSignOut = () => {
        auth.signOut().
            then(() => {
                navigate("/");
            }).catch((err) => {
                console.log(err);
            })
    }
    return (
        <>
            <div className="w-[95%] sm:w-3/4 md:w-1/2 lg:w-1/4 mx-auto p-5 rounded-2xl my-16 shadow-xl shadow-blue-100 bg-white">
                <div className="text-center my-12 text-5xl font-serif">
                    Secret Page
                </div>
                <div className="flex flex-col text-xl font-serif">
                    <label className="my-5">
                        <h1 className="px-2 font-bold">Name</h1>
                        <button className="w-full px-5 py-4 rounded-xl border-2 text-left overflow-y-auto" disabled type="text">{data.userName}</button>
                    </label>
                    <label className="my-5">
                        <h1 className="px-2 font-bold">Email</h1>
                        <button className="w-full px-5 py-4 rounded-xl border-2 text-left overflow-y-auto" disabled type="text">{data.email}</button>
                    </label>

                    <button onClick={handleSignOut} className="bg-blue-500 text-center rounded-full text-white px-5 py-2 my-5">Sign out</button>
                </div>
            </div>

        </>
    )
}

export default SecretPage;