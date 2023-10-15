"use client";
import React, { useState } from "react";
import styles from "@/app/styles/components/DateSelection.module.css";

import { Menu } from "@headlessui/react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

// Date
import { DateRange } from "react-date-range";
import { format, addDays } from "date-fns";

// date css
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const locations = [
  "Main Street 123, United States",
  "Business Avenue 456, Canada",
  "Park Road 789, United Kindom",
];

export function DateSelection() {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  return (
    <Menu as="div" className={styles.menuContainer}>
      <div className={styles.menuContent}>
        <Menu.Button className={styles.menuButton}>
          <div className={styles.wrapperIcon}>
            <FaCalendarAlt className="text-accent" />
            <div className="text-[15px] uppercase font-bold">Select Date</div>
          </div>
          <div className="flex items-center gap-x-3 xl:ml-6">
            <div className="text-[13px] font-medium text-secondary">
              {format(date[0].startDate, "dd/MM/yyy")}
            </div>
            <FaArrowRightLong className="text-accent text-[12px]" />
            <div className="text-[13px] font-medium text-secondary">
              {date[0].endDate ? (
                <div>{format(date[0].endDate, "dd/MM/yyy")}</div>
              ) : (
                <div>{format(date[0].startDate, "dd/MM/yyy")}</div>
              )}
            </div>
          </div>
        </Menu.Button>

        <Menu.Items className={styles.menuItems}>
          <DateRange
            onChange={(item) => setDate([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={date}
            rangeColors={["#ed1d24"]}
            minDate={addDays(new Date(), 0)}
          />
        </Menu.Items>
      </div>
    </Menu>
  );
}
