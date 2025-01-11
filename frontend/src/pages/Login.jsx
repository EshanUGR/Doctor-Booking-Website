import React,{useState} from 'react'

const Login = () => {
  const[state,setState]=useState('Sign Up')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[name,setName]=useState('')

  const onSubmitHandler=async(event)=>
  {
event.preventDefault();
  }
  return (
    <form
      action="
  "
      className="min-h-[80vh] flex items-center"
    >
      <div className="flex flex-col items-start gap-3 p-8 m-auto min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">
          {state === "Sign Up" ? "Careate Account" : "Login"}
        </p>
        <p>
          Please {state === "Sign Up" ? "Sign Up" : "log in "} to book
          appointment
        </p>
        {state === "Sign Up" && (
          <div className="w-full">
            <p>Full Name</p>
            <input
              type="text"
              onChange={(e) => setName(e.target.name.value)}
              value={name}
              className="w-full p-2 mt-1 rounded bg-zinc-200"
            />
          </div>
        )}

        <div className="w-full">
          <p>Email</p>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.name.value)}
            value={email}
            className="w-full p-2 mt-1 rounded bg-zinc-200"
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.name.value)}
            value={password}
            className="w-full p-2 mt-1 rounded bg-zinc-200"
          />
        </div>
        <button className="w-full py-2 text-base text-white rounded-md bg-primary">
          {state === "Sign Up" ? "Careate Account" : "Login"}
        </button>
        {state === "Sign Up" ? (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className="underline cursor-pointer text-primary"
            >
              Login here{" "}
            </span>
          </p>
        ) : (
          <p>
            Create a new account?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="underline cursor-pointer text-primary"
            >
              click here{" "}
            </span>
          </p>
        )}
      </div>
    </form>
  );
}

export default Login
