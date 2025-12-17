"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Portal() {
  return (
    <div className="bg-black min-h-screen text-white px-6 lg:px-24 py-20 flex flex-col items-center space-y-20">

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-bold text-center animate-glow"
      >
        Welcome to HIDOR Portal
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="text-white/70 max-w-3xl text-center"
      >
        Explore staking, confidential transactions, and governance mechanisms in a secure environment.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full mt-12">
        <Card>
          <CardContent>
            <h3 className="text-2xl font-semibold mb-2">Research Docs</h3>
            <p>Comprehensive protocol documentation and cryptography explanations.</p>
            <Button className="mt-4" onClick={() => (window.location.href = "/docs")}>View Docs</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h3 className="text-2xl font-semibold mb-2">Validator Tools</h3>
            <p>Tools for staking, monitoring, and participating anonymously.</p>
            <Button className="mt-4" disabled>Launch Validator</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h3 className="text-2xl font-semibold mb-2">Experimental Wallet</h3>
            <p>Interact with the network using our confidential wallet for testing.</p>
            <Button className="mt-4" disabled>Launch Wallet</Button>
          </CardContent>
        </Card>
      </div>

      <section className="text-center mt-20">
        <p className="text-white/60 mb-6">All portal features are experimental.</p>
        <Button onClick={() => (window.location.href = "/docs")}>Explore Full Protocol</Button>
      </section>
    </div>
  )
}
