import React, { Component } from "react";
//import our service
import JeopardyService from "../../src/jeopardyService";
import Display from './Display'
// import Question1 from "./Question1";
import AnswerForm from './AnswerForm'
// import Question3 from "./Question3";
// import Question2 from './Question2'

class Jeopardy extends Component {
	//set our initial state and set up our service as this.client on this component
	constructor(props) {
		super(props);
		this.client = new JeopardyService();
		this.state = {
			data: [],
            score: 0,
            chosen: false,
			submitData: {
				answerText: ""
			}
		};
	}
	//get a new random question from the API and add it to the data object in state
	getNewQuestion() {
		return this.client.getQuestion().then(result => {
			this.setState({
				data: result.data
			});
		});
	}
    chooseCat = (event) => {
        let quest = event.currentTarget.id

        this.setState({
            data: this.state.data[quest],
        })
        console.log(this.state.data[quest])
    }
    
	handleChange = event => {
		const submitData = { ...this.state.submitData };
		submitData[event.target.name] = event.target.value;
		this.setState({
			submitData: {
				answerText: event.target.value
			}
		});
	};

	handleAnswer = event => {
		console.log(this.state.submitData.answerText);
		event.preventDefault();
		let score = this.state.score;
		if (this.state.submitData.answerText === this.state.data.answer) {
			this.setState({
				score: (score += this.state.data.value),
				submitData: {
					answerText: ""
				}
			});
		} else {
			this.setState({
				score: (score -= this.state.data.value),
				submitData: {
					answerText: ""
				}
			});
		}
		this.getNewQuestion();
	};

	//when the component mounts, get a the first question
	componentDidMount() {
        this.getNewQuestion();

	}
	//display the results on the screen
	render() {
		console.log(this.state.data);

		return (
			<div className="Jeopardy">

				<Display
					category={this.state.data.category}
					question={this.state.data.question}
					value={this.state.data.value}
					answerText={this.state.submitData.answerText}
					data={this.state.data}
					chooseCat={this.chooseCat}
				/>
				<AnswerForm
					handleChange={this.handleChange}
					handleAnswer={this.handleAnswer}
				/>
				<br />
				<br />
				<br />
				<div>
					<h1>Score:</h1>
					{this.state.score}
				</div>
			</div>
		);
	}
}
export default Jeopardy;
