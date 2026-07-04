import { useState, useEffect, type ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Code,
  MapPin,
  Briefcase,
  Mail,
  Phone,
  ExternalLink,
  MessageSquare,
  Bot,
  Layout,
  Database,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Cpu,
  GraduationCap,
  FolderGit2
} from 'lucide-react'

import './index.css'
import { translations } from './i18n'

type Translation = typeof translations.en
type SummaryCard = Translation['summary']['cards'][number]
type TechCategory = Translation['techStack']['categories'][number]
type ProjectItem = Translation['projects']['items'][number]
type EducationItem = Translation['education']['items'][number]

// UI Components
const LinkedInLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const AnimatedSection = ({ children, delay = 0, className = "" }: { children: ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay }}
    className={className}
  >
    {children}
  </motion.div>
)

const techIcons = [Layout, Code, Database, ShieldCheck, Bot]

const openChat = () => {
  window.location.hash = 'chat'
  window.dispatchEvent(new CustomEvent('openChat'))
}

const StorySection = ({ t }: { t: Translation }) => {
  return (
    <section id="summary" className="py-16 md:py-24 overflow-hidden relative">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold mb-6 border border-accent/20">
                <Sparkles className="w-3.5 h-3.5" />
                {t.summary.title}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                {t.summary.p1} <span className="text-primary">{t.summary.p1Highlight}</span> {t.summary.p1End}
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed mb-8">
                {t.story.hookParagraphs.map((paras: string[], i: number) => (
                  <p key={i}>
                    {paras.map((text, j) => {
                      if (text.startsWith('*') && text.endsWith('*')) return <strong key={j} className="text-foreground">{text.slice(1, -1)}</strong>
                      if (text.startsWith('+') && text.endsWith('+')) return <span key={j} className="text-primary font-medium">{text.slice(1, -1)}</span>
                      return text
                    })}
                  </p>
                ))}
              </div>
            </AnimatedSection>
          </div>
          <div className="lg:col-span-5">
            <div className="grid gap-4">
              {t.summary.cards.map((card: SummaryCard, i: number) => (
                <AnimatedSection key={i} delay={0.1 * (i + 1)}>
                  <div className="p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-md portfolio-card-hover transition-all group">
                    <h3 className="font-bold mb-1 group-hover:text-primary transition-colors">{card.title}</h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-200">{card.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const App = ({ lang = 'en' }: { lang?: 'zh' | 'en' }) => {
  const t = translations[lang]
  const [roleIndex, setRoleIndex] = useState(0)
  const [activeSection, setActiveSection] = useState('summary')

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % t.greetingRoles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [t.greetingRoles.length])

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    const sections = ['summary', 'experience', 'projects', 'education', 'contact']
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const navItems = [
    { id: 'summary', label: lang === 'zh' ? '总结' : 'Summary' },
    { id: 'experience', label: lang === 'zh' ? '经历' : 'Experience' },
    { id: 'projects', label: lang === 'zh' ? '项目' : 'Projects' },
    { id: 'education', label: lang === 'zh' ? '教育' : 'Education' },
    // Tech Stack section is intentionally hidden for now because the hero already has Technical Arsenal.
    // { id: 'tech', label: lang === 'zh' ? '技术' : 'Tech Stack' },
    { id: 'contact', label: lang === 'zh' ? '联系' : 'Contact' },
  ]

  return (
    <main className="min-h-screen portfolio-shell text-foreground selection:bg-primary/20 overflow-x-hidden">
      {/* Hero */}
      <header className="relative pt-28 pb-14 md:pt-36 md:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch">
            {/* Left column: hero + connect */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <motion.section
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="portfolio-card portfolio-card-hover rounded-2xl md:rounded-3xl p-6 sm:p-8 flex-1 min-h-[430px] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-border bg-muted p-0.5">
                      <img src="/foto-avatar.png" alt="Yifan Xue" className="h-full w-full rounded-full object-cover" />
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-2 text-xs font-mono text-success">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="absolute inline-flex h-full w-full rounded-full bg-success opacity-75 animate-ping" />
                          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
                        </span>
                        {t.hero.availability}
                      </div>
                    </div>
                  </div>

                  <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[0.95] mb-5">
                    Yifan Xue
                  </h1>
                  <div className="min-h-[2.5rem] mb-5">
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={roleIndex}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.24 }}
                        className="text-xl sm:text-2xl text-muted-foreground"
                      >
                        {t.greetingRoles[roleIndex]}
                      </motion.p>
                    </AnimatePresence>
                  </div>
                  <p className="max-w-3xl text-base sm:text-lg leading-relaxed text-muted-foreground">
                    {t.hero.summaryPrefix} <strong className="text-foreground">{t.hero.summaryStrong}</strong> {t.hero.summarySuffix}
                  </p>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-bold text-background transition hover:opacity-90">
                    {t.hero.primaryCta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href={`mailto:${t.email}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-bold text-foreground transition hover:border-primary/50 hover:bg-primary/5">
                    <Mail className="h-4 w-4" />
                    {t.hero.secondaryCta}
                  </a>
                </div>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="portfolio-card portfolio-card-hover rounded-2xl md:rounded-3xl p-6 min-h-[180px] flex"
              >
                <div className="flex flex-1 flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
                  <div className="max-w-xl">
                    <h2 className="font-display text-2xl font-bold text-foreground">{t.hero.connectTitle}</h2>
                    <p className="mt-2 text-base text-muted-foreground">{t.hero.connectText}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <a href="tel:+18059183669" aria-label="Call Yifan" className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-foreground/5 transition hover:border-primary/40 hover:text-primary">
                      <Phone className="h-6 w-6" />
                    </a>
                    <a href={`mailto:${t.email}`} aria-label={t.hero.emailCta} className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-foreground/5 transition hover:border-primary/40 hover:text-primary">
                      <Mail className="h-6 w-6" />
                    </a>
                    <a href="https://linkedin.com/in/xueyifan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-foreground/5 transition hover:border-primary/40 hover:text-primary">
                      <LinkedInLogo className="h-6 w-6" />
                    </a>
                    <button type="button" onClick={openChat} aria-label={t.hero.askCta} className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-foreground/5 transition hover:border-primary/40 hover:text-primary">
                      <MessageSquare className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </motion.section>
            </div>

            {/* Right column: location + tech arsenal */}
            <div className="flex flex-col gap-4">
              <motion.aside
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="portfolio-card portfolio-card-hover rounded-2xl md:rounded-3xl p-5 flex items-center gap-4 shrink-0"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-foreground/5">
                  <MapPin className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{t.hero.locationLabel}</p>
                  <p className="font-bold text-foreground">{t.hero.city}</p>
                  <p className="text-xs text-muted-foreground">{t.hero.workMode}</p>
                </div>
              </motion.aside>

              <motion.aside
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.14 }}
                className="portfolio-card rounded-2xl md:rounded-3xl p-6 flex-1 flex flex-col min-h-0"
              >
                <div className="mb-5 flex items-center gap-2 border-b border-border pb-4 shrink-0">
                  <Code className="h-5 w-5 text-primary" />
                  <h2 className="font-bold">{t.hero.techTitle}</h2>
                </div>
                <div className="overflow-y-auto flex-1 space-y-6 pr-1">
                  {t.techStack.categories.map((cat: TechCategory, i: number) => {
                    const Icon = techIcons[i] ?? Cpu
                    return (
                      <div key={cat.name}>
                        <div className="mb-2 flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                          <Icon className="h-4 w-4" />
                          {cat.name}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {cat.items.map((item: string) => (
                            <span key={item} className="skill-chip px-2.5 py-1 text-xs">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </motion.aside>
            </div>
          </div>

          {/* Nav Row */}
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            aria-label="Section navigation"
            className="mt-10 md:mt-12 flex flex-wrap justify-center gap-3"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? 'border-primary text-primary bg-primary/10 shadow-sm shadow-primary/20'
                    : 'border-border bg-muted/50 text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/8 hover:scale-105 hover:shadow-sm hover:shadow-primary/10'
                }`}
              >
                {item.label}
              </a>
            ))}
          </motion.nav>
        </div>
      </header>

      <StorySection t={t} />

      {/* Experience */}
      <section id="experience" className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-display text-2xl font-semibold mb-12 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              {t.experience.title}
            </h2>
          </AnimatedSection>

          <div className="space-y-12">
            {/* Sagent */}
            <AnimatedSection delay={0.1}>
              <div className="relative pl-8 md:pl-12 border-l-2 border-border pb-12 group">
                <div className="absolute left-[-9px] top-2 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold transition-colors duration-200 group-hover:text-primary">{t.experience.sagent.company}</h3>
                    <p className="text-primary font-medium">{t.experience.sagent.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-foreground">{t.experience.sagent.period}</p>
                    <p className="text-xs text-muted-foreground">{t.experience.sagent.location}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 transition-colors duration-200 group-hover:text-foreground">{t.experience.sagent.desc}</p>
                <ul className="space-y-2">
                  {t.experience.sagent.highlights.map((h: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground transition-colors duration-200 group-hover:text-foreground/80">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Walmart */}
            <AnimatedSection delay={0.2}>
              <div className="relative pl-8 md:pl-12 border-l-2 border-border pb-4 group">
                <div className="absolute left-[-9px] top-2 w-4 h-4 rounded-full bg-border ring-4 ring-background" />
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold transition-colors duration-200 group-hover:text-primary">{t.experience.walmart.company}</h3>
                    <p className="text-primary font-medium">{t.experience.walmart.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-foreground">{t.experience.walmart.period}</p>
                    <p className="text-xs text-muted-foreground">{t.experience.walmart.location}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 transition-colors duration-200 group-hover:text-foreground">{t.experience.walmart.desc}</p>
                <ul className="space-y-2">
                  {t.experience.walmart.highlights.map((h: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground transition-colors duration-200 group-hover:text-foreground/80">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Huitongduoyuan */}
            <AnimatedSection delay={0.3}>
              <div className="relative pl-8 md:pl-12 border-l-2 border-border pb-4 group">
                <div className="absolute left-[-9px] top-2 w-4 h-4 rounded-full bg-border ring-4 ring-background" />
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold transition-colors duration-200 group-hover:text-primary">{t.experience.huitong.company}</h3>
                    <p className="text-primary font-medium">{t.experience.huitong.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-foreground">{t.experience.huitong.period}</p>
                    <p className="text-xs text-muted-foreground">{t.experience.huitong.location}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 transition-colors duration-200 group-hover:text-foreground">{t.experience.huitong.desc}</p>
                <ul className="space-y-2">
                  {t.experience.huitong.highlights.map((h: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground transition-colors duration-200 group-hover:text-foreground/80">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-display text-2xl font-semibold mb-12 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <FolderGit2 className="w-5 h-5 text-primary" />
              </div>
              {t.projects.title}
            </h2>
          </AnimatedSection>

          <div className="space-y-12">
            {t.projects.items.map((project: ProjectItem, i: number) => (
              <AnimatedSection key={i} delay={0.1 * (i + 1)}>
                <div className="relative pl-8 md:pl-12 border-l-2 border-border pb-12 last:pb-0 group">
                  <div className="absolute left-[-9px] top-2 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground transition-colors duration-200 group-hover:text-primary">{project.title}</h3>
                      <p className="text-primary font-medium">{project.tech}</p>
                    </div>
                    <div className="text-right flex flex-col items-end gap-1">
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-sm font-bold text-primary hover:text-primary/80 flex items-center gap-1 transition-colors"
                      >
                        Live Demo <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 transition-colors duration-200 group-hover:text-foreground">{project.desc}</p>
                  <ul className="space-y-2">
                    {project.highlights.map((h: string, j: number) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground transition-colors duration-200 group-hover:text-foreground/80">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div className="mt-16 p-6 rounded-2xl bg-muted/30 border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 text-center group">
              <p className="text-sm text-muted-foreground italic group-hover:text-foreground/70 transition-colors duration-200">
                {lang === 'zh' 
                  ? '利用 AI 配对编程（Gemini CLI, Claude, Codex）加速脚手架搭建和调试，同时主导架构、安全和产品决策。' 
                  : 'Leveraged AI pair-programming (Gemini CLI, Claude, Codex) to accelerate scaffolding and debugging while owning architecture, security, and product decisions.'}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-display text-2xl font-semibold mb-12 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              {t.education.title}
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {t.education.items.map((edu: EducationItem, i: number) => (
              <AnimatedSection key={i} delay={0.1 * (i + 1)}>
                <div className="portfolio-card portfolio-card-hover p-6 rounded-2xl h-full group">
                  <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                    <GraduationCap className="w-24 h-24" />
                  </div>
                  <p className="text-sm font-mono text-primary font-bold mb-2">{edu.year}</p>
                  <h3 className="text-lg font-bold mb-1 transition-colors duration-200 group-hover:text-primary">{edu.title}</h3>
                  <p className="font-medium text-foreground/80 mb-2">{edu.org}</p>
                  <p className="text-sm text-muted-foreground transition-colors duration-200 group-hover:text-foreground/80">{edu.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack section is hidden for now; the hero Technical Arsenal carries this information. */}
      {/* <section id="tech" className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-display text-2xl font-semibold mb-12 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-primary" />
              </div>
              {t.techStack.title}
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.techStack.categories.map((cat: TechCategory, i: number) => (
              <AnimatedSection key={i} delay={0.1 * i}>
                <div className="p-6 rounded-2xl bg-card border border-border h-full">
                  <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">{cat.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item: string) => (
                      <span key={item} className="px-3 py-1 rounded-lg bg-muted text-sm font-medium text-muted-foreground">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer id="contact" className="py-16 md:py-24 border-t border-border">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-4">
              {lang === 'zh' ? '对合作感兴趣吗？' : 'Interested in working together?'}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              {lang === 'zh' ? '我一直对新的机会和有趣的项目持开放态度。' : "I'm always open to new opportunities and interesting projects."}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${t.email}`}
                className="group px-8 py-3 rounded-full bg-primary text-primary-foreground font-bold hover:brightness-110 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-200 flex items-center gap-2"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                {lang === 'zh' ? '发邮件给我' : 'Email Me'}
              </a>
              <a
                href="tel:+18059183669"
                className="group px-8 py-3 rounded-full border border-border font-bold hover:border-primary/50 hover:bg-primary/5 hover:text-primary hover:scale-105 hover:shadow-md transition-all duration-200 flex items-center gap-2"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                {lang === 'zh' ? '打电话' : 'Call Me'}
              </a>
              <a
                href="sms:+18059183669"
                className="group px-8 py-3 rounded-full border border-border font-bold hover:border-primary/50 hover:bg-primary/5 hover:text-primary hover:scale-105 hover:shadow-md transition-all duration-200 flex items-center gap-2"
              >
                <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                {lang === 'zh' ? '发短信' : 'Text Me'}
              </a>
              <a
                href="https://linkedin.com/in/xueyifan"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-3 rounded-full border border-border font-bold hover:border-primary/50 hover:bg-primary/5 hover:text-primary hover:scale-105 hover:shadow-md transition-all duration-200 flex items-center gap-2"
              >
                <LinkedInLogo className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" /> LinkedIn
              </a>
            </div>
          </AnimatedSection>
          <p className="mt-20 text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Yifan Xue. {lang === 'zh' ? '保留所有权利。' : 'All rights reserved.'}
          </p>
        </div>
      </footer>
    </main>
  )
}

export default App
