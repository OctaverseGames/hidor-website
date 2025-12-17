"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="bg-black text-white px-6 lg:px-24 py-20 space-y-32">

      {/* HERO */}
      <section className="flex flex-col items-center text-center space-y-10">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-8xl font-bold tracking-[0.25em]"
        >
          HIDOR
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-xl text-white/70 max-w-3xl"
        >
          A confidential Proof-of-Stake blockchain designed for private value transfer, private staking, and anonymous governance.
        </motion.p>

        <div className="flex gap-6">
          <Button onClick={() => (window.location.href = "/portal")}>
            Enter Network
          </Button>
          <Button variant="outline" onClick={() => (window.location.href = "/docs")}>
            Read Protocol
          </Button>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-4xl mx-auto text-center space-y-6">
        <p className="text-lg text-white/70">
          HIDOR is built on the belief that privacy is a prerequisite for decentralization. The network combines cryptographic confidentiality with stake-based security, removing the need for public balances, addresses, or governance identities.
        </p>
        <p className="text-lg text-white/60">
          Rather than optimizing for speed or speculation, HIDOR prioritizes correctness, minimal metadata leakage, and long-term protocol resilience.
        </p>
      </section>

      {/* FEATURE CARDS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mt-16">
        <Card>
          <CardContent>
            <div className="text-4xl mb-4">🛡️</div>
            <h2 className="text-2xl font-semibold mb-2">Private Transfers</h2>
            <p>
              Sender, receiver, and amount are completely private using stealth addresses and zero-knowledge proofs.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <div className="text-4xl mb-4">⚖️</div>
            <h2 className="text-2xl font-semibold mb-2">Confidential Staking</h2>
            <p>
              Validators prove eligibility without revealing stake amounts or sources.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <div className="text-4xl mb-4">🗳️</div>
            <h2 className="text-2xl font-semibold mb-2">Anonymous Governance</h2>
            <p>
              Zero-knowledge voting ensures proposals are verifiable while keeping voter identities private.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* ARCHITECTURE */}
      <section className="max-w-4xl mx-auto space-y-6 text-center">
        <h2 className="text-4xl font-semibold">Protocol Architecture</h2>
        <p className="text-white/70">
          HIDOR uses a UTXO-based ledger model with mandatory output regeneration. All values exist in shielded form, eliminating balance correlation and address reuse.
        </p>
        <p className="text-white/60">
          Consensus replaces transparent stake disclosure with zero-knowledge eligibility proofs, ensuring security without sacrificing privacy.
        </p>
      </section>

      {/* CTA */}
      <section className="text-center space-y-8">
        <p className="text-white/60 text-lg">
          HIDOR is under active research and development. Specifications may evolve as cryptographic assumptions are formally validated.
        </p>
        <Button onClick={() => (window.location.href = "/docs")}>
          Explore Full Specification
        </Button>
      </section>

      {/* FOOTER */}
      <footer className="pt-20 border-t border-white/10 text-center text-white/40 text-sm">
        <p>© 2025 HIDOR Protocol</p>
        <p className="mt-2">Confidential Proof-of-Stake · Research-Driven · Privacy-First</p>
      </footer>
    </div>
  )
}
