 // pages/success.js

const SuccessPage = () => {
  // const router = useRouter();
  const { session_id } = router.query;

  useEffect(() => {
    if (session_id) {
      // Optionally, you can fetch session details using the session_id
      // to display more information to the user or update your database
    }
  }, [session_id]);

  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-gradient-bottom-to-top">
      <h1 className="text-4xl font-bold text-white mb-4">Payment Successful!</h1>
      <p className="text-lg text-gray-300">Thank you for your purchase. We have sent a verification email to complete your order.</p>
    </div>
  );
};

export default SuccessPage;
