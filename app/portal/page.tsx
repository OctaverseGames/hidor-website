"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Portal() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl space-y-10 text-center"
      >
        <h1 className="text-5xl font-bold tracking-wide animate-glow">Welcome to Verity</h1>
        <p className="text-white/60 leading-relaxed">
          Verity is a research-first confidential Proof-of-Stake network. Learn about the protocol, cryptography, and staking mechanisms before interacting with the client.
        </p>

        <div className="flex justify-center gap-6">
          <Button onClick={() => (window.location.href = "/docs")}>Read Full Protocol</Button>
          <Button variant="outline" disabled>Launch Wallet (Experimental)</Button>
        </div>

        <Card>
          <CardContent>
            <p className="text-white/70 text-sm">
              This portal is a quiet gateway to Verity’s protocol research. Wallet functionality will be available once the experimental client is ready for use.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
