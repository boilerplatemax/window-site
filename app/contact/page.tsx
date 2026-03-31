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

const WHY_ITEMS = [
  {
    num: '01',
    title: 'Respond within 24 hours',
    body: 'Every enquiry is reviewed by our specification team — not a call centre. You\'ll receive a personalised response within one business day.',
  },
  {
    num: '02',
    title: 'Factory-direct pricing',
    body: 'No distributor markups. SIGNATURESPAN supplies direct, which means better pricing and a single point of contact from quote to delivery.',
  },
  {
    num: '03',
    title: 'Spec-ready documentation',
    body: 'CAD drawings, energy performance data, and installation guides for every system — ready for your documentation package.',
  },
]

const SERVICE_AREAS = [
  'Greater Toronto Area', 'Mississauga', 'Brampton', 'Vaughan',
  'Markham', 'Richmond Hill', 'Oakville', 'Burlington',
  'Hamilton', 'Waterloo / Kitchener', 'Barrie', 'Niagara Region',
]

export default function ContactPage() {
  const [form, setForm]           = useState<FormState>(EMPTY)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed to send')
      setSubmitted(true)
    } catch {
      alert('Something went wrong. Please try again or email us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* ── Page header ── */}
      <section
        className="relative bg-forma-black overflow-hidden"
        style={{ paddingTop: 'clamp(120px, 14vw, 200px)', paddingBottom: 'clamp(60px, 7vw, 100px)' }}
      >
        {/* Subtle texture — faint grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, #F5F3EF 0px, #F5F3EF 1px, transparent 1px, transparent 80px), repeating-linear-gradient(90deg, #F5F3EF 0px, #F5F3EF 1px, transparent 1px, transparent 80px)',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(to right, #C8A96E, #C8A96E44 40%, transparent 70%)' }}
          aria-hidden="true"
        />

        <div className="relative z-10 site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end">
            <div>
              <p className="font-mono text-[11px] tracking-label uppercase text-forma-white/85 mb-6">Get in Touch</p>
              <h1 className="font-display text-forma-white font-light text-balance text-display-lg">
                Let's specify
                <br />
                <em>your project.</em>
              </h1>
            </div>
            <div className="space-y-6 lg:pb-2">
              <p className="font-sans text-forma-white/80 text-base sm:text-[17px] leading-relaxed">
                Tell us about your project and we'll come back with a specification recommendation,
                system selection, and indicative pricing — within one business day.
              </p>
              <p className="font-sans text-forma-white/70 text-sm leading-relaxed">
                We work directly with architects, builders, interior designers, and
                homeowners across North America and the Pacific. No middlemen.
                No catalogue constraints.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why SIGNATURESPAN strip ── */}
      <div className="bg-forma-black border-y border-forma-white/8">
        <div className="site-container py-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-forma-white/8">
            {WHY_ITEMS.map(({ num, title, body }) => (
              <div key={num} className="py-8 sm:py-0 sm:px-8 first:sm:pl-0 last:sm:pr-0">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-[10px] tracking-label uppercase text-forma-gold">{num}</span>
                  <span className="flex-1 h-px bg-forma-white/10" />
                </div>
                <h3 className="font-sans text-forma-white text-sm font-medium mb-2">{title}</h3>
                <p className="font-sans text-forma-white/65 text-xs leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Form + Sidebar ── */}
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
                  <p className="font-sans text-forma-muted text-base leading-relaxed max-w-sm mx-auto mb-8">
                    We've received your enquiry and will be in touch within one business day
                    with a specification recommendation.
                  </p>
                  <a
                    href="/projects"
                    className="btn-outline-gold"
                  >
                    Browse Projects
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="font-display text-forma-text text-2xl lg:text-3xl font-light mb-2">
                      Request a Quote
                    </h2>
                    <p className="font-sans text-forma-muted text-sm">
                      All fields marked * are required. We respond within 1 business day.
                    </p>
                  </div>

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
                        <span className="spec-key block mb-2">Project Location *</span>
                        <input
                          type="text"
                          name="location"
                          required
                          value={form.location}
                          onChange={handleChange}
                          placeholder="Mississauga, ON"
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
                          <option value="" disabled>Select type…</option>
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
                          <option value="" disabled>Select system…</option>
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

                    <div className="flex flex-col sm:flex-row sm:items-center gap-5">
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
                      <p className="font-mono text-[10px] tracking-label uppercase text-forma-muted">
                        No obligation · We respond within 1 business day
                      </p>
                    </div>
                  </form>
                </>
              )}
            </div>

            {/* ── Sidebar ── */}
            <div className="space-y-10 lg:pt-14">

              {/* Direct contact */}
              <div>
                <p className="section-label mb-4">Direct Contact</p>
                <p className="font-sans text-forma-muted text-sm leading-relaxed mb-4">
                  Prefer to speak with someone directly? Our team is available
                  Monday–Friday during business hours.
                </p>

                <div className="space-y-4">
                  <div>
                    <p className="font-mono text-[10px] tracking-label uppercase text-forma-muted mb-1">Octavius Wojciechowski — VP of Sales</p>
                    <a href="tel:+15198974573" className="block font-display text-forma-text text-lg font-light hover:text-forma-gold transition-colors duration-200 mb-0.5">
                      +1 (519) 897-4573
                    </a>
                    <a href="mailto:octavius@signaturespan.com" className="block font-sans text-forma-muted text-sm hover:text-forma-gold transition-colors duration-200">
                      octavius@signaturespan.com
                    </a>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] tracking-label uppercase text-forma-muted mb-1">Lucjan Janeczek — VP of Operations</p>
                    <a href="tel:+14168917555" className="block font-display text-forma-text text-lg font-light hover:text-forma-gold transition-colors duration-200 mb-0.5">
                      +1 (416) 891-7555
                    </a>
                    <a href="mailto:lucjan@signaturespan.com" className="block font-sans text-forma-muted text-sm hover:text-forma-gold transition-colors duration-200">
                      lucjan@signaturespan.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Office hours */}
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

              {/* Service areas */}
              <div className="border-t border-forma-divider pt-8">
                <p className="section-label mb-4">Service Areas</p>
                <p className="font-sans text-forma-muted text-xs leading-relaxed mb-4">
                  We supply architectural glass systems throughout North America and selected
                  international markets. Current service regions include:
                </p>
                <div className="flex flex-wrap gap-2">
                  {SERVICE_AREAS.map(area => (
                    <span
                      key={area}
                      className="font-mono text-[9px] tracking-label uppercase text-forma-muted border border-forma-divider px-2.5 py-1.5"
                    >
                      {area}
                    </span>
                  ))}
                </div>
                <p className="font-sans text-forma-muted/60 text-[11px] mt-3 leading-relaxed">
                  Outside this area? Contact us — we work beyond our primary service area for the right project.
                </p>
              </div>

              {/* What to prepare */}
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
                    <li key={item} className="flex items-start gap-2.5 font-sans text-sm text-forma-muted">
                      <span className="w-1 h-1 rounded-full bg-forma-gold flex-shrink-0 mt-[7px]" />
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
