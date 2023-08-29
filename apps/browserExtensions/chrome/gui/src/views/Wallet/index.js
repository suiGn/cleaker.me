import React, { Component } from 'react';

class WalletView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            balance: 0.0,     // Placeholder, usually, you'd fetch this from an API
            transactionHistory: [], // A list of previous transactions
            transferAmount: 0,    // Amount to transfer in a new transaction
            recipientAddress: ''  // Address to transfer to in a new transaction
        };
    }
    render() {
        return (
            <div className="wallet-view">
                <h2>Wallet</h2>
                
                {/* Balance Display */}
                <div>
                    <strong>Balance:</strong> {this.state.balance} Coins
                </div>
                
                {/* New Transaction Form */}
                <div className="transaction-form">
                    <h3>New Transaction</h3>
                    <div>
                        <label>Recipient Address:</label>
                        <input 
                            type="text" 
                            value={this.state.recipientAddress} 
                            onChange={(e) => this.setState({ recipientAddress: e.target.value })}
                            placeholder="Enter recipient's address"
                        />
                    </div>
                    <div>
                        <label>Amount:</label>
                        <input 
                            type="number" 
                            value={this.state.transferAmount} 
                            onChange={(e) => this.setState({ transferAmount: parseFloat(e.target.value) })}
                            min="0"
                        />
                    </div>
                    <button onClick={this.handleTransfer}>Transfer</button>
                </div>
                
                {/* Transaction History */}
                <div className="transaction-history">
                    <h3>Transaction History</h3>
                    <ul>
                        {this.state.transactionHistory.map((txn, index) => (
                            <li key={index}>
                                {txn.amount} Coins to {txn.recipient} on {txn.date}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }

    handleTransfer = () => {
        // Handle the logic for transferring coins here.
        // This can include error handling, updating transaction history, etc.

        console.log(`Transferring ${this.state.transferAmount} Coins to ${this.state.recipientAddress}`);
        
        // As an example, we'll add the transaction to the history:
        this.setState(prevState => ({
            transactionHistory: [
                ...prevState.transactionHistory,
                {
                    amount: this.state.transferAmount,
                    recipient: this.state.recipientAddress,
                    date: new Date().toLocaleString()
                }
            ]
        }));
    }
}

export default WalletView;
