/**
 * Floating click-to-chat button, bottom-right on every page.
 * Number matches the phone on app/contact-us/page.tsx.
 */
const NUMBER = "919213022464";
const MESSAGE = "Hello Modern Harvest, I'd like to enquire about your products.";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${NUMBER}?text=${encodeURIComponent(MESSAGE)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Modern Harvest on WhatsApp"
      data-print-hide
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:bottom-7 sm:right-7"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-7 w-7">
        <path d="M.06 24l1.7-6.2A11.9 11.9 0 1 1 12 24a11.9 11.9 0 0 1-5.7-1.45L.06 24zM6.6 20.1l.37.22a9.9 9.9 0 1 0-3.4-3.42l.24.38-1 3.66 3.8-.84z" />
        <path d="M9.5 7.3c-.2-.46-.42-.47-.62-.48h-.53c-.18 0-.48.07-.73.35s-.96.94-.96 2.3.98 2.66 1.12 2.85c.14.18 1.92 3.07 4.74 4.18 2.34.92 2.82.74 3.33.7.5-.05 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.11-.25-.18-.53-.32s-1.64-.81-1.9-.9c-.25-.1-.43-.14-.62.14s-.71.9-.87 1.08c-.16.18-.32.2-.6.07s-1.18-.44-2.25-1.4c-.83-.74-1.4-1.65-1.56-1.93s-.02-.43.12-.57c.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.35-.02-.49S9.7 7.76 9.5 7.3z" />
      </svg>
    </a>
  );
}
