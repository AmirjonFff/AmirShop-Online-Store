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

    return (
        <div>
            {
                item.map((el, i) => <div key={i}>{el.title}</div>)
            }
        </div>
    )
}

export default CategoriesColor
