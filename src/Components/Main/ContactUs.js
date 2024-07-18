export default function ContactUs() {

    return (
        <>
            <section className="ContactUs">
                <svg className="hidden">
                    <symbol id="phone" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
                    </symbol>
                </svg>
                <div className="md:flex items-center gap-x-5 mt-8 md:my-28">
                    {/* img Contact Us*/}
                    <div>
                        <img className="w-[296px] " src="../images/Contact.png"></img>
                    </div>
                    {/* description Contact Us */}
                    <div className="text-gray-700 dark:text-white child:py-6 ">
                        <div>
                            <h1 className="font-MorabbaBold text-2xl m:text-5xl">یکی از بهترین قهوه ها !</h1>
                            <span className="font-Morabba-Light text-sm md:text-base">کیفیت قهوه را از ما بخواهید ...</span>
                        </div>
                        <p className="font-DanaRegular  text-sm md:text-base max-w-[358px] md:max-w-[844px]">فضای گرم و دنج ما را احساس کنید، جایی که همه می توانند قهوه معطری پیدا کنند و دسرهای خوشمزه ما را که کاملاً با قهوه داغ همراه شده است، امتحان کنند. فضای داخلی شیک و کارکنان خوش برخورد ما روز شما را می سازد!</p>
                        <a className="flex w-[216px] h-[60px] text-orange-300 gap-x-2 border rounded-full border-orange-300 items-center justify-center">
                            <svg className=" w-5 h-5 md:w-6 md:h-6">
                                <use href="#phone"></use>
                            </svg>
                            ثبت سفارش تلفنی</a>
                    </div>
                </div>
            </section>
        </>
    )

}