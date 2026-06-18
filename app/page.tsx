"use client";

import { useState } from "react";


export default function Home() {
  const downloadPDF = async () => {
    const html2pdf = (await import("html2pdf.js")).default;

    const element = document.getElementById("resume");

    html2pdf().from(element).save("resume.pdf");
  };
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
    education: "",
    experience: "",
  });
  

  return (
    <main className="container">

      {/* INPUT SIDE */}
      <div className="card">
        <h2>Enter Details</h2>

        <input
          placeholder="Full Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          placeholder="Phone"
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <textarea
          placeholder="Skills"
          onChange={(e) => setForm({ ...form, skills: e.target.value })}
        />

        <textarea
          placeholder="Education"
          onChange={(e) => setForm({ ...form, education: e.target.value })}
        />

        <textarea
          placeholder="Experience"
          onChange={(e) => setForm({ ...form, experience: e.target.value })}
        />
      </div>

      {/* PREVIEW SIDE */}
      <div className="card" id="resume">
        <h2>Resume Preview</h2>

        <h1>{form.name || "Your Name"}</h1>
        <p>
          {form.email || "email@example.com"} | {form.phone || "Phone"}
        </p>

        <hr />

        <h3>Skills</h3>
        <p>{form.skills || "Your skills will appear here"}</p>

        <h3>Education</h3>
        <p>{form.education || "Your education will appear here"}</p>

        <h3>Experience</h3>
        <p>{form.experience || "Your experience will appear here"}</p>

        <br />

        {/* REQUIRED BUTTON */}
        <div style={{ marginTop: "15px", display: "flex", flexDirection: "column", gap: "10px" }}>

          <a href="https://digitalheroesco.com" target="_blank">
            <button>
              Built for Digital Heroes
            </button>
          </a>

          <button onClick={downloadPDF}>
            Download PDF
          </button>

        </div>


      </div>
    </main>
  );
}