"use client";
import React from "react";
import { motion } from 'framer-motion';
import Image from "next/image";
import '@/app/History/hist.css';

const sectionData = [
  {
    title: "The History of Games",
    description: "The history of games is a fascinating journey that spans centuries. From ancient board games to today's cutting-edge video games, the evolution of gaming has been shaped by technology, culture, and human creativity",
    imageSrc: "/histgames.jpg"
  },
  {
    title: "Early Games",
    description: "Games have been an integral part of human civilization. Ancient civilizations indulged in various board games, dice games, and sports. Examples include Senet in Ancient Egypt and Chess in medieval times",
    imageSrc: "/chessimage.jpg"
  },
  {
    title: "The Advent of Video Games",
    description: "The mid-20th century saw the emergence of electronic games. In 1958, William Higinbotham created 'Tennis for Two,' considered one of the earliest video games. However, it was the release of 'Pong' by Atari in 1972 that marked the beginning of the video game industry",
    imageSrc: "/Pong.jpg"
  },
  {
    title: "The Golden Age of Arcades",
    description: "The late 1970s and early 1980s witnessed the golden age of arcade games. Classics like 'Space Invaders,' 'Pac-Man,' and 'Donkey Kong' captured the imaginations of players worldwide, leading to the widespread popularity of video gaming",
    imageSrc: "/arcade.jpg"
  },
  {
    title: "The Rise of Home Consoles",
    description: "The 1980s saw the introduction of home gaming consoles, with the Nintendo Entertainment System (NES) leading the way. Iconic franchises like Super Mario Bros. and The Legend of Zelda became household names, revolutionizing the way people played games at home",
    imageSrc: "/homeconsole.jpg"
  },
  {
    title: "The Era of PC Gaming",
    description: "The rise of personal computers in the 1990s brought forth a new era of gaming. PC gaming flourished with titles like 'Doom,' 'Quake,' and 'Warcraft,' setting the stage for the expansive and diverse PC gaming landscape we know today",
    imageSrc: "/pcgaming.png"
  },
  {
    title: "Modern Gaming and Esports",
    description: "The 21st century has seen the evolution of gaming into a multi-billion-dollar industry. With the advent of powerful consoles, online gaming, and esports, video games have become a mainstream form of entertainment, attracting millions of players and spectators globally",
    imageSrc: "/esports.jpg"
  },
  {
    title: "The Future of Gaming",
    description: "As technology continues to advance, the future of gaming holds exciting possibilities. Virtual reality (VR), augmented reality (AR), and cloud gaming are poised to shape the next chapter in the ever-evolving history of games.",
    imageSrc: "/vrgaming.jpg"
  }
];


export default function Main() {
  return (
    <body>
      {sectionData.map((section, index) => (
        <motion.div key={index} initial={{ opacity: 0, x: -150 }} whileInView={{ opacity: 1, x: 0 }} viewport={{once:true}} transition={{delay:0.2, duration:1}} className="alldiv">
          <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, x: 0 }}viewport={{once:true}} transition={{delay:0.2, duration:1}} >{section.title}</motion.h1>
          <motion.p initial={{ opacity: 0, x: 150 }} whileInView={{ opacity: 1, x: 0 }}viewport={{once:true}} transition={{delay:0.2, duration:1}} >{section.description}</motion.p>
          <br />
          <motion.div initial={{ opacity: 0, x: -150 }} whileInView={{ opacity: 1, x: 0 }}viewport={{once:true}} transition={{delay:0.2, duration:1}} >
            <Image src={section.imageSrc} width={800} height={400} />
          </motion.div>
        </motion.div>
      ))}
    </body>
  );
}
