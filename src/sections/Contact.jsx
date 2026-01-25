import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles"; // Pastikan path ini benar
import { mySocials } from "../constants";

const Contact = () => {
  const formRef = useRef(); // Menggunakan Ref untuk referensi form (Best Practice EmailJS)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // SANGAT DISARANKAN: Pindahkan string ini ke file .env (VITE_APP_SERVICE_ID, dst)
      await emailjs.send(
        "service_k1f8aox", // Service ID
        "template_2ym6mce", // Template ID
        {
          from_name: formData.name,
          to_name: "Al-Firdaus Nuzula",
          from_email: formData.email,
          to_email: "abdullahalfirdausnuzula86@gmail.com",
          message: formData.message,
        },
        "h0UdG-WXjwhuMSwyA", // Public Key
      );

      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "Your message has been sent!"); // Perbaikan typo
    } catch (error) {
      setIsLoading(false);
      console.error("EmailJS Error:", error); // Gunakan console.error
      showAlertMessage("danger", "Something went wrong!"); // Perbaikan typo
    }
  };

  return (
    <section
      id="contact"
      className="relative flex items-center c-space section-spacing"
    >
      {/* Pastikan komponen Particles dan Alert sudah diimport dengan benar */}
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />

      {showAlert && <Alert type={alertType} text={alertMessage} />}

      <div className="flex flex-col items-center justify-center max-w-xl p-5 mx-auto border border-white/10 rounded-2xl bg-primary shadow-2xl">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            {/* Perbaikan typo: loking -> looking */}
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help.
          </p>
        </div>

        {/* SOCIAL GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
          {mySocials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-black/30 backdrop-blur-md hover:bg-white/10 hover:border-white/40 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-300 group cursor-pointer"
            >
              <div className="p-3 rounded-lg bg-white/5 group-hover:bg-white/20 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300">
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-6 h-6 object-contain"
                />
              </div>
              <span className="font-medium text-neutral-200 group-hover:text-white transition-colors">
                {social.name}
              </span>
              <img
                src="assets/arrow-up.svg"
                className="w-4 h-4 ml-auto invert opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 rotate-45 transition-all duration-300"
                alt="arrow"
              />
            </a>
          ))}
        </div>

        <form ref={formRef} className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            {/* Perbaikan typo class: feild-label -> field-label */}
            <label htmlFor="name" className="field-label">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="Al-Firdaus Nuzula"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="FirNuzula@email.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="field-input field-input-focus"
              placeholder="Share your thoughts..."
              autoComplete="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading} // Disable tombol saat loading
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation disabled:opacity-50"
          >
            {!isLoading ? "Send" : "Sending..."}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
