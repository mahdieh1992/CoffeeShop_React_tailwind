export default function CoffeeClub({ id, title, img }) {
    return (
        <>
            {/* coffee club items */}
            <div className="bg-white w-[72px] h-[72px]  rounded-2xl flex flex-col items-center justify-center">

                <svg className="h-10 w-10 mb-[3px]">
                    <use href={img}></use>
                </svg>

                <span className="text-green-600 lg:text-sm text-xs">{title}</span>
            </div>
        </>
    )
}