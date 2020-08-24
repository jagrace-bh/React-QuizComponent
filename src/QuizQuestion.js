import React, {Component} from 'react'
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            incorrectAnswer: false,
        }
    }

    handleClick(buttonText) {
        if (this.props.quiz_question.answer === buttonText) {
            this.props.showNextQuestionHandler();
            this.setState({
                incorrectAnswer: false,
            })
        } else {
            this.setState({
                incorrectAnswer: true,
            })
        }
    }

    render() {
        const answerList = this.props.quiz_question.answer_options.map((answer_options, index) =>
            <QuizQuestionButton
                clickHandler={this.handleClick.bind(this)}
                button_text={this.props.quiz_question.answer_options[index]}
                key={index}/>
        );

        return (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        {answerList}
                    </ul>
                </section>
                {this.state.incorrectAnswer ? <p className={'error'}>Sorry, that's not right</p> : null}
            </main>
        );
    }
}


export default QuizQuestion;