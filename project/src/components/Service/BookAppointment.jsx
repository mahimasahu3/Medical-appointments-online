import React, { useState } from 'react';

import BookAppointments from '../../assets/BookAppointments.jpg';


function BookAppointment() {
    const [searchTerm, setSearchTerm] = useState('');
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [filteredItems, setFilteredItems] = useState([]);

    const items = ['Appointment 1', 'Appointment 2', 'Appointment 3', 'Appointment 4'];

    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);

        if (value.length > 0) {
            setFilteredItems(items.filter(item => item.toLowerCase().includes(value.toLowerCase())));
            setDropdownVisible(true);
        } else {
            setDropdownVisible(false);
        }
    };

    const handleItemClick = (item) => {
        setSearchTerm(item);
        setDropdownVisible(false);
    };

    return (
        <div>
            <h1>Book an Appointment</h1>
            <div style={{ position: 'relative', display: 'inline-block' }}>
                <img src={BookAppointments} alt="icon" style={{ marginRight: '8px' }} />
                <input
                    type="text"
                    placeholder="Search.."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    style={{ padding: '8px', width: '200px' }}
                />
                
                {dropdownVisible && (
                    <ul style={{ position: 'absolute', top: '40px', left: '0', backgroundColor: 'white', listStyle: 'none', padding: '0', margin: '0', width: '200px', border: '1px solid #ccc', boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }}>
                        {filteredItems.map((item, index) => (
                            <li
                                key={index}
                                onClick={() => handleItemClick(item)}
                                style={{ padding: '8px', cursor: 'pointer' }}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default BookAppointment;
