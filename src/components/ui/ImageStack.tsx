import Image from "next/image"
import { cn } from "@/lib/utils"

interface ImageStackProps {
  images: {
    src: string
    alt: string
  }[]
  className?: string
}

export default function ImageStack({ images = [], className }: ImageStackProps) {
  // Ensure we only use up to 3 images
  const displayImages = images.slice(0, 3)

  return (
    <div className={cn("relative h-80 w-full", className)}>
      {displayImages.map((image, index) => (
        <div
          key={index}
          className={cn(
            "absolute rounded-[32px] shadow-lg transition-all duration-300 hover:z-10 hover:-translate-y-2 p-3 bg-white",
            index === 0 && "left-[10%] rotate-[-12deg] z-[1]",
            index === 1 && "left-[50%] z-[2]",
            index === 2 && "left-[90%] top-[10%] rotate-[15deg] z-[3]",
          )} 
          style={{
            width: "320px",
            height: "320px",
          }}
        >
          <div className="relative w-full h-full rounded-3xl overflow-hidden">
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 320px"
            />
          </div>
        </div>
      ))}
    </div>
  )
}
