"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function PurchasePage() {
  const searchParams = useSearchParams()
  const [quantity, setQuantity] = useState<string>("")

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    investorStatus: "",
  })

  const [agreed, setAgreed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const qty = searchParams.get("quantity")
    if (qty) setQuantity(qty)
  }, [searchParams])

  const qty = Number.parseFloat(quantity) || 0
  const contractPrice = qty * 0.4
  const adminFee = contractPrice * 0.03
  const totalPrice = contractPrice + adminFee
  const marketValue = qty * 1.0
  const totalSavings = marketValue - totalPrice

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          quantity: qty,
          contractPrice,
          adminFee,
          totalPrice,
          marketValue,
          totalSavings,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setShowSuccessModal(true)
      } else {
        setError(result.message || "Failed to submit request. Please try again.")
      }
    } catch (err) {
      console.error("Submit error:", err)
      setError("Failed to submit request. Please try again or email support@species.market directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-[#F5F5F0] border-4 border-black p-12 max-w-lg mx-4 text-center space-y-6">
            <div className="w-16 h-16 mx-auto border-4 border-black rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-serif text-black">Success!</h2>
            <p className="text-black leading-relaxed">
              Your forward contract request has been submitted successfully. Our team will review your request and
              contact you shortly.
            </p>
            <p className="text-sm text-black">
              A confirmation has been sent to <span className="font-bold">{formData.email}</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/earlybird"
                className="px-8 py-3 bg-black text-[#F5F5F0] text-sm tracking-widest uppercase hover:bg-gray-800 transition-all"
              >
                Return Home
              </Link>
              <button
                onClick={() => {
                  setShowSuccessModal(false)
                  setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                    company: "",
                    investorStatus: "",
                  })
                  setQuantity("")
                  setAgreed(false)
                }}
                className="px-8 py-3 border-2 border-black text-black text-sm tracking-widest uppercase hover:bg-black hover:text-[#F5F5F0] transition-all"
              >
                Submit Another
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="border-b-2 border-black py-6 px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/earlybird/calculator" className="text-sm tracking-widest uppercase text-black hover:underline">
            ← Calculator
          </Link>
          <h1 className="text-xl font-serif tracking-wide text-black">FORWARD CONTRACT REQUEST</h1>
          <div className="w-20" />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-8 py-16">
        {/* Hero */}
        <div className="mb-16">
          <h1 className="text-[12vw] leading-none font-light tracking-tight text-black">unlock</h1>
          <div className="h-px bg-neutral-400 mt-6 -mx-10" />
          <p className="mt-5 text-xl font-light text-black">the Unexpected.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Error Message */}
          {error && <div className="bg-red-50 border-2 border-red-500 p-4 text-red-700">{error}</div>}

          <section className="bg-white border-4 border-black p-8 space-y-6">
            <h3 className="text-2xl font-serif border-b-2 border-black pb-2 text-black">Order Summary</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm uppercase tracking-wide text-black mb-2">Quantity of Specie</label>
                <input
                  type="text"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value.replace(/[^0-9]/g, ""))}
                  className="w-full text-4xl font-mono text-center border-b-2 border-black bg-transparent focus:outline-none py-3 text-black"
                  placeholder="10000"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6 border-t-2 border-black/20">
                <div>
                  <p className="text-xs uppercase tracking-wide text-black mb-1">Contract Price ($0.40/unit)</p>
                  <p className="text-2xl font-mono text-black">{formatCurrency(contractPrice)}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-black mb-1">Admin Fee (3%)</p>
                  <p className="text-2xl font-mono text-black">{formatCurrency(adminFee)}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-black mb-1">Total Price</p>
                  <p className="text-2xl font-mono font-bold text-black">{formatCurrency(totalPrice)}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-black mb-1">Market Value at $1.00</p>
                  <p className="text-2xl font-mono text-black">{formatCurrency(marketValue)}</p>
                </div>
                <div className="col-span-2 pt-4 border-t-2 border-black">
                  <p className="text-sm uppercase tracking-wide text-black mb-1">Your Savings</p>
                  <p className="text-4xl font-mono font-bold text-black">{formatCurrency(totalSavings)}</p>
                  <p className="text-xs text-black mt-1">Savings based on $1.00 market value minus your total price</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-white border-2 border-black p-8 space-y-6">
            <h3 className="text-2xl font-serif border-b border-black pb-2 text-black">Contact Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-2">
                <label className="block text-sm uppercase tracking-wide text-black mb-2">Full Legal Name *</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black text-black bg-white"
                />
              </div>

              <div>
                <label className="block text-sm uppercase tracking-wide text-black mb-2">Email Address *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black text-black bg-white"
                />
              </div>

              <div>
                <label className="block text-sm uppercase tracking-wide text-black mb-2">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black text-black bg-white"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-sm uppercase tracking-wide text-black mb-2">Company (Optional)</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black text-black bg-white"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-sm uppercase tracking-wide text-black mb-2">Investor Status *</label>
                <select
                  required
                  value={formData.investorStatus}
                  onChange={(e) => setFormData({ ...formData, investorStatus: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black text-black bg-white"
                >
                  <option value="">Select Status</option>
                  <option value="accredited">Accredited Investor</option>
                  <option value="qualified">Qualified Purchaser</option>
                  <option value="institutional">Institutional Investor</option>
                </select>
              </div>
            </div>
          </section>

          {/* Legal Disclosures */}
          <section className="bg-white border-2 border-black p-8 space-y-6">
            <h3 className="text-2xl font-serif border-b border-black pb-2 text-black">Legal Disclosures</h3>

            <div className="space-y-4 text-sm text-black leading-relaxed">
              <p className="font-bold text-black">IMPORTANT NOTICE</p>
              <p className="text-black">
                This is a forward contract for the future delivery of Specie, a digital commodity. This is NOT an offer
                to sell securities, investment contracts, or financial instruments subject to securities regulation.
              </p>

              <div className="pt-4 border-t border-black/20">
                <p className="font-bold mb-2 text-black">Key Terms:</p>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li>Contract price: $0.40 per Specie unit</li>
                  <li>Admin fee: 3% of contract price (non-refundable)</li>
                  <li>Delivery period: 60 days from contract execution</li>
                  <li>Holding period: 120 days from delivery</li>
                  <li>Market price at release: Fixed at $1.00 per unit</li>
                </ul>
              </div>

              <div className="pt-4 border-t border-black/20">
                <p className="font-bold mb-2 text-black">Risks:</p>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li>Delivery delays beyond 60 days may occur</li>
                  <li>No guarantee of liquidity or market for Specie at delivery</li>
                  <li>Admin fees are non-refundable under all circumstances</li>
                  <li>Forward contracts carry inherent counterparty risk</li>
                  <li>Digital commodities are highly speculative</li>
                </ul>
              </div>

              <div className="pt-4 border-t border-black/20">
                <p className="font-bold mb-2 text-black">Accredited Investor Status:</p>
                <p className="text-black">
                  By proceeding, you confirm that you meet the definition of an &quot;accredited investor&quot; under
                  Rule 501 of Regulation D, or are otherwise qualified to participate in this commercial offering under
                  applicable law. You further confirm that you have a legitimate commercial use for Specie within the
                  Onli ecosystem.
                </p>
              </div>

              <div className="pt-4 border-t border-black/20">
                <p className="font-bold mb-2 text-black">Refund Policy:</p>
                <p className="text-black">
                  Refunds may be requested within 7 days of contract execution, minus the 3% admin fee. After 7 days,
                  all sales are final. Refunds after delivery are not permitted under any circumstances.
                </p>
              </div>
            </div>
          </section>

          {/* Agreement */}
          <section className="bg-white border-2 border-black p-8 space-y-6">
            <div className="flex items-start space-x-4">
              <input
                type="checkbox"
                id="agreement"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 h-5 w-5 border-2 border-black"
                required
              />
              <label htmlFor="agreement" className="text-sm text-black leading-relaxed">
                I acknowledge that I have read, understand, and agree to all terms and conditions of this forward
                contract offering. I confirm that I am an accredited investor purchasing Specie for commercial use
                within the Onli ecosystem. I understand that this is a commercial forward contract for a digital
                commodity, not a securities offering or investment opportunity. I understand the risks associated with
                this commercial transaction, including liquidity risk. I agree that this contact request will be sent to
                support@species.market for processing.
              </label>
            </div>
          </section>

          {/* Submit */}
          <div className="text-center space-y-6">
            <button
              type="submit"
              disabled={!agreed || isSubmitting}
              className="px-16 py-4 bg-black text-[#F5F5F0] text-sm tracking-widest uppercase hover:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Send Request"}
            </button>
            <p className="text-xs text-black">
              By submitting, you agree to be contacted by The Onli Corporation regarding this forward contract.
            </p>
          </div>
        </form>
      </main>
    </div>
  )
}
