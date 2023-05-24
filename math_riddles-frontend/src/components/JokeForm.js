import React, { useState } from 'react';
import Modal from 'react-modal';
import { addJoke } from '../api/jokeAPI';

const initialJoke = { id: 0, question: "", encodedLetters: [], difficulty: "" };
const initialEncodedLetter = { id: 0, letter: "", max: 0, min: 0, sign: "+", rightAnswer: "false", total: 0 };

const JokeForm = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [joke, setJoke] = useState(initialJoke);
    const [currentEncodedLetter, setCurrentEncodedLetter] = useState(initialEncodedLetter);

    const handleChange = (e) => {
        setJoke({
            ...joke,
            [e.target.name]: e.target.value,
        });
    };

    const handleEncodedLetterChange = (e) => {
        setCurrentEncodedLetter({
            ...currentEncodedLetter,
            [e.target.name]: e.target.value,
        });
    };

    const addEncodedLetter = (e) => {
        e.preventDefault();
        setJoke({
            ...joke,
            encodedLetters: [...joke.encodedLetters, currentEncodedLetter]
        });
        setCurrentEncodedLetter(initialEncodedLetter);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response = await addJoke(joke);
            if (response) {
                alert('Joke added successfully!');
                setModalIsOpen(false);
                resetForm();
            } else {
                alert('Error adding joke');
            }
        } catch (error) {
            alert(error.response.data.message);
        }
    };


    const resetForm = () => {
        setJoke(initialJoke);
        setCurrentEncodedLetter(initialEncodedLetter);
    };

    return (
        <div style={{ position: 'absolute', right: '0', top: '0', margin: '10px' }}>
            <button style={{ padding: '10px 20px', fontSize: '1.2rem', borderRadius: '5px', border: 'none', color: '#fff', background: '#007BFF', cursor: 'pointer' }} onClick={() => setModalIsOpen(true)}>Add Joke</button>
            <Modal isOpen={modalIsOpen} onRequestClose={() => { setModalIsOpen(false); resetForm(); }} style={{ overlay: { backgroundColor: 'rgba(0,0,0,0.5)' }, content: { top: '50%', left: '50%', right: 'auto', bottom: 'auto', marginRight: '-50%', transform: 'translate(-50%, -50%)', padding: '20px', width: '500px', maxHeight: '80vh', overflow: 'auto', borderRadius: '10px', border: 'none' } }}>
                <button onClick={() => { setModalIsOpen(false); resetForm(); }} style={{ position: 'absolute', right: '10px', top: '10px', background: 'transparent', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}>X</button>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <h2 style={{ textAlign: 'center' }}>Add Joke</h2>

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <label style={{ marginRight: '10px', fontWeight: 'bold' }}>ID:</label>
                        <input type="number" name="id" onChange={handleChange} required style={{ padding: '5px', flex: '1' }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Question:</label>
                        <input type="text" name="question" onChange={handleChange} required style={{ padding: '5px', flex: '1' }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Difficulty:</label>
                        <input type="text" name="difficulty" onChange={handleChange} style={{ padding: '5px', flex: '1' }} />
                    </div>
                    <h3>Encoded Letters</h3>
                    {joke.encodedLetters.map((el, index) => (
                        <p key={index}>Letter: {el.letter}, Max: {el.max}, Min: {el.min}, Sign: {el.sign}, Total: {el.total}</p>
                    ))}
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Letter:</label>
                        <input type="text" name="letter" onChange={handleEncodedLetterChange} style={{ padding: '5px', flex: '1' }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Max number:</label>
                        <input type="number" name="max" onChange={handleEncodedLetterChange} style={{ padding: '5px', flex: '1' }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Min number:</label>
                        <input type="number" name="min" onChange={handleEncodedLetterChange} style={{ padding: '5px', flex: '1' }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Sign(+, -, *, /):</label>
                        <input type="text" name="sign" onChange={handleEncodedLetterChange} style={{ padding: '5px', flex: '1' }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Total:</label>
                        <input type="number" name="total" onChange={handleEncodedLetterChange} style={{ padding: '5px', flex: '1' }} />
                    </div>
                    <button onClick={addEncodedLetter} style={{ padding: '5px 10px', background: '#28a745', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', margin: '10px 0' }}>Add Encoded Letter</button>
                    <button type="submit" style={{ padding: '5px 10px', background: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', margin: '10px 0' }}>Submit</button>
                </form>
            </Modal>
        </div>
    );
};

export default JokeForm;
