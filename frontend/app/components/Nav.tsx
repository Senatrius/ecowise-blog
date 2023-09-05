import Link from "@/node_modules/next/link"

export const Nav = () => {
  return <nav className="absolute top-16 md:top-0 left-0 w-full bg-white shadow-sm md:shadow-none md:relative md:w-auto">
    <ul className="flex flex-col w-full md:flex-row md:w-auto md:p-0 md:gap-5 lg:gap-8">
      <li>
        <Link className="block px-[5%] py-3 md:p-0" href="/">Home</Link>
      </li>
      <li>
        <Link className="block px-[5%] py-3 md:p-0" href="/">Efficiency</Link>
      </li>
      <li>
        <Link className="block px-[5%] py-3 md:p-0" href="/">Green Living</Link>
      </li>
      <li>
        <Link className="block px-[5%] py-3 md:p-0" href="/">Outdoors</Link>
      </li>
      <li>
        <Link className="block px-[5%] py-3 md:p-0" href="/">Savings</Link>
      </li>
      <li>
        <Link className="block px-[5%] py-3 md:p-0" href="/">Comfort</Link>
      </li>
    </ul>
  </nav>
}