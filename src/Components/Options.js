import React, {Components} from "react";

class Options extends Components{
    render() {
        const { options, selectOption, onOptionChange } = this.props;
        
        return (
            <div className="options">
                {options.map((option, index) => (
                    <div key={index} className="form-check">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="option"
                        value={option}
                        checked={selectOption === option}
                        onChange={onOptionChange}></input>
                    <label className="form-check-label">
                        {option}
                    </label>
                </div>))}
            </div>
        );
    }
}

export default Options;