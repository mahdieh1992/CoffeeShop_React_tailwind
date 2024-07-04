
export default function Header() {
    return (
        <header className="w-[90%] bg-black/50 mx-auto flex justify-between items-center rounded-3xl text-xl py-5 px-10 mt-9 ">
            <svg className="hidden">
                <symbol id="shopping-cart" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </symbol>
                <symbol id="moon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </symbol>
                <symbol id="arrow-left" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                </symbol>


            </svg>
           {/* Menu & icon */}
           <nav className="flex gap-x-9">
            {/* Logo icon */}
             <div>
                <img src="../images/app-logo.png" alt="logo-png"></img>
             </div>
              {/* Menu */}
             <ul className="flex gap-x-9  text-gray-300 font-DanaRegular tracking-tightest">
                <li>صفحه اصلی</li>
                <li>فروشگاه</li>
                <li>دیکشنری</li>
                <li>بلاگ</li>
                <li>درباره ما</li>
                <li>تماس با ما</li>
             </ul>
           </nav>
           {/* icon & login */}
           <div className="flex items-center gap-x-5 text-orange-200">
            {/* icons */}
                <div className="flex gap-x-5">
                    {/* shopping-cart */}
                    <svg className="w-[36px] h-[36px]">
                        <use href="#shopping-cart"></use>
                    </svg>
                    {/* moon */}
                    <svg className="w-[36px] h-[36px]">
                        <use href="#moon"></use>
                    </svg>
                </div>
                {/* line between element */}
                   <span className="block bg-white/20 h-14 w-px"></span>
                {/* login & icon login */}
          
                      <a className="flex gap-x-2.5">
                        <svg  className="w-[36px] h-[36px]">
                                <use href="#arrow-left">  </use>
                            </svg>
                        ورود و ثبت نام 
                   
                      </a>
              
           </div>
        </header>
    )

}