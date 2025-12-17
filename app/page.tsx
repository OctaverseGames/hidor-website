"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

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
          A confidential Proof-of-Stake blockchain designed for private value
          transfer, private staking, and anonymous governance.
        </motion.p>

        <div className="flex gap-6">
          <Button
            className="px-12 py-6 text-lg rounded-2xl"
            onClick={() => (window.location.href = "/portal")}
          >
            Enter Network
          </Button>

          <Button
            variant="outline"
            className="px-12 py-6 text-lg rounded-2xl"
            onClick={() => (window.location.href = "/docs")}
          >
            Read Protocol
          </Button>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-4xl mx-auto text-center space-y-6">
        <p className="text-lg text-white/70">
          HIDOR is built on the belief that privacy is a prerequisite for
          decentralization. The network combines cryptographic confidentiality
          with stake-based security, removing the need for public balances,
          addresses, or governance identities.
        </p>

        <p className="text-lg text-white/60">
          Rather than optimizing for speed or speculation, HIDOR prioritizes
          correctness, minimal metadata leakage, and long-term protocol
          resilience.
        </p>
      </section>

      {/* FEATURES */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div className="text-4xl">🛡️</div>
          <h2 className="text-2xl font-semibold">Private Transfers</h2>
          <p className="text-white/60">
            Transaction sender, receiver, and amounts are concealed using stealth
            addressing, confidential commitments, and zero-knowledge proofs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div className="text-4xl">⚖️</div>
          <h2 className="text-2xl font-semibold">Confidential Staking</h2>
          <p className="text-white/60">
            Validators participate in Proof-of-Stake without revealing stake
            size or origin. Eligibility is proven cryptographically, not
            publicly displayed.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div className="text-4xl">🗳️</div>
          <h2 className="text-2xl font-semibold">Anonymous Governance</h2>
          <p className="text-white/60">
            Governance decisions are made through zero-knowledge voting.
            Proposals are verifiable without exposing voter identities or
            balances.
          </p>
        </motion.div>
      </section>

      {/* ARCHITECTURE */}
      <section className="max-w-4xl mx-auto space-y-6 text-center">
        <h2 className="text-4xl font-semibold">Protocol Architecture</h2>

        <p className="text-white/70">
          HIDOR uses a UTXO-based ledger model with mandatory output regeneration.
          All values exist in shielded form, eliminating balance correlation and
          address reuse.
        </p>

        <p className="text-white/60">
          Consensus replaces transparent stake disclosure with zero-knowledge
          eligibility proofs, ensuring security without sacrificing privacy.
        </p>
      </section>

      {/* CTA */}
      <section className="text-center space-y-8">
        <p className="text-white/60 text-lg">
          HIDOR is under active research and development. Specifications may
          evolve as cryptographic assumptions are formally validated.
        </p>

        <Button
          className="px-14 py-7 text-lg rounded-2xl"
          onClick={() => (window.location.href = "/docs")}
        >
          Explore Full Specification
        </Button>
      </section>

      {/* FOOTER */}
      <footer className="pt-20 border-t border-white/10 text-center text-white/40 text-sm">
        <p>© 2025 HIDOR Protocol</p>
        <p className="mt-2">
          Confidential Proof-of-Stake · Research-Driven · Privacy-First
        </p>
      </footer>

    </div>
  )
}
