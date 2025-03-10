"use client"

import Link from "next/link";
import { useState } from "react";

export default function SignUp() {
  const [capsLockEnabled, setCapsLockEnabled] = useState(false);
  const [nameError, setNameError] = useState("");

  const checkCapsLock = (e: React.KeyboardEvent) => {
    setCapsLockEnabled(e.getModifierState("CapsLock"));
  };

  const validateName = (name: string) => {
    const forbiddenNames = ["вов","вовка","володя","вовчик", "вова", "владимир", "вован", "кова"];
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

            <div className="mt-6 space-y-5">
              <button
                type="submit"
                className="btn w-full bg-linear-to-t from-red-600 to-red-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
              >
                Register
              </button>
              <div className="flex items-center gap-3 text-center text-sm italic text-gray-600 before:h-px before:flex-1 before:bg-linear-to-r before:from-transparent before:via-gray-400/25 after:h-px after:flex-1 after:bg-linear-to-r after:from-transparent after:via-gray-400/25">
                or
              </div>
              <button
                type="button"
                className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
              >
                Sign In with Google
              </button>
            </div>
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