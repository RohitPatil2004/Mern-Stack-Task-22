import React from 'react';

function Card({ thumbnailUrl, title }) {
    return (
        <div style={{
            width: '400px',
            height: '400px',
            border: '1px solid white',
            backgroundColor: 'black',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            boxSizing: 'border-box',
            overflow:'hidden'
        }}>
            <br />
            <img src={thumbnailUrl} alt={title} style={{ width: '100%', height: 'auto', transform: 'scale(0.8)' }} />
            <h3 style={{
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                maxWidth: '100%',
                textAlign: 'center',
            }}>
                {title}
            </h3>
            <br />
        </div>
    );
}

export default Card;
