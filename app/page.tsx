'use client';

import { useState } from 'react';

const art = ['/assets/builder stack.jpg', '/assets/Frame 2095586451.png', '/assets/LUXXXXE (1).png'];

const services = [
  ['✦', 'RevUp Media Onboarding', 'A senior email team embeds into your business and starts executing immediately.'],
  ['◎', 'ESP Setup & Management', 'We fully manage your email infrastructure for clean data and reliable deliverability.'],
  ['✉', 'Lifecycle Flow Strategy', 'We build revenue-driving flows that convert subscribers into repeat customers.'],
  ['▣', 'Campaign Strategy & Execution', 'Strategic monthly campaign planning with converting copy, offers and email designs.'],
  ['◫', 'Signup & List Growth', 'We build subscriber-growth systems that capture more qualified customers.'],
  ['⚙', 'Smart Segmentation', 'The right message is delivered to the right subscriber at the right time.'],
  ['✎', 'Custom Copy + Creative', 'High-converting copy and on-brand email designs created around your brand identity.'],
  ['◌', 'Testing & Optimization', 'Continuous testing of subject lines, copy, design, offers and sending times.'],
  ['▥', 'Clear Performance Reporting', 'Clear reports showing what is working and where additional revenue can be generated.'],
];

const faqs = [
  ['When does it make sense to bring RevUp Media in?', 'When your business needs strategy, copywriting, design, automation and execution without hiring multiple separate specialists.'],
  ['What does your email and SMS service include?', 'Strategy, flows, campaigns, segmentation, copywriting, design, list growth, testing, reporting and deliverability.'],
  ['What do you actually measure?', 'We focus on email-attributed revenue, conversion rate, click rate, deliverability, subscriber growth and repeat customer rate.'],
  ['How do you approach deliverability?', 'Through list cleaning, engagement-based sending, authentication, segmentation and a healthy campaign schedule.'],
  ['Which platforms do you work with?', 'Klaviyo, Omnisend and Mailchimp.'],
];

