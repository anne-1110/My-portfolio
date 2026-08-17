import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: send formData to your backend or email service here
  };

  return (
    <section className="contact-form" id="contact">
      <div className="contact-wrapper">
        {/* Left: heading */}
        <div className="contact-text">
          <h2>
            I'm always interested <br/> in hearing about new<br/> projects, so if
            you'd<br/> like to chat please<br/> get in touch.
          </h2>
        </div>

        {/* <form className="contact-inputs2" onSubmit={handleSubmit}>
          <div className="name-row2">
            <input
              type="text"
              name="fullname"
              placeholder="fullname"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Write me something..."
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="get-in-touch-btn2">
            Get in touch
          </button>
        </form> */}

        {/* Right: form */}
        <form className="contact-inputs" onSubmit={handleSubmit}>
          <div className="name-row">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Write me something..."
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="get-in-touch-btn">
            Get in touch
          </button>
        </form>
      </div>

      {/* Social icons - plain text/letter version, no external icon package */}
      <div className="contact-socials">
        <a href="https://www.twitter.com/@tech_annie11" target="_blank" rel="noreferrer"><i className="fa-brands fab fa-twitter"></i></a>
        <a href="https://www.Facebook.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-square-facebook"></i></a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
        <a href="https://www.github.com/anne-1110" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
        <a href="https://www.angellist.com" target="_blank" rel="noreferrer"><i className="fab fa-angellist"></i></a>
        
      </div>
    </section>
  );
}

// import React, { useState } from "react";
// import { Facebook, Linkedin, Github, Twitter } from "lucide-react";

// export default function Form() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     // TODO: send formData to your backend or email service here
//   };

//   return (
//     <section className="contact-form" id="contact">
//       <div className="contact-wrapper">
//         {/* Left: heading */}
//         <div className="contact-text">
//           <h2>
//             I'm always interested in hearing about new projects, so if
//             you'd like to chat please get in touch.
//           </h2>
//         </div>

//         {/* Right: form */}
//         <form className="contact-inputs" onSubmit={handleSubmit}>
//           <div className="name-row">
//             <input
//               type="text"
//               name="firstName"
//               placeholder="First Name"
//               value={formData.firstName}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="text"
//               name="lastName"
//               placeholder="Last Name"
//               value={formData.lastName}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <input
//             type="email"
//             name="email"
//             placeholder="Email address"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />

//           <textarea
//             name="message"
//             placeholder="Write me something..."
//             rows={4}
//             value={formData.message}
//             onChange={handleChange}
//             required
//           />

//           <button type="submit" className="get-in-touch-btn">
//             Get in touch
//           </button>
//         </form>
//       </div>

//       {/* Social icons */}
//       <div className="contact-socials">
//         <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
//         <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
//         <a href="#" aria-label="GitHub"><Github size={18} /></a>
//         <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
//         <a href="#" aria-label="Medium">M</a>
//       </div>
//     </section>
//   );
// }