'use client';

import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/ui/ContactForm';
import SocialLinks from '@/components/ui/SocialLinks';
import {
  slideUpWithViewport,
  slideInLeftWithViewport,
  slideInRightWithViewport,
} from '@/lib/animations';

const EMAIL = 'moussa.abdelghany@gmail.com';

export function ContactSection() {
  const t = useTranslations('contact');

  const contactInfo = [
    { icon: Mail, label: t('labels.email'), value: EMAIL, href: `mailto:${EMAIL}` },
    {
      icon: MapPin,
      label: t('labels.location'),
      value: t('labels.locationValue'),
      href: null,
    },
    {
      icon: Clock,
      label: t('labels.availability'),
      value: t('labels.availabilityValue'),
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 bg-muted text-foreground"
    >
      <div className="container">
        {/* Section Header */}
        <motion.div className="text-center mb-16" {...slideUpWithViewport}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {t('title')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <motion.div className="space-y-8" {...slideInLeftWithViewport}>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                {t('infoHeading')}
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                {t('infoBody')}
              </p>
            </div>

            {/* Contact Details */}
            <ul className="space-y-6 list-none p-0">
              {contactInfo.map((info) => (
                <li key={info.label} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <info.icon aria-hidden="true" className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground mb-1">
                      {info.label}
                    </div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-lg font-semibold text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-lg font-semibold text-foreground">
                        {info.value}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">
                {t('connectHeading')}
              </h4>
              <SocialLinks />
            </div>

            {/* Call to Action */}
            <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20">
              <h4 className="text-lg font-bold mb-2 text-foreground">
                {t('ctaCardTitle')}
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                {t('ctaCardBody')}
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-colors"
              >
                {t('emailCta')}
              </a>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            className="bg-card text-card-foreground border border-border rounded-2xl p-8 shadow-xl"
            {...slideInRightWithViewport}
          >
            <h3 className="text-2xl font-bold mb-6">{t('formHeading')}</h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
