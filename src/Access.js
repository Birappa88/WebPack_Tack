import React, { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Link } from "react-router-dom";

function AccessCard() {
    const [users, setUsers] = useState([]);

    const [currentUser, setCurrentUser] = useState("");
    const [showCards, setShowCards] = useState({ card1: false, card2: false, card3: false, card4: false });

    const addRow = () => {
        console.log(".....");
        const newUsers = [...users, { name: "", cards: { card1: false, card2: false, card3: false, card4: false } }];
        setUsers(newUsers);
    };

    const handleUserChange = (event) => {
        setCurrentUser(event.target.value);
        setShowCards({ card1: false, card2: false, card3: false, card4: false });
        users.forEach((user) => {
            if (user.name === event.target.value) {
                setShowCards(user.cards);
            }
        });
    };

    const handleCardChange = (event, index, card) => {
        const newUsers = [...users];

        newUsers[index].cards[card] = event.target.checked;

        setUsers(newUsers);

        if (currentUser === newUsers[index].name) {
            setShowCards(newUsers[index].cards);
        }
    };


    return (
        <div className="Access">
            <Link to="/"> <button className="homebut"> -- Go To Home</button></Link>
            <div className="leftside">
                <select id="myDropdown" value={currentUser} onChange={handleUserChange}>
                    <option value="" disabled>
                        Select User
                    </option>
                    {users.map((user, index) => (
                        <option key={index} value={user.name}>
                            {user.name}
                        </option>
                    ))}
                </select>
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th>Users</th>
                                <th>Card 1</th>
                                <th>Card 2</th>
                                <th>Card 3</th>
                                <th>Card 4</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index}>
                                    <td>
                                        <input
                                            className="user"
                                            type="text"
                                            value={user.name}
                                            onChange={(event) => {
                                                const newUsers = [...users]
                                                newUsers[index].name = event.target.value;
                                                setUsers(newUsers);
                                            }}
                                        />
                                    </td>
                                    {
                                        [0, 1, 2, 3].map((cardIndex) => (
                                            <td key={cardIndex}>
                                                <input type="checkbox" checked={user.cards[cardIndex]} onChange={(event) => handleCardChange(event, index, `card+${cardIndex + 1}`)} />
                                            </td>
                                        ))
                                    }
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="add-row" onClick={addRow}>
                        <AddCircleOutlineIcon fontSize="medium" /> Add Row
                    </div>
                </div>
                <button className="save-button">
                    Save
                </button>
            </div>
            <>
                <div className="cards">
                    {currentUser &&
                        (
                            [0, 1, 2, 3].map((cardIndex) => (
                                <div className={`card ${showCards[`card+${cardIndex + 1}`] ? "" : "inactive"}`}>
                                    <h3>Card {cardIndex + 1}</h3>
                                </div>
                            ))
                        )
                    }
                </div>
            </>
        </div >
    );
}

export default AccessCard;




