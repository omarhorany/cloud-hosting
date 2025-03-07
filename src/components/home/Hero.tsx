import { TiTick } from "react-icons/ti";
import Image from "next/image";
import CloudImage from "../../../public/cloud-hosting.png";

const Hero = () => {
    return (
        <div className="fix-height bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-6 md:px-16">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                {/* Left Content */}
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Cloud Hosting
                    </h1>
                    <p className="text-lg text-gray-200">
                        Reliable and secure cloud hosting for your business needs.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-lg">
                            <TiTick className="text-green-400 text-2xl" />
                            Easy To Use Control Panel
                        </div>
                        <div className="flex items-center gap-3 text-lg">
                            <TiTick className="text-green-400 text-2xl" />
                            Secure Hosting
                        </div>
                        <div className="flex items-center gap-3 text-lg">
                            <TiTick className="text-green-400 text-2xl" />
                            Website Maintenance
                        </div>
                    </div>

                    <button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
                        Get Started
                    </button>
                </div>

                {/* Right Image */}
                <div className="flex justify-center">
                    <Image
                        src={CloudImage}
                        alt="Cloud Hosting"
                        width={500}
                        height={500}
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;