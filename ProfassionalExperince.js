import React from 'react';

const ProfessionalExperience = () => {
    return (
        <div
            name="professional experience"
            className="bg-gradient-to-b from-gray-900 to-gray-900 w-full h-full py-8 sm:py-0 text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-4 pt-2">
                    <p className="md:text-4xl text-3xl font-bold text-blue-300 inline border-b-4 border-blue-300">
                        Professional Experience
                    </p>
                </div>

                <div className="space-y-8">
                    {/* Experience 1: React.js/Next.js Developer at Every Web Solutions Pvt. (Ltd.) */}
                    <div className="justify-between">
                        <div className='md:flex justify-between'>
                            <p className="md:text-xl text-xl font-bold text-gray-100">React.js/Next.js Developer | Every Web Solutions Pvt. (Ltd.) <span className='text-sm ml-3 font-bold md:hidden visible  text-blue-300'>April 2023 - Jun 2024</span></p>
                            <p className="md:text-lg text-base font-bold text-blue-300 hidden md:block">
                                April 2023 - Jun 2024
                            </p>

                        </div>
                        <div>
                            <p className='text-xl font-bold mt-2 text-blue-300'>Projects:</p>
                            <div className='md:flex justify-between'>
                                <p className="text-base font-bold mt-2 text-gray-300">Frontend Development <span className='text-sm ml-3 font-bold md:hidden visible  text-blue-300'>May 2023 - Jun 2024</span></p>
                                <p className="text-base font-bold text-gray-300 hidden md:block">May 2023 - Jun 2024</p>
                            </div>
                            <ul className="list-disc list-inside mt-1 text-gray-400 font-medium">
                                <li>Frontend Development:</li>
                                <li>Role-Based Company Switching: Seamless company switching based on user roles and permissions.</li>
                                <li>Comprehensive Oversight: Manage projects, tasks, clients, employees, leads, contracts, orders, invoicing, and payments.</li>
                                <li>User Friendly Web Application</li>
                            </ul>
                        </div>
                    </div>

                    {/* Experience 2: Real Time Chat Application */}
                    <div>
                        <div className="md:flex justify-between">
                            <p className="text-base font-bold mt-2 text-gray-300">Real Time Chat Application <span className="text-sm ml-2 font-bold md:hidden visible text-blue-300">Jan 2023 - April 2023</span></p>
                            <p className="text-base font-bold text-gray-300 hidden md:block">Jan 2023 - April 2023</p>
                        </div>
                        <p className=" text-gray-400 font-medium">Developed a real-time chat application layout utilizing Next.js.</p>

                    </div>

                    {/* Experience 3: Frontend Developer at bizgrow */}
                    <div>
                        <div className="md:flex justify-between">
                            <p className="md:text-xl text-xl font-bold text-gray-100">Frontend Developer | bizgrow <span className='text-sm ml-2 font-bold md:hidden visible  text-blue-300'>Feb 2022 - Sep 2022</span></p>
                            <p className="md:text-lg text-base font-bold text-blue-300 hidden md:block">
                                Feb 2022 - Sep 2022
                            </p>
                        </div>
                        <p className='text-gray-400 font-medium'>Developed user-facing features, ensuring optimal performance and responsiveness of web applications using React JS/Next JS and handled API integration.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProfessionalExperience;
