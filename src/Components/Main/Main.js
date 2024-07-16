import Header from "../Header/Header"
import Product from "./Product"


export default function Main() {
    return (


        <>
            <svg className="hidden">
                <symbol id="arrow-left" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                </symbol>
                <symbol id="chevron-left" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </symbol>
            </svg>
            {/* back ground of header  bg-mobile  bg-desktop */}
            <div className="w-full overflow-y-hidden bg-gray-100p relative  md:bg-Desktop  bg-no-repeat bg-cover  md:aspect-auto bg-[center_top]  md:h-[900px] md:py-9 ">
                <Header />
                {/* description for bg-mobile */}
                <div className="relative bg-Mobile h-[200px] sm:aspect-[1/2] w-full text-white  bg-no-repeat bg-cover md:hidden">
                    <div className="absolute top-1/4 left-0">
                        <h2 className="text-base font-MorabbaBold">قهوه عربیکا تانزانیا</h2>
                        <h4 className="text-sm font-Morabba-Light">جان بالانس یک فنجان!</h4>
                        <span className="block w-[100px] bg-orange-300 h-[1px] my-3"></span>
                        <p className="max-w-[201px] text-xs font-DanaRegular">قطعا نام آشنای عربیکا را شنیده اید، عربیکا یکی از گونه های قهوه است که در نواحی مختلف کمربند قهوه کشت میشود.</p>
                    </div>
                </div>
                {/*  this is circle in the middle of header */}
                <div className="circle absolute flex justify-center items-center translate-y-2/4 w-[203px] h-[203px] ">
                    <div className="circle w-[145px] h-[145px] flex justify-center items-center text-white/25" >
                        <div className="circle flex justify-center w-[95px] h-[95px]  text-white/25 " >
                            {/* <div className="circle absolute top-16 w-[30px] h-[30px] bg-orange-300">

                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            <section >
                <div>
                    <div className="product dark:products h-full">
                        {/*  body product  */}          
                        <div className="w-[65%] mx-auto">
                            {/* header of products */}
                            <div className="flex justify-between items-end  pt-48">
                                <div className="text-white">
                                    <h2 className="font-MorabbaBold text-3xl">جدیدترین محصولات</h2>
                                    <h4 className="font-Morabba-Light text-2xl ">فرآوری شده از دانه قهوه</h4>
                                </div>
                                <a className="font-DanaRegular text-orange-300 text-base tracking-tightest flex items-center">
                                    مشاهده همه محصولات
                                    <svg className="w-5 h-5" >
                                        <use href="#chevron-left"></use>
                                    </svg>
                                </a>
                            </div>
                             <Product/>   
                        </div>

                    </div>
                </div>
            </section>

        </>


    )
}