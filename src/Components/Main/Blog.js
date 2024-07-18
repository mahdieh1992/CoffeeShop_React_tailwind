import { useState } from "react"

export default function Blog() {
    const [Blog, setBlog] = useState([
        { id: 1, title: 'طرز تهیه قهوه دمی با دستگاه اروپرس', date: '25 تیرماه 1403', img: '../images/blogs/blog-1.png' },
        { id: 2, title: 'یک نوشیدنی هیجان انگیز و پرکالری برای شروع روز', date: '25 تیرماه 1403', img: '../images/blogs/blog-2.png' },
        { id: 3, title: 'طرز تهیه یک فنجان کافه زینو برزیلی', date: '25 تیرماه 1403', img: '../images/blogs/blog-3.png' },
        { id: 4, title: 'طرز تهیه قهوه دالگونا مناسب روز‌های کرونایی', date: '25 تیرماه 1403', img: '../images/blogs/blog-4.png' },
    ])

    return (
        <>
            <section className="Blog">
                <svg className="hidden">
                    <symbol id="chevron-left" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </symbol>
                </svg>
                <div>
                    {/* header Blog */}
                    <div className="flex justify-between mb-12">
                        <h2 className="text-2xl md:text-5xl font-MorabbaBold text-white ">مطالب خواندنی</h2>
                        <a className="flex items-center text-base md:text-xl font-DanaRegular tracking-tightest text-orange-300">مشاهده مطالب
                            <svg className="w-5 h-5">
                                <use href="#chevron-left"></use>
                            </svg>
                        </a>
                    </div>
                    {/* list of Blog */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 ">
                        {Blog.map(blog => (
                            <div className="flex md:flex-col gap-4 items-center justify-between shadow-normal md:pb-2 bg-white dark:bg-gray-700 rounded-2xl p-2.5">
                                {/* images */}
                                <div className="">
                                    <img  className="rounded-2xl shrink-0 w-[130px]  md:w-[280px] md:h-[130px] object-cover" src={blog.img}></img>
                                </div>
                                {/*  description  & divided and date*/}
                                <div className="flex flex-col md:flex-row justify-between">
                                    {/* description */}
                                    <p className=" text-xs text-gray-700 max-w-[192px] dark:text-white font-DanaRegular">{blog.title}</p>
                                    <div className="flex flex-col md:flex-row md:text-left text-center">
                                        {/* divided */}
                                        <span className="block bg-gray-100 w-[198px] h-px md:h-[51px] md:w-px md:mx-5 my-5 md:my-0 dark:bg-white/10 "></span>
                                        {/* date */}
                                        <span className="text-teal-600 md:max-w-[29px] dark:text-green-500 text-xs mb-[8px]">{blog.date}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </section>
        </>
    )

}