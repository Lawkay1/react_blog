import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const GuestLayout = () => {
    const location = useLocation();
    return (
        <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
            {location.pathname==="/login" &&<div>
                 <h1 className="text-4xl font-medium">Login</h1>
                        <p className="text-slate-500">Hi, Welcome back 👋</p>
            </div>
            }
            {location.pathname==="/signup" && <h1 className="text-4xl font-medium">Sign up</h1>}

            {/* <pre> {JSON.stringify(location, null, 2)}</pre> */}
            <div className="my-5">
                <button className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                    <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-6 h-6" alt="Google logo" />
                    {location.pathname==="/login" && <span>Login with Google</span>}
                    {location.pathname==="/signup" && <span>Sign up with Google</span>}
                </button>
            </div>
                        <Outlet />
        </div>
    );
};

export default GuestLayout;
