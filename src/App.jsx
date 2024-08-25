import React from 'react';
import FetchData from './Hooks/FetchData';
import Card from './Hooks/Card';

function App() {
    const { data, loading, error } = FetchData();

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent:'center',
            width:'100vw',
            color: 'white'
        }}>
            {loading ? (
                <div style={{ fontSize: '25px' }}>
                    <h1>
                        Loading...
                    </h1>
                </div>
            ) : error ? (
                <div style={{ fontSize: '25px' }}>
                    <h1>
                        An error occurred during the fetch process: {error}
                    </h1>
                </div>
            ) : (
                <>
                    <h1 style={{ textAlign: 'center' }}>Photos</h1>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                        {data.map(item => (
                            <Card key={item.id} thumbnailUrl={item.thumbnailUrl} title={item.title} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default App;
