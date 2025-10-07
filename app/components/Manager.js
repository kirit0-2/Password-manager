"use client"
import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';


const Manager = () => {
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([])
    const ref = useRef()
    const passref = useRef()

    useEffect(() => {
        let passwords = localStorage.getItem("passwords")
        if (passwords) {
            setpasswordArray(JSON.parse(passwords))
        }
    }, [])



    const showPassword = () => {
        passref.current.type = "text"
        if (ref.current.src.includes("icons/eyecross.png")) {
            ref.current.src = "icons/eye.png"
            passref.current.type = "text"
        }
        else {
            ref.current.src = "icons/eyecross.png"
            passref.current.type = "password"
        }
    }

    const savePassword = () => {
        if(form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
            const newPassword = {...form, id: uuidv4()}
            setpasswordArray([...passwordArray, newPassword])
            localStorage.setItem("passwords", JSON.stringify([...passwordArray, newPassword]))
            setform({ site: "", username: "", password: "" })
            toast.success('Password saved successfully!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } else {
            let errorMessage = "Please fill in all fields with at least 4 characters: "
            let errors = []
            if(form.site.length <= 3) errors.push("Website URL")
            if(form.username.length <= 3) errors.push("Username")
            if(form.password.length <= 3) errors.push("Password")
            
            toast.error(errorMessage + errors.join(", "), {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }


    const copyText = (text) => {
        toast.success('Copied to clipboard!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        navigator.clipboard.writeText(text)
    }


    const deletePassword = (id) => {
        setpasswordArray(passwordArray.filter(item=>item.id!==id))
        localStorage.setItem("passwords",JSON.stringify(passwordArray.filter(item=>item.id!==id)))
    }

    const editPassword = (id) => {
        const passwordToEdit = passwordArray.filter(item=>item.id===id)[0]
        setform(passwordToEdit)
        setpasswordArray(passwordArray.filter(item=>item.id!==id))
        localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item=>item.id!==id)))
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                limit={1}
            />
            <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-blue-50 via-white to-purple-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-20 blur-[100px]"></div>
            </div>

            <div className="mycontainer min-h-screen pb-20">
                <div className="pt-8 pb-12">
                    <h1 className='text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-800 to-purple-600 bg-clip-text text-transparent'>
                        <span>Pass</span><span className='text-purple-600'>/SEC</span>
                    </h1>
                    <p className='text-gray-600 text-xl text-center font-medium'>Your own Password Manager</p>
                    <p className='text-gray-600 text-xl text-center font-medium'>No login required</p>

                </div>
                
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-100">
                    <div className="flex flex-col gap-6 items-center">
                        <input 
                            onChange={handleChange} 
                            placeholder='Enter website URL' 
                            value={form.site} 
                            className='input-field text-gray-700' 
                            type="text" 
                            name="site" 
                            id="site" 
                        />
                        <div className="flex flex-col md:flex-row w-full justify-between gap-6">
                            <input 
                                onChange={handleChange} 
                                placeholder='Enter Username' 
                                value={form.username} 
                                className='input-field text-gray-700' 
                                type="text" 
                                name="username" 
                                id="username" 
                            />
                            <div className="relative w-full">
                                <input 
                                    ref={passref} 
                                    onChange={handleChange} 
                                    placeholder='Enter Password' 
                                    value={form.password} 
                                    className='input-field text-gray-700 pr-12' 
                                    type="password" 
                                    name="password" 
                                    id="password" 
                                />
                                <span onClick={showPassword} className='absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer p-1 rounded-full hover:bg-gray-100 transition-colors duration-200'>
                                    <img ref={ref} className='w-5 h-5' src="./icons/eye.png" alt="toggle password visibility" />
                                </span>
                            </div>
                        </div>
                        <button onClick={savePassword} className='btn-primary flex items-center gap-3 mt-4'>
                            <lord-icon
                                src="https://cdn.lordicon.com/jgnvfzqg.json"
                                trigger="hover"
                                style={{"width":"20px", "height":"20px"}}>
                            </lord-icon>
                            Save Password
                        </button>
                    </div>
                </div>
                <div className="passwords">
                    <h2 className='font-bold text-3xl py-6 text-gray-800 text-center'>Your Passwords</h2>
                    {passwordArray.length === 0 && (
                        <div className="text-center py-12 bg-white rounded-2xl shadow-lg border border-gray-100">
                            <div className="text-gray-500 text-lg mb-2">No passwords saved yet</div>
                            <div className="text-gray-400">Add your first password using the form above</div>
                        </div>
                    )}
                    {passwordArray.length != 0 && (
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                            <table className="table-auto w-full">
                                <thead className='table-header'>
                                    <tr>
                                        <th className='py-4 px-6 text-left font-semibold'>Website</th>
                                        <th className='py-4 px-6 text-left font-semibold'>Username</th>
                                        <th className='py-4 px-6 text-left font-semibold'>Password</th>
                                        <th className='py-4 px-6 text-center font-semibold'>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {passwordArray.map((item, index) => {
                                        return <tr key={index} className={index % 2 === 0 ? 'table-row-even' : 'table-row-odd'}>
                                            <td className='py-4 px-6 border-b border-gray-100'>
                                                <div className='flex items-center gap-3'>
                                                    <a href={item.site} target='_blank' className='text-blue-600 hover:text-blue-800 font-medium truncate max-w-xs'>{item.site}</a>
                                                    <button className='action-btn-copy p-1 rounded-full hover:bg-purple-50 transition-colors duration-200' onClick={() => { copyText(item.site) }}>
                                                        <lord-icon
                                                            style={{ "width": "18px", "height": "18px" }}
                                                            src="https://cdn.lordicon.com/iykgtsbt.json"
                                                            trigger="hover">
                                                        </lord-icon>
                                                    </button>
                                                </div>
                                            </td>
                                            <td className='py-4 px-6 border-b border-gray-100'>
                                                <div className='flex items-center gap-3'>
                                                    <span className='text-gray-700 font-medium truncate max-w-xs'>{item.username}</span>
                                                    <button className='action-btn-copy p-1 rounded-full hover:bg-purple-50 transition-colors duration-200' onClick={() => { copyText(item.username) }}>
                                                        <lord-icon
                                                            style={{ "width": "18px", "height": "18px" }}
                                                            src="https://cdn.lordicon.com/iykgtsbt.json"
                                                            trigger="hover">
                                                        </lord-icon>
                                                    </button>
                                                </div>
                                            </td>
                                            <td className='py-4 px-6 border-b border-gray-100'>
                                                <div className='flex items-center gap-3'>
                                                    <span className='text-gray-700 font-mono text-sm truncate max-w-xs'>{"•".repeat(item.password.length)}</span>
                                                    <button className='action-btn-copy p-1 rounded-full hover:bg-purple-50 transition-colors duration-200' onClick={() => { copyText(item.password) }}>
                                                        <lord-icon
                                                            style={{ "width": "18px", "height": "18px" }}
                                                            src="https://cdn.lordicon.com/iykgtsbt.json"
                                                            trigger="hover">
                                                        </lord-icon>
                                                    </button>
                                                </div>
                                            </td>
                                            <td className='py-4 px-6 border-b border-gray-100 text-center'>
                                                <div className='flex justify-center gap-2'>
                                                    <button className='action-btn-edit p-2 rounded-full hover:bg-blue-50 transition-colors duration-200' onClick={()=>{editPassword(item.id)}}>
                                                        <lord-icon
                                                            src="https://cdn.lordicon.com/gwlusjdu.json"
                                                            trigger="hover"
                                                            style={{"width":"20px", "height":"20px"}}>
                                                        </lord-icon>
                                                    </button>
                                                    <button className='action-btn-delete p-2 rounded-full hover:bg-red-50 transition-colors duration-200' onClick={()=>{deletePassword(item.id)}}>
                                                        <lord-icon
                                                            src="https://cdn.lordicon.com/skkahier.json"
                                                            trigger="hover"
                                                            style={{"width":"20px", "height":"20px"}}>
                                                        </lord-icon>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>

        </>

    )
}

export default Manager
