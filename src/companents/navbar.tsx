import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="">
      <div className="max-w-full bg-[#000000] h-[38px]">
        <div className="max-w-[1440px] flex justify-between mx-auto py-[10px] items-center text-white">
          <div className=""></div>
          <div className="flex gap-[5px]">
            <p className="text-[14px] font-normal">Sign up and get 20% off to your first order.</p>
            <Link className="text-[14px] font-medium underline" href={'#'}>Sign Up Now</Link>
          </div>
          <Image
            src="/close.svg"
            alt="Picture of the author"
            width={24}
            height={24}
          />
        </div>
      </div>
      <div className="navbar flex flex-wrap min-h-[96px]">
        <div className="navbar flex justify-between items-center max-w-[1240px] mx-auto">
          <Image
            src="/SHOP-logo.svg"
            alt="Picture of the author"
            width={160}
            height={22}
          />
          <div className="navbar-center text-black hidden lg:flex">
            <ul className="menu flex gap-[30px] menu-horizontal px-1">
              <li className="cursor-pointer">
                <details>
                  <summary>Shop</summary>
                  <ul className="p-2">
                    <li><a>Submenu</a></li>
                    <li><a>Submenu</a></li>
                  </ul>
                </details>
              </li>
              <li className="cursor-pointer"><a>On Sale</a></li>
              <li className="cursor-pointer"><a>New Arrivals</a></li>
              <li className="cursor-pointer"><a>Brands</a></li>
            </ul>
          </div>
          <form className="w-[577px] rounded-[62px] h-[48px] bg-[#F0F0F0]">
          <Image
              className="ml-[16px]"
              src='/search.svg'
              alt="Picture of the author"
              width={24}
              height={24}
              />
            <input className="w-[520px] bg-[#F0F0F0] h-[48px] outline-none p-[5px] pl-[12px]" placeholder="Search for products..." type="text" />
          </form>
          <div className="flex gap-[16px]">
            <button>
              <Image
              src='/frame.svg'
              alt="Picture of the author"
              width={24}
              height={24}
              />
            </button>
            <button>
              <Image
              src='/profile-logo.svg'
              alt="Picture of the author"
              width={24}
              height={24}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
