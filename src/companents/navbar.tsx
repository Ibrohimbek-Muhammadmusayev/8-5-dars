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
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <details>
                  <summary>Shop</summary>
                  <ul className="p-2">
                    <li><a>Submenu</a></li>
                    <li><a>Submenu</a></li>
                  </ul>
                </details>
              </li>
              <li><a>On Sale</a></li>
              <li><a>New Arrivals</a></li>
              <li><a>Brands</a></li>
            </ul>
          </div>
          <form className="w-[577px] rounded-[62px] h-[48px] bg-[#F0F0F0]">
            <svg className="ml-[16px] w-[24x] h-[24px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(154,151,151,1)"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>
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
