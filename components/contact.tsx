"use client";

import { useRef, useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "sonner";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter valid email address"),
  number: z
    .string()
    .min(8, "Number must be at least 8 digits")
    .max(15, "Number too long")
    .regex(/^[0-9]+$/, "Only digits allowed"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormType = z.infer<typeof contactSchema>;

export default function Contact() {
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);
  const [verified, setVerified] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ContactFormType>({
    resolver: zodResolver(contactSchema),
  });
  const watchAllFields = watch();

  const allFieldsFilled = Object.values(watchAllFields).every(
    (val) => val && val.toString().trim() !== ""
  );

  const onSubmit = async (data: ContactFormType) => {
    if (!verified) {
      toast.error("Please verify that you are human!");
      return;
    }

    const loadingToast = toast.loading("Sending message...");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE!,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE!,
        data,
        process.env.NEXT_PUBLIC_EMAIL_KEY!
      );

      toast.dismiss(loadingToast);
      toast.success("Message sent successfully!");

      reset();
      recaptchaRef.current?.reset();
      setVerified(false);
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">Get In Touch</h2>
          <p className="text-base md:text-lg text-muted-foreground">Let's discuss your next project</p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <a href="mailto:shresthakhya7@gmail.com" className="block hover:scale-[1.02] transition-all duration-300">
            <div className="p-6 rounded-xl bg-primary/10 border border-cyan-500/20 cursor-pointer hover:bg-primary/20 transition">
              <div className="w-12 h-12 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center mb-4">
                <Mail className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">Email</h3>
              <p className="text-muted-foreground">shresthakhya7@gmail.com</p>
            </div>
          </a>

          <a href="tel:+9779866316333" className="block hover:scale-[1.02] transition-all duration-300">
            <div className="p-6 rounded-xl bg-primary/10 border border-cyan-500/20 cursor-pointer hover:bg-primary/20 transition">
              <div className="w-12 h-12 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center mb-4">
                <Phone className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">Phone</h3>
              <p className="text-muted-foreground">+977 9866316333</p>
            </div>
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Madhyapur+Thimi+Bhaktapur"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:scale-[1.02] transition-all duration-300"
          >
            <div className="p-6 rounded-xl bg-primary/10 border border-cyan-500/20 cursor-pointer hover:bg-primary/20 transition">
              <div className="w-12 h-12 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center mb-4">
                <MapPin className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">Location</h3>
              <p className="text-muted-foreground">Madhyapur Thimi, Bhaktapur</p>
            </div>
          </a>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="p-8 md:p-12 rounded-xl bg-primary/10 border border-cyan-500/20">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  {...register("name")}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-cyan-500/20"
                />
                {errors.name && <p className="text-red-500 text-sm pt-2">{errors.name.message}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-cyan-500/20"
                />
                {errors.email && <p className="text-red-500 text-sm pt-2">{errors.email.message}</p>}
              </div>

              {/* Number */}
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  {...register("number")}
                  placeholder="Your phone number"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-cyan-500/20"
                />
                {errors.number && <p className="text-red-500 text-sm pt-2">{errors.number.message}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={6}
                  {...register("message")}
                  placeholder="Your message"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-cyan-500/20 resize-none"
                />
                {errors.message && <p className="text-red-500 text-sm pt-2">{errors.message.message}</p>}
              </div>

              {allFieldsFilled && (
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={process.env.NEXT_PUBLIC_ReCAPTCHA_SITE_KEY!}
                  onChange={() => setVerified(true)}
                />
              )}

              <button
                type="submit"
                className="w-full px-6 py-3 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}