import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import Swal from 'sweetalert2';

const Login = () => {

    const [data, setData] = useState({});
    const [errMsg, setErrMsg] = useState("");
    const navigate = useNavigate();

    const handleSubmission = () => {
        if (emailForV(data.email) &&
            passForV(data.password)) {
            setErrMsg("");

            signInWithEmailAndPassword(auth, data.email, data.password)
                .then(async (res)=>{
                    navigate("/home")
                })
                .catch((err)=>{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Please ensure your email and password are entered correctly.',
                        showConfirmButton: false,
                        timer: 1500
                      })
                })

        }
    }

    const emailForV = (stringEmail) => {
        const validate = new RegExp("^[\\w-_\.]*[\\w-_\.]\@[\\w]\.+[\\w]+[\\w]$");
        if (!validate.test(stringEmail)) {
            setErrMsg("Please enter your email properly");
            return false;
        } else {
            return true;
        }
    }

    const passForV = (stringPass) => {
        const validate = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$");
        if (!validate.test(stringPass)) {
            setErrMsg("Password has a digit must occur, upper case alphabet that must occur at least once and special character that must occur at least once. It's length must be 8 to 12 only.");
            return false;
        } else {
            return true;
        }
    }

    return (
        <>
            <div className='border-b-2 border-b-violet-500 text-4xl font-serif pb-2 mb-10'>
                Login
            </div>

            <div className='flex items-center border-b-2 border-slate-300 py-3 text-xl mb-5 w-full'>
                <AiOutlineMail className='text-violet-500 font-bold w-6 h-6' />
                <input onChange={(t) => {
                    setData({ ...data, email: t.target.value });
                }} className='outline-none mx-5 w-full rounded' type='email' placeholder='Enter your email' />
            </div>

            <div className='flex items-center border-b-2 border-slate-300 py-3 text-xl mb-5 w-full'>
                <RiLockPasswordFill className='text-violet-500 font-bold w-6 h-6' />
                <input onChange={(t) => {
                    setData({ ...data, password: t.target.value });
                }} className='outline-none mx-5 w-full rounded' type='password' placeholder='Enter your password' />
            </div>

            <div className='w-full font-bold font-serif text-red-600'>
                {errMsg}
            </div>

            <button onClick={handleSubmission} className='bg-violet-500 w-full py-2 rounded-full text-xl text-white my-5 font-extralight'>
                Login
            </button>

            <div className='w-full text-center font-bold font-serif'>
                Don't have an account? <Link to='/signup' className='text-violet-500'>Signup now</Link>
            </div>
        </>)
}

export default Login;