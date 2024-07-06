import { useState } from "react"



export default function Header() {
    const [IsCart,setIsCart]=useState(0)


    const shoppingCardHandle=()=>{
        setIsCart(!IsCart)
    }

    return (
      <>
          <header className=" w-[90%] bg-black/50 mx-auto  hidden md:flex justify-between items-center rounded-3xl text-xl py-5 px-3.5 lg:px-10 mt-9 ">
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
                <symbol id="chevron-left" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </symbol>



            </svg>
            {/* Menu & icon */}
            <nav className="flex gap-x-3 lg:gap-x-9 items-center  ">
                {/* Logo icon */}
                <div>
                    <img src="../images/app-logo.png" alt="logo-png"></img>
                </div>
                {/* Menu */}
                <ul className="flex gap-x-3 lg:gap-x-9 h-14 leading-[56px] text-gray-300 font-DanaRegular tracking-tightest">
                    <li>صفحه اصلی</li>
                    <li className="relative group">فروشگاه
                        {/* subMenu */}
                        <div className="absolute bg-white dark:bg-gray-700 text-gray-700  dark:text-white p-6  space-y-4 text-base opacity-0 group-hover:opacity-100 tracking-normal  transition-all delay-150   mt-[6px] w-52 rounded-2xl border-t-[3px] child-hover:text-orange-300 border-orange-300 pr-6 child:inline-block ">
                            <a href="#">قهوه ویژه</a>
                            <a href="#">ویژه در سطح جهانی</a>
                            <a href="#">قهوه درجه یک</a>
                            <a href="#">ترکیبات تجاری</a>
                            <a href="#">کپسول قهوه</a>
                            <a href="#">قهوه زینو بریزلی</a>

                        </div>
                    </li>
                    <li>دیکشنری</li>
                    <li>بلاگ</li>
                    <li>درباره ما</li>
                    <li>تماس با ما</li>
                </ul>
            </nav>
            {/* icon & login */}
            <div className="flex items-center h-14 gap-x-2.5 lg:gap-x-5 text-orange-200">
                {/* icons */}
                <div className=" flex gap-x-2.5 h-14 lg:gap-x-5 items-center">
                    {/* shopping-cart */}
                 
                    <div className="relative h-full flex items-center group">
                            <svg className=" w-[36px] h-[36px]">
                                    <use href="#shopping-cart"></use>
                            </svg>   
                                       {/* div shopping cart */}
                    <div className="absolute top-[105%] left-0 transition-all duration-100 delay-150 bg-white dark:bg-gray-700 p-5 w-[400px] border-t-[3px] rounded-2xl border-orange-300 opacity-0 group-hover:opacity-100">
                        {/* shopping cart header */}
                        <div className="flex justify-between text-xs tracking-tighter items-center">
                            <span className="text-gray-300">1 مورد</span>
                            <a className="flex items-center">
                                مشاهده سبد خرید
                                <svg className="w-5 h-5">
                                    <use href="#chevron-left"></use>
                                </svg>
                            </a>
                        </div>
                        {/* shopping cart body */}
                        <div className="flex mt-5 gap-x-2.5">
                            {/* shopping cart body - img */}
                            <div className="w-100 h-100">
                                <img src="../images/products/p2.png"></img>
                            </div>
                            {/* shopping cart body-description */}
                            <div className="flex flex-col justify-between">
                                {/* shopping cart body-description-title */}
                                <h2 className="text-gray-700 dark:text-white text-base max-w-[230px]">قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی</h2>
                                {/* shopping cart body-description-price */}
                                <div>
                                    <h5 className="text-xs text-teal-600 tracking-tighter dark:text-emerald-500">14500 تومان تخفیف</h5>
                                    <div className="text-lg font-DanaBold text-gray-700 dark:text-white">
                                        75000
                                        <span className="text-sm"> تومان </span>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* dived  shopping cart body and footer  */}
                        <span className="block h-px bg-gray-300 dark:bg-white w-[360px] my-6"></span>
                        {/* shopping cart footer */}
                        <div className="flex justify-between">
                            {/* shopping cart footer-sum price */}
                            <div className="flex flex-col gap-y-1">
                                <h4 className="text-gray-300 text-xs tracking-tighter">مبلغ قابل پرداخت</h4>
                                <div className="text-gray-700 dark:text-white text-xl font-DanaBold">
                                    1450000
                                    <span className="text-sm"> تومان </span>
                                </div>
                            </div>
                            {/* shopping cart footer-pay */}
                            <a className="bg-teal-600 dark:bg-emerald-500 text-white rounded-xl w-36 h-14 flex items-center justify-center">
                                ثبت سفارش
                            </a>
                        </div>

                    </div>    
               
                    </div>                
              
              
                    {/* moon */}
                    <svg className="w-[36px] h-[36px]">
                        <use href="#moon"></use>
                    </svg>  
                </div>
                {/* line between element */}
                <span className="block bg-white/20 h-14 w-px"></span>
                {/* login & icon login */}

                <a className="flex gap-x-2.5">
                    <svg className="w-[36px] h-[36px]">
                        <use href="#arrow-left">  </use>
                    </svg>
                    ورود و ثبت نام

                </a>
                

            </div>
        </header>
        {/* Header Mobile */}
        <div className="md:hidden">
        
            
        </div>
      </>
    )

}