import React from 'react';

class Main extends React.Component {
    render() {
        return (
        <>
        <FurryBeast />
        <FurryBeast />
        </>
        )    
    }
}

class FurryBeast extends React.Component {
    render() {
        return <p>Furry beast coming soon!</p>;
    }
}
export default Main;