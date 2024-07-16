import { useState } from "react"

export default function Categories() {
    const [Categories, setCategories] = useState([
        { id: 1, title: 'پودر های فوری', description: 'نسکافه ، هات چاکلت ، ماسالا', img: '../images/categories/category-right.jpg' },

        { id: 2, title: 'انواع قهوه', description: 'ترکیبی و تک خاستگاه', img: '../images/categories/category-left.jpg' },

    ])

    return (
        <>
            {/* this is for category product */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-20 ">
                {Categories.map(category => (
                    // category img 
                    <div className="relative category overflow-hidden">
                        <img src={category.img}></img>
                        {/* give gradient to img */}
                        <div className="absolute inset-0 bg-gradient-to-bl from-black to-transparent opacity-80"></div>
                        {/* category title and description */}
                        <div className="absolute inset-0 text-white flex flex-col justify-center pr-12 " >
                            <h4 className="font-DanaMedium text-3xl">{category.title}</h4>
                            <span className="font-DanaRegular text-sm mt-6 ">{category.description}</span>

                        </div>



                    </div>
                ))}
            </div>
        </>
    )

}