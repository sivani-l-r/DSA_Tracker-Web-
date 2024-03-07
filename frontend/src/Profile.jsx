import React from 'react';

const containerStyle = {
  maxWidth: '800px',
  margin: '0 auto',
  textAlign: 'center',
};

const profileImageStyle = {
  width: '200px',
  height: '200px',
  borderRadius: '50%',
  objectFit: 'cover',
  marginBottom: '20px',
  margin: '0 auto', // Center the profile image horizontally
};

const badgeContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
  gap: '20px',
  justifyContent: 'center',
  marginTop: '20px',
};

const badgeStyle = {
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  overflow: 'hidden',
  position: 'relative',
};

const Profile = () => {
  return (
    <>
      <div style={containerStyle}>
        <div className="circle">
          <img src="src/images/profile.jpeg" alt="Profile Image" style={profileImageStyle} />
        </div>
        <h2>Name</h2>

        <h2 style={{ textAlign: 'center' }}>My Badges</h2>
        <div style={badgeContainerStyle}>
          <div className="circle" style={badgeStyle}>
            <img src="src/images/newbie.jpeg" alt="Badge 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <p className="image-text">Badge 1</p>
          </div>
        </div>

        <h2 style={{ textAlign: 'center', marginTop: '40px' }}>Badges to Earn</h2>
        <div style={badgeContainerStyle}>
          {Array.from({ length: 13 }, (_, i) => {
            if (i === 0) return null; // Skip the first badge (newbie.jpeg)
            return (
              <div className="circle" key={i} style={badgeStyle}>
                <img src={`src/images/s${i + 1}.jpeg`} alt={`Badge ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <p className="image-text">Badge {i + 1}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Profile;
