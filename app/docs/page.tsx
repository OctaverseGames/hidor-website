"use client"

import { Card, CardContent } from "@/components/ui/card"

export default function Docs() {
  return (
    <div className="bg-black text-white min-h-screen px-6 lg:px-24 py-20 space-y-16">

      <h1 className="text-5xl font-bold text-center animate-glow mb-16">HIDOR Protocol Documentation</h1>

      <Card>
        <CardContent>
          <h2 className="text-3xl font-semibold mb-4">Design Goals</h2>
          <ul className="list-disc list-inside space-y-2 text-white/70">
            <li>Strong sender, receiver, and amount privacy</li>
            <li>Proof-of-Stake without public balances</li>
            <li>Unlinkable staking and validator participation</li>
            <li>Cryptographically enforceable slashing</li>
            <li>Minimal on-chain metadata leakage</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h2 className="text-3xl font-semibold mb-4">Ledger & Privacy</h2>
          <p className="text-white/70 leading-relaxed">
            HIDOR uses a UTXO-based ledger with mandatory output regeneration. Transaction amounts are hidden using zero-knowledge commitments, and input ownership is obscured using decoy selection or membership proofs.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h2 className="text-3xl font-semibold mb-4">Consensus & Governance</h2>
          <p className="text-white/70 leading-relaxed">
            The network uses zero-knowledge Proof-of-Stake. Validators lock stake into a shielded pool and produce cryptographic proofs asserting eligibility without revealing stake size or source. Governance is conducted anonymously via stake-weighted zero-knowledge voting.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h2 className="text-3xl font-semibold mb-4">Native Asset: $HID</h2>
          <p className="text-white/70 leading-relaxed">
            HIDOR's native asset ($HID) is used for transaction fees, validator staking, and protocol-level incentives. All balances exist in shielded form only.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h2 className="text-3xl font-semibold mb-4">Protocol Status</h2>
          <p className="text-white/60 leading-relaxed">
            HIDOR is actively under development. Cryptographic and consensus mechanisms may evolve as the network is formally validated and tested.
          </p>
        </CardContent>
      </Card>

    </div>
  )
}
