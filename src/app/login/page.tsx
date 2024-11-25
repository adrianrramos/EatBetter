
import { login, signup } from "./actions"

export default function LoginPage() {
  return (
    <div className="bg-zinc-800 h-screen flex flex-col justify-center items-center">
      <form className="flex flex-col items-center  gap-2 h-[45vh] w-8/12 bg-green-200 rounded-lg md:w-[25rem] md:h-[40vh] lg:h-[55vh]">
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <button formAction={login}>Log in</button>
        <button formAction={signup}>Sign up</button>
      </form>
    </div>
  )
}
