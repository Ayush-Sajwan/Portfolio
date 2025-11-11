import React from "react";

export default function Experience() {
  const exp = [
    {
      id: 1,
      role: "Software Developer",
      company: "Oracle Financial Services Software",
      date: "Jun 2024 - Present ",
      achieve: [
    "Developed and integrated a secure interface between FLEXCUBE Corporate (FCC) and external vendor systems for Bank Danamon Indonesia using Java and PL/SQL, enabling third-party applications to perform core banking operations in FCC through APIs.",
    "Implemented support for MTx99 SWIFT message processing in FCC using PL/SQL and internal integration frameworks, ensuring compliance with SWIFT international standards.",
    "Automated End-of-Day (EOD) DB batch monitoring using Java, PL/SQL, and scheduled jobs, enabling real-time email alerts on batch execution status and reducing manual operational effort during daily processing.",
    "Created and customized screens in the FLEXCUBE CASA module using Java, JavaScript, and PL/SQL for account creation and GL blocking, ensuring correct business rule integration.",
    "Led the migration of 200K+ transaction records from legacy FLEXCUBE systems to the latest release through well-structured PL/SQL migration and reconciliation scripts, ensuring 100% data integrity across all records.",
    "Diagnosed production defects via log and workflow analysis, and deployed preventive Java and PL/SQL enhancements in FLEXCUBE and FCC to improve reliability and minimize recurring issues."
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
