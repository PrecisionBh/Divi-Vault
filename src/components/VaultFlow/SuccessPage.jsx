import { useNavigate } from 'react-router-dom'; // Use this for React Router

export default function SuccessPage() {
  const navigate = useNavigate(); // Initialize navigate

  const handleGoHome = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#0c0f1a] text-white flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#00E5FF] mb-4">Success!</h1>
        <p className="text-lg text-[#C2E9F9] mb-8">
          Your transaction has been completed successfully. The lock is now active, and your tokens are safely secured.
        </p>
        <button
          onClick={handleGoHome}
          className="px-6 py-3 bg-[#00E5FF] text-black font-semibold rounded-full shadow-md transition hover:bg-[#00B8E5]"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
}
