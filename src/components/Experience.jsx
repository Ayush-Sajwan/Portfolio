import React from "react";

export default function Experience() {
  const exp = [
    {
      id: 1,
      role: "Technical Consultant",
      company: "Oracle Financial Services Software",
      date: "Jun 2024 - Present ",
      achieve: [
        "Developed customer account creation screens in Oracle FLEXCUBE using Java, JavaScript, and PL/SQL, supporting over 5 account types.",
        "Migrated 200K+ transaction records from legacy systems with 100% data accuracy using optimized PL/SQL scripting.",
        "Customized 15+ SOAP endpoints to enable feature enhancements and reduce integration effort by 30%.",
        "Collaborated in an Agile team to deliver high-impact improvements with smooth production deployment.",
        "Engaged in peer code reviews and troubleshooting of customer-reported issues, contributing to client satisfaction.",
      ],
    },
  ];

  return (
    <div
      name="experience"
      className="w-full pt-20 h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg w-full h-full justify-center flex flex-col mx-auto p-4">
        <div className="pb-6">
          <p className="text-4xl mb-8 font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
        </div>

        {exp.map((e) => {
          return (
            <div key={e.id} className="text-gray-200  mb-8 inline py-6">
              <div className="text-3xl py-2">{e.role}</div>
              <div className="text-2xl font-thin italic py-1">
                {` ${e.company} ( ${e.date} )`}
              </div>

              <ul className="list-disc pl-10">
                {e.achieve.map((a,index) => {
                  return <li key={index}>{a}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
