"use client";
import React, { useState } from "react";
import { Menu } from "@headlessui/react";
import { FaClock } from "react-icons/fa";

import styles from "@/app/styles/components/HoursSelection.module.css";
import { FaArrowRightLong } from "react-icons/fa6";

// hours
const hours = ["10:00 AM", "12:00 AM", "14:00 AM", "16:00 AM"];

export function HoursSelection() {
  const [hour, setHour] = useState("10:00 AM");

  return (
    <Menu as="div" className={styles.menuContainer}>
      <div className={styles.menuContent}>
        <Menu.Button className={`dropdown-btn ${styles.menuButton}`}>
          <div className={styles.wrapperLabel}>
            <FaClock className="text-accent" />
            <div className={styles.label}>Select Hours</div>
          </div>
          <div className="flex items-center justify-center gap-x-3">
            <div className="font-medium text-[13px] text-secondary text-center xl:ml-6">
              {hour}
            </div>
            <FaArrowRightLong className="text-accent text-[12px]" />
            <div className="font-medium text-[13px] text-secondary text-center xl:ml-6">
              {hour}
            </div>
          </div>
        </Menu.Button>

        <Menu.Items className={`dropdown-menu ${styles.menuItems}`}>
          {hours.map((hour, index) => (
            <div
              onClick={() => setHour(hour)}
              className="cursor-pointer py-4 text-center hover:bg-gray-50"
              key={`${hour}-${index}`}
            >
              {hour}
            </div>
          ))}
        </Menu.Items>
      </div>
    </Menu>
  );
}
