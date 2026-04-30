export type Doctor = {
  slug: string;
  name: string;
  title: string;
  category: "Founder" | "Andrology" | "Urology" | "Fertility" | "Oncology" | "Counseling" | "Radiology";
  qualifications: string[];
  experience: string;
  image: string;
  shortBio: string;
  fullBio: string[];
  specialties: string[];
  expertise: string[];
  languages: string[];
  registration?: string;
  accent: "primary" | "secondary" | "accent";
};

export const doctors: Doctor[] = [
  {
    slug: "dr-praveen-joshi",
    name: "Dr. Praveen Joshi",
    title: "Founder & Chief Urologist, Andrologist",
    category: "Founder",
    qualifications: ["MBBS", "DNB - General Surgery", "DNB - Urology / Genito-Urinary Surgery"],
    experience: "20+ Years",
    image: "/dr-praveen-joshi.webp",
    shortBio:
      "Founder of Joshi's Andrology & Urology Centre with a special interest in Male Infertility, Sexual Dysfunction, and Penile Reconstruction.",
    fullBio: [
      "Dr. Praveen Joshi is a leading Urologist and Andrologist who founded Joshi's Andrology & Urology Centre in 2018 with a vision of providing comprehensive, ethical, and patient-centric care under one roof. Over the past two decades, he has built a reputation for clinical excellence, deep specialization, and compassionate patient care.",
      "His areas of special interest include Male Infertility, Male Sexual Dysfunction, Penile Reconstruction, and Penile Implants. He has performed over 4,000 surgeries and treated more than 10,000 patients across a wide range of urological and andrological conditions.",
      "Dr. Joshi believes in evidence-based medicine combined with empathy. He has trained extensively in advanced reproductive surgery, microsurgical techniques, and minimally invasive urology, and is committed to bringing world-class care to Bengaluru.",
    ],
    specialties: [
      "Male Infertility",
      "Erectile Dysfunction",
      "Penile Reconstruction",
      "Penile Implants",
      "Andrology",
      "Reconstructive Urology",
    ],
    expertise: [
      "Microsurgical Varicocele Ligation",
      "PESA / TESA / micro-TESE Sperm Retrieval",
      "Vasectomy Reversal",
      "Penile Prosthesis Implantation",
      "EDSWT (Shockwave Therapy for ED)",
      "Complex Urethral Reconstruction",
    ],
    languages: ["English", "Hindi", "Kannada"],
    registration: "Karnataka Medical Council",
    accent: "primary",
  },
  {
    slug: "dr-kanusha",
    name: "Dr. Kanusha",
    title: "Clinical Psychologist",
    category: "Counseling",
    qualifications: ["MA - Clinical Psychology", "M.Phil - Clinical Psychology"],
    experience: "8+ Years",
    image: "/doctor.svg",
    shortBio:
      "Clinical psychologist supporting patients with sexual dysfunction, performance anxiety, infertility-related stress, and relationship counseling.",
    fullBio: [
      "Dr. Kanusha provides confidential psychological counseling that complements the medical care offered at Joshi's Centre. Sexual dysfunction, infertility, and chronic urological conditions often have a significant emotional component — and addressing them holistically improves both treatment outcomes and quality of life.",
      "She works with individuals and couples using evidence-based approaches including cognitive behavioral therapy (CBT), sex therapy, and supportive counseling. Sessions are private, judgment-free, and tailored to each patient's needs.",
    ],
    specialties: ["Sex Therapy", "Couples Counseling", "Infertility Counseling", "Anxiety & Depression"],
    expertise: [
      "Cognitive Behavioral Therapy",
      "Performance Anxiety",
      "Relationship Counseling",
      "Stress Management",
    ],
    languages: ["English", "Hindi", "Kannada", "Telugu"],
    accent: "accent",
  },
  {
    slug: "dr-meera-rao",
    name: "Dr. Meera Rao",
    title: "Consultant Gynaecologist & IVF Specialist",
    category: "Fertility",
    qualifications: ["MBBS", "MS - Obstetrics & Gynaecology", "Fellowship in Reproductive Medicine"],
    experience: "14+ Years",
    image: "/doctor.svg",
    shortBio:
      "Reproductive medicine specialist managing the female component of fertility care including IUI, IVF, ICSI, and ovulation induction.",
    fullBio: [
      "Dr. Meera Rao leads the female fertility care at Joshi's Centre, working hand-in-hand with the andrology team to manage infertility as a couple's journey rather than an individual diagnosis. She has trained in advanced reproductive medicine and assisted reproductive technologies.",
      "Her practice covers ovarian stimulation, follicle monitoring, IUI, IVF, ICSI, and PICSI, with a strong focus on personalized protocols, ethical practice, and emotional support throughout the treatment cycle.",
    ],
    specialties: ["IVF", "ICSI", "PICSI", "IUI", "Ovulation Induction"],
    expertise: [
      "Controlled Ovarian Stimulation",
      "Follicular Monitoring",
      "Embryo Transfer",
      "Recurrent Pregnancy Loss",
      "PCOS Management",
    ],
    languages: ["English", "Hindi", "Kannada"],
    accent: "secondary",
  },
  {
    slug: "dr-arjun-nair",
    name: "Dr. Arjun Nair",
    title: "Consultant Radiologist",
    category: "Radiology",
    qualifications: ["MBBS", "MD - Radiodiagnosis"],
    experience: "9+ Years",
    image: "/doctor.svg",
    shortBio:
      "Radiologist specializing in urological imaging — ultrasound, doppler, scrotal imaging, and image-guided procedures.",
    fullBio: [
      "Dr. Arjun Nair heads the in-house imaging services at Joshi's Centre. Accurate, specialized urological imaging is critical for diagnosis and treatment planning — from scrotal doppler in infertility workup, to renal ultrasound for stones, to image-guided biopsies.",
      "He works directly with the surgical team to ensure rapid, focused reporting that translates into timely clinical decisions for patients.",
    ],
    specialties: ["Scrotal Doppler", "Renal Ultrasound", "Pelvic Imaging", "Image-Guided Procedures"],
    expertise: [
      "High-Resolution Ultrasound",
      "Color Doppler",
      "Uroflowmetry Interpretation",
      "Biopsy Guidance",
    ],
    languages: ["English", "Malayalam", "Hindi"],
    accent: "primary",
  },
];

export function getDoctor(slug: string): Doctor | undefined {
  return doctors.find((d) => d.slug === slug);
}
