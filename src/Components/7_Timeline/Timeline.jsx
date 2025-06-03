import React from "react";

const Timeline = () => (
  <section className="my-12">
    <h2 className="text-2xl font-bold mb-4">Experience Timeline</h2>
    <ul className="border-l-2 border-gray-300 pl-6">
      <li className="mb-8">
        <div className="font-semibold">Job Title @ Company</div>
        <div className="text-sm text-gray-500">Jan 2022 - Present</div>
        <div className="text-gray-700">Brief description of your role and achievements.</div>
      </li>
      <li className="mb-8">
        <div className="font-semibold">Previous Role @ Company</div>
        <div className="text-sm text-gray-500">2019 - 2021</div>
        <div className="text-gray-700">Another description of your experience.</div>
      </li>
      {/* Add more timeline items as needed */}
    </ul>
  </section>
);

export default Timeline;