import React, {Component} from 'react'
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component {

    handleClick(buttonText) {
        if(this.props.quiz_question.answer === buttonText){
            this.props.showNextQuestionHandler();
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
            </main>
        );
    }
}


export default QuizQuestion;