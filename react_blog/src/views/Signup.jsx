import CountrySelector from "../component/CountrySelector";
import { useState } from "react";

export default function Signup() {

    const [countryValue, setCountryValue] = useState('')
    const [email, setEmail] = useState('')
    const [fullname, setFullname] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [address, setAddress] = useState('')


    const countryChangeHandler = value => {
        setCountryValue(value)
      }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted");
    }
    
      


    return <div><form action="" className="my-10" onSubmit={handleSubmit} method="POST">
    <div className="flex flex-col space-y-5">
        <label htmlFor="email">
            <p className="font-medium text-slate-700 pb-2">Email address</p>
            <input
                id="email"
                name="email"
                type="email"
                onChange = {(e) => setEmail(e.target.value)}
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Enter email address"
            />
        </label>

        <label htmlFor="Fullname">
            <p className ="font-medium text-slate-700 pb-2">Fullname</p>
            <input
                id="Fullname"
                name="Fullname"
                type="text"
                onChange = {(e) => setFullname(e.target.value)}
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholeder = "Your Fullname"
            />
        </label>

            {/*     Address     */}

        <label htmlFor="address">
            <p className="font-medium text-slate-700 pb-2">Address</p>
            <input
                id="address"
                name="address"
                type="text"
                onChange = {(e) => setAddress(e.target.value)}
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder = "Your Address"
            />
        </label>



            {/*   Country        */}
          
           

        <label htmlFor="country">
            <p className="font-medium text-slate-700 pb-2">Country</p>
            {/* <pre>{JSON.stringify(countryValue, null, 2)}</pre> */}
                 <CountrySelector  changeHandler={countryChangeHandler} value = {countryValue}/>

        </label>


        <label htmlFor="password">
            <p className="font-medium text-slate-700 pb-2">Password</p>
            <input
                id="password"
                name="password"
                type="password"
                onChange = {(e) => setPassword(e.target.value)}
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Enter your password"
            />
        </label>

        <label htmlFor = "confirmPassword">
            <p className="font-medium text-slate-700 pb-2">Confirm Password</p>
            <input
                id="confirmPassword"    
                name="confirmPassword"
                type="password"
                onChange = {(e) => setConfirmPassword(e.target.value)}
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Confirm your password"
                />
        </label>
     
        <button className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
                >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            <span>Signup</span>
        </button>
        <p className="text-center">Not registered yet? <a href="#" className="text-indigo-600 font-medium inline-flex space-x-1 items-center"><span>Register now </span><span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg></span></a></p>
    </div>
</form>
</div>;
}