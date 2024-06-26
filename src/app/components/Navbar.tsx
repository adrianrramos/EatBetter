import Link from "next/link";


export default function Navbar() {
  return (
    <nav className="flex justify-between rounded-xl py-1 px-4 border border-white w-10/12 m-auto text-sm">
      <div>EatBetter</div>

      <ul className="flex w-36 justify-between">
        <li>Home</li>
        <li>FAQ</li>
        <Link href={'./login/page.tsx'}>Sign Up</Link>
      </ul>
    </nav>
  );
}
