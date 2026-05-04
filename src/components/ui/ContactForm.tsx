'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const INPUT_BASE =
  'w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:border-ring transition-colors duration-300';

const INPUT_VALID = 'border-input focus:ring-ring';
const INPUT_INVALID = 'border-destructive focus:ring-destructive';

const INITIAL_FORM = {
  name: '',
  email: '',
  subject: '',
  message: '',
  website: '',
};

type FormField = 'name' | 'email' | 'subject' | 'message';
type FormErrors = Partial<Record<FormField, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactForm: React.FC = () => {
  const t = useTranslations('contact.form');

  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (data: typeof INITIAL_FORM): FormErrors => {
    const next: FormErrors = {};
    if (!data.name.trim()) next.name = t('errors.required');
    if (!data.email.trim()) next.email = t('errors.required');
    else if (!EMAIL_REGEX.test(data.email)) next.email = t('errors.invalidEmail');
    if (!data.subject.trim()) next.subject = t('errors.required');
    if (!data.message.trim()) next.message = t('errors.required');
    return next;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as FormField]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name as FormField];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const nextErrors = validate(formData);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      const firstErrorField = (Object.keys(nextErrors) as FormField[])[0];
      document.getElementById(firstErrorField)?.focus();
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = (await res.json().catch(() => null)) as { ok?: boolean } | null;

      if (res.ok && data?.ok) {
        toast.success(t('success'));
        setFormData(INITIAL_FORM);
      } else {
        toast.error(t('error'));
      }
    } catch {
      toast.error(t('error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass = (field: FormField) =>
    cn(INPUT_BASE, errors[field] ? INPUT_INVALID : INPUT_VALID);

  const errorIdFor = (field: FormField) => `${field}-error`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-foreground mb-2"
          >
            {t('name')}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? errorIdFor('name') : undefined}
            className={fieldClass('name')}
            placeholder={t('namePlaceholder')}
            suppressHydrationWarning
          />
          {errors.name && (
            <p
              id={errorIdFor('name')}
              role="alert"
              className="mt-2 text-sm text-destructive"
            >
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground mb-2"
          >
            {t('email')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
            inputMode="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? errorIdFor('email') : undefined}
            className={fieldClass('email')}
            placeholder={t('emailPlaceholder')}
            suppressHydrationWarning
          />
          {errors.email && (
            <p
              id={errorIdFor('email')}
              role="alert"
              className="mt-2 text-sm text-destructive"
            >
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-foreground mb-2"
        >
          {t('subject')}
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          autoComplete="off"
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? errorIdFor('subject') : undefined}
          className={fieldClass('subject')}
          placeholder={t('subjectPlaceholder')}
          suppressHydrationWarning
        />
        {errors.subject && (
          <p
            id={errorIdFor('subject')}
            role="alert"
            className="mt-2 text-sm text-destructive"
          >
            {errors.subject}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-foreground mb-2"
        >
          {t('message')}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          autoComplete="off"
          rows={5}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? errorIdFor('message') : undefined}
          className={fieldClass('message')}
          placeholder={t('messagePlaceholder')}
          suppressHydrationWarning
        />
        {errors.message && (
          <p
            id={errorIdFor('message')}
            role="alert"
            className="mt-2 text-sm text-destructive"
          >
            {errors.message}
          </p>
        )}
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          value={formData.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
          suppressHydrationWarning
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
        suppressHydrationWarning
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-6 rounded-lg transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {isSubmitting ? t('sending') : t('submit')}
      </button>
    </form>
  );
};

export default ContactForm;
