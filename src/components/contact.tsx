"use client";
import Head from "next/head";
import { init, send } from "emailjs-com";
import { useState } from "react";


if ( process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID === undefined) {
  throw new Error("NEXT_PUBLIC_EMAILJS_SERVICE_ID is not defined");
}
init(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    if (!name || !email || !message) {
      setStatus("Please fill in all required fields");
      setLoading(false);
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
    };

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

      if (!serviceId || !templateId) {
        throw new Error("Missing required environment variables");
      }
      await send(serviceId, templateId, templateParams);

      // Reset form
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setStatus("Thank you! Your message has been sent.");
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus("Failed to send message. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div id="contactUs" className="px-4 py-8 md:py-16">
      <Head>
        <title>Contact Us | Herbal Products</title>
        <meta
          name="description"
          content="Contact us for any questions about our herbal products"
        />
      </Head>

      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-4">
          Contact Us
        </h1>

        <p className="text-lg text-center mb-8">
          Have questions about our herbal products? We&apos;d love to hear from
          you!
        </p>

        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 max-w-2xl mx-auto">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 text-black rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300  text-black rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 text-black rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 text-black rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                rows={5}
              />
            </div>

            <button
              type="submit"
              className={`w-full py-3 px-4 rounded-md text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700 ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-700 hover:bg-green-800"
              }`}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <div
                className={`p-4 rounded-md ${
                  status.includes("Thank you")
                    ? "bg-green-50 text-green-800"
                    : "bg-red-50 text-red-800"
                }`}
              >
                {status}
              </div>
            )}
          </form>
        </div>
      </main>
    </div>
  );
}
