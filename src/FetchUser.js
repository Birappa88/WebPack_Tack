import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoadingButton from '@mui/lab/LoadingButton';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';


function FetchUser() {

    const [users, setUsers] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
                setIsLoading(false);
            })
            .catch((error) => console.log(error));
    }, []);

    const handlePrevClick = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNextClick = () => {
        if (currentIndex < users.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const user = users[currentIndex];

    return (
        <div>
                <Link to="/"> <button className="homebut"> -- Go To Home</button></Link>

            <div className="user">
                <h1>Fetch User</h1>
                <div>
                    {isLoading ? (
                        <div className="loader">
                            <h2>Loading...___</h2>
                            <LoadingButton loading={true} />
                        </div>
                    ) : (
                        <div className="afterload">
                            <button onClick={handlePrevClick} disabled={currentIndex === 0}>
                                <span> <SkipPreviousIcon /> </span>
                                Prev
                            </button>
                            <div className="card">
                                <h2>Username : {user.name}</h2>
                                <p>E-Mail : {user.email}</p>
                                <p>Phone : {user.phone}</p>
                                <h2>Website : {user.website}</h2>
                            </div>
                            <button onClick={handleNextClick} disabled={currentIndex === users.length - 1}>
                                Next  <span>  <SkipNextIcon /> </span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
export default FetchUser;