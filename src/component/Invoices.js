import React, { useState } from 'react';
import ErrorHandlerService from '../logic/ErrorHandlerService';

function Invoices() {
    const [inputValue, setInputValue] = useState('');
    const [selectedAccount, setSelectedAccount] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const calculate = () => {
        setError(null);
        const floatInput = parseFloat(inputValue);
        if (!isNaN(floatInput) && selectedAccount) {
            setResult(floatInput * 2);
        } else {
            setError('Please enter a valid float and select an account');
        }
    };

    const fetchResult = () => {
        fetch("http://non-existent/not-found", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ result }),
        })
            .then(response => response.text())
            .then(data => {
                console.log('Response:', data);
                alert('Result sent and response received: ' + data);
            })
            .catch(error => {
                setError('Error during fetch: ' + error.message);
            });

        alert(`Result was sent: ${result}`);
    };

    const throwError = () => {
        try {
            throw new Error('This is a simulated error!');
        } catch (error) {
            ErrorHandlerService.handleError(error);
            setError(error.message)
        }
    };

    return (
        <div className="container" style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Invoices</h1>
            <table className="table tableInvoices table-th" style={{ width: '100%' }}>
                <thead>
                    <tr>
                        <th>Invoice number</th>
                        <th>Contractor</th>
                        <th>IssueDate</th>
                        <th>DueDate</th>
                        <th>Sum</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>135/ST/GD/05/2024</td>
                        <td>BadData LLC</td>
                        <td>2024-09-06</td>
                        <td>2024-10-01</td>
                        <td>$ 62986.5</td>
                    </tr>
                    <tr>
                        <td>222/ST/2024</td>
                        <td>Exceptional LLC</td>
                        <td>2024-08-29</td>
                        <td>2024-10-18</td>
                        <td>$ 152615.25</td>
                    </tr>
                    <tr>
                        <td>88/SU/05/2024</td>
                        <td>Upright S corp</td>
                        <td>2024-09-11</td>
                        <td>2024-10-08</td>
                        <td>$ 85078.85</td>
                    </tr>
                    <tr>
                        <td>123/EX/2024</td>
                        <td>DataCorp</td>
                        <td>2024-07-14</td>
                        <td>2024-09-01</td>
                        <td>$ 94500.75</td>
                    </tr>
                    <tr>
                        <td>421/ST/2024</td>
                        <td>DataExperts</td>
                        <td>2024-08-01</td>
                        <td>2024-08-30</td>
                        <td>$ 55000.20</td>
                    </tr>
                </tbody>
            </table>

            <div className="form-container" style={{ marginTop: '40px', display: 'inline-block' }}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter a float value"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        style={{ width: '300px', margin: '10px auto' }}
                    />
                </div>

                <div className="form-group">
                    <select
                        className="form-control"
                        value={selectedAccount}
                        onChange={(e) => setSelectedAccount(e.target.value)}
                        style={{ width: '300px', margin: '10px auto' }}
                    >
                        <option value="">Select Account</option>
                        <option value="account1">Account 1</option>
                        <option value="account2">Account 2</option>
                        <option value="account2">Account 3</option>
                    </select>
                </div>

                <div>
                    <button className="btn btn-primary" onClick={calculate} style={{ margin: '5px' }}>
                        Calculate
                    </button>
                    <button className="btn btn-secondary" onClick={fetchResult} style={{ margin: '5px' }}>
                        Fetch result
                    </button>
                    <button className="btn btn-danger" onClick={throwError} style={{ margin: '5px' }}>
                        Error
                    </button>
                </div>
            </div>

            {result && (
                <div className="alert alert-info" style={{ marginTop: '20px' }}>
                    Result: {result}
                </div>
            )}

            {error && (
                <div className="alert alert-danger" style={{ marginTop: '20px' }}>
                    {error}
                </div>
            )}
        </div>
    );
}

export default Invoices;
