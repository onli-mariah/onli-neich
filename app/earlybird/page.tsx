"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function EarlybirdLanding() {
  const [acknowledged, setAcknowledged] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const router = useRouter()

  const handleEnter = () => {
    if (acknowledged) {
      setShowModal(true)
    }
  }

  const handleModalConfirm = () => {
    setShowModal(false)
    router.push("/earlybird/offering")
  }

  return (
    <div className="min-h-screen bg-[#f3f1ec] text-neutral-900 flex flex-col">
      {/* Top Navigation */}
      <header className="flex items-center justify-between px-10 py-8 text-xs tracking-widest uppercase">
        <div className="font-medium">earlybird/</div>
        <div className="flex items-center gap-10">
          <Link href="/" className="hover:opacity-70">
            species site
          </Link>
          <Link href="/#contact" className="hover:opacity-70">
            contact
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col justify-center">
        <div className="w-full px-10">
          {/* Headline */}
          <div className="mb-24">
            <h1 className="text-[12vw] leading-none font-light tracking-tight">unlock</h1>
            {/* full-width rule */}
            <div className="h-px bg-neutral-400 mt-6 -mx-10" />
            {/* baseline subline, sitting just below the rule */}
            <p className="mt-5 text-xl font-light">a new species of value.</p>
          </div>

          {/* Subtext Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-xs text-neutral-700 mt-28">
            <div className="leading-relaxed">
              This is not an offer to sell securities. <br />
              This is an offering of a forward contract for a digital commodity.
              <br />
              (PRELAUNCH)
            </div>

            <div />

            <div className="leading-relaxed text-right">
              this is an offer for the presale of
              <br />
              species is a micro-commodity on the onli protocol
              <br />
              via a forward contract to deliver a fixed quantity of a commodity
              <br />
              at a discounted price
              <br />
              at a future delivery date
            </div>
          </div>
        </div>
      </main>

      {/* Access Acknowledgement */}
      <footer className="px-10 pb-10">
        <div className="max-w-md md:max-w-lg mx-auto flex flex-col items-center gap-6 text-sm">
          <label className="flex items-start gap-3 text-neutral-800 cursor-pointer max-w-md">
            <input
              type="checkbox"
              checked={acknowledged}
              onChange={(e) => setAcknowledged(e.target.checked)}
              className="mt-1 h-4 w-4 accent-neutral-900"
            />
            <span className="leading-relaxed">
              I acknowledge that I understand this is an offering of a forward contract for a digital commodity, not a
              security. I declare I am an accredited investor and that this is for accredited investors only. I agree to
              these terms of access.
            </span>
          </label>

          <button
            onClick={handleEnter}
            disabled={!acknowledged}
            className={`mt-2 rounded-full px-8 py-3 text-sm tracking-wide transition-all ${
              acknowledged
                ? "bg-neutral-900 text-neutral-100 hover:opacity-90"
                : "bg-neutral-300 text-neutral-500 cursor-not-allowed"
            }`}
          >
            Enter Site
          </button>
        </div>
      </footer>

      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
          <div className="bg-[#f3f1ec] rounded-lg max-w-2xl w-full p-8 shadow-2xl">
            <h2 className="text-2xl font-light tracking-tight text-black mb-6">Transparency Acknowledgement</h2>

            <div className="text-black space-y-4 text-sm leading-relaxed mb-8">
              <p>
                Access to the Earlybird program is limited to individuals who meet accredited investor eligibility
                criteria, solely as an access-control measure and not because the offering constitutes a security or
                investment product.
              </p>

              <p className="font-medium">You acknowledge that:</p>

              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>You are participating in a commercial transaction involving a fixed-value digital commodity.</li>
                <li>No equity, ownership, profit participation, or investment rights are being offered.</li>
                <li>The asset is intended for use and service benefits, not financial return.</li>
                <li>Liquidity is not guaranteed.</li>
              </ul>

              <p>
                By proceeding, you confirm that you understand the nature of the offering and that your eligibility
                status is used only to determine access to a discount program, not to characterize the asset as an
                investment.
              </p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 rounded-full px-6 py-3 text-sm tracking-wide bg-neutral-200 text-black hover:bg-neutral-300 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleModalConfirm}
                className="flex-1 rounded-full px-6 py-3 text-sm tracking-wide bg-neutral-900 text-neutral-100 hover:opacity-90 transition-all"
              >
                I Understand, Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
