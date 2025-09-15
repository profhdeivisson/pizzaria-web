import Link from 'next/link'

function NavBar() {
  return (
    <nav className="fixed top-0 w-full flex items-center py-2 px-2 justify-between z-50 ">
      <Link href="/" className="uppercase font-black text-lg h-12 items-center text-orange-500">
        Bella<span className='text-yellow-500'>Pizza</span>
      </Link>
    </nav>
  );
}

export default NavBar;
