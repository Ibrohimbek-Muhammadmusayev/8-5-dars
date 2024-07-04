import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <header className="max-w-full h-[663px] bg-[#F2F0F1]">
        <div className="max-w-[1240px] mx-auto">
          <div className="pt-[70px]">
            <div className="flex justify-between pr-[85px]">
              <div className="flex flex-col pt-[15px]">
                <h1 className="font-bold text-[64px] text-black tracking-[-3px] leading-[68px]">FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE</h1>
                <p className="text-[#00000061] mt-[32px]">Browse through our diverse range of meticulously crafted garments, designed <br /> to bring out your individuality and cater to your sense of style.</p>
                <button className="mt-[32px] btn w-[210px] h-[52px] bg-[#000000] text-white rounded-[62px]">Shop Now</button>
                <div className="mt-[40px] stats stats-vertical max-w-[650px] h-[100px] lg:stats-horizontal shadow">
                  <div className="stat">
                    <div className="stat-value">200+</div>
                    <div className="stat-title">International Brands</div>
                  </div>

                  <div className="stat">
                    <div className="stat-value">2,000+</div>
                    <div className="stat-title">High-Quality Products</div>
                  </div>

                  <div className="stat">
                    <div className="stat-value">30,000+</div>
                    <div className="stat-title">Happy Customers</div>
                  </div>
                </div>
              </div>
              <Image
                src='/Rectangle.png'
                alt="images"
                width={460}
                height={663}
              />
            </div>
          </div>
        </div>
        <div className="navbar bg-[#000000] h-[122px]">
          <div className="mx-auto flex gap-[106px]">
            <Image
              src='/zara-logo.svg'
              alt="images"
              width={91}
              height={38}
            />
            <Image
              src='/gussi-logo.svg'
              alt="images"
              width={156}
              height={36}
            />
            <Image
              src='/prada-logo.svg'
              alt="images"
              width={194}
              height={32}
            />
          </div>
        </div>
      </header>
      <main>
        <section className="max-w-[1240px] mx-auto mt-[102px]">
          <div className="mb-[55px] flex flex-col items-center">
            <h1 className="text-[48px] font-bold">NEW ARRIVALS</h1>
          </div>
          {/* wrapper products */}
          <div className="flex flex-wrap gap-[20px]">
            <Link href={'/'}>
              <div className="flex flex-col gap-[8px]">
                <Image
                  src='/Frame1.png'
                  alt="images"
                  width={295}
                  height={298}
                  />
                <h2>T-SHIRT WITH TAPE DETAILS</h2>
                <Image
                  src='/rating.svg'
                  alt="images"
                  width={150}
                  height={19}
                  />
                <h1>$120</h1>
              </div>
            </Link>
            <Link href={'/'}>
              <div className="flex flex-col gap-[8px]">
                <Image
                  src='/jeans.png'
                  alt="images"
                  width={295}
                  height={298}
                />
                <h2>T-SHIRT WITH TAPE DETAILS</h2>
                <Image
                  src='/rating.svg'
                  alt="images"
                  width={150}
                  height={19}
                />
                <h1>$120</h1>
              </div>
            </Link>
            <Link href={'/'}>
              <div className="flex flex-col gap-[8px]">
                <Image
                  src='/shirt.png'
                  alt="images"
                  width={295}
                  height={298}
                />
                <h2>T-SHIRT WITH TAPE DETAILS</h2>
                <Image
                  src='/rating.svg'
                  alt="images"
                  width={150}
                  height={19}
                />
                <h1>$120</h1>
              </div>
            </Link>
            <Link href={'/'}>
              <div className="flex flex-col gap-[8px]">
                <Image
                  src='/t-shitr.png'
                  alt="images"
                  width={295}
                  height={298}
                />
                <h2>T-SHIRT WITH TAPE DETAILS</h2>
                <Image
                  src='/rating.svg'
                  alt="images"
                  width={150}
                  height={19}
                />
                <h1>$120</h1>
              </div>
            </Link>
          </div>
          <div className="flex mt-[36px] pb-[64px] border-b-[2px]">
            <button className="m-auto mt-[32px] btn w-[210px] h-[52px] bg-[#ffffff] text-black border rounded-[62px]">View All</button>
          </div>
        </section>
        <section className="max-w-[1240px] mx-auto mt-[64px]">
          <div className="mb-[55px] flex flex-col items-center">
            <h1 className="text-[48px] font-bold">NEW ARRIVALS</h1>
          </div>
          {/* wrapper products */}
          <div className="flex flex-wrap gap-[20px]">
            <Link href={'/'}>
              <div className="flex flex-col gap-[8px]">
                <Image
                  src='/Frame1.png'
                  alt="images"
                  width={295}
                  height={298}
                  />
                <h2>T-SHIRT WITH TAPE DETAILS</h2>
                <Image
                  src='/rating.svg'
                  alt="images"
                  width={150}
                  height={19}
                  />
                <h1>$120</h1>
              </div>
            </Link>
            <Link href={'/'}>
              <div className="flex flex-col gap-[8px]">
                <Image
                  src='/jeans.png'
                  alt="images"
                  width={295}
                  height={298}
                />
                <h2>T-SHIRT WITH TAPE DETAILS</h2>
                <Image
                  src='/rating.svg'
                  alt="images"
                  width={150}
                  height={19}
                />
                <h1>$120</h1>
              </div>
            </Link>
            <Link href={'/'}>
              <div className="flex flex-col gap-[8px]">
                <Image
                  src='/shirt.png'
                  alt="images"
                  width={295}
                  height={298}
                />
                <h2>T-SHIRT WITH TAPE DETAILS</h2>
                <Image
                  src='/rating.svg'
                  alt="images"
                  width={150}
                  height={19}
                />
                <h1>$120</h1>
              </div>
            </Link>
            <Link href={'/'}>
              <div className="flex flex-col gap-[8px]">
                <Image
                  src='/t-shitr.png'
                  alt="images"
                  width={295}
                  height={298}
                />
                <h2>T-SHIRT WITH TAPE DETAILS</h2>
                <Image
                  src='/rating.svg'
                  alt="images"
                  width={150}
                  height={19}
                />
                <h1>$120</h1>
              </div>
            </Link>
          </div>
          <div className="flex mt-[36px] pb-[80px]">
            <button className="m-auto mt-[32px] btn w-[210px] h-[52px] bg-[#ffffff] text-black border rounded-[62px]">View All</button>
          </div>
        </section>
      </main>
    </div>
  );
}
