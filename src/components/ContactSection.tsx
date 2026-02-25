import { useState, FormEvent } from "react";
import { Mail, Send } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const ContactSection = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="section-container max-w-2xl">
        <AnimatedSection>
          <p className="text-primary font-medium text-sm uppercase tracking-wide mb-2 text-center">
            Contact
          </p>
          <h2 className="heading-lg mb-4 text-center">Get In Touch</h2>
          <p className="text-body text-center mb-10">
            Have a project in mind or just want to say hi? Drop me a message.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          {sent ? (
            <div className="card-elevated p-10 text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="text-primary" size={24} />
              </div>
              <h3 className="heading-md mb-2">Message Sent!</h3>
              <p className="text-muted-foreground text-sm">Thanks for reaching out. I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card-elevated p-8 space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:shadow-lg transition-all hover:scale-[1.02]"
              >
                <Send size={16} /> Send Message
              </button>
            </form>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
