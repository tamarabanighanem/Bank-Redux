import React from 'react';
import { useSelector } from 'react-redux';

const Main = () => {
  const accounts = useSelector(state => state.accounts);

  return (
    <div className="p-4 flex-grow">
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th className="py-2 px-4 bg-gray-100 border-b">ID</th>
          <th className="py-2 px-4 bg-gray-100 border-b">Customer Name</th>
          <th className="py-2 px-4 bg-gray-100 border-b">Account Number</th>
          <th className="py-2 px-4 bg-gray-100 border-b">Account Type</th>
        </tr>
      </thead>
      <tbody>
        {accounts.map(account => (
          <tr key={account.id} className="bg-white border-b">
            <td className="py-2 px-4">{account.id}</td>
            <td className="py-2 px-4">{account.customerName}</td>
            <td className="py-2 px-4">{account.accountNumber}</td>
            <td className="py-2 px-4">{account.accountType}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default Main;
