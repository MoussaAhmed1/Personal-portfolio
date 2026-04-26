'use client';

import { motion } from 'motion/react';
import ContactForm from '@/components/ui/ContactForm';
import SocialLinks from '@/components/ui/SocialLinks';
import {
  slideUpWithViewport,
  slideInLeftWithViewport,
  slideInRightWithViewport
} from '@/lib/animations';
import { Mail, MapPin, Clock } from 'lucide-react';

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'moussa.abdelghany@gmail.com',
      href: 'mailto:moussa.abdelghany@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Cairo, Egypt',
      href: null,
    },
    {
      icon: Clock,
      label: 'Availability',
      value: 'Open to opportunities',
      href: null,
    },
  ];

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-muted text-foreground">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          {...slideUpWithViewport}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I&apos;d love to hear about it. Drop me a message and let&apos;s create something amazing together.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Contact Info */}
          <motion.div
            className="space-y-8"
            {...slideInLeftWithViewport}
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Get in Touch
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                I&apos;m currently available for freelance work and full-time opportunities.
                If you have a project that you want to get started, think you need my help
                with something, or just fancy saying hey, then get in touch.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground mb-1">
                      {info.label}
                    </div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-lg font-semibold text-foreground">
                        {info.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">
                Connect with me
              </h4>
              <SocialLinks />
            </div>

            {/* Call to Action */}
            <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20">
              <h4 className="text-lg font-bold mb-2 text-foreground">
                Looking to hire?
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                I&apos;m open to discussing new opportunities, collaborations, and exciting projects.
              </p>
              <a
                href="mailto:moussa.abdelghany@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-colors"
              >
                Send me an email
              </a>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            className="bg-card text-card-foreground border border-border rounded-2xl p-8 shadow-xl"
            {...slideInRightWithViewport}
          >
            <h3 className="text-2xl font-bold mb-6">
              Send a Message
            </h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
