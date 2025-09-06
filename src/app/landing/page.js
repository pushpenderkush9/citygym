import Navbar from "../components/Navbar";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-4xl font-bold text-red-500">Welcome to CityGym</h1>
      <p className="mt-4 text-lg text-gray-300">Train hard, stay strong 💪</p>
      <Navbar />
    </div>
  );
}
