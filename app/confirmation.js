 pages/confirmation.js

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const ConfirmationPage = () => {
  const router = useRouter();
  const { status } = router.query;
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (status === 'approved') {
      setMessage('Your payment has been approved and captured successfully!');
    } else if (status === 'canceled') {
      setMessage('Your payment has been canceled.');
    } else if (status === 'error') {
      setMessage('There was an error processing your request.');
    } else {
      setMessage('Processing your request...');
    }
  }, [status]);

  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-gradient-bottom-to-top">
      <h1 className="text-4xl font-bold text-white mb-4">Payment Confirmation</h1>
      <p className="text-lg text-gray-300">{message}</p>
    </div>
  );
};

export default ConfirmationPage;
