"use client";

import { useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;

  userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
}

export default function PWAInstallPrompt() {
  const [installPrompt, setInstallPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);

  const [showInstall, setShowInstall] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();

      const promptEvent = event as BeforeInstallPromptEvent;

      setInstallPrompt(promptEvent);
      setShowInstall(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );
    };
  }, []);

  const handleInstall = async () => {
    if (!installPrompt) return;

    await installPrompt.prompt();

    const result = await installPrompt.userChoice;

    if (result.outcome === "accepted") {
      setShowInstall(false);
    }

    setInstallPrompt(null);
  };

  if (!showInstall) return null;

  return (
    <div className="fixed bottom-5 left-1/2 z-999 w-[90%] max-w-md -translate-x-1/2 rounded-2xl bg-white p-5 shadow-2xl">
      <h3 className="text-lg font-bold">Install Sofia</h3>

      <p className="mt-2 text-sm text-gray-600">
        Add Sofia to your home screen for quick access.
      </p>

      <div className="mt-4 flex gap-3">
        <button
          onClick={handleInstall}
          className="rounded-xl bg-emerald-500 px-5 py-2 text-white"
        >
          Add to Home Screen
        </button>

        <button
          onClick={() => setShowInstall(false)}
          className="rounded-xl bg-gray-100 px-5 py-2"
        >
          Later
        </button>
      </div>
    </div>
  );
}
