'use client'

import { useState } from 'react'

const PROJECT_TYPES = [
  'New Residential Build',
  'Residential Renovation',
  'Commercial New Build',
  'Commercial Renovation',
  'Architectural Specification',
  'Other',
]

const SYSTEMS = [
  'Windows',
  'Sliding Door Systems',
  'Folding Glass Walls',
  'Entry Doors',
  'Multiple Systems',
  'Not sure yet',
]

type FormState = {
  name: string
  email: string
  phone: string
  projectType: string
  system: string
  location: string
  message: string
}

const EMPTY: FormState = {
  name: '', email: '', phone: '', projectType: '', system: '', location: '', message: '',
}

export default function ContactPage() {
  const [form, setForm]       = useState<FormState>(EMPTY)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Placeholder: replace with real form endpoint (Formspree, Resend, etc.)
    await new Promise(r => setTimeout(r, 800))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <>
      {/* Page header */}
      <section className="bg-forma-black pt-40 pb-20">
        <div className="site-container">
          <p className="section-label-light mb-5">Get in Touch</p>
          <h1 className="font-display text-forma-white text-5xl sm:text-6xl lg:text-7xl font-light leading-tight mb-6 max-w-xl">
            Request
            <br />
            <em>a Quote</em>
          </h1>
          <p className="font-sans text-forma-white/55 text-lg max-w-sm leading-relaxed">
            Tell us about your project and we'll respond within one business day with
            a specification recommendation and pricing.
          </p>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="bg-forma-white section-pad">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20">

            {/* Form — takes 2 cols */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="py-20 text-center">
                  <span className="gold-line mx-auto mb-8 block" aria-hidden="true" />
                  <h2 className="font-display text-forma-text text-4xl font-light italic mb-4">
                    Thank you.
                  </h2>
                  <p className="font-sans text-forma-muted text-base leading-relaxed max-w-sm mx-auto">
                    We've received your enquiry and will be in touch within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <label className="block">
                      <span className="spec-key block mb-2">Full Name *</span>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className="w-full border border-forma-divider bg-transparent px-4 py-3 font-sans text-sm text-forma-text placeholder:text-forma-muted/40 focus:outline-none focus:border-forma-gold transition-colors duration-200"
                      />
                    </label>
                    <label className="block">
                      <span className="spec-key block mb-2">Email Address *</span>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@studio.com"
                        className="w-full border border-forma-divider bg-transparent px-4 py-3 font-sans text-sm text-forma-text placeholder:text-forma-muted/40 focus:outline-none focus:border-forma-gold transition-colors duration-200"
                      />
                    </label>
                  </div>

                  {/* Phone + Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <label className="block">
                      <span className="spec-key block mb-2">Phone</span>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 (604) 555-0100"
                        className="w-full border border-forma-divider bg-transparent px-4 py-3 font-sans text-sm text-forma-text placeholder:text-forma-muted/40 focus:outline-none focus:border-forma-gold transition-colors duration-200"
                      />
                    </label>
                    <label className="block">
                      <span className="spec-key block mb-2">Project Location</span>
                      <input
                        type="text"
                        name="location"
                        value={form.location}
                        onChange={handleChange}
                        placeholder="Vancouver, BC"
                        className="w-full border border-forma-divider bg-transparent px-4 py-3 font-sans text-sm text-forma-text placeholder:text-forma-muted/40 focus:outline-none focus:border-forma-gold transition-colors duration-200"
                      />
                    </label>
                  </div>

                  {/* Project Type + System */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <label className="block">
                      <span className="spec-key block mb-2">Project Type *</span>
                      <select
                        name="projectType"
                        required
                        value={form.projectType}
                        onChange={handleChange}
                        className="w-full border border-forma-divider bg-forma-white px-4 py-3 font-sans text-sm text-forma-text focus:outline-none focus:border-forma-gold transition-colors duration-200 appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select type...</option>
                        {PROJECT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </label>
                    <label className="block">
                      <span className="spec-key block mb-2">System of Interest</span>
                      <select
                        name="system"
                        value={form.system}
                        onChange={handleChange}
                        className="w-full border border-forma-divider bg-forma-white px-4 py-3 font-sans text-sm text-forma-text focus:outline-none focus:border-forma-gold transition-colors duration-200 appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select system...</option>
                        {SYSTEMS.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </label>
                  </div>

                  {/* Message */}
                  <label className="block">
                    <span className="spec-key block mb-2">Project Details</span>
                    <textarea
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project — opening sizes, timeline, any existing drawings or specifications..."
                      className="w-full border border-forma-divider bg-transparent px-4 py-3 font-sans text-sm text-forma-text placeholder:text-forma-muted/40 focus:outline-none focus:border-forma-gold transition-colors duration-200 resize-none"
                    />
                  </label>

                  <div className="flex items-center gap-6">
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? 'Sending…' : 'Submit Enquiry'}
                      {!loading && (
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                          <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </button>
                    <p className="font-mono text-[10px] tracking-label uppercase text-forma-muted/50">
                      We respond within 1 business day
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Contact sidebar */}
            <div className="space-y-10">
              <div>
                <p className="section-label mb-4">Direct Contact</p>
                <p className="font-sans text-forma-muted text-sm leading-relaxed mb-4">
                  Prefer to speak directly? Reach our specification team by phone or email.
                </p>
                <a href="tel:+16045550192" className="block font-display text-forma-text text-xl font-light hover:text-forma-gold transition-colors duration-200 mb-1">
                  +1 (604) 555-0192
                </a>
                <a href="mailto:hello@formaglass.com" className="block font-sans text-forma-muted text-sm hover:text-forma-gold transition-colors duration-200">
                  hello@formaglass.com
                </a>
              </div>

              <div className="border-t border-forma-divider pt-8">
                <p className="section-label mb-4">Office Hours</p>
                <dl className="space-y-2">
                  {[
                    { day: 'Monday – Friday', hours: '8:00 am – 5:00 pm PT' },
                    { day: 'Saturday',        hours: 'By appointment' },
                    { day: 'Sunday',          hours: 'Closed' },
                  ].map(({ day, hours }) => (
                    <div key={day} className="flex justify-between">
                      <dt className="font-mono text-[10px] tracking-label uppercase text-forma-muted">{day}</dt>
                      <dd className="font-sans text-sm text-forma-muted">{hours}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="border-t border-forma-divider pt-8">
                <p className="section-label mb-4">What to Prepare</p>
                <ul className="space-y-3">
                  {[
                    'Opening dimensions (W × H)',
                    'Project location and climate zone',
                    'Floor plans or drawings if available',
                    'Preferred frame finish or colour',
                    'Target delivery timeline',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2 font-sans text-sm text-forma-muted">
                      <span className="w-1 h-1 rounded-full bg-forma-gold flex-shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
