import React from 'react';

function AnswerForm(props) {
    return (
			<div className='AnswerForm'>
				<form onSubmit={props.handleAnswer}>
					<label>
						<span>Your Answer: </span>
					</label>
					<input
						type="text"
						name="answerText"
						value={props.answerText}
						onChange={props.handleChange}
					/>
					<button type="submit"> Submit</button>
				</form>
			</div>
		);
}

export default AnswerForm;