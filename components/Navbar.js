import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-3 rounded-2xl">
        <div className="flex justify-between items-center">
            <Link href="/">
            <div className="flex items-center gap-x-3">
                <img className="rounded-full w-12" src="https://avatars.githubusercontent.com/u/162640629?v=4" />
                <h1 className="text-white text-2xl underline">Joshua Webb</h1>
            </div>
            </Link>
          <div className="flex gap-x-4">
            <Link className="text-white outline-1 outline-blue-400 hover:bg-gray-700 p-2 rounded" href="/projects">Projects</Link>
            <Link className="text-white outline-1 outline-blue-400 hover:bg-gray-700 p-2 rounded" href="/socials">Socials</Link>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;