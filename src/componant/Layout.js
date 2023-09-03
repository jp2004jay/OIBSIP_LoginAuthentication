import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <div className='flex w-full h-[100vh] bg-white shadow-2xl shadow-black'>
                <div className='w-full sm:w-[65%] md:w-1/2 px-16 flex flex-col justify-center items-start'>
                    <Outlet />
                </div>
                <div className='hidden sm:flex relative sm:w-[45%] md:w-3/4'>
                    <img className='h-full' src='./images/welcome-image.jpg' />
                    <div className='absolute w-full text-center top-16 left-0 text-7xl font-bold font-serif text-white'>
                        <h1>Secret Page</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout;