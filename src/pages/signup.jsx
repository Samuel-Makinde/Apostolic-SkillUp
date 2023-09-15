import { useState } from "react"
 
 
 
 const Signup = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")


    console.log(firstName)
    console.log(lastName)
    console.log(email)

    const onSubmit = (data, e) => {
        //   e.preventDefault();

        // console.log(data)
    }
  return (
    <main className="w-full h-full">
        <div className="w-full h-full flex flex-col justify-center items-center mt-[30px]">

            <form action="" onClick={onSubmit}>
            <div className="mt-[40px]">
                <label htmlFor="firstName" className="block">First Name</label>
                <input 
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="FirstName"
                className="w-[300px] h-[60px] border-[2px] border-red-700 rounded-[10px] pl-[10px] outline-none"
                />
            </div>
            <div className="mt-[40px]">
                <label htmlFor="lastName" className="block">Last Name</label>
                <input 
                type="text"
                id="lastName"
                name="lastName"
                placeholder="LastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-[300px] h-[60px] border-[2px] border-red-700 rounded-[10px] pl-[10px] outline-none"
                />
            </div>
            <div className="mt-[40px]">
                <label htmlFor="Email" className="block">Email address</label>
                <input 
                type="email"
                id="Email"
                name="Email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-[300px] h-[60px] border-[2px] border-red-700 rounded-[10px] pl-[10px] outline-none"
                />
            </div>
            <button onClick={onsubmit} className="w-[300px] h-[60px] bg-black text-white text-[20px] mt-[30px] rounded-[10px]">Submit</button>
            </form>

        </div>
    </main>
  )
}

export default Signup


//     const [user, setUser] =useState(null)

//     // setUser = i am samuel

//     user = i am samuel
//     setUser = i am mr tobi
// consolog(user)


 