import { useState } from "react";
import { toast } from 'react-toastify';
import PropTypes from "prop-types";
import { Button, FormIn, Input } from "./Searchbar.styled";


function Searchbar({ getSearchQuery }) {
    const [input, setInput] = useState('');

    const handleInput = e => {
        setInput(e.target.value.toLowerCase());
        
    }

    const handleSubmit = e => {
        e.preventDefault();
        input.trim === '' ? toast.error('Please enter a new word') : getSearchQuery(input);
        setInput('');
    };

    return (
        <div>
            <FormIn onSubmit={handleSubmit}>
                <Input
                    name='input'
                    value={input}
                    type="text"
                    onChange={handleInput}
                    placeholder="Find Film"
                />
            <Button type="submit">Search</Button>
            </FormIn> 
        </div>
    )
};

Searchbar.propTypes = {
    getSearchQuery: PropTypes.func.isRequired,
};

export default Searchbar;

