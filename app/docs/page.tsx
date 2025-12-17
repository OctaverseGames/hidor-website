"use client"

import { Card, CardContent } from "@/components/ui/card"

export default function Docs() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20 flex justify-center">
      <div className="max-w-4xl space-y-12">

        <section>
          <h1 className="text-4xl font-semibold mb-4 animate-glow">HIDOR Protocol</h1>
          <p className="text-white/70 leading-relaxed">
            HIDOR is a confidential Proof-of-Stake blockchain designed to enable private value transfer, private staking, and anonymous governance. The protocol combines a UTXO-based ledger model with zero-knowledge proofs to conceal transaction graph data while maintaining verifiable consensus.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Design Goals</h2>
          <ul className="list-disc list-inside text-white/70 space-y-2">
            <li>Strong sender, receiver, and amount privacy</li>
            <li>Proof-of-Stake without public balances</li>
            <li>Unlinkable staking and validator participation</li>
            <li>Cryptographically enforceable slashing</li>
            <li>Minimal on-chain metadata leakage</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">2. Ledger Model</h2>
          <p className="text-white/70 leading-relaxed">
            HIDOR employs a UTXO-based ledger with mandatory output regeneration. All value transfers consume existing outputs and create fresh outputs, preventing address reuse and balance correlation. Transaction amounts are hidden using commitment schemes with range proofs.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">3. Privacy Mechanisms</h2>
          <p className="text-white/70 leading-relaxed">
            Receiver privacy is achieved through stealth addressing. Transaction values are concealed via confidential commitments. Input ownership is obscured using decoy selection or zero-knowledge membership proofs, depending on transaction type.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Consensus Overview</h2>
          <p className="text-white/70 leading-relaxed">
            HIDOR replaces public stake disclosure with a zero-knowledge Proof-of-Stake mechanism. Validators lock stake into a shielded pool and produce cryptographic proofs asserting eligibility to propose or attest blocks without revealing stake size or source.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Native Asset</h2>
          <p className="text-white/70 leading-relaxed">
            The native asset of the HIDOR network is HIDOR (ticker: HID). The asset is used for transaction fees, validator staking, and protocol-level incentives. All balances exist exclusively in shielded form.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Governance</h2>
          <p className="text-white/70 leading-relaxed">
            Governance is conducted through anonymous voting mechanisms. Stake-weighted votes are proven in zero knowledge, ensuring proposal outcomes are verifiable without revealing voter identities or balances.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">7. Status</h2>
          <p className="text-white/60 leading-relaxed">
            The HIDOR protocol is under active research and development. Specifications are subject to change as cryptographic and consensus mechanisms are formally validated.
          </p>
        </section>

      </div>
    </div>
  )
}
