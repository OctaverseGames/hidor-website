"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="bg-black text-white overflow-x-hidden">

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 lg:px-24 space-y-10">
        <img src="/logo.png" alt="Verity Logo" className="w-32 mx-auto mb-4 animate-glow" />
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-8xl font-bold tracking-[0.25em] text-white animate-glow"
        >
          VERITY
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-xl text-white/70 max-w-3xl"
        >
          Private Proof-of-Stake Blockchain. Secure, fast, and privacy-first.
        </motion.p>
        <div className="flex gap-6">
          <Button onClick={() => (window.location.href = "/portal")}>Enter Network</Button>
          <Button variant="outline" onClick={() => (window.location.href = "/docs")}>Read Protocol</Button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto mt-32 px-6 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <Card><CardContent><div className="text-5xl mb-4">🛡️</div><h3 className="text-2xl font-semibold mb-2">Private Transfers</h3><p>Sender, receiver, and amount remain confidential via zero-knowledge proofs.</p></CardContent></Card>
        <Card><CardContent><div className="text-5xl mb-4">⚖️</div><h3 className="text-2xl font-semibold mb-2">Confidential Staking</h3><p>Validators prove eligibility without revealing stake size or source.</p></CardContent></Card>
        <Card><CardContent><div className="text-5xl mb-4">🗳️</div><h3 className="text-2xl font-semibold mb-2">Anonymous Governance</h3><p>Stake-weighted votes in zero knowledge ensure privacy of participants.</p></CardContent></Card>
        <Card><CardContent><div className="text-5xl mb-4">🚀</div><h3 className="text-2xl font-semibold mb-2">Fast Transactions</h3><p>Optimized for speed and minimal metadata leakage for real-time transfers.</p></CardContent></Card>
      </section>

      {/* CTA */}
      <section className="text-center mt-32 mb-20 px-6 lg:px-0">
        <p className="text-white/60 text-lg mb-6">
          VERITY is under active research and development. Specifications may evolve as cryptographic assumptions are formally validated. Native coin: <span className="font-semibold">$VTY</span>.
        </p>
        <Button onClick={() => (window.location.href = "/docs")}>Explore Full Protocol</Button>
      </section>

      {/* FOOTER */}
      <footer className="pt-20 border-t border-white/10 text-center text-white/40 text-sm mb-10">
        <p>© 2025 Verity Protocol</p>
        <p className="mt-2">Confidential Proof-of-Stake · Research-Driven · Privacy-First</p>
      </footer>
    </div>
  )
}
