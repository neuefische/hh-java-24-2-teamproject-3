import React, { useState } from 'react';

const AddProductForm = () => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Hier kannst du die Logik zum Hinzufügen eines Produkts implementieren
        console.log('Neues Produkt hinzugefügt:', { title, amount });
        // Setze die Formularfelder zurück
        setTitle('');
        setAmount('');
    };

    return (
        <div>
            <h2>Add Product Page</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="amount">Amount:</label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default AddProductForm;
