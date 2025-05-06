export default function AQI({ aqi }) {
    if (aqi === null) return <p className="text-white text-lg">Loading AQI...</p>;
  
    const getAQIStatus = (value) => {
      if (value === 1) return { status: "Good", color: "bg-green-500", text: "text-green-500", ring: "ring-green-500" };
      if (value === 2) return { status: "Fair", color: "bg-yellow-400", text: "text-yellow-400", ring: "ring-yellow-400" };
      if (value === 3) return { status: "Moderate", color: "bg-orange-500", text: "text-orange-500", ring: "ring-orange-500" };
      if (value === 4) return { status: "Poor", color: "bg-red-600", text: "text-red-600", ring: "ring-red-600" };
      if (value === 5) return { status: "Very Poor", color: "bg-purple-700", text: "text-purple-700", ring: "ring-purple-700" };
      return { status: "Unknown", color: "bg-gray-500", text: "text-gray-500", ring: "ring-gray-500" };
    };
  
    const { status, text, ring } = getAQIStatus(aqi);
  
    return (
      <div className={`w-full max-w-sm mx-auto bg-white/10 backdrop-blur-lg p-6 rounded-xl border-2 ${ring} shadow-md`}>
        <h3 className="text-white text-xl font-semibold mb-2">Air Quality Index</h3>
        <p className={`text-lg font-bold ${text}`}>
          {status} (AQI: {aqi})
        </p>
      </div>
    );
  }