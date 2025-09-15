import Link from 'next/link'
import Image from 'next/image';

function NavBar() {
  return (
    <nav className="fixed top-0 w-full flex bg-red-600 items-center py-2 px-3 justify-between z-50 text-white">
      
      <Link href="/" className="flex items-center gap-2 uppercase font-black text-lg">
        <Image 
          src="/img/logo.png" 
          alt="Logo Bella Pizza" 
          width={32}
          height={32}
          className="object-contain rounded-full"
        />
        <span>
          Bella<span className='text-yellow-500'>Pizza</span>
        </span>
      </Link>

      <div className="flex items-center gap-4">
      </div>

    </nav>
  );
}

export default NavBar;
