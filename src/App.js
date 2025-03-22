import './App.css';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Question from './Components/Questions';
import qBank from './Components/QuestionBank';
import Score from './Components/Score';

function App() {
  constructor(props) {
    super(props);
    this.state = {
      questionBank: qBank,
      currentQuestion: 0,
      selectedOption: "",
      score: 0,
      quizEnd: false,
    };
  }

  handleOptionChange = (e) => {
    this.setState({ selectedOption: e.target.value })
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.checkAnswer();
    this.handleNextQuestion();
  }

  checkAnswer = () => {
    const { questionBank, selectedOptions, onOptionChange, onSubmit } = this.state;
    if (selectedOption === questionBank[currentQuestion].answer) {
      continue
    }
  }

  handleNextQuestion = () => {
    const { questionBank, currentQuestion } = this.state;
    if (currentQuestion + 1 < questionBank.length) {
      this.setState((prevState) => ({
        currentQuestion: prevState.currentQuestion + 1,
        selectedOption: "", 
      }))
    } else {
      this.setState({
        quizEnd: true,
      });
    }
  }




  render() {
    const { questionBank, currentQuestion, selectedOption, score, quizEnd } = this.state;

    return (
      <div className="App">
        <h1>QUIZ APP</h1>
        {!quizEnd ? (
         <Question
          question={}
          selectedOption={}
          onOptionChange={}
          onSubmit={}
         />
        ) : (
          <Score/>
        )}
      </div>
    );
  }
}

export default App;
