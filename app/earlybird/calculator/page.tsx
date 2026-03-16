"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function InvestmentCalculator() {
  const [quantity, setQuantity] = useState<string>("10000")
  const [contractPrice, setContractPrice] = useState(0)
  const [adminFee, setAdminFee] = useState(0)
  const [totalInvestment, setTotalInvestment] = useState(0)
  const [revenue, setRevenue] = useState(0)
  const [netProfit, setNetProfit] = useState(0)
  const [roi, setRoi] = useState(0)

  useEffect(() => {
    const qty = Number.parseFloat(quantity) || 0
    const contract = qty * 0.4
    const fee = contract * 0.03
    const total = contract + fee
    const rev = qty * 1.0
    const profit = rev - total
    const roiPercent = total > 0 ? (profit / total) * 100 : 0

    setContractPrice(contract)
    setAdminFee(fee)
    setTotalInvestment(total)
    setRevenue(rev)
    setNetProfit(profit)
    setRoi(roiPercent)
  }, [quantity])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(value)
  }

  const formatNumber = (value: string) => {
    const num = Number.parseFloat(value) || 0
    return new Intl.NumberFormat("en-US").format(num)
  }

  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      {/* Header */}
      <header className="border-b-2 border-black py-6 px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/earlybird/offering" className="text-sm tracking-widest uppercase hover:underline text-black">
            ← Offering
          </Link>
          <h1 className="text-xl font-serif tracking-wide text-black">PRE ORDER CALCULATOR</h1>
          <Link href="/earlybird/terms" className="text-sm tracking-widest uppercase hover:underline text-black">
            Terms of Sale →
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-8 py-16">
        <div className="space-y-12">
          {/* Title */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-serif text-black">Calculate Your Commercial Savings</h2>
            <div className="w-32 h-[2px] bg-black mx-auto" />
            <p className="text-black">
              Enter the quantity of Specie to calculate the difference between pre-order price ($0.40) and delivery
              value ($1.00)
            </p>
          </div>

          {/* Calculator */}
          <div className="bg-white border-4 border-black p-12 space-y-8">
            {/* Quantity Input */}
            <div className="space-y-4">
              <label className="block text-sm uppercase tracking-widest text-black">QUANTITY OF SPECIE</label>
              <input
                type="text"
                value={quantity}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^0-9]/g, "")
                  setQuantity(value)
                }}
                className="w-full text-6xl font-mono text-center border-b-4 border-black bg-transparent focus:outline-none py-4 text-black"
                placeholder="10000"
              />
              <p className="text-center text-sm text-black">{formatNumber(quantity)} units</p>
            </div>

            <div className="h-[2px] bg-black/20" />

            {/* Calculations */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                <div>
                  <p className="text-sm uppercase tracking-wide text-black mb-2">Contract Price</p>
                  <p className="text-3xl font-mono text-black">{formatCurrency(contractPrice)}</p>
                  <p className="text-xs text-black mt-1">$0.40 per unit</p>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-wide text-black mb-2">Admin Fee (3%)</p>
                  <p className="text-3xl font-mono text-black">{formatCurrency(adminFee)}</p>
                  <p className="text-xs text-black mt-1">Non-refundable</p>
                </div>

                <div className="col-span-2 pt-4 border-t-2 border-black">
                  <p className="text-sm uppercase tracking-wide text-black mb-2">Total Savings</p>
                  <p className="text-4xl font-mono font-bold text-black">{formatCurrency(totalInvestment)}</p>
                </div>
              </div>

              <div className="h-[2px] bg-black/20" />

              <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                <div>
                  <p className="text-sm uppercase tracking-wide text-black mb-2">Revenue at $1.00</p>
                  <p className="text-3xl font-mono text-black">{formatCurrency(revenue)}</p>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-wide text-black mb-2">NET SAVINGS</p>
                  <p className="text-3xl font-mono text-green-700">{formatCurrency(netProfit)}</p>
                  <p className="text-xs text-black mt-1">Difference between purchase and delivery value</p>
                </div>

                <div className="col-span-2">
                  <p className="text-sm uppercase tracking-wide text-black mb-2">Savings Rate</p>
                  <p className="text-5xl font-mono font-bold text-black">{roi.toFixed(1)}%</p>
                  <p className="text-xs text-black mt-1">Based on purchase price vs. delivery value</p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Info */}
          <div className="bg-white border-2 border-black p-8 space-y-4">
            <h3 className="text-xl font-serif mb-4 text-black">Savings Timeline</h3>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-4xl font-mono mb-2 text-black">60</p>
                <p className="text-xs uppercase tracking-wide text-black">Days to Delivery</p>
              </div>
              <div>
                <p className="text-4xl font-mono mb-2 text-black">120</p>
                <p className="text-xs uppercase tracking-wide text-black">Day Holding Period</p>
              </div>
              <div>
                <p className="text-4xl font-mono mb-2 text-black">180</p>
                <p className="text-xs uppercase tracking-wide text-black">Total Days to Sale</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center space-y-6">
            <p className="text-black">Ready to pre-order Specie for commercial use?</p>
            <Link
              href="/earlybird/terms"
              className="inline-block px-12 py-4 bg-black text-[#F5F5F0] text-sm tracking-widest uppercase hover:bg-gray-800 transition-all"
            >
              View Terms of Sale
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
