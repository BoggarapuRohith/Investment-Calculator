
export default function UserInput({ inputValue, onInputChange }) {

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label >Initial Investment</label>
                    <input type="number" value={inputValue.initialInvestment}
                        onChange={(event) => onInputChange('initialInvestment', event.target.value)}
                        required />
                </p>
                <p>
                    <label >Annual Investment</label>
                    <input type="number" value={inputValue.annualInvestment}
                        onChange={(event) => onInputChange('annualInvestment', event.target.value)}
                        required />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label >Expected Return</label>
                    <input type="number" value={inputValue.expectedReturn}
                        onChange={(event) => onInputChange('expectedReturn', event.target.value)}
                        required />
                </p>
                <p>
                    <label >Duration</label>
                    <input type="number" value={inputValue.duration}
                        onChange={(event) => onInputChange('duration', event.target.value)}
                        required />
                </p>
            </div>
        </section>
    );
}