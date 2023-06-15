import { useState } from 'react';

export default function SignIn() {

    const [password, setPassword] = useState(false);

    return <form className='bg-indigo-300 md:w-[468px] w-[90dvw] p-3 rounded'>
        <h1 className="text-3xl font-bold">Sign In</h1>
        <div>
            <label htmlFor="" className="p-2 rounded-md flex flex-col gap-1">
                <span>Username</span>
                <input className="border border-slate-300 focus:border-slate-700 p-2 rounded-md" type="text" name="" id="username" required />
            </label>
            <label htmlFor="" className="p-2 rounded-md flex flex-col gap-1">
                <span>Password</span>
                <span className="relative z-0 flex">
                    <input className="border border-slate-300 focus:border-slate-700 p-2 rounded-md w-full" type={`${password ? 'text' : 'password'}`} id="password" required />
                    <i onClick={() => {
                        setPassword(!password);
                    }} className={`  cursor-pointer absolute right-1 p-1 top-1/2 -translate-y-1/2 fa-solid ${password ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                </span>
            </label>
        </div>
    </form>
}
