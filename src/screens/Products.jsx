import React from "react";
import "../styles/products.css";

import { motion } from "framer-motion";

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hue = (h) => `hsl(${h}, 100%, 50%)`;

function Card({ title, hueA, hueB, description }) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="splash" style={{ background }} />
      <motion.div className="card" variants={cardVariants}>
        <div className="product-content">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

const food = [
  [
    "MediCab",
    340,
    10,
    "From Individual Clinics or Field Hospitals to Diagnostic centres, specialised designs for any requirement",
  ],
  [
    "AgriCab",
    20,
    40,
    "Giving the power back to the farmers, micro factories that act as storage facilities and processing centres",
  ],
  [
    "ModStayz",
    60,
    90,
    "Designed to deliver superior comfort and experience in resorts, hotels and coliving spaces",
  ],
  // ["🍐", 80, 120],
  // ["🍏", 100, 140],
  // ["🫐", 205, 245],
  // ["🍆", 260, 290],
  // ["🍇", 290, 320]
];

export default function Products() {
  return (
    <div className="product-wrapper">
      {food.map(([title, hueA, hueB, description]) => (
        <Card
          title={title}
          hueA={hueA}
          hueB={hueB}
          description={description}
          key={title}
        />
      ))}
    </div>
  );
}
