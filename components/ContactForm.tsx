"use client";

import { useState, type FormEvent } from "react";
import { Leaf } from "./ui";

// Web3Forms access key (https://web3forms.com). It is safe to ship in the page:
// it can only deliver submissions to the inbox it was created for.
// Replace the placeholder with the key Web3Forms emailed you.
const WEB3FORMS_ACCESS_KEY = "5a3c94ef-805b-4f29-af92-bf73544affa7";
const CONTACT_EMAIL = "meet.dhaduk@modernsmilk.com";
const SUBJECT = "Enquiry from modernharvest.in";

const hasKey = !WEB3FORMS_ACCESS_KEY.startsWith("YOUR_");

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-md bg-white px-4 py-3.5 text-[15px] ring-1 ring-black/10 transition-shadow placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-brand";

function openMailClient(data: FormData) {
  const body = [
    `Name: ${data.get("name") ?? ""}`,
    `Company: ${data.get("company") ?? ""}`,
    `Email: ${data.get("email") ?? ""}`,
    `Interest: ${data.get("interest") ?? ""}`,
    "",
    String(data.get("message") ?? ""),
  ].join("\n");
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    SUBJECT
  )}&body=${encodeURIComponent(body)}`;
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: bots fill hidden fields, people don't.
    if (data.get("botcheck")) return;

    if (!hasKey) {
      openMailClient(data);
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `${SUBJECT} — ${data.get("interest") ?? "General enquiry"}`,
          from_name: "Modern Harvest website",
          replyto: data.get("email"),
          name: data.get("name"),
          company: data.get("company"),
          email: data.get("email"),
          interest: data.get("interest"),
          message: data.get("message"),
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.success) throw new Error(json.message || "Submission failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const sending = status === "sending";

  return (
    <form className="grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <label className="block">
        <span className="mb-2 block text-[15px]">Name</span>
        <input name="name" required autoComplete="name" className={field} placeholder="Your name" />
      </label>

      <label className="block">
        <span className="mb-2 block text-[15px]">Company</span>
        <input name="company" autoComplete="organization" className={field} placeholder="Company name" />
      </label>

      <label className="block">
        <span className="mb-2 block text-[15px]">Email</span>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className={field}
          placeholder="you@company.com"
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-[15px]">Interest</span>
        <select name="interest" className={field} defaultValue="General enquiry">
          <option>General enquiry</option>
          <option>Precision farming</option>
          <option>Sustainable irrigation</option>
          <option>Supply chain support</option>
          <option>Climate-resilient program</option>
          <option>Organic practices</option>
        </select>
      </label>

      <label className="block sm:col-span-2">
        <span className="mb-2 block text-[15px]">Message</span>
        <textarea
          name="message"
          rows={5}
          required
          className={`${field} resize-y`}
          placeholder="Tell us about your land, your crops, and what you're trying to solve."
        />
      </label>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={sending}
          className="inline-flex items-center gap-2.5 rounded-pill bg-brand px-7 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-brand-dark disabled:cursor-wait disabled:opacity-70"
        >
          <Leaf />
          {sending ? "Sending…" : "Send enquiry"}
        </button>
        <p
          aria-live="polite"
          className={`mt-4 text-[15px] ${status === "error" ? "text-red-700" : "text-muted"}`}
        >
          {status === "sent" &&
            (hasKey
              ? "Thank you — your enquiry is on its way. We'll reply within one working day."
              : `Opening your email app — if nothing happens, write to ${CONTACT_EMAIL}.`)}
          {status === "error" && (
            <>
              Sorry, something went wrong sending your message. Please try again or email{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
                {CONTACT_EMAIL}
              </a>
              .
            </>
          )}
          {(status === "idle" || status === "sending") &&
            "We reply to every enquiry within one working day."}
        </p>
      </div>
    </form>
  );
}
