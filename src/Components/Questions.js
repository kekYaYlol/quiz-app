import React, {Component} from "react";
import Options from "./Options";

class Question extends Component{
    render  () {
        const {question, selectedOptions, onOptionChange, onSubmit} = this.props;

        return (
            <div className="">
                <h3>Question {question.id}</h3>
                <h5 className="mt-2">{question.question}</h5>
                <form onSubmit={onSubmit} className="">
                    <Options
                        options={question.options}
                        selectOption={selectedOptions}
                        onOptionChange={onOptionChange}
                    />
                    <button type="submit" className="">
                        SUBMIT
                    </button>
                </form>
            </div>
        )
    }
}   

export default Question;