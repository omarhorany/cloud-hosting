import Image from 'next/image';
import CloudImage from '../../../public/cloud-hosting.png';

const AboutPage = () => {
    return (
        <section className="flex flex-col items-center text-center px-6 py-12 max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl font-bold text-gray-800">About This App</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
                The best web solution for your online success            </p>
            <div className="flex justify-center">
                <div className="bg-white p-4 shadow-lg rounded-lg">
                    <Image
                        src={CloudImage}
                        alt="Cloud Hosting"
                        width={500}
                        height={500}
                        className="rounded-md"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutPage;