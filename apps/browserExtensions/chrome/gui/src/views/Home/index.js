import React from 'react';

function Home() {
    return (
        <div className="home-container">
            <h1>Welcome to Cleaker.me</h1>
            <p>
                Discover the amazing features and functionalities that we offer. 
                From wallet management to connecting with friends, and much more!
            </p>
            <div className="features-section">
                <h2>Main Features:</h2>
                <ul>
                    <li><a href="/profile">Profile Management</a></li>
                    <li><a href="/contacts">Connect with Friends</a></li>
                    <li><a href="/wallet">Manage your Wallet</a></li>
                    <li><a href="/settings">Settings</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Home;
