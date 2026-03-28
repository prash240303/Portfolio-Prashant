"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const AvatarHairpin = () => {
  return (
    <div className="relative shrink p-4 md:p-4">
      <Link href="https://x.com/prash2403" target="__blank">
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
            className="relative z-[5] mt-4 transition-all duration-700 mr-4 block border-2 border-neutral-300 dark:border-neutral-700 size-32 overflow-hidden rounded-full bg-white shadow-xl "
          >
            <Image
              src="/profile/pic4.webp"
              placeholder="blur"
              alt="avatar"
              height={80}
              blurDataURL="data:image/webp;base64,UklGRjoAAABXRUJQVlA4ICwAAAAQAgCdASoEAAQAASpIAAgAAkA+JaQAA=="
              width={80}
              className="object-top w-full h-full rounded-full"
            />
          </motion.div>
      </Link>
    </div>
  );
};
export default AvatarHairpin;
