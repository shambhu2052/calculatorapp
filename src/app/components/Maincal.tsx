"use client";
import React, { useState } from "react";
const Maincal = () => {
  const [value, setValue] = useState<string>("");
  const handleEqualClick = () => {
    try {
      const result = eval(value);
      setValue(result.toString());
    } catch (error) {
      setValue("Error");
    }
  };
  return (
    <div className="con">
      <div className=" w-full h-[100vh] flex items-center justify-center mx-auto">
        <div className="p-[20px] rounded-lg bg-white">
          <form action="">
            <div>
              <input type="text" value={value} className="w-full" />
            </div>
            <div>
              <input type="button" value="AC" onClick={() => setValue("")} />
              <input
                type="button"
                value="DE"
                onClick={() => setValue(value.slice(0, -1))}
              />
              <input
                type="button"
                value="."
                onClick={(e) => setValue(value + e.currentTarget.value)}
              />
              <input
                type="button"
                value="/"
                onClick={(e) => setValue(value + e.currentTarget.value)}
              />
            </div>
            <div>
              <input
                type="button"
                value="7"
                onClick={(e) => setValue(value + e.currentTarget.value)}
              />
              <input
                type="button"
                value="8"
                onClick={(e) => setValue(value + e.currentTarget.value)}
              />
              <input
                type="button"
                value="9"
                onClick={(e) => setValue(value + e.currentTarget.value)}
              />
              <input
                type="button"
                value="*"
                onClick={(e) => setValue(value + e.currentTarget.value)}
              />
            </div>
            <div>
              <input
                type="button"
                value="4"
                onClick={(e) => setValue(value + e.currentTarget.value)}
              />
              <input
                type="button"
                value="5"
                onClick={(e) => setValue(value + e.currentTarget.value)}
              />
              <input
                type="button"
                value="6"
                onClick={(e) => setValue(value + e.currentTarget.value)}
              />
              <input
                type="button"
                value="+"
                onClick={(e) => setValue(value + e.currentTarget.value)}
              />
            </div>
            <div>
              <input
                type="button"
                value="1"
                onClick={(e) => setValue(value + e.currentTarget.value)}
              />
              <input
                type="button"
                value="2"
                onClick={(e) => setValue(value + e.currentTarget.value)}
              />
              <input
                type="button"
                value="2"
                onClick={(e) => setValue(value + e.currentTarget.value)}
              />
              <input
                type="button"
                value="-"
                onClick={(e) => setValue(value + e.currentTarget.value)}
              />
            </div>
            <div>
              <input
                type="button"
                value="00"
                onClick={(e) => setValue(value + e.currentTarget.value)}
              />
              <input
                type="button"
                value="0"
                onClick={(e) => setValue(value + e.currentTarget.value)}
              />
              <input
                type="button"
                value="="
                className="equal"
                onClick={handleEqualClick}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Maincal;
