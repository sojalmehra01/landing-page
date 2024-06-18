import React from 'react';

const Insights = () => {
    return (
        <div className="bg-gray-100 py-16 px-4 bg-zinc-800">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-6xl font-bold text-center mb-6 text-white">Insights</h1>
                <h2 className="text-3xl font-bold text-center mb-6 text-white">Transforming Project Management with Data-Driven Decisions</h2>
                <ul className="list-none pl-0 mb-8 text-white">
                    <li className="bg-blue-100 rounded-md p-4 mb-4 transform hover:-translate-y-1 hover:scale-105 transition-transform duration-200 ease-in-out text-black">
                        In the ever-evolving landscape of project management, the ability to make informed, data-backed decisions is more crucial than ever.
                    </li>
                    <li className="bg-green-100 rounded-md p-4 mb-4 transform hover:-translate-y-1 hover:scale-105 transition-transform duration-200 ease-in-out text-black">
                        At the heart of our insights lies a powerful visualization engine that brings your project's workflow to life.
                    </li>
                    <li className="bg-yellow-100 rounded-md p-4 mb-4 transform hover:-translate-y-1 hover:scale-105 transition-transform duration-200 ease-in-out text-black">
                        Our platform doesn't just visualize your workflow; it analyzes it. Through advanced analytics, we offer deep insights into task completion rates, team productivity, and process inefficiencies.
                    </li>
                    <li className="bg-red-100 rounded-md p-4 mb-4 transform hover:-translate-y-1 hover:scale-105 transition-transform duration-200 ease-in-out text-black">
                        Understanding your project's performance is only half the battle. Knowing how to act on that knowledge is equally important. That's why our customizable dashboards put you in the driver's seat.
                    </li>
                    <li className="bg-purple-100 rounded-md p-4 mb-4 transform hover:-translate-y-1 hover:scale-105 transition-transform duration-200 ease-in-out text-black">
                        Looking ahead is crucial in project management, and our insights take this a step further with predictive modeling. By analyzing historical data and current trends, we can forecast potential risks, estimate task durations with unprecedented accuracy, and suggest optimizations before they become necessary.
                    </li>
                    <li className="bg-indigo-100 rounded-md p-4 mb-4 transform hover:-translate-y-1 hover:scale-105 transition-transform duration-200 ease-in-out text-black">
                        Finally, our insights aren't just for managers and executives; they're for everyone involved in the project. By breaking down complex data into understandable visuals and reports, we ensure that your entire team is equipped with the knowledge needed to contribute to the project's success.
                    </li>
                    {/* Additional insights start here */}
                    <li className="bg-pink-100 rounded-md p-4 mb-4 transform hover:-translate-y-1 hover:scale-105 transition-transform duration-200 ease-in-out text-black">
                        Enhancing Team Communication: Our platform integrates real-time chat functionality directly within task cards, facilitating immediate collaboration and resolution of queries.
                    </li>
                    <li className="bg-teal-100 rounded-md p-4 mb-4 transform hover:-translate-y-1 hover:scale-105 transition-transform duration-200 ease-in-out text-black">
                        Streamlined Task Management: Users can easily manage tasks and subtasks, prioritize them, and track their progress, all in one place, reducing clutter and increasing focus.
                    </li>
                    <li className="bg-orange-100 rounded-md p-4 mb-4 transform hover:-translate-y-1 hover:scale-105 transition-transform duration-200 ease-in-out text-black">
                        Dynamic Progress Tracking: A dynamic progress bar for each task and subtask provides real-time updates on completion status, keeping stakeholders informed and engaged.
                    </li>
                    <li className="bg-lime-100 rounded-md p-4 mb-4 transform hover:-translate-y-1 hover:scale-105 transition-transform duration-200 ease-in-out text-black">
                        Scalable and Flexible: Our platform adapts to the needs of growing teams and projects, offering scalability without sacrificing usability or performance.
                    </li>
                    <li className="bg-cyan-100 rounded-md p-4 mb-4 transform hover:-translate-y-1 hover:scale-105 transition-transform duration-200 ease-in-out text-black">
                        Continuous Improvement: Leveraging AI and machine learning, our platform learns from your project data to continuously refine processes and enhance team productivity.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Insights;
