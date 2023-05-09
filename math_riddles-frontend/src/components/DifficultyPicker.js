import '../styles/difficultyPicker.css';

const DifficultyPicker = ({ onDifficultyChange, onChange }) => {
    const handleDifficultyChange = (e) => {
        onDifficultyChange(e.target.value);
        onChange(true);
    };

    return (
        <div className="difficulty-picker">
            <label className="difficulty-label">Choose difficulty:</label>
            <select className="difficulty-select" onChange={handleDifficultyChange}>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
        </div>
    );
};

export default DifficultyPicker;
