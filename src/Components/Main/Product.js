import { useState } from "react"
import Categories from "./Categories"
import ProductCategories from "./ProductCategories"
import MoreSalesProduct from "./MoreSalesProduct"


export default function Product() {
    const [Product, setProduct] = useState([
        { id: 1, title: 'قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی', price: '175,000 تومان', img: '../images/products/p1.png', star: 3 },
        { id: 2, title: 'قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی', price: '175,000 تومان', img: '../images/products/p2.png', star: 5 },
        { id: 1, title: 'قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی', price: '175,000 تومان', img: '../images/products/p1.png', star: 2 },
        { id: 2, title: 'قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی', price: '175,000 تومان', img: '../images/products/p2.png', star: 4 },
        { id: 1, title: 'قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی', price: '175,000 تومان', img: '../images/products/p1.png', star: 1 },
        { id: 2, title: 'قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی', price: '175,000 تومان', img: '../images/products/p2.png', star: 5 },
        { id: 1, title: 'قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی', price: '175,000 تومان', img: '../images/products/p1.png', star: 3 },
        { id: 2, title: 'قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی', price: '175,000 تومان', img: '../images/products/p2.png', star: 5 },





    ])

    const [Star, setStar] = useState([...Array(5)])



    return (

        <>
            {/* these are products */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-12">
                <svg className="hidden">
                    <symbol id="star" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </symbol>
                    <symbol id="shopping-cart" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </symbol>
                    <symbol id="arrow-left-right" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                    </symbol>

                </svg>
                {Product.map(product => (
                    //products
                    <div className="bg-white dark:bg-gray-700 rounded-2xl p-5 ">
                        {/* div of img product */}
                        <div className="">
                            <img src={product.img}></img>
                        </div>
                        {/* title products */}
                        <div className="font-DanaRegular flex flex-col gap-y-2.5 ">
                            {/* this  is description product */}
                            <p className="text-gray-700  dark:text-white  text-sm">{product.title}</p>
                            {/* this is price product */}
                            <span className="text-sm text-teal-600 dark:text-emerald-500 tracking-tighter">{product.price}</span>
                        </div>
                        {/* icons */}
                        <div className="flex items-center justify-between text-gray-300 mt-4">
                            {/* icons shopping and left-right */}
                            <div className="flex items-center gap-x-3">
                                {/* shopping icon */}
                                <div className="flex items-center justify-center w-9 h-9 bg-gray-100 rounded-full">
                                    <svg className="w-5 h-5">
                                        <use href="#shopping-cart"></use>
                                    </svg>

                                </div>

                                <svg className="w-5 h-5">
                                    <use href="#arrow-left-right"></use>
                                </svg>

                            </div>
                            {/* icons star */}
                            <div className="flex">
                                {Star.map(star => (
                                    <svg className="w-4 h-4 text-yellow-400">
                                        <use href="#star"></use>
                                    </svg>
                                ))}
                            </div>
                        </div>

                    </div>
                ))}

            </div>
            <Categories />
            <ProductCategories />
            <MoreSalesProduct />

        </>
    )

}