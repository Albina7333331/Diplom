
import React from "react";

const Categories = ({ chooseCategory }) => {
    const categories = [
        { key: "all", name: "Всё" },
        { key: "school", name: "Выпускной" },
        { key: "wedding", name: "Свадьба" },
        { key: "holiday", name: "Отдых" },
        { key: "celebration", name: "Торжество" },
        { key: "concert", name: "Концерт" },
        { key: "party", name: "Вечеринка" }
    ];

    return (
        <div className="categories">
            {categories.map((el) => (
                <div key={el.key} onClick={() => chooseCategory(el.key)}>
                    {el.name}
                </div>
            ))}
        </div>
    );
};

export default Categories;
