// /app/success/page.js

// import { useRouter } from 'next/navigation';

export default function SuccessPage() {
  // const router = useRouter();

  // const handleGoBack = () => {
  //   router.push('/');
  // };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-400 to-blue-500 text-white">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-md text-center text-gray-800">
        <h1 className="text-3xl font-semibold mb-4 text-green-500">Payment Successful!</h1>
        <p className="text-lg mb-6">Thank you for your purchase. Your order is being processed and will be on its way soon!</p>
        <button
          // onClick={handleGoBack}
          className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-md font-semibold transition duration-300 ease-in-out"
        >
          Go Back to Homepage
        </button>
      </div>
    </div>
  );
}
