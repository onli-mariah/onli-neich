export default function TermsOfSale() {
  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      {/* Header */}
      <header className="border-b-2 border-black py-6 px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/earlybird/calculator" className="text-sm tracking-widest uppercase hover:underline text-black">
            ← Calculator
          </a>
          <h1 className="text-xl font-serif tracking-wide text-black">TERMS OF SALE</h1>
          <a href="/earlybird/purchase" className="text-sm tracking-widest uppercase hover:underline text-black">
            Contact →
          </a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-8 py-16">
        {/* Disclosure Summary */}
        <div className="bg-yellow-50 border-4 border-black p-8 mb-12">
          <h2 className="text-2xl font-serif mb-6 text-black border-b-2 border-black pb-2">Disclosure Summary</h2>
          <div className="space-y-4 text-black">
            <p>
              <strong>This is not an investment</strong> and does not involve equity, ownership, or profit
              participation.
            </p>
            <p>
              You are pre-purchasing access to Onli services by buying a medium of exchange that can be used to pay for
              those services at a discounted rate in the future.
            </p>
            <div className="bg-white border-2 border-black p-6 my-6">
              <p className="italic text-black">
                <strong>A simple way to think about it:</strong>
              </p>
              <p className="mt-2 text-black">
                ...this is similar to pre-buying fuel at today&apos;s price that you will use later to fly an airplane.
                You are not buying the airline, you are not speculating on fuel prices, and the fuel does not increase
                in value—you are simply locking in a lower cost for future use.
              </p>
            </div>
            <p>
              Each unit has a <strong>fixed value of $1.00</strong>, does not appreciate, and carries no expectation of
              profit. If you choose not to use it, since this is your asset you may resell it. However it does not
              increase in price. It is only sold at $1.
            </p>
            <p>
              <strong>The primary risk is liquidity.</strong> There is no guarantee of resale, transferability, or
              secondary market availability.
            </p>
            <p className="font-bold">
              By proceeding, you acknowledge that this is a commercial transaction for discounted services, not an
              investment opportunity.
            </p>
          </div>
        </div>

        {/* Terms Content */}
        <div className="prose prose-lg max-w-none space-y-8">
          <div>
            <h2 className="text-3xl font-serif text-black border-b-2 border-black pb-2 mb-4">Terms of Sale</h2>
            <p className="text-sm uppercase tracking-wide text-black">Species Market – Earlybird Program</p>
            <p className="text-sm text-black">Last Updated: December 2025</p>
          </div>

          <section className="space-y-4">
            <h3 className="text-xl font-serif text-black border-b border-black pb-2">1. Overview and Acceptance</h3>
            <p className="text-black">
              These Terms of Sale (&quot;Terms&quot;) govern the purchase of assets through the Species Market Earlybird
              program (&quot;Earlybird&quot;). By accessing, purchasing, or otherwise participating in the Earlybird
              program, you (&quot;Purchaser,&quot; &quot;you&quot;) agree to be bound by these Terms.
            </p>
            <p className="text-black">
              If you do not agree to these Terms, you may not participate in the Earlybird program.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-serif text-black border-b border-black pb-2">2. Nature of the Offering</h3>
            <p className="text-black">
              The Earlybird program does not constitute an offer or sale of securities, equity, or any ownership
              interest. No rights to ownership, governance, profits, dividends, or participation in the issuer or any
              affiliated entity are conveyed.
            </p>
            <p className="text-black">
              The Earlybird offering consists of a commercial forward contract for a digital commodity
              (&quot;species&quot;), to be delivered at a future date under terms to be specified by Species Market
              (&quot;Seller,&quot; &quot;we,&quot; &quot;us&quot;).
            </p>
            <p className="text-black">
              The asset is issued solely for commercial and service-related purposes, including eligibility for
              discounted access to services, subject to applicable terms and availability.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-serif text-black border-b border-black pb-2">
              3. Fixed Value; No Investment Characteristics
            </h3>
            <p className="text-black">
              Each unit of species sold through the Earlybird program has a fixed value of USD $1.00 per unit.
            </p>
            <p className="text-black">The asset:</p>
            <ul className="list-disc pl-8 space-y-2 text-black">
              <li>Is non-appreciating</li>
              <li>Is not an investment</li>
              <li>Carries no expectation of profit, yield, price increase, or financial return</li>
              <li>Is not marketed or sold for speculative purposes</li>
            </ul>
            <p className="text-black">
              Purchaser acknowledges that no representations are made regarding future value, market price, or economic
              benefit beyond its stated commercial use.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-serif text-black border-b border-black pb-2">4. Use of Proceeds</h3>
            <p className="text-black">
              Proceeds from the sale of species are not restricted, escrowed, or pledged for any specific project,
              development effort, or use of funds. Seller retains full discretion over the use of proceeds, subject to
              applicable law.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-serif text-black border-b border-black pb-2">5. Delivery</h3>
            <p className="text-black">
              Delivery of the digital commodity will occur at a future date determined by Seller. Timing, method of
              delivery, and technical requirements may be updated from time to time.
            </p>
            <p className="text-black">
              Seller makes no guarantee as to the exact delivery date, provided that delivery will be undertaken in good
              faith and in accordance with these Terms.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-serif text-black border-b border-black pb-2">
              6. Liquidity and Transferability
            </h3>
            <p className="text-black">Purchaser acknowledges and agrees that:</p>
            <ul className="list-disc pl-8 space-y-2 text-black">
              <li>Liquidity is not guaranteed</li>
              <li>
                There is no obligation for Seller to provide or facilitate resale, transfer, redemption, or secondary
                market access
              </li>
              <li>
                Any future transferability is discretionary and subject to technical, legal, or policy constraints
              </li>
            </ul>
            <p className="text-black">Purchaser bears all risk associated with holding a non-liquid asset.</p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-serif text-black border-b border-black pb-2">
              7. Accredited Access Eligibility
            </h3>
            <p className="text-black">
              Access to the Earlybird program is limited to individuals who meet accredited investor eligibility
              criteria, used solely as an access-control mechanism.
            </p>
            <p className="text-black">This access limitation:</p>
            <ul className="list-disc pl-8 space-y-2 text-black">
              <li>Does not characterize the asset as a security</li>
              <li>Does not imply investment intent</li>
              <li>Does not confer any investment rights</li>
            </ul>
            <p className="text-black">
              Purchaser represents and warrants that they meet the eligibility criteria at the time of participation.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-serif text-black border-b border-black pb-2">
              8. No Reliance; Independent Judgment
            </h3>
            <p className="text-black">
              Purchaser acknowledges that they have conducted their own independent evaluation of the Earlybird program
              and are not relying on any statement, representation, or assurance outside these Terms.
            </p>
            <p className="text-black">
              No oral or written information provided by Seller shall be construed as investment advice, financial
              advice, or a recommendation to purchase.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-serif text-black border-b border-black pb-2">9. No Refunds</h3>
            <p className="text-black">
              All purchases made through the Earlybird program are final. Except as required by applicable law, no
              refunds, cancellations, or chargebacks will be permitted once a purchase is completed.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-serif text-black border-b border-black pb-2">10. Limitation of Liability</h3>
            <p className="text-black">
              To the maximum extent permitted by law, Seller shall not be liable for any indirect, incidental,
              consequential, special, or punitive damages arising out of or relating to the Earlybird program or the use
              of the asset.
            </p>
            <p className="text-black">
              Seller&apos;s aggregate liability, if any, shall not exceed the total amount paid by Purchaser for the
              asset giving rise to the claim.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-serif text-black border-b border-black pb-2">11. Governing Law</h3>
            <p className="text-black">
              These Terms shall be governed by and construed in accordance with the laws of the State of Delaware,
              without regard to conflict-of-laws principles.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-serif text-black border-b border-black pb-2">12. Amendments</h3>
            <p className="text-black">
              Seller reserves the right to modify these Terms at any time. Updated Terms will be effective upon posting.
              Continued participation in the Earlybird program constitutes acceptance of any revised Terms.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-serif text-black border-b border-black pb-2">13. Entire Agreement</h3>
            <p className="text-black">
              These Terms constitute the entire agreement between Purchaser and Seller regarding the Earlybird program
              and supersede all prior communications, representations, or understandings.
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center space-y-6 border-t-2 border-black pt-12">
          <p className="text-black text-lg">
            By proceeding, you acknowledge that you have read and agree to these Terms of Sale.
          </p>
          <a
            href="/earlybird/purchase"
            className="inline-block px-12 py-4 bg-black text-[#F5F5F0] text-sm tracking-widest uppercase hover:bg-gray-800 transition-all"
          >
            I Agree – Contact Us
          </a>
        </div>
      </main>
    </div>
  )
}
