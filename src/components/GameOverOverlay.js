import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component

const GameOverOverlay = ({ onRetry }) => {
  return (
    <div
      className="game-over-overlay"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      }}
    >
      <div
        className="overlay-content"
        style={{
          backgroundColor: '#fff',
          padding: '40px', // Increase padding for a bigger container
          borderRadius: '5px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
          textAlign: 'center',
        }}
      >
        <h2 style={{ color: '#333' }}>Game Over</h2>
        <p style={{ color: '#333' }}>You ran out of chances!</p>
        <div className="modal-buttons" style={{ marginTop: '20px' }}>
          <button
            onClick={onRetry}
            style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              marginRight: '10px',
              cursor: 'pointer',
            }}
          >
            Retry
          </button>
          <Link to="/home" style={{ textDecoration: 'none' }}>
            <button
              style={{
                backgroundColor: '#f44336',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Cancel
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameOverOverlay;
