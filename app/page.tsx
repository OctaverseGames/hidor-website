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
          className="text-8xl font-bold tracking-[0.25em] text-white animate-glow"
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

      {/* FEATURE CARDS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mt-16">
        <Card className="hover:animate-cardGlow transition-all duration-300">
          <CardContent>
            <div className="text-4xl mb-4">🛡️</div>
            <h2 className="text-2xl font-semibold mb-2">Private Transfers</h2>
            <p>
              Sender, receiver, and amount are completely private using stealth addresses and zero-knowledge proofs.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:animate-cardGlow transition-all duration-300">
          <CardContent>
            <div className="text-4xl mb-4">⚖️</div>
            <h2 className="text-2xl font-semibold mb-2">Confidential Staking</h2>
            <p>
              Validators prove eligibility without revealing stake amounts or sources.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:animate-cardGlow transition-all duration-300">
          <CardContent>
            <div className="text-4xl mb-4">🗳️</div>
            <h2 className="text-2xl font-semibold mb-2">Anonymous Governance</h2>
            <p>
              Zero-knowledge voting ensures proposals are verifiable while keeping voter identities private.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* CTA */}
      <section className="text-center space-y-8 mt-16">
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
