import { useState } from "react"


export default function ProductCategories() {
    const [ProductCategories, setProductCategories] = useState([
        { id: 1, title: 'قهوه دمی و اسپرسو', img: '../images/categories/category1.png' },
        { id: 2, title: 'لوازم جانبی و تجهیزات', img: '../images/categories/category2.png' },
        { id: 3, title: 'اسپرسو ساز', img: '../images/categories/category3.png' },
        { id: 4, title: 'پک تستر قهوه', img: '../images/categories/category4.png' },
        { id: 5, title: 'قهوه ترک', img: '../images/categories/category5.png' },

    ])

    return (
        <>
            <section className="productCategory">
                <div className="flex items-center justify-between flex-wrap mb-20">
                    {ProductCategories.map(pCategory => (
                        <div className="flex flex-col items-center gap-2.5">
                            <div className="w-[150px] h-[150px]"><img src={pCategory.img}></img></div>
                            <h4 className="text-base text-gray-700 dark:text-white font-DanaRegular">{pCategory.title}</h4>
                        </div>
                    ))}

                </div>
            </section>

        </>
    )

}