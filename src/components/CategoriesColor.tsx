function CategoriesColor() {
    const item = [
        {
            title: "Черный",
            quantity: 119
        },
        {
            title: "Белый",
            quantity: 86
        },
        {
            title: "Красный",
            quantity: 78
        },
    ]

    const active = false
    return (
        <div>
            {
                item.map((el, i) =>
                    <div key={i} className={`flex justify-between text-[15px] font-[400] ${active && "text-colLight font-[700]"} leading-[20px] p-3 cursor-pointer`}>
                        <span>{el.title}</span>
                        <span>({el.quantity})</span>
                    </div>)
            }
        </div>
    )
}

export default CategoriesColor
