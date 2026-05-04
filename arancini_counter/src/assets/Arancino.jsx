export default function arancino() {
  return (
    <svg
      viewBox="0 0 80 90"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <radialGradient id="bodyGrad" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stop-color="#F4A830" />
          <stop offset="60%" stop-color="#D4821A" />
          <stop offset="100%" stop-color="#A85A0A" />
        </radialGradient>
        <radialGradient id="crustGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#E8952A" />
          <stop offset="100%" stop-color="#C06A10" />
        </radialGradient>
        <filter id="softShadow" x="-20%" y="-10%" width="140%" height="130%">
          <feDropShadow
            dx="0"
            dy="4"
            stdDeviation="4"
            flood-color="#A85A0A"
            flood-opacity="0.35"
          />
        </filter>
      </defs>

      <path
        d="M40 5 C40 5, 72 55, 72 68 C72 80, 57 88, 40 88 C23 88, 8 80, 8 68 C8 55, 40 5, 40 5Z"
        fill="url(#bodyGrad)"
        filter="url(#softShadow)"
      />

      <circle cx="30" cy="45" r="2.5" fill="#A85A0A" opacity="0.5" />
      <circle cx="48" cy="38" r="2" fill="#A85A0A" opacity="0.5" />
      <circle cx="38" cy="60" r="2.5" fill="#A85A0A" opacity="0.5" />
      <circle cx="55" cy="58" r="2" fill="#A85A0A" opacity="0.4" />
      <circle cx="25" cy="62" r="2" fill="#A85A0A" opacity="0.4" />
      <circle cx="42" cy="75" r="2" fill="#A85A0A" opacity="0.45" />
      <circle cx="52" cy="72" r="1.5" fill="#A85A0A" opacity="0.4" />
      <circle cx="33" cy="72" r="1.5" fill="#A85A0A" opacity="0.4" />
      <circle cx="60" cy="65" r="1.8" fill="#A85A0A" opacity="0.35" />
      <circle cx="20" cy="70" r="1.8" fill="#A85A0A" opacity="0.35" />
      <circle cx="44" cy="50" r="1.5" fill="#A85A0A" opacity="0.3" />
      <circle cx="35" cy="55" r="1.2" fill="#A85A0A" opacity="0.3" />

      <path
        d="M40 12 C40 12, 32 30, 28 42 C32 36, 38 20, 40 12Z"
        fill="#F9C75A"
        opacity="0.6"
      />

      <path
        d="M43 18 C43 18, 39 28, 37 36 C40 30, 43 22, 43 18Z"
        fill="#FDE08A"
        opacity="0.35"
      />

      <path
        d="M37 5 C37 5, 40 5, 43 5 C41 8, 39 8, 37 5Z"
        fill="#C06A10"
        opacity="0.3"
      />

      <ellipse cx="40" cy="87" rx="17" ry="3" fill="#8B4500" opacity="0.15" />
    </svg>
  );
}
