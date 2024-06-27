import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="m-auto flex w-10/12 justify-between rounded-xl border border-white px-4 py-1 text-sm md:h-16 md:items-center md:rounded-full md:px-8">
      <div className="md:text-lg">EatBetter</div>
      <ul className="flex w-36 justify-between md:w-44 md:text-base">
        <li>Home</li>
        <li>FAQ</li>
        <Link href={"./login"}>Sign Up</Link>
      </ul>
    </nav>
  );
}
