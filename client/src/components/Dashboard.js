import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Board from './Board';
import ViewButton from './ViewButton';

function Dashboard () {
    const [showDashboard, setShowDashboard] = useState(false);

    useEffect(() => {
    setShowDashboard(true); // Set initial value to true when component mounts
    }, []);


    return (
        <div>
            <Header setShowDashboard={setShowDashboard} />
            {showDashboard ? (
                <>
                    <Main />
                    <ViewButton />
                    <Board />
                </>
            ) : null}
        </div> 
    );
}
export default Dashboard