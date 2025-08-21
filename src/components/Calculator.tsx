"use client";
import { useState } from "react";

export default function Calculadora() {
  const [display, setDisplay] = useState("");
  const backspace = () => {
    setDisplay(display.slice(0, -1));
  };

  const sun = () => {
    const values = display.split("+");
    const result = values.reduce(
      (acumuladora, valorAtual) => acumuladora + Number(valorAtual),
      0
    );
    setDisplay(String(result));
  };
  const subtraction = () => {
    const values = display.split("-");
    const numberValues = values.map((value) => Number(value));
    const result = numberValues.reduce(
      (acumuladora, valorAtual) => acumuladora - valorAtual
    );
    setDisplay(String(result));
  };
  const product = () => {
    const values = display.split("*");
    const numberValues = values.map((value) => Number(value));
    const result = numberValues.reduce(
      (acumuladora, valorAtual) => acumuladora * valorAtual
    );
    setDisplay(String(result));
  };
  const division = () => {
    const values = display.split("/");
    const numberValues = values.map((value) => Number(value));
    const result = numberValues.reduce(
      (acumuladora, valorAtual) => acumuladora / valorAtual
    );
    setDisplay(String(result));
    if (numberValues.includes(0)) {
      alert("Divisão por zero não é permitida");
      setDisplay("");
    }
  };

  const calculate = () => {
    if (display.includes("+")) {
      sun();
    } else if (display.includes("-")) {
      subtraction();
    } else if (display.includes("*")) {
      product();
    } else if (display.includes("/")) {
      division();
    } else {
      alert("Operação inválida");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-700">
      <div className="flex flex-col items-center justify-center w-[400px] h-[550px] bg-gray-900 rounded-3xl shadow-2xl p-6">
        {/* Display */}
        <div className="w-full bg-gray-800 rounded-xl shadow-inner text-white text-3xl font-mono text-right p-4 mb-6 overflow-x-auto">
          {display || "0"}
        </div>

        {/* Botões */}
        <div className="grid grid-cols-4 gap-4 w-full">
          {/* Primeira linha */}
          {["7","8","9","/"].map((val, idx) => (
            <button
              key={val}
              className={`p-4 rounded-xl text-white font-bold text-xl shadow-md transition-transform transform active:scale-95 ${
                val === "/" ? "bg-orange-500 hover:bg-orange-400" : "bg-gray-700 hover:bg-gray-600"
              }`}
              onClick={() => {
                if ("0123456789".includes(val)) setDisplay(display + val);
                else {
                  if (
                    display !== "" &&
                    !display.includes("-") &&
                    !display.includes("*") &&
                    !display.includes("+") &&
                    !["+", "-", "*", "/"].includes(display[display.length - 1])
                  ) setDisplay(display + val);
                }
              }}
            >
              {val}
            </button>
          ))}

          {/* Segunda linha */}
          {["4","5","6","*"].map((val) => (
            <button
              key={val}
              className={`p-4 rounded-xl text-white font-bold text-xl shadow-md transition-transform transform active:scale-95 ${
                val === "*" ? "bg-orange-500 hover:bg-orange-400" : "bg-gray-700 hover:bg-gray-600"
              }`}
              onClick={() => {
                if ("0123456789".includes(val)) setDisplay(display + val);
                else {
                  if (
                    display !== "" &&
                    !display.includes("-") &&
                    !display.includes("+") &&
                    !display.includes("/")
                  ) {
                    if (!["+", "-", "*", "/"].includes(display[display.length - 1]))
                      setDisplay(display + val);
                  }
                }
              }}
            >
              {val}
            </button>
          ))}

          {/* Terceira linha */}
          {["1","2","3","-"].map((val) => (
            <button
              key={val}
              className={`p-4 rounded-xl text-white font-bold text-xl shadow-md transition-transform transform active:scale-95 ${
                val === "-" ? "bg-orange-500 hover:bg-orange-400" : "bg-gray-700 hover:bg-gray-600"
              }`}
              onClick={() => {
                if ("0123456789".includes(val)) setDisplay(display + val);
                else {
                  if (
                    display !== "" &&
                    !display.includes("+") &&
                    !display.includes("*") &&
                    !display.includes("/")
                  ) {
                    if (!["+", "-", "*", "/"].includes(display[display.length - 1]))
                      setDisplay(display + val);
                  }
                }
              }}
            >
              {val}
            </button>
          ))}

          {/* Quarta linha */}
          <button
            className="p-4 rounded-xl text-white font-bold text-xl shadow-md bg-red-500 hover:bg-red-400 transition-transform transform active:scale-95"
            onClick={() => setDisplay("")}
          >
            C
          </button>
          <button
            className="p-4 rounded-xl text-white font-bold text-xl shadow-md bg-gray-700 hover:bg-gray-600 transition-transform transform active:scale-95"
            onClick={() => setDisplay(display + "0")}
          >
            0
          </button>
          <button
            className="p-4 rounded-xl text-white font-bold text-xl shadow-md bg-gray-700 hover:bg-gray-600 transition-transform transform active:scale-95"
            onClick={backspace}
          >
            ←
          </button>
          <button
            className="p-4 rounded-xl text-white font-bold text-xl shadow-md bg-orange-500 hover:bg-orange-400 transition-transform transform active:scale-95"
            onClick={() => {
              if (
                display !== "" &&
                !display.includes("-") &&
                !display.includes("*") &&
                !display.includes("/")
              ) {
                if (!["+", "-", "*", "/"].includes(display[display.length - 1]))
                  setDisplay(display + "+");
              }
            }}> + </button>

          {/* Botão igual */}
          <button
            onClick={calculate}
            className="col-span-4 p-4 rounded-xl bg-green-500 hover:bg-green-400 text-white font-bold text-2xl shadow-lg transition-transform transform active:scale-95 mt-4"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}
