import Link from "next/link"

export default function OfferingMemorandum() {
  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      <header className="border-b-2 border-black py-6 px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-sm tracking-widest uppercase hover:underline">
            ← Home
          </Link>
          <h1 className="text-xl font-serif tracking-wide">FORWARD CONTRACT</h1>
          <Link href="/earlybird/calculator" className="text-sm tracking-widest uppercase hover:underline">
            Calculator →
          </Link>
        </div>
      </header>

      <main className="w-full px-10 py-16 space-y-16">
        <div className="space-y-2">
          <h1 className="text-[12vw] leading-none font-light tracking-tight text-black">forward</h1>
          {/* full-width rule */}
          <div className="h-px bg-neutral-400 mt-6 -mx-10" />
          {/* baseline subline, sitting just below the rule */}
          <p className="mt-5 text-xl font-light text-black">fine print in plain english.</p>
        </div>

        <section className="space-y-6">
          <h3 className="text-2xl font-serif text-black border-b border-black pb-2">
            FPIPE (Fine Print in Plain English)
          </h3>
          <div className="space-y-4 text-black leading-relaxed">
            <p>
              This offering is not an offer or sale of securities, equity, or any ownership interest. No rights to
              ownership, governance, profits, or participation in the issuer are conveyed.
            </p>
            <p>
              The Earlybird program provides access to a commercial forward contract for a fixed-value digital commodity
              ("species"), to be delivered at a future date. The asset is issued solely for commercial and
              service-related use, including eligibility for discounted services, subject to applicable terms.
            </p>
            <p>
              Each unit has a fixed value of USD $1.00 and does not appreciate. It is not an investment, and no
              expectation of profit, yield, or financial return is offered or implied.
            </p>
            <p>Proceeds from this sale are not restricted or pledged for any specific purpose.</p>
            <p>
              The primary risk associated with this asset is liquidity. There is no guarantee of transferability,
              resale, redemption, or the existence of any secondary market.
            </p>
            <p className="font-semibold">
              By continuing, you acknowledge that you are entering into a commercial transaction, not an investment
              opportunity.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-serif text-black border-b border-black pb-2">What is Specie?</h3>
          <div className="space-y-4 text-black leading-relaxed">
            <p>
              Specie is the core currency of the Onli ecosystem — a programmable micro-commodity with a fixed price of
              $1.00. It operates as a true bearer instrument: ownership is defined by possession in an authenticated
              Onli vault, not by blockchain entries, validators, or public ledgers. Onli is a digital commodity (a good
              with intrinsic utility) and not a blockchain-based speculative token.
            </p>
            <p>
              Engineered for stability, predictability, and machine-readability, Specie is the transactional foundation
              for AI-driven applications built on Onli. Every unit behaves consistently and settles through Onli&apos;s
              authenticated state-transition system, not through probabilistic consensus.
            </p>
            <p className="font-semibold">Key Benefits</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-semibold">Fast:</span> Instant settlement — no mining, mempools, or confirmation
                delays
              </li>
              <li>
                <span className="font-semibold">Scales:</span> Lightweight, event-driven, and designed for high-volume
                agent-to-agent transactions
              </li>
              <li>
                <span className="font-semibold">Final:</span> No forking, no rollbacks, no chain reorgs — authenticated
                transitions are conclusive
              </li>
              <li>
                <span className="font-semibold">NHIL Escrow (No Human In the Loop):</span> Escrow, settlement, and
                release are governed entirely by protocol logic
              </li>
              <li>
                <span className="font-semibold">Stable:</span> Fixed price of $1.00, providing predictable value for
                payments and services
              </li>
              <li>
                <span className="font-semibold">Bearer Instrument:</span> Possession equals ownership — no
                intermediaries, no ledger dependencies
              </li>
            </ul>
            <p className="italic">
              Specie provides a stable, programmable unit of value for modern systems; It is what a Stable Coin should
              be. Onli provides the simplest possible interface to build with it. Specie was built to showcase the speed
              and power of the Onli Protocol.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-serif text-black border-b border-black pb-2">The Opportunity</h3>
          <div className="space-y-4 text-black leading-relaxed">
            <p>
              The Specie Forward Contract allows early participants to acquire Specie at a discounted pre-launch price
              of $0.40 per unit (regular price: $1.00). This is a commercial pre-order for future delivery of a digital
              commodity, similar to ordering inventory before manufacture.
            </p>
            <p>
              <strong>Commercial Use Cases:</strong> Developers and businesses planning to use Specie to pay for
              services within the Onli ecosystem. This forward contract allows commercial users to hedge against future
              price differences between the pre-order price ($0.40) and the fixed delivery price ($1.00).
            </p>
            <p>
              <strong>Important Limitation:</strong> Specie units have a fixed value of $1.00 and do not appreciate in
              value. There is no promise of profit, and no efforts will be made to increase the price. This is not
              suitable for those seeking financial returns or profits from speculation.
            </p>
            <p>
              <strong>Contract Terms:</strong> Buyer agrees to purchase X Units at a price of $0.40 per unit plus 3%
              administrative fee. Seller shall deliver the Specie Asset to Buyer&apos;s designated Onli vault on the
              Delivery Date (60 days from contract execution). This contract may not be settled in cash or fiat
              currency. Physical delivery of the digital commodity is required.
            </p>
            <p>
              <strong>Access Rights:</strong> Specie grants access to the Onli computation engine for service payments
              and transactions. Sales are limited to entities with a legitimate commercial use for Specie within the
              Onli ecosystem.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-serif text-black border-b border-black pb-2">Terms of Sale</h3>
          <div className="space-y-4 text-black leading-relaxed">
            <div className="bg-yellow-accent/10 border-2 border-black p-6 space-y-4">
              <p className="font-bold text-lg">Disclosure Summary</p>
              <p>
                This is not an investment and does not involve equity, ownership, or profit participation. You are
                pre-purchasing access to Onli services by buying a medium of exchange that can be used to pay for those
                services at a discounted rate in the future.
              </p>
              <p className="font-semibold">A simple way to think about it:</p>
              <p className="italic bg-white/50 p-4 border-l-4 border-black">
                ...this is similar to pre-buying fuel at today's price that you will use later to fly an airplane. You
                are not buying the airline, you are not speculating on fuel prices, and the fuel does not increase in
                value—you are simply locking in a lower cost for future use.
              </p>
              <p>
                Each unit has a fixed value of $1.00, does not appreciate, and carries no expectation of profit. If you
                choose not to use it, since this is your asset you may resell it. However it does not increase in price.
                It is only sold at $1.
              </p>
              <p>
                The primary risk is liquidity. There is no guarantee of resale, transferability, or secondary market
                availability.
              </p>
              <p className="font-semibold">
                By proceeding, you acknowledge that this is a commercial transaction for discounted services, not an
                investment opportunity.
              </p>
            </div>

            <div className="space-y-4 mt-8">
              <div>
                <p className="font-semibold">Purchase Price:</p>
                <p>$0.40 per Specie unit, plus a 3% administrative fee</p>
              </div>
              <div>
                <p className="font-semibold">Delivery Timeline:</p>
                <p>60 days from payment confirmation</p>
              </div>
              <div>
                <p className="font-semibold">Holding Period:</p>
                <p>
                  120 days after delivery before units can be sold on the marketplace. During this period or thereafter,
                  Specie can be used for payments within the Onli ecosystem.
                </p>
              </div>
              <div>
                <p className="font-semibold">Total Timeline:</p>
                <p>Approximately 180 days from purchase to sale eligibility</p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-serif text-black border-b border-black pb-2">Delivery Terms</h3>
          <div className="space-y-4 text-black leading-relaxed">
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Delivery Timeline:</p>
                <p>60 days from payment confirmation for delivery to your designated Onli vault</p>
              </div>
              <div>
                <p className="font-semibold">Holding Period:</p>
                <p>
                  120 days after delivery before units become eligible for transfer on the marketplace. During this
                  period and thereafter, Specie can be used immediately for payments and services within the Onli
                  ecosystem.
                </p>
              </div>
              <div>
                <p className="font-semibold">Total Timeline:</p>
                <p>Approximately 180 days from contract execution to marketplace transfer eligibility</p>
              </div>
              <div>
                <p className="font-semibold">Commercial Use:</p>
                <p>
                  Specie may be used for service payments at any time after delivery, regardless of holding period
                  restrictions on marketplace transfers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-serif text-black border-b border-black pb-2">Risk Factors</h3>
          <div className="space-y-4 text-black leading-relaxed">
            <p className="font-semibold text-red-800">
              This is not an investment. This is a sophisticated discount program. Consider the following risks
              carefully:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <span className="font-semibold">Unregulated Market:</span> The marketplace operates outside traditional
                financial regulation
              </li>
              <li>
                <span className="font-semibold">Bearer Instrument Risk:</span> Loss of the digital object means loss of
                all rights.
              </li>
              <li>
                <span className="font-semibold">Counterparty Risk:</span> Delivery depends on the issuer&apos;s ability
                to fulfill the contract
              </li>
              <li>
                <span className="font-semibold">Liquidity Risk:</span> No guarantee of marketplace liquidity after the
                holding period. Species cannot be "listed on exchanges" or "increase liquidity."
              </li>
              <li>
                <span className="font-semibold">Delivery Delays:</span> Potential delays beyond the stated 60-day
                delivery period.
              </li>
              <li>
                <span className="font-semibold">No Government Recourse:</span> No FDIC insurance or government
                protection.
              </li>
              <li>
                <span className="font-semibold">Clawback/Reissue:</span> The contract is an administrative function
                allowing the issuer to burn and reissue asset if a user can proof loss of digital objects or if a court
                orders a reversal - in which case since there is no way to get back assets in the Onli protocol we are
                limited to issuing new ones.
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-serif text-black border-b border-black pb-2">Remedies &amp; Refund Policy</h3>
          <div className="space-y-4 text-black leading-relaxed">
            <p>
              If the issuer fails to deliver Specie within 60 days of the delivery date, or if the Specie Marketplace
              does not launch within 90 days of the initial delivery date, buyers may:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Terminate the contract by written notice</li>
              <li>Receive a refund of 97% of the purchase price</li>
              <li>The 3% administrative fee is non-refundable</li>
            </ul>
          </div>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-serif text-black border-b border-black pb-2">IMPORTANT</h3>
          <div className="space-y-4 text-black leading-relaxed">
            <p>
              DISCLAIMER AND NOTICE TO PURCHASERS THIS INSTRUMENT INVOLVES THE SALE OF A DIGITAL ASSET FOR COMMERCIAL
              USE. READ CAREFULLY. NO REGULATORY REGISTRATION THE SALE OF THE ONLI ASSET DESCRIBED HEREIN HAS NOT BEEN
              REGISTERED UNDER THE SECURITIES ACT OF 1933, AS AMENDED (THE "ACT"), OR UNDER THE SECURITIES LAWS OF ANY
              STATE OR OTHER JURISDICTION. THIS TRANSACTION IS STRUCTURED AS A COMMERCIAL PURCHASE OF INVENTORY FOR
              FUTURE DELIVERY PURSUANT TO THE UNIFORM COMMERCIAL CODE (UCC) AND IS INTENDED TO QUALIFY FOR THE "FORWARD
              CONTRACT EXCLUSION" UNDER THE COMMODITY EXCHANGE ACT. NO GOVERNMENT APPROVAL NO FEDERAL OR STATE
              SECURITIES COMMISSION, COMMODITIES REGULATOR (INCLUDING THE CFTC), OR OTHER REGULATORY AUTHORITY HAS
              APPROVED, DISAPPROVED, ENDORSED, OR RECOMMENDED THE ONLI ASSET, OR PASSED UPON THE ACCURACY OR ADEQUACY OF
              THIS AGREEMENT. ANY REPRESENTATION TO THE CONTRARY IS UNLAWFUL. ADVICE OF COUNSEL REQUIRED THE REGULATORY
              FRAMEWORK GOVERNING DIGITAL ASSETS, COMMODITIES, AND FORWARD CONTRACTS IS COMPLEX AND SUBJECT TO RAPID
              CHANGE. ALL PURCHASERS—REGARDLESS OF ACCREDITATION STATUS OR COMMERCIAL SOPHISTICATION—ARE HEREBY ADVISED
              AND EXPECTED TO CONSULT WITH THEIR OWN INDEPENDENT LEGAL, FINANCIAL, AND TAX ADVISORS PRIOR TO EXECUTING
              THIS AGREEMENT. BY PROCEEDING, THE PURCHASER ACKNOWLEDGES THAT THEY ARE NOT RELYING ON THE SELLER FOR
              LEGAL ADVICE REGARDING THE CLASSIFICATION OF THE ONLI ASSET OR THE TAX IMPLICATIONS OF THIS PURCHASE.
              COMMERCIAL INTENT ONLY THIS AGREEMENT IS SUITABLE ONLY FOR PURCHASERS WHO HAVE A BONA FIDE COMMERCIAL USE
              FOR THE ONLI ASSET. IF YOU ARE VIEWING THIS TRANSACTION AS AN INVESTMENT CONTRACT OR EXPECTING PROFITS
              DERIVED PRIMARILY FROM THE EFFORTS OF THE SELLER, DO NOT PROCEED.
            </p>
            <ul className="list-disc pl-6 space-y-2"></ul>
          </div>
        </section>

        <div className="border-t-2 border-black pt-8 flex justify-between items-center">
          <Link
            href="/earlybird"
            className="px-8 py-3 border-2 border-black text-sm tracking-widest uppercase hover:bg-black hover:text-[#F5F5F0] transition-all"
          >
            ← Back
          </Link>
          <Link
            href="/earlybird/calculator"
            className="px-8 py-3 bg-black text-[#F5F5F0] border-2 border-black text-sm tracking-widest uppercase hover:bg-gray-800 transition-all"
          >
            Calculate Savings →
          </Link>
        </div>
      </main>
    </div>
  )
}
