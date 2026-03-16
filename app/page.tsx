"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import SpeciesCarousel from "@/components/species-carousel"

export default function NeichLandingPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [timeLeft, setTimeLeft] = useState(() => {
    const targetDate = new Date("2026-05-01T00:00:00").getTime()
    const now = new Date().getTime()
    const difference = targetDate - now
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      }
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  })
  const [waitlistEmail, setWaitlistEmail] = useState("")
  const [waitlistStatus, setWaitlistStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [waitlistMessage, setWaitlistMessage] = useState("")

  const phrases = ["intelligent assets", "secure by design", "possession not permission", "a new neich of value"]

  useEffect(() => {
    const targetDate = new Date("2026-05-01T00:00:00").getTime()

    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % phrases.length)
      }, 5000)
      return () => clearInterval(interval)
    }, 100)

    return () => clearTimeout(timer)
  }, [phrases.length])

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!waitlistEmail) return

    setWaitlistStatus("loading")

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: waitlistEmail }),
      })

      if (response.ok) {
        setWaitlistStatus("success")
        setWaitlistMessage("You're on the list! We'll be in touch soon.")
        setWaitlistEmail("")
      } else {
        const data = await response.json()
        setWaitlistStatus("error")
        setWaitlistMessage(data.error || "Something went wrong. Please try again.")
      }
    } catch {
      setWaitlistStatus("error")
      setWaitlistMessage("Something went wrong. Please try again.")
    }
  }

  return (
    <>
      <Navigation />

      {/* Decorative borders inspired by the template */}
      <div className="fixed top-0 left-0 right-0 h-[20px] bg-black border-b border-white/20 z-50" />
      <div className="fixed bottom-0 left-0 right-0 h-[20px] bg-black border-t border-white/20 z-50" />
      <div className="fixed top-0 bottom-0 left-0 w-[20px] bg-black border-r border-white/20 z-50" />
      <div className="fixed top-0 bottom-0 right-0 w-[20px] bg-black border-l border-white/20 z-50" />

      {/* Vertical side buttons matching template */}
      <div className="fixed right-[20px] top-1/2 -translate-y-1/2 z-40">
        <Link
          href="#join"
          className="[writing-mode:vertical-lr] rotate-180 text-white/60 text-xs tracking-[0.3em] uppercase hover:text-white transition-colors py-6 px-4 border border-white/20 bg-black/50 backdrop-blur-sm"
        >
          Request an Invite
        </Link>
      </div>

      <main className="bg-black min-h-screen pt-[20px] pb-[20px] pl-[20px] pr-[20px]">
        {/* Hero Section - Brand Image */}
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
          {/* Brand Image Background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <img
              src="/images/design-mode/BrandImage.png.jpeg"
              alt="Neich Brand"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Time Slider Content */}
          <div className="relative z-10 flex flex-col items-center justify-center gap-8">
            <div className="h-12 flex items-center">
              <h3 className="text-white/70 text-lg md:text-xl tracking-[0.3em] uppercase font-light text-center">
                Your first intelligent asset
              </h3>
            </div>

            {/* Main heading - Neich™ */}
            <div className="time-heading">
              <h1 className="text-[100px] md:text-[140px] lg:text-[180px] text-white uppercase leading-none font-normal tracking-[0.5em]">
                neich
              </h1>
            </div>

            <div className="h-12 relative w-full max-w-3xl flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`phrase-${currentIndex}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.43, 0.13, 0.23, 0.96],
                  }}
                  className="absolute text-white/60 text-sm md:text-base tracking-[0.5em] uppercase font-light whitespace-nowrap"
                >
                  {phrases[currentIndex]}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex flex-col items-center gap-4">
              <p className="text-white/40 text-xs tracking-[0.3em] uppercase font-light">Launch May 1st, 2026</p>
              <div className="flex gap-6 md:gap-10">
                <div className="flex flex-col items-center">
                  <span className="text-white text-3xl md:text-5xl font-light tracking-wider">
                    {String(timeLeft.days).padStart(2, "0")}
                  </span>
                  <span className="text-white/40 text-[10px] tracking-[0.2em] uppercase mt-1">Days</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-white text-3xl md:text-5xl font-light tracking-wider">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </span>
                  <span className="text-white/40 text-[10px] tracking-[0.2em] uppercase mt-1">Hours</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-white text-3xl md:text-5xl font-light tracking-wider">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </span>
                  <span className="text-white/40 text-[10px] tracking-[0.2em] uppercase mt-1">Min</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-white text-3xl md:text-5xl font-light tracking-wider">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </span>
                  <span className="text-white/40 text-[10px] tracking-[0.2em] uppercase mt-1">Sec</span>
                </div>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
              <div className="flex flex-col items-center gap-2 text-white/30 text-[10px] tracking-[0.3em] uppercase animate-bounce">
                <span>Scroll</span>
                <div className="w-[1px] h-12 bg-white/30" />
              </div>
            </div>
          </div>
        </section>

        {/* Join/Waitlist Section */}
        <section id="join" className="relative w-full bg-black border-t border-white/5 py-24">
          <div className="max-w-3xl mx-auto px-8 text-center">
            <h5 className="text-white/50 text-xs tracking-[0.3em] uppercase mb-6 font-light">EARLY ACCESS</h5>
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight leading-tight mb-6">
              Join the Waitlist
            </h2>
            <p className="text-lg text-white/60 leading-relaxed font-light mb-12 max-w-xl mx-auto">
              Be among the first to experience Neich. Request early access and we'll notify you when we launch.
            </p>

            <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={waitlistEmail}
                onChange={(e) => setWaitlistEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={waitlistStatus === "loading"}
                className="flex-1 bg-transparent border border-white/20 text-white px-6 py-4 text-sm tracking-wider placeholder:text-white/30 focus:outline-none focus:border-white/50 transition-colors disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={waitlistStatus === "loading"}
                className="bg-white text-black px-8 py-4 text-xs tracking-[0.2em] uppercase font-medium hover:bg-white/90 transition-colors disabled:opacity-50"
              >
                {waitlistStatus === "loading" ? "Joining..." : "Join Waitlist"}
              </button>
            </form>

            {waitlistStatus === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 text-green-400 text-sm tracking-wider"
              >
                {waitlistMessage}
              </motion.p>
            )}

            {waitlistStatus === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 text-red-400 text-sm tracking-wider"
              >
                {waitlistMessage}
              </motion.p>
            )}

            <p className="mt-8 text-white/30 text-xs tracking-wider">No spam, ever. We respect your privacy.</p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="relative w-full bg-black border-t border-white/5 py-24">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h5 className="text-white/50 text-xs tracking-[0.3em] uppercase mb-6 font-light">WHAT IS NEICH</h5>
                <h2 className="text-5xl md:text-6xl font-light text-white tracking-tight leading-tight">
                  A New Neich of
                  <br />
                  Digital Assets
                </h2>
              </div>
              <div className="space-y-6">
                <div className="h-[1px] bg-white/10 mb-8" />
                <p className="text-lg text-white/60 leading-relaxed font-light">
                  Neich is a micro-commodity created on the Onli protocol — a sovereign digital asset whose ownership
                  is verified through authenticated state transitions rather than blockchain ledgers or consensus
                  networks. This is different from the ground up.
                </p>
                <p className="text-lg text-white/60 leading-relaxed font-light">
                  A new Neich in the evolution of digital assets. Neich is not a token, not a key, and not an entry
                  in a public ledger. It is a singular, self-contained asset you own directly — alive in structure,
                  secure by design, and free from the constraints of chains, miners, or confirmations.
                </p>
                <p className="text-lg text-white/60 leading-relaxed font-light">
                  Neich introduces the world's first intelligent digital asset — the first of many to come. Assets
                  that are truly sovereign the moment you hold them. Introducing the first publicly available Neich of
                  a digital, possession-based economy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Get It Section */}
        <section
          id="how-it-works"
          className="relative min-h-screen w-full flex items-center justify-center bg-black border-t border-white/5 py-24"
          style={{
            backgroundImage: "url(/images/a-trading-interface-screen-with-the-header-text-s-1762472285021.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/85" />

          <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 w-full">
            <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
              <div>
                <h5 className="text-white/50 text-xs tracking-[0.3em] uppercase mb-6 font-light">
                  What we can offer you
                </h5>
                <h2 className="text-5xl md:text-6xl font-light text-white tracking-tight">How to Get It</h2>
              </div>
              <div className="flex items-end justify-start lg:justify-end">
                <div className="text-white/60 text-sm">
                  <Link href="https://www.onli.you" className="hover:text-white transition-colors">
                    Get started today &nbsp; →→
                  </Link>
                </div>
              </div>
            </div>

            <div className="h-[1px] bg-white/10 mb-16" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 border-b border-white/10 md:border-r bg-black/40 backdrop-blur-sm">
                <h6 className="text-white text-lg tracking-wide mb-4">
                  <span className="text-white/50">Step 1:</span> Request an Invitation
                </h6>
                <p className="text-white/60 leading-relaxed font-light">
                  Neich.Market is an invitation-only marketplace. To participate, you'll complete standard KYC/AML
                  verification, granting access to the entire Onli ecosystem. Request an invitation at Neich.Market,
                  or if you're a developer from inside your Onli.Cloud app. Begin your evolution. Join Neich.
                </p>
              </div>

              <div className="p-8 md:p-12 border-b border-white/10 md:border-r bg-black/40 backdrop-blur-sm">
                <h6 className="text-white text-lg tracking-wide mb-4">
                  <span className="text-white/50">Step 2:</span> Get Onli.You
                </h6>
                <p className="text-white/60 leading-relaxed font-light">
                  Download Onli.You, your vault for true digital possession. Not a wallet — a possession system with no
                  blockchain, no ledger, and no miners. Once registered, your sovereign Onli identity works across every
                  appliance. One profile to rule them all.
                </p>
              </div>

              <div className="p-8 md:p-12 md:border-r border-white/10 bg-black/40 backdrop-blur-sm">
                <h6 className="text-white text-lg tracking-wide mb-4">
                  <span className="text-white/50">Step 3:</span> Join Neich.Market
                </h6>
                <p className="text-white/60 leading-relaxed font-light">
                  Acquire Neich, your first micro-commodity, directly through Neich.Market. No complex interface —
                  simply speak or type your intent: "Buy Neich," "Send Neich to Paul," "Sell Neich," "Use Neich
                  to pay." English is your trading language. Finance without friction. Neich is an intelligent asset,
                  accessible through any AI agent connected via the SPEC MCP. Trade in a new Neich of economy.
                </p>
              </div>

              <div className="p-8 md:p-12 bg-black/40 backdrop-blur-sm">
                <h6 className="text-white text-lg tracking-wide mb-4">
                  <span className="text-white/50">Step 4:</span> Safe and Secure
                </h6>
                <p className="text-white/60 leading-relaxed font-light">
                  Neich is always priced at a fixed $1. The proceeds from the first issuance of any Neich flow into
                  the transparent Assurance Account — an automated reserve that guarantees liquidity for all. Beyond
                  issuance, Neich trades freely in a peer-to-peer market, with value moving directly between owners.
                  Liquidity at any scale, whenever you need it. Meet the new Neich of stable coins.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Finance Without Friction Section */}
        <section
          id="finance-without-friction"
          className="relative min-h-screen w-full flex items-center justify-center bg-black border-t border-white/5 py-24"
          style={{
            backgroundImage:
              "url(/images/enhanced-remove-watermark-star-in-bottom-right-corner-261e0ecf-b760-4c69-b2c8-23feda2203cc.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black/70" />

          <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 w-full">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div>
                  <h5 className="text-white/50 text-xs tracking-[0.3em] uppercase mb-6 font-light">
                    Request an Invite
                  </h5>
                  <h2 className="text-5xl md:text-6xl font-light text-white tracking-tight mb-8">
                    Finance Without Friction
                  </h2>
                </div>

                <div className="h-[1px] bg-white/10" />

                <div className="space-y-6">
                  <p className="text-lg text-white/60 leading-relaxed font-light">
                    Managing your intelligent assets should be as simple as having a conversation. With Onli.AI, finance
                    becomes intuitive — just chat naturally to buy, sell, or transfer your digital possessions.
                  </p>
                  <p className="text-lg text-white/60 leading-relaxed font-light">
                    No complex interfaces. No hidden fees. No transaction costs. Just pure, frictionless value exchange
                    powered by conversation. Your words become actions, instantly.
                  </p>
                </div>

                <div className="space-y-4 pt-4">
                  <h4 className="text-white/50 text-xs tracking-wider uppercase mb-2">Key Benefits</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-1 h-1 bg-white/40 rounded-full mt-2.5" />
                      <p className="text-white/60 text-sm">Zero transaction fees — ever</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1 h-1 bg-white/40 rounded-full mt-2.5" />
                      <p className="text-white/60 text-sm">Natural language commands in any chat</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1 h-1 bg-white/40 rounded-full mt-2.5" />
                      <p className="text-white/60 text-sm">Instant settlement with no intermediaries</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1 h-1 bg-white/40 rounded-full mt-2.5" />
                      <p className="text-white/60 text-sm">AI-powered intelligent asset management</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <Link
                    href="/contact"
                    className="px-8 py-3 bg-white text-black text-sm tracking-wider uppercase font-light hover:bg-white/90 transition-colors inline-block"
                  >
                    Experience It Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Download OnliYou Section */}
        <section
          id="download"
          className="relative min-h-screen w-full flex items-center justify-end bg-black border-t border-white/5 py-24"
          style={{
            backgroundImage: "url(/images/iphone-2017-20pro-20mockup-2002.jpeg)",
            backgroundSize: "60%",
            backgroundPosition: "left center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full flex justify-end">
            <div className="w-full lg:w-1/2 space-y-8">
              <div>
                <h5 className="text-white/50 text-xs tracking-[0.3em] uppercase mb-6 font-light">Get Started Today</h5>
                <h2 className="text-5xl md:text-6xl font-light text-white tracking-tight leading-tight">
                  Download
                  <br />
                  OnliYou
                </h2>
              </div>

              <div className="h-[1px] bg-white/10" />

              <div className="space-y-6">
                <p className="text-lg text-white/60 leading-relaxed font-light">
                  Your personal vault for Neich and all intelligent assets on the Onli network. Experience true
                  digital possession with the only app designed for actual ownership.
                </p>
                <p className="text-lg text-white/60 leading-relaxed font-light">
                  Download OnliYou today and join the revolution in digital value. No blockchain. No complexity. Just
                  pure possession.
                </p>
              </div>

              <div className="space-y-4 pt-4">
                <h4 className="text-white/50 text-xs tracking-wider uppercase mb-2">Available On</h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.onli.you"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-transparent text-white text-sm tracking-wider uppercase font-light border border-white hover:bg-white hover:text-black transition-colors"
                  >
                    iOS - Available Now
                  </a>
                  <button
                    disabled
                    className="px-6 py-3 bg-white/10 text-white/40 text-sm tracking-wider uppercase font-light cursor-not-allowed border border-white/20"
                  >
                    Android - Coming Soon
                  </button>
                </div>
              </div>

              <div className="pt-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-white/40 rounded-full mt-2.5" />
                    <p className="text-white/60 text-sm">Secure possession vault</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-white/40 rounded-full mt-2.5" />
                    <p className="text-white/60 text-sm">Real-time asset verification</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-white/40 rounded-full mt-2.5" />
                    <p className="text-white/60 text-sm">AI-powered conversational management</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-white/40 rounded-full mt-2.5" />
                    <p className="text-white/60 text-sm">Zero fees, complete privacy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Shots Section */}
        <section className="relative min-h-screen w-full flex items-center justify-center bg-black border-t border-white/5 py-24">
          {/* Brand Image Background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <img
              src="/images/design-mode/BrandImage.png.jpeg"
              alt="Neich Brand"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Time Slider Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 w-full">
            <div className="mb-16 text-center">
              <h5 className="text-white/50 text-xs tracking-[0.3em] uppercase mb-6 font-light">Experience</h5>
              <h2 className="font-light text-white tracking-tight text-3xl">neich.market</h2>
              <p className="text-white/60 text-lg mt-6 max-w-2xl mx-auto">
                A seamless trading experience designed for simplicity and transparency
              </p>
            </div>

            <div className="h-[1px] bg-white/10 mb-16" />

            <SpeciesCarousel />

            <div className="mt-16 text-center">
              <button
                disabled
                className="px-8 py-3 bg-white/20 text-white/40 text-sm tracking-wider uppercase font-light cursor-not-allowed inline-block"
              >
                Coming Soon
              </button>
            </div>
          </div>
        </section>



        {/* Contact Section */}
        <section
          id="contact"
          className="relative min-h-screen w-full flex items-center justify-center bg-black border-t border-white/5 py-24"
        >
          <div className="max-w-6xl mx-auto px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h5 className="text-white/50 text-xs tracking-[0.3em] uppercase mb-6 font-light">
                  NEICH.MARKET AI TOOLS
                </h5>
                <h2 className="text-5xl md:text-6xl font-light text-white tracking-tight">
                  Let's Build
                  <br />
                  Together
                </h2>
              </div>
              <div className="space-y-8">
                <div className="h-[1px] bg-white/10 mb-8" />
                <p className="text-lg text-white/60 leading-relaxed font-light">
                  Have questions or want to collaborate? We'd love to hear from you.
                </p>



                <div className="space-y-6">
                  <div>
                    <h4 className="text-white/50 text-xs tracking-wider uppercase mb-2">Email</h4>
                    <a
                      href="mailto:support@neich.market"
                      className="text-white/60 text-sm hover:text-white transition-colors"
                    >
                      support@neich.market
                    </a>
                  </div>
                </div>
                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="px-8 py-3 bg-white text-black text-sm tracking-wider uppercase font-light hover:bg-white/90 transition-colors inline-block"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
