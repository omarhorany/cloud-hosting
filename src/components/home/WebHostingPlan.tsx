import { TiTick } from "react-icons/ti"

const WebHostingPlan = () => {
    const features = [
        "100 Websites",
        "100 GB SSD Storage",
        "Weekly Backups",
        "Unlimited Bandwidth",
        "Free SSL",
        "Free Email"
    ];

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 text-center hover:shadow-xl transition">
            {/* Plan Name */}
            <h3 className="text-2xl font-bold text-gray-900">Premium</h3>

            {/* Price & Discount */}
            <div className="mt-3 flex justify-center items-center gap-3">
                <strong className="text-3xl font-extrabold text-blue-600">$4.99/mo</strong>
                <span className="text-sm bg-green-100 text-green-600 px-3 py-1 rounded-lg font-medium">
                    10% Off
                </span>
            </div>

            {/* Features Section */}
            <div className="mt-6 text-left">
                <h5 className="text-lg font-semibold text-gray-700 mb-3">Top Features</h5>
                <div className="space-y-2">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-gray-800">
                            <TiTick className="text-green-500 text-xl" />
                            <span>{feature}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Buy Now Button */}
            <div className="mt-6">
                <button className="bg-blue-600 text-white font-semibold text-lg px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                    BUY NOW
                </button>
            </div>
        </div>
    )
}

export default WebHostingPlan