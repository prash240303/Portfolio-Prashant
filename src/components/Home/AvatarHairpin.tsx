"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const AvatarHairpin = () => {
  return (
    <div className="relative order-first shrink p-4 md:order-last md:p-4">
      <Link href="https://x.com/prash2403" target="__blank">
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
            className="relative z-[5] mt-4 transition-all duration-700 mr-4 block size-28 max-w-28 max-h-28 overflow-hidden rounded-lg bg-white shadow-xl "
          >
            <Image
              src="/profile/pic2.webp"
              placeholder="blur"
              alt="avatar"
              height={80}
              blurDataURL="data:image/webp;base64,UklGRjoAAABXRUJQVlA4ICwAAAAQAgCdASoEAAQAASpIAAgAAkA+JaQAA=="
              width={80}
              className="grayscale hover:grayscale-0 object-cover w-full h-full rounded-lg"
            />
          </motion.div>
      </Link>
      <div className="z-0">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          style={{ originX: 0, originY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="absolute -right-12 left-0 top-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)] dark:bg-orange-100/30"
        ></motion.div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          style={{ originX: 0.5, originY: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="absolute -top-8 bottom-0 left-12 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)] dark:bg-orange-100/30"
        ></motion.div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ originX: 0, originY: 0 }}
          className="absolute -right-12 bottom-14 left-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)] dark:bg-orange-100/30"
        ></motion.div>
        <motion.div
          initial={{ scale: 0 }}
          style={{ originX: 0.5, originY: 1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="absolute -bottom-8 -top-2 right-0 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)] dark:bg-orange-100/30"
        ></motion.div>
        <div className="absolute bottom-full right-10 -mb-px flex h-8 items-end overflow-hidden">
          <div className="-mb-px flex h-[2px] w-40 -scale-x-100">
            <motion.div
              initial={{ scale: 0 }}
              viewport={{ once: true }}
              whileInView={{ scale: 1 }}
              style={{ originX: 0, originY: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"
            ></motion.div>
            <motion.div
              viewport={{ once: true }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              style={{ originX: 0, originY: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="ml-[-100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"
            ></motion.div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};
export default AvatarHairpin;
