import React from 'react';
import FetchData from './Hooks/FetchData';
import Card from './Hooks/Card';

function App() {
    const data = FetchData();

    return (
      <>
      <h1 style={{textAlign:'center'}}>Photos</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignContent:'center', alignItems:'center', justifyContent:'center' }}>
            {data.map(item => (
                <Card key={item.id} thumbnailUrl={item.thumbnailUrl} title={item.title} />
            ))}
        </div>
        </>
    );
}

export default App;
