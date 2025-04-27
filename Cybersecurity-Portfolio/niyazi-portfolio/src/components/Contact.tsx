"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-blue-900">
      <div className="container px-4 md:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-white md:text-4xl">Contact Me</h2>
          <div className="mb-6 h-1 w-20 bg-blue-500 mx-auto" />
          <p className="mb-12 text-center text-gray-300">
            Feel free to reach out for job opportunities, collaborations, or just to say hello!
          </p>

          <div className="grid gap-10 md:grid-cols-3">
            <div className="space-y-6">
              <ContactInfoCard
                icon={<Mail className="h-6 w-6 text-blue-400" />}
                title="Email"
                content="niyazisyshavalikhan.ns@gmail.com"
                link="mailto:niyazisyshavalikhan.ns@gmail.com"
              />

              <ContactInfoCard
                icon={<Phone className="h-6 w-6 text-blue-400" />}
                title="Phone"
                content="+91 6301809639"
                link="tel:+916301809639"
              />

              <ContactInfoCard
                icon={<MapPin className="h-6 w-6 text-blue-400" />}
                title="Location"
                content="Chinamandem, Andhra Pradesh, India"
              />

              <div className="mt-8 flex justify-center space-x-4 md:justify-start">
                <a
                  href="https://github.com/niyazisyshavalikhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-blue-950 p-3 text-white hover:bg-blue-800"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/niyazisyshavalikhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-blue-950 p-3 text-white hover:bg-blue-800"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="md:col-span-2">
              <Card className="border-blue-800/20 bg-blue-950/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  {submitSuccess ? (
                    <div className="flex h-full flex-col items-center justify-center py-8">
                      <div className="mb-4 rounded-full bg-blue-900/50 p-3">
                        <svg
                          className="h-6 w-6 text-blue-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-medium text-blue-300">Message Sent!</h3>
                      <p className="mt-2 text-center text-gray-300">
                        Thank you for your message. I will get back to you as soon as possible.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">
                            Name
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full rounded-md border border-blue-700 bg-blue-950/50 px-4 py-2 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            placeholder="Your name"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
                            Email
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full rounded-md border border-blue-700 bg-blue-950/50 px-4 py-2 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            placeholder="Your email"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-300">
                          Subject
                        </label>
                        <input
                          id="subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full rounded-md border border-blue-700 bg-blue-950/50 px-4 py-2 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                          placeholder="Subject"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="w-full rounded-md border border-blue-700 bg-blue-950/50 px-4 py-2 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                          placeholder="Your message"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ContactInfoCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  link?: string;
}

function ContactInfoCard({ icon, title, content, link }: ContactInfoCardProps) {
  return (
    <Card className="border-blue-800/20 bg-blue-950/50 backdrop-blur-sm">
      <CardContent className="flex items-center gap-4 p-4">
        <div className="flex-shrink-0">{icon}</div>
        <div>
          <h3 className="font-medium text-blue-300">{title}</h3>
          {link ? (
            <a href={link} className="text-gray-300 hover:text-blue-400">
              {content}
            </a>
          ) : (
            <p className="text-gray-300">{content}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