const Arrow = () => <span aria-hidden>→</span>;
const Button = ({ href, children, dark = false }: { href: string; children: React.ReactNode; dark?: boolean }) => <a href={href} className={`inline-flex min-h-13 items-center justify-center gap-4 rounded-full border px-6 py-3.5 text-sm font-extrabold transition hover:-translate-y-0.5 ${dark ? 'border-white/20 bg-white/5 text-white hover:border-lime' : 'border-lime bg-lime text-[#081007] hover:bg-[#b7ff48]'}`}>{children}<Arrow /></a>;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <>
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#070a08]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-[92%] max-w-306 items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 font-display text-lg font-bold"><span className="grid h-9 w-9 place-items-center rounded-full bg-lime text-2xl text-[#071008]">↗</span>RevUp Media</a>
        <nav className="hidden gap-8 text-sm text-[#d9e8d7] md:flex"><a href="#home">Home</a><a href="#case-studies">Case Studies</a><a href="#about">About</a></nav>
        <div className="hidden md:block"><Button href="#audit">Get Free Audit</Button></div>
        <button className="text-2xl md:hidden" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '×' : '☰'}</button>
      </div>
      {menuOpen && <nav className="border-t border-white/10 bg-[#0d120f] px-8 py-6 md:hidden"><div className="mx-auto flex max-w-306 flex-col gap-4 text-sm"><a onClick={() => setMenuOpen(false)} href="#home">Home</a><a onClick={() => setMenuOpen(false)} href="#case-studies">Case Studies</a><a onClick={() => setMenuOpen(false)} href="#about">About</a><a onClick={() => setMenuOpen(false)} href="#audit" className="text-lime">Get Free Audit</a></div></nav>}
    </header>

    <main>
      <section id="home" className="relative isolate flex min-h-[860px] items-center overflow-hidden pt-20">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_25%,rgba(202,255,112,.14),transparent_30%),linear-gradient(#070a08cc,#070a08)]" />
        <div className="absolute inset-x-0 top-0 -z-30 flex h-[650px] justify-center gap-3 opacity-30 blur-[1px] sm:gap-6">
          {art.map((src, i) => <div key={src} style={{ marginTop: `${i * 32}px` }} className="w-36 overflow-hidden rounded-xl sm:w-52"><img src={src} alt="Email design example" className="h-auto w-full" /></div>)}
        </div>
        <div className="mx-auto w-[92%] max-w-306 pt-44 text-center">
          <p className="mx-auto mb-6 inline-flex rounded-full border border-lime/20 bg-lime/5 px-4 py-2 text-[10px] font-extrabold tracking-[.15em] text-[#d9e8d7]">RETENTION THAT KEEPS REVENUE MOVING</p>
          <h1 className="font-display text-5xl leading-[.95] font-bold tracking-[-.06em] sm:text-7xl lg:text-[88px]"><span className="text-lime">Turn More Traffic Into</span><br />Repeat Revenue</h1>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-[#a9b8aa]"><strong className="text-white">Email and SMS built to convert, retain and reactivate</strong> for ecommerce brands that want sustainable growth — <strong className="text-white">without leaning harder on paid acquisition.</strong></p>
          <div className="mt-8 flex flex-wrap justify-center gap-3"><Button href="#audit">Get a Free Retention Audit</Button><Button href="#case-studies" dark>See Our Work</Button></div>
          <div className="mt-12 flex justify-center gap-6 text-sm font-bold text-white/50"><span>klaviyo</span><span>◧ omnisend</span><span>♛ mailchimp</span></div>
          <div className="mx-auto mt-10 max-w-md rounded-2xl border border-lime/15 bg-[#111813]/85 p-5 text-left shadow-2xl"><div className="mb-3 flex items-center justify-between"><span className="text-lg">👨🏻 👩🏽 👨🏽 👩🏼</span><span className="text-sm tracking-widest text-lime">★★★★★</span></div><p className="text-sm text-[#a9b8aa]">Focused partnerships. <strong className="text-white">Limited monthly onboarding</strong><br />so every account gets hands-on attention.</p></div>
        </div>
      </section>

      <section className="px-4 py-24 text-center"><div className="mx-auto max-w-260"><Eyebrow>BUILT FOR SERIOUS ECOMMERCE TEAMS</Eyebrow><Title><span>Your Retention Engine</span></Title><p className="text-lg text-white">Strategy, creative and execution — under one roof.</p><p className="mt-2 text-[#a9b8aa]">RevUp Media plans, builds, launches and optimizes the full lifecycle journey.</p><div className="mt-11 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{[['Lifecycle Email', 'High-intent flows and campaigns designed around customer behavior.'], ['SMS + List Growth', 'Capture more qualified subscribers and reach them at the right moments.'], ['Done End-to-End', 'From strategy and copy to design, implementation and optimization.'], ['Flexible Partnership', 'Clear scope, transparent communication and no unnecessary complexity.']].map(([name, text]) => <article key={name} className="rounded-2xl border border-white/8 bg-[#111813] p-6 text-left"><h3 className="font-display text-xl font-bold">{name}</h3><p className="mt-3 text-sm leading-6 text-[#a9b8aa]">{text}</p></article>)}</div></div></section>

      <section className="px-4 py-24"><div className="mx-auto max-w-306"><Eyebrow>WHAT WE HANDLE</Eyebrow><Title>What&apos;s <span>Included</span> In Every Plan?</Title><p className="max-w-2xl text-[#a9b8aa]">Unlock the full potential of your ecommerce business with data-driven marketing strategies designed to increase conversions, revenue and customer loyalty.</p><div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{services.map(([icon, title, copy]) => <article key={title} className="rounded-2xl border border-white/8 bg-[#111813] p-7"><span className="text-2xl text-lime">{icon}</span><h3 className="mt-5 font-display text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-[#a9b8aa]">{copy}</p></article>)}</div></div></section>

      <section id="case-studies" className="overflow-hidden px-4 py-24 text-center"><Eyebrow>OUR EMAIL CREATIVE</Eyebrow><Title>Design Optimized For <span>Revenue</span></Title><div className="mx-auto mt-12 flex max-w-5xl items-center justify-center gap-3 sm:gap-7">{art.map((src, i) => <div key={src} className={`w-[29%] overflow-hidden rounded-xl border border-white/10 shadow-2xl ${i === 0 ? 'rotate-[-7deg]' : i === 2 ? 'rotate-[7deg]' : '-mt-8 z-10'}`}><img src={src} alt={`RevUp campaign design ${i + 1}`} /></div>)}</div><p className="mx-auto mt-10 max-w-xl text-[#a9b8aa]">We adapt high-performing templates from world-class brands and refine them to match your brand voice, audience and goals.</p><div className="mt-8"><Button href="#audit">Book Your Free Audit</Button></div></section>

      <section id="audit" className="px-4 py-24 text-center"><Eyebrow>START WITH CLARITY</Eyebrow><Title><span>Free Retention Audit</span><br />A Simple 4-Step Process</Title><p className="mx-auto max-w-xl text-[#a9b8aa]">Our team starts working on your audit immediately. The initial audit will be delivered within three business days.</p><div className="mx-auto mt-12 grid max-w-306 gap-4 sm:grid-cols-2 lg:grid-cols-4">{[['Quick Discovery Call', 'Join a short discovery call so we can understand your business and goals.'], ['Share Read-Only Access', 'Read-only access is enough to review your current email marketing setup.'], ['We Audit The Account', 'We review your complete email and customer retention channel.'], ['Get Your Action Plan', 'Receive your action plan and the most important fixes required to grow.']].map(([title, text], i) => <article key={title} className="rounded-2xl border border-lime/15 bg-lime/5 p-6 text-left"><b className="text-xs tracking-widest text-lime">STEP {i + 1}</b><h3 className="mt-4 font-display text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-[#a9b8aa]">{text}</p></article>)}</div><div className="mt-9"><Button href="#contact">Book Your Free Audit</Button></div></section>

      <section id="about" className="relative overflow-hidden px-4 py-24"><div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(202,255,112,.09),transparent_35%)]" /><div className="mx-auto max-w-260"><div className="text-center"><Eyebrow>COMMON QUESTIONS</Eyebrow><Title>Before We Work Together</Title><p className="text-[#a9b8aa]">A few things ecommerce teams usually ask us.</p></div><div className="mt-12 space-y-3">{faqs.map(([question, answer]) => <details key={question} className="group rounded-xl border border-white/10 bg-[#111813] px-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-lg font-bold"><span>{question}</span><span className="text-2xl font-sans font-normal text-lime transition">+</span></summary><p className="max-w-3xl pb-6 text-sm leading-6 text-[#a9b8aa]">{answer}</p></details>)}</div></div></section>

      <section className="px-4 py-24"><div className="mx-auto grid max-w-306 items-center gap-12 rounded-3xl border border-white/8 bg-[#0d120f] p-8 md:grid-cols-2 md:p-14"><div><p className="text-sm tracking-widest text-lime">★★★★★ <span className="ml-2 text-white/50">Limited monthly onboarding</span></p><h2 className="mt-5 font-display text-5xl leading-none font-bold tracking-[-.06em]">Turn Retention Into<br /><span className="text-lime">A Revenue Engine</span></h2><p className="mt-6 max-w-md text-[#a9b8aa]">Get an actionable roadmap to increase revenue without depending on more advertisements or constant discounts.</p><div className="mt-8"><Button href="#contact">Get a Free Retention Audit</Button></div></div><div className="relative h-100 overflow-hidden rounded-2xl bg-[#070a08] p-3"><div className="grid grid-cols-2 gap-3"><div className="email-flow-up space-y-3">{[...art, ...art].map((src, i) => <img key={i} src={src} alt="Email creative" className="rounded-lg" />)}</div><div className="email-flow-down space-y-3">{[...art, ...art].reverse().map((src, i) => <img key={i} src={src} alt="Email creative" className="rounded-lg" />)}</div></div></div></div></section>
    </main>
    <footer id="contact" className="border-t border-white/8 px-4 py-12"><div className="mx-auto grid max-w-306 gap-10 sm:grid-cols-3"><div><a href="#home" className="flex items-center gap-2 font-display text-lg font-bold"><span className="grid h-9 w-9 place-items-center rounded-full bg-lime text-xl text-[#071008]">↗</span>RevUp Media</a><p className="mt-4 max-w-xs text-sm text-[#a9b8aa]">Ecommerce retention systems that turn more of your traffic into repeat revenue.</p></div><div><h4 className="font-display font-bold">Pages</h4><div className="mt-4 flex flex-col gap-2 text-sm text-[#a9b8aa]"><a href="#home">Home</a><a href="#about">About</a><a href="#case-studies">Case Studies</a></div></div><div><h4 className="font-display font-bold">Contact</h4><div className="mt-4 flex flex-col gap-2 text-sm text-[#a9b8aa]"><a href="mailto:hello@revupmedia.co">hello@revupmedia.co</a><a href="#audit">Contact Form</a></div></div></div><div className="mx-auto mt-12 w-full max-w-306 border-t border-white/8 pt-6 text-xs text-white/40">© 2026 RevUp Media. All rights reserved.</div></footer>
  </>;
}

function Eyebrow({ children }: { children: React.ReactNode }) { return <p className="mb-5 inline-flex rounded-full border border-lime/20 bg-lime/5 px-3 py-1.5 text-[10px] font-extrabold tracking-[.15em] text-[#d9e8d7]">{children}</p>; }
function Title({ children }: { children: React.ReactNode }) { return <h2 className="font-display text-4xl leading-[.98] font-bold tracking-[-.055em] sm:text-6xl [&_span]:text-lime">{children}</h2>; }
