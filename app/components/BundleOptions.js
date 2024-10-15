
import React from 'react';
import Image from 'next/image';
import bundleImage1 from '../assets/1.png'; // Replace with actual image path
import bundleImage2 from '../assets/2.png'; // Replace with actual image path
import bundleImage3 from '../assets/3.png'; // Replace with actual image path
import bundleImage4 from '../assets/4.png'; // Replace with actual image path
import bundleImage5 from '../assets/5.png'; // Replace with actual image path

const BundleOptions = () => {
    return (
        <section className="parallax-section text-white relative">
            <div className="parallax-background"></div>
            
            <div className="content py-10 z-10 relative">
                <div className="container mx-auto px-6 flex flex-col md:flex-row gap-10 items-center">
                    {/* Left Side: Bundle Image Gallery */}
                    <div className="w-full md:w-1/2 grid grid-cols-3 grid-rows-2 gap-4">
                        {/* Large Image */}
                        <div className="col-span-2 row-span-2 overflow-hidden rounded-lg">
                            <div className="relative w-full h-64 md:h-80">
                                <Image
                                    src={bundleImage1}
                                    alt="Bundle Image 1"
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                        </div>

                        {/* Two smaller images to the right of the large image */}
                        <div className="col-span-1 overflow-hidden rounded-lg">
                            <div className="relative w-full h-32 md:h-40">
                                <Image
                                    src={bundleImage2}
                                    alt="Bundle Image 2"
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                        </div>
                        <div className="col-span-1 overflow-hidden rounded-lg">
                            <div className="relative w-full h-32 md:h-40">
                                <Image
                                    src={bundleImage3}
                                    alt="Bundle Image 3"
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                        </div>

                        {/* Two smaller images below the large image */}
                        <div className="col-span-1 overflow-hidden rounded-lg">
                            <div className="relative w-full h-32 md:h-40">
                                <Image
                                    src={bundleImage4}
                                    alt="Bundle Image 4"
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                        </div>
                        <div className="col-span-1 overflow-hidden rounded-lg">
                            <div className="relative w-full h-32 md:h-40">
                                <Image
                                    src={bundleImage5}
                                    alt="Bundle Image 5"
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Bundle Offers Text */}
                    <div className="w-full md:w-1/2 space-y-6">
                        <h2 className="text-4xl font-bold text-white">Bundle Options</h2>

                        <p className="text-lg text-gray-300 font-libre italic">
                            Take advantage of our exclusive bundle offers and save more with our lash kits.
                        </p>

                        <ul className="space-y-4">
                            <li className="text-gray-300">
                                <span className="font-bold">Buy 4 kits, get 1 free!</span> Perfect for lash lovers or those who want to stock up on our premium kits.
                            </li>
                            <li className="text-gray-300">
                                <span className="text-skin font-bold">Subscribe & Save</span> – Get 15% off on your next purchase when you subscribe to our monthly plan.
                            </li>
                            <li className="text-gray-300 mb-10">
                                <span className="text-skin font-bold">Free Shipping</span> on all bundle purchases.
                            </li>
                            <li className="text-gray-300 italic pt-8">
                                Our bundles are designed to provide the best value, ensuring you never run out of your favorite lash kits.
                            </li>
                        </ul>

                        <a
                            href="#"
                            className="inline-block bg-gray-100 border-2 border-gray-600 text-gray-600 py-2 px-4 rounded-full font-semibold hover:bg-gray-800 hover:text-gray-200 transition duration-300"
                        >
                            Check Out
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BundleOptions;
