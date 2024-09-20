import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface PropTypes {
  title: string;
  subtitle: string;
  tags: string[];
  image: string;
  link: string;
  index: number;
}

const colors = ["#6c5ce7", "#218c74", "#d4748d", "#f39c12"];
const hexToRgb = (hex: string) => {
  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
};

const getSequentialColor = (index: number) => {
  return colors[index % colors.length];
};

const getRGBAColor = (hex: string, opacity: number) => {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

const ProjectCard = ({
  title,
  subtitle,
  tags,
  image,
  link,
  index,
}: PropTypes) => {
  const [color, setColor] = useState(getSequentialColor(index));

  useEffect(() => {
    setColor(getSequentialColor(index));
  }, [index]);

  return (
    <a
      href={link}
      target="_blank"
      className={`pt-6 px-6 rounded-3xl group cursor-pointer transition-all duration-300 ease-in-out `}
      style={{ backgroundColor: getRGBAColor(color, 0.1) }}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-2xl font-bold mb-2" style={{ color }}>
            {title}
          </h2>
          <p className="text-sm font-light text-gray-500 dark:text-gray-300">{subtitle}</p>
        </div>
        <div
          className="p-2 rounded-full transition-transform duration-300 ease-in-out group-hover:-rotate-45 group-hover:opacity-100 opacity-30 group-hover:scale-110"
          style={{ border: `2px solid ${color}` }}
        >
          <ArrowRight
            size={24}
            className=" group-hover:opacity-85"
            style={{ color }}
          />
        </div>
      </div>
      <div
        className="flex  pb-4 flex-wrap gap-2"
        style={{
          borderBottom: `2px solid rgba(${hexToRgb(color)}, 0.1`,
        }}
      >
        {tags.map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className="font-medium px-4 py-2 rounded-full text-sm transition-all duration-300 ease-in-out group-hover:bg-opacity-50"
            style={{ backgroundColor: getRGBAColor(color, 0.2), color }}
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="relative w-full h-[300px] overflow-hidden">
        <div className="absolute bottom-0 w-full h-full transition-transform duration-300 ease-in-out group-hover:-translate-y-[40px]">
          <Image
            src={image}
            width={500}
            height={300}
            alt="Project screenshot"
            className="mt-12"
          />
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
