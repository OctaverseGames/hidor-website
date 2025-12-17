"use client"

import { Card, CardContent } from "@/components/ui/card"

export default function Docs() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20 flex flex-col items-center space-y-12">
      <h1 className="text-4xl font-semibold mb-4 animate-glow">HIDOR Protocol</h1>

      <Card className="hover:animate-cardGlow transition-all duration-300 max-w-4xl">
        <CardContent>
          <h2 className="text-2xl font-semibold mb-3">Design Goals</h2>
          <ul className="list-disc list-inside space-y-2 text-white/70">
            <li>Strong sender, receiver, and amount privacy</li>
            <li>Proof-of-Stake without public balances</li>
            <li>Unlinkable staking and validator participation</li>
            <li>Cryptographically enforceable slashing</li>
            <li>Minimal on-chain metadata leakage</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="hover:animate-cardGlow transition-all duration-300 max-w-4xl">
        <CardContent>
          <h2 className="text-2xl font-semibold mb-3">Ledger & Privacy</h2>
          <p className="text-white/70 leading-relaxed">
            HIDOR employs a UTXO-based ledger with mandatory output regeneration. Transaction amounts are hidden via commitment schemes, and input ownership uses decoy selection or zero-knowledge proofs depending on the transaction type.
          </p>
        </CardContent>
      </Card>

      <Card className="hover:animate-cardGlow transition-all duration-300 max-w-4xl">
        <CardContent>
          <h2 className="text-2xl font-semibold mb-3">Consensus & Governance</h2>
          <p className="text-white/70 leading-relaxed">
            The network uses zero-knowledge Proof-of-Stake. Validators lock stake into a shielded pool and produce cryptographic proofs asserting eligibility without revealing stake size or source. Governance is conducted anonymously through stake-weighted zero-knowledge voting.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
