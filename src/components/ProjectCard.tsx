import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface PropTypes {
  title: string;
  subtitle: string;
  tags: string[];
  image: string;
  link: string;
}

const colors = ['#6c5ce7', '#218c74', '#d4748d', '#f39c12'];

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const getRGBAColor = (hex: string, opacity: number) => {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

const ProjectCard = ({ title, subtitle, tags, image, link }: PropTypes) => {
  const [color, setColor] = useState(getRandomColor());

  useEffect(() => {
    setColor(getRandomColor());
  }, []);

  return (
    <div
      className={`pt-6 px-6 rounded-3xl group cursor-pointer transition-all duration-300 ease-in-out `}
      style={{ backgroundColor: getRGBAColor(color, 0.2) }}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-2xl font-bold mb-2" style={{ color }}>{title}</h2>
          <p className="text-gray-500">{subtitle}</p>
        </div>
        <div
          className="p-2 rounded-full transition-transform duration-300 ease-in-out group-hover:-rotate-45 group-hover:opacity-100 opacity-30 group-hover:scale-110"
          style={{ border: `2px solid ${color}` }}
        >
          <ArrowRight size={24} className=" group-hover:opacity-85" style={{ color }} />
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="font-semibold px-4 py-2 rounded-full text-sm transition-all duration-300 ease-in-out group-hover:bg-opacity-50"
            style={{ backgroundColor: getRGBAColor(color, 0.2), color }}
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="relative w-full h-[300px] overflow-hidden">
        <div className="absolute bottom-0 w-full h-full transition-transform duration-300 ease-in-out group-hover:-translate-y-[100px]">
          <Image
            src={image}
            width={500}
            height={300}
            alt="Project screenshot"
            className="rounded-2xl object-contain scale-125 object-top"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
