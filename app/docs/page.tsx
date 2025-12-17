"use client"

export default function Docs() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20 flex justify-center">
      <div className="max-w-3xl space-y-12">
        <section>
          <h1 className="text-4xl font-semibold mb-4">
            HIDOR Protocol
          </h1>
          <p className="text-white/70 leading-relaxed">
            HIDOR is a confidential Proof-of-Stake blockchain designed
            for private value transfer, private staking, and anonymous
            governance.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            Design Goals
          </h2>
          <ul className="list-disc list-inside text-white/70 space-y-2">
            <li>Strong privacy</li>
            <li>Private Proof-of-Stake</li>
            <li>Anonymous governance</li>
            <li>Minimal metadata leakage</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
