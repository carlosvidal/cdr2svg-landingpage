export default {
  // Meta / SEO
  meta: {
    title: 'CDR2SVG — Open CorelDRAW files on Mac',
    description: 'Convert CorelDRAW .cdr files to SVG, EPS, PDF and AI on your Mac — no CorelDRAW needed. Preview, export and copy SVG code. Native Apple Silicon.',
    keywords: 'open cdr file mac, cdr to svg mac, coreldraw without coreldraw, cdr file converter mac, cdr to illustrator mac, convert cdr to ai mac',
    ogTitle: 'CorelDRAW files. No CorelDRAW required.',
    ogDescription: 'Convert .cdr to SVG, EPS, PDF and AI — natively on Apple Silicon.',
  },

  // Navbar
  nav: {
    features: 'Features',
    howItWorks: 'How it works',
    pricing: 'Pricing',
    faq: 'FAQ',
    download: 'Download',
  },

  // Hero
  hero: {
    badge: 'macOS 13+ · Apple Silicon native · One-time purchase',
    headline: 'CorelDRAW files.',
    headlineAccent: 'No CorelDRAW required.',
    subheadline: 'Convert <code>.cdr</code> logos to SVG, EPS, PDF and AI — and open them in Illustrator, Affinity\u00a0Designer or Inkscape.',
    description: 'You downloaded a logo from Brands of the World. It\'s a <code>.cdr</code> file. Illustrator won\'t open it. Affinity can\'t touch it. Inkscape just gives up. CDR2SVG converts it in seconds.',
    cta: 'Download CDR2SVG',
    ctaBuy: 'Buy a license — $9',
    footnote: 'Free to try · $9 to unlock',
    imgAlt: 'CDR2SVG — Convert CorelDRAW files to SVG on Mac',
  },

  // Features
  features: {
    title: 'Everything you need.',
    titleFaded: 'Nothing you don\'t.',
    subtitle: 'Built for designers who don\'t use CorelDRAW.',
    items: [
      { title: 'Instant vector preview', description: 'See exactly what\'s inside the .cdr file before you export. No surprises, no wasted conversions.' },
      { title: 'Four export formats', description: 'SVG, EPS, PDF and AI — the formats Illustrator, Affinity Designer and Inkscape actually speak.' },
      { title: 'SVG code view', description: 'See the raw SVG markup. Copy it straight to your clipboard and paste it anywhere — no file needed.' },
      { title: 'Native Apple Silicon', description: 'Built for M-series Macs. Snappy, lightweight, no Rosetta emulation layer slowing things down.' },
      { title: 'Drag and drop', description: 'Drop a .cdr file, get your output. That\'s the whole workflow.' },
      { title: 'No subscription', description: 'Buy once, use forever. No monthly fees, no cloud upload, no account required.' },
    ],
  },

  // How It Works
  howItWorks: {
    title: 'Three steps.',
    titleFaded: 'Seriously.',
    steps: [
      { title: 'Drop your .cdr file', description: 'Drag any CorelDRAW file into CDR2SVG. The vector preview loads instantly — no waiting, no progress bars.' },
      { title: 'Check the preview', description: 'See the artwork before you commit to exporting. Switch to the SVG code view if you need the markup directly.' },
      { title: 'Export or copy', description: 'Save as SVG, EPS, PDF or AI — or just copy the SVG code and paste it wherever you need it. Done.' },
    ],
    quote: 'Downloaded a client\'s brand guidelines from Brands of the World. Six .cdr files. Zero way to open them.',
    quoteFollow: 'That\'s why CDR2SVG exists. Drop the file, get clean vectors, move on with your day. No CorelDRAW license. No subscription to some online converter. No file upload to a server you don\'t control.',
  },

  // Pricing
  pricing: {
    title: 'Buy once.',
    titleAccent: 'Use forever.',
    subtitle: 'No subscription. No account. Just a license key and the app.',
    planName: 'CDR2SVG',
    price: '$9',
    priceLabel: 'one-time',
    features: [
      'One Mac license',
      'SVG, EPS, PDF and AI export',
      'SVG code view + clipboard copy',
      'Instant vector preview',
      'Free updates for one year',
      'macOS 13+ · Apple Silicon',
    ],
    emailLabel: 'Your email (we\'ll send the license here)',
    emailPlaceholder: 'you@example.com',
    continueToPay: 'Continue to payment',
    processing: 'Processing payment...',
    paypalLoading: 'PayPal is loading, please wait...',
    paymentFailed: 'Payment failed. Please try again.',
    paymentError: 'Something went wrong. Please try again.',
    paymentCancelled: 'Payment cancelled. You can try again whenever you\'re ready.',
    secureCheckout: 'Secure checkout via PayPal',
    footnote: 'Download free · Convert unlimited files · License unlocks all formats',
  },

  // FAQ
  faq: {
    title: 'Questions',
    items: [
      { question: 'Can I try it before buying?', answer: 'Yes. Download CDR2SVG for free and get 10 full conversions — no strings attached. Preview your files, export to any format, copy SVG code. If it works for you (it will), a license unlocks unlimited conversions.' },
      { question: 'Does it work with all versions of CorelDRAW files?', answer: 'CDR2SVG uses libcdr to parse files, which supports CDR versions 7 through X8 and most files from newer versions. If you have a file that doesn\'t convert, get in touch.' },
      { question: 'Does my file get uploaded anywhere?', answer: 'Never. Everything runs locally on your Mac. Your files stay on your machine.' },
      { question: 'Why is it Apple Silicon only?', answer: 'CDR2SVG is built and tested on M-series Macs. Intel support may come later — sign up to be notified.' },
    ],
  },

  // Footer
  footer: {
    privacy: 'Privacy',
    terms: 'Terms',
    support: 'Support',
    drop2jpg: 'Drop2JPG',
  },

  // Drop2JPG page
  drop2jpg: {
    title: 'Drop2JPG — Convert images to JPG on Mac',
    description: 'Free macOS mini app. Drag WebP, AVIF, PNG or HEIC images onto the Dock icon and get JPGs in your Downloads folder. Native Apple Silicon.',
    headline: 'Images in.',
    headlineAccent: 'JPGs out.',
    subheadline: 'Drag WebP, AVIF, PNG or HEIC files onto the Dock icon. Get JPGs in your Downloads folder. That\'s it.',
    badge: 'macOS 13+ · Apple Silicon · Free',
    cta: 'Download Drop2JPG',
    footnote: '100% free · No account · No upload',
    features: [
      { title: 'Drag to Dock', description: 'Drop images onto the Drop2JPG icon in your Dock. Converted JPGs appear in your Downloads folder instantly.' },
      { title: 'WebP, AVIF, PNG, HEIC', description: 'Supports the modern image formats that macOS Preview can\'t easily batch-convert to JPG.' },
      { title: 'Quality 90%, sRGB', description: 'High-quality output with sRGB color profile. Transparent backgrounds get a clean white fill.' },
      { title: 'Native Apple Silicon', description: 'Built in Swift for M-series Macs. Lightweight, fast, no Electron bloat.' },
      { title: 'macOS notifications', description: 'Get a summary notification after each batch conversion. Know exactly what was converted.' },
      { title: 'Free forever', description: 'No license, no subscription, no catch. Just a tiny free utility that does one thing well.' },
    ],
    backToCdr2svg: '← Back to CDR2SVG',
  },

  // Thank you page
  gracias: {
    title: 'Thank you!',
    subtitle: 'Your license key is on its way to your inbox.',
    instructions: 'Check your email for your serial number. Open CDR2SVG, enter your email and serial to activate.',
    back: '← Back to homepage',
  },

  // Privacy page
  privacy: {
    title: 'Privacy Policy',
    intro: 'CDR2SVG processes all files locally on your Mac. No files are uploaded to any server.',
    collectTitle: 'What we collect',
    collectText: 'When you purchase a license, we collect your email address and payment information through PayPal. We store a hashed version of your license key and your email to validate activations.',
    noCollectTitle: 'What we don\'t collect',
    noCollectText: 'We do not collect, store, or transmit any files you process with CDR2SVG. We do not use analytics or tracking on the app itself.',
    contactTitle: 'Contact',
    contactText: 'Questions? Email',
  },

  // Terms page
  terms: {
    title: 'Terms of Service',
    licenseTitle: 'License',
    licenseText: 'Each license key activates CDR2SVG on one Mac. The license is perpetual — it does not expire. Free updates are included for one year from purchase.',
    refundsTitle: 'Refunds',
    refundsText: 'We offer a 14-day refund policy. If CDR2SVG doesn\'t work for your use case, contact us and we\'ll process a full refund.',
    disclaimerTitle: 'Disclaimer',
    disclaimerText: 'CDR2SVG is provided "as is" without warranties of any kind. File conversion accuracy depends on the source file and CDR format version.',
    contactTitle: 'Contact',
    contactText: 'Email',
  },
} as const;
