


export default function SignUp () {
   
    return (
        <div className="bg-zinc-800 h-screen flex flex-col justify-center items-center">
          <form className="flex flex-col items-center  gap-2 h-[45vh] w-8/12 bg-green-200 rounded-lg md:w-[25rem] md:h-[40vh] lg:h-[55vh]" action={"./"} method="POST">
            <h2 className="py-4">Sign Up</h2>
              <div className="flex flex-col">
                <label className="text-left" htmlFor="email">Email</label>
              </div>
              <div className="flex flex-col">
                <label className="text-left" htmlFor="password">Password</label>
              </div>
                <a href="{{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=email">
                  Confirm your email
                </a>
          </form>
          <p className="text-white text-sm cursor-pointer">Already have an account? Login!</p>
        </div>
    )
}