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
        <h1 className="text-5xl font-bold tracking-wide">Welcome to HIDOR</h1>
        <p className="text-white/60 leading-relaxed">
          HIDOR is a research-first confidential Proof-of-Stake network. Learn about the protocol, cryptography, and staking mechanisms before interacting with the client.
        </p>
        <div className="flex justify-center gap-6">
          <Button onClick={() => (window.location.href = "/docs")}>
            Read Full Protocol
          </Button>
          <Button variant="outline" disabled>
            Launch Wallet (Experimental)
          </Button>
        </div>
        <Card>
          <CardContent>
            This portal is a quiet gateway to HIDOR’s protocol research. Wallet functionality will be available once the experimental client is ready for use.
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
