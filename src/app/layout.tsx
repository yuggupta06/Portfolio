"use client";
import type { Metadata } from "next";
import { useIsMediumUp } from "../components/cutsom_hooks/useMediumUp";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import "./globals.css";
import { TracingBeam } from "@/components/ui/Tracing-Beam/tracing_beam";
import { ParticleNetworkBackground } from "@/components/ui/background/particle-backgroud";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isMediumUp = useIsMediumUp();

  return (
    <html lang="en">
      <body className="bg-black antialiased w-screen min-h-screen p-0 m-0 overflow-x-hidden relative">
        <div className="relative min-h-screen ">
      <ParticleNetworkBackground
        particleCount={200}
          particleSize={2}
          particleColor="#F472B6"
          lineColor="rgba(244, 114, 182, 0.15)"
          maxDistance={100}
          speed={1}
          interactive={true}
      />
      <div className="relative z-10">
        {isMediumUp ?(
        <div className="w-full mx-auto antialiased pt-4 relative z-0">
          <TracingBeam className="w-full">
            {children}
          </TracingBeam>
        </div>
        ):(
          <div className="w-full mx-auto antialiased pt-4 relative z-0">
            {children}
          </div>
        )}
      </div>
      </div>
  
 
        {/* Optional: <SmoothCursor /> */}
      </body>
    </html>
  );
}
