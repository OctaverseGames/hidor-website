"use client"

export default function Docs() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20 flex justify-center">
      <div className="max-w-3xl space-y-12">
        <h1 className="text-4xl font-semibold mb-4">HIDOR Protocol</h1>
        <p className="text-white/70 leading-relaxed">
          HIDOR is a confidential Proof-of-Stake blockchain designed to enable private value transfer, private staking, and anonymous governance. The protocol combines a UTXO-based ledger model with zero-knowledge proofs to conceal transaction graph data while maintaining verifiable consensus.
        </p>
        <h2 className="text-2xl font-semibold mb-3">Design Goals</h2>
        <ul className="list-disc list-inside text-white/70 space-y-2">
          <li>Strong sender, receiver, and amount privacy</li>
          <li>Proof-of-Stake without public balances</li>
          <li>Unlinkable staking and validator participation</li>
          <li>Cryptographically enforceable slashing</li>
          <li>Minimal on-chain metadata leakage</li>
        </ul>
      </div>
    </div>
  )
}
