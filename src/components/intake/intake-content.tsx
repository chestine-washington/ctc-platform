"use client";

import { useEffect, useRef, useState } from "react";
import { ClipboardList, LoaderCircle } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";

export function IntakeContent() {
  const container = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);
  const [ready, setReady] = useState(false);
  const [slow, setSlow] = useState(false);

  useEffect(() => {
    const host = container.current!;
    let revealTimer: ReturnType<typeof setTimeout>;
    // Script download alone is not readiness: Cognito still fetches and renders the form.
    const observer = new MutationObserver(() => {
      clearTimeout(revealTimer);
      if (!host.querySelector(".cog-form input:not([type=hidden]), .cog-form textarea")) return;
      revealTimer = setTimeout(() => {
        setReady(true);
        observer.disconnect();
      }, 250);
    });
    observer.observe(host, { childList: true, subtree: true });
    const slowTimer = setTimeout(() => setSlow(true), 15000);
    const script = document.createElement("script");
    script.src = "https://www.cognitoforms.com/f/seamless.js";
    script.dataset.key = "Qz86PqnrAEyMwS7Xgyzt4w";
    script.dataset.form = "1";
    script.onerror = () => setFailed(true);
    host.appendChild(script);
    return () => {
      observer.disconnect();
      clearTimeout(revealTimer);
      clearTimeout(slowTimer);
      script.onerror = null;
      host.replaceChildren();
    };
  }, []);

  return (
    <>
      <PageHeader
        icon={ClipboardList}
        eyebrow="Get Started"
        title="Intake Form"
        description="Complete our intake form to get started with Chance to Change."
        image="/images/intake-hero.png"
        imageAlt="Two people holding hands, one offering reassurance to the other as they begin the intake process."
      />
      <section className="py-10 lg:py-16 bg-background">
        <div className="container max-w-4xl">
          <div className="relative min-h-[520px] bg-card rounded-2xl p-4 sm:p-8 border border-border">
            {!ready && !failed && (
              <div role="status" className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center">
                <span className="rounded-full bg-sage-light/50 p-4 text-sage">
                  <LoaderCircle aria-hidden="true" className="h-7 w-7 animate-spin motion-reduce:animate-none" />
                </span>
                <p className="font-display text-lg font-semibold text-charcoal">Loading your intake form</p>
                <p className="max-w-sm text-sm text-muted-foreground">
                  {slow ? "This is taking longer than usual. Please wait a moment, or refresh the page to try again." : "Please wait a moment while the form gets ready."}
                </p>
              </div>
            )}
            <div
              id="ctc-intake-embed"
              ref={container}
              aria-hidden={!ready}
              inert={!ready}
              className={`transition-opacity duration-300 motion-reduce:transition-none ${ready ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            />
            {failed && <p role="alert">The intake form could not load. Please refresh this page or call <a className="underline" href="tel:+18007086448">(800) 708-6448</a> for help.</p>}
          </div>
        </div>
      </section>
    </>
  );
}
