import React from 'react'

function Display(props) {
    let category = ''
		if (props.category) {
            category = props.category.title;
        }
    if (props.data.length === 3) {
        return (
            props.data.map((question, index) => {
                return (

                    <button
                        id={index}
                        onClick={props.chooseCat}
                    >
                    {question.category.title}
                    </button>
                )
                })
        )
    }
    
    
    if (true) {
        return (
            <div className='display'>
                <div className="question">
                    <div className="category">
                        Category:
						<span>{category}</span>
                    </div>
                    <br />
                    <br />
                    Question:
					<span> {props.question}</span>
                    <br />
                    <br />
                    <div className="value">
                        Value:
						<span> {props.value}</span>
                    </div>
                    <br />
                    <br />

                </div>

            </div>
        );
    }
}

export default Display