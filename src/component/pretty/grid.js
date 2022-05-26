import React from "react";

function Grid() {
    const items = [1,2,3,4,5,6,7,8,9];

    return(
        <div
            style={{
                margin: "50px",
                padding: "50px",
                width: "480px",
                display: "grid",
                gridTemplateRows: "1fr ",
                gridTemplateColumns: "1fr 1fr 1fr",
            }}
        >
        {items.map((item, key) => (
            <div
            key={key}
            style={{margin: "5px", backgroundColor: "white", height: "90px" }}
        >
        {item}
        </div>
        ))}
    </div>
    )
}

export default Grid;