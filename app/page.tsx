import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

import { CardDemo } from "@/components/ui/cardDemo"
import { Calendar } from "@/components/ui/calendar"


export default function IndexPage() {
  return (
    <section className="container flex flex-col items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-center text-center gap-8 py-32">
        <h1 className="font-bold text-4xl leading-tight tracking-tighter sm:text-5xl md:text-5xl lg:text-6xl">
          Matteo Schiavon Lopez <br/>
          <em className="font-medium text-3xl sm:text-4xl md:text-4xl lg:text-5xl">UI/UX Designer & Frontend Dev</em>
        </h1>
        <p className="max-w-[600px] text-lg text-center	text-muted-foreground align-center sm:text-xl">
          Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.
        </p>
        <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ size: "lg" })}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          GitHub
        </Link>
      </div>
      </div>
      <div className="max-w-[980px] flex w-full items-center flex-col md:flex-row md:justify-center md:items-start py-32 gap-8 ">
      <CardDemo defaultChecked className="w-full min-w-[340px]"></CardDemo>
      <Calendar className="w-fit"></Calendar>
      </div>

      
    </section>
  )
}
