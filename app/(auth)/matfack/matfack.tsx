"use client"

import Link from "next/link";
import { useState } from "react";

export default function matfack() {
  const [capsLockEnabled, setCapsLockEnabled] = useState(false);
  const [nameError, setNameError] = useState("");

  const checkCapsLock = (e: React.KeyboardEvent) => {
    setCapsLockEnabled(e.getModifierState("CapsLock"));
  };

  const validateName = (name: string) => {
    const forbiddenNames = ["вов","вовка","володя","вовчик", "вова", "владимир", "вован", "кова", "vova", "vladimir", "azovchik", "азовчик", "4308чик", "каштан338", "даун338", "вовчик338", "boва"];
    if (forbiddenNames.includes(name.toLowerCase())) {
      setNameError("Это имя не существует");
      return false;
    }
    setNameError("");
    return true;
  };

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="pb-12 text-center">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-red-200),var(--color-gray-50),var(--color-red-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Заполнить форму поступления
              
            </h1>
          </div>

          <form className="mx-auto max-w-[400px]">
            <div className="space-y-5">
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-red-200/65"
                  htmlFor="name"
                >
                  Имя <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  className="form-input w-full"
                  placeholder="Ваше имя"
                  onChange={(e) => validateName(e.target.value)}
                  onKeyUp={(e) => {
                    checkCapsLock(e);
                    validateName(e.currentTarget.value);
                  }}
                  required
                />
                {nameError && (
                  <p className="text-red-500 text-sm mt-1">{nameError}</p>
                )}
              </div>

              {/* Остальные поля формы */}
              {/* <div>
                <label
                  className="mb-1 block text-sm font-medium text-red-200/65"
                  htmlFor="company"
                >
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="company"
                  type="text"
                  className="form-input w-full"
                  placeholder="Your company name"
                  required
                />
              </div> */}

              <div>
                <label
                  className="mb-1 block text-sm font-medium text-red-200/65"
                  htmlFor="email"
                >
                  Адрес электронной почты <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-input w-full"
                  placeholder="EMAIL"
                />
              </div>

              {/* <div>
                <label
                  className="block text-sm font-medium text-red-200/65"
                  htmlFor="password"
                >
                  Пароль <span className="text-red-500">*</span>
                </label>
                <input
                  id="password"
                  type="password"
                  className="form-input w-full"
                  placeholder="Password (at least 10 characters)"
                  onKeyUp={checkCapsLock}
                />
              </div> */}
            </div>

            {capsLockEnabled && (
              <div className="text-red-500 text-sm mt-4">
                Caps Lock включен
              </div>
            )}

          </form>

          <div className="mt-6 text-center text-sm text-red-200/65">
            Already have an account?{" "}
            <Link className="font-medium text-red-500" href="/signin">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}