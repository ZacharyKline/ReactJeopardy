import React from "react";

function Question2(props) {
        console.log(props.data)
            let category = "";
			if (props.data.category) {
				category = props.data.category.title;
			}
        return (
            
            <button>{category}</button>
        )
    }


export default Question2;
