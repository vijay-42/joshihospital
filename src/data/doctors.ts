export type Doctor = {
  slug: string;
  name: string;
  title: string;
  category: "Founder" | "Andrology" | "Urology" | "Fertility" | "Oncology" | "Counseling" | "Radiology" | "General Medicine" | "Surgery";
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
    registration: "Karnataka Medical Council — KMC 58675",
    accent: "primary",
  },
  {
    slug: "dr-sai-dilip-sriramula",
    name: "Dr. Sai Dilip Sriramula",
    title: "Consultant Urologist",
    category: "Urology",
    qualifications: ["MBBS", "MS - General Surgery", "MCh - Urology"],
    experience: "10+ Years",
    image: "/doctor.svg",
    shortBio:
      "Consultant urologist trained in advanced endoscopic stone management, BPH surgery, and reconstructive urology — supporting comprehensive urological care at Joshi's Centre.",
    fullBio: [
      "Dr. Sai Dilip Sriramula is a consultant urologist with MCh-level super-specialty training in urology. He works alongside Dr. Praveen Joshi to handle the full range of urological conditions — from kidney stones and prostate disorders to bladder dysfunction and urological cancers.",
      "His clinical interests include endoscopic stone surgery (URS, RIRS, PCNL), laser prostate procedures, and reconstructive urology. He is committed to evidence-based, patient-first care with clear communication at every step.",
    ],
    specialties: ["Kidney Stones", "BPH / Prostate Surgery", "Urological Cancers", "Reconstructive Urology"],
    expertise: [
      "Endoscopic Stone Surgery (URS / RIRS / PCNL)",
      "Laser Lithotripsy",
      "TURP & Laser Prostatectomy",
      "Urological Cancer Surgery",
    ],
    languages: ["English", "Hindi", "Telugu", "Kannada"],
    registration: "Karnataka Medical Council — KMC 193018",
    accent: "primary",
  },
  {
    slug: "dr-amit-kamat",
    name: "Dr. Amit Kamat",
    title: "Visiting General Physician",
    category: "General Medicine",
    qualifications: ["MBBS", "MD - General Medicine"],
    experience: "12+ Years",
    image: "/doctor.svg",
    shortBio:
      "Visiting general physician offering comprehensive adult medical care — diabetes, hypertension, cardiometabolic risk, and pre-surgical evaluation as part of the centre's holistic men's health approach.",
    fullBio: [
      "Dr. Amit Kamat is a visiting general physician supporting Joshi's Centre with comprehensive adult medicine consultations. Many urological conditions are linked to underlying medical issues like diabetes, hypertension, and metabolic disease — and addressing these together leads to far better long-term outcomes.",
      "He provides preventive health checks, chronic disease management, pre-surgical clearance, and acute medical care, working closely with the urology and andrology team for complete patient care under one roof.",
    ],
    specialties: ["Diabetes & Hypertension", "Preventive Health", "Cardiometabolic Care", "Pre-Surgical Evaluation"],
    expertise: [
      "Comprehensive Health Checks",
      "Chronic Disease Management",
      "Lipid & Metabolic Care",
      "Acute Medical Care",
    ],
    languages: ["English", "Hindi", "Kannada"],
    registration: "Karnataka Medical Council — KMC 112430",
    accent: "accent",
  },
  {
    slug: "dr-bharathi-rajanna",
    name: "Dr. Bharathi Rajanna",
    title: "Visiting Consultant — Obstetrics, Gynaecology & Fertility",
    category: "Fertility",
    qualifications: ["MBBS", "DNB", "FRM (Fellow in Reproductive Medicine)", "FICOG"],
    experience: "15+ Years",
    image: "/doctor.svg",
    shortBio:
      "Senior visiting consultant in obstetrics, gynaecology and reproductive medicine — leading female fertility care alongside our andrology team in an integrated couples-focused programme.",
    fullBio: [
      "Dr. Bharathi Rajanna is a senior consultant in obstetrics, gynaecology and reproductive medicine, with a Fellowship in Reproductive Medicine (FRM) and FICOG. She brings extensive experience in evaluating and treating female fertility, complex gynaecological conditions, and high-risk pregnancy care.",
      "At Joshi's Centre she leads female fertility evaluation and works hand-in-hand with the andrology team for couples-focused care — including ovulation induction, IUI, and coordinated IVF / ICSI planning.",
    ],
    specialties: ["Female Fertility", "Reproductive Medicine", "Obstetrics & Gynaecology", "PCOS / Endometriosis"],
    expertise: [
      "Ovulation Induction",
      "Follicular Monitoring",
      "Recurrent Pregnancy Loss Workup",
      "IVF / ICSI Coordination",
    ],
    languages: ["English", "Kannada", "Hindi"],
    registration: "Karnataka Medical Council — KMC 26549",
    accent: "secondary",
  },
  {
    slug: "dr-priyanka",
    name: "Dr. Priyanka",
    title: "Visiting Consultant — Fertility",
    category: "Fertility",
    qualifications: ["MBBS", "MD - OBG", "FMAS", "DMAS", "Fellow in Infertility"],
    experience: "8+ Years",
    image: "/doctor.svg",
    shortBio:
      "Visiting fertility specialist with focused training in minimally invasive gynaecology and infertility — supporting personalised IUI, IVF, and reproductive surgery plans for couples.",
    fullBio: [
      "Dr. Priyanka is a visiting consultant focused on fertility, minimally invasive gynaecological surgery, and reproductive medicine. With an MD in Obstetrics & Gynaecology, fellowships in advanced and diagnostic minimal access surgery (FMAS, DMAS), and dedicated infertility training, she brings a strong clinical and surgical skillset to female fertility care.",
      "Her approach combines accurate diagnosis, ethical counselling, and personalised treatment planning. She works closely with the andrology team at Joshi's Centre to deliver integrated couples-focused fertility care.",
    ],
    specialties: ["Female Infertility", "Minimally Invasive Gynaecology", "IUI / IVF Planning", "PCOS Management"],
    expertise: [
      "Laparoscopic Gynaecological Surgery",
      "Hysteroscopy",
      "Ovulation Induction & Follicle Monitoring",
      "Reproductive Endocrinology",
    ],
    languages: ["English", "Kannada", "Hindi", "Telugu"],
    registration: "Karnataka Medical Council — KMC 83779",
    accent: "accent",
  },
  {
    slug: "dr-chandrakanth",
    name: "Dr. Chandrakanth",
    title: "Visiting General Surgeon",
    category: "Surgery",
    qualifications: ["MBBS", "MS - General Surgery"],
    experience: "12+ Years",
    image: "/doctor.svg",
    shortBio:
      "Visiting general surgeon supporting laparoscopic and open surgical procedures — including general surgical conditions and combined cases where general and urological surgery overlap.",
    fullBio: [
      "Dr. Chandrakanth is a visiting general surgeon at Joshi's Centre with expertise across the spectrum of general surgical care. He performs laparoscopic and open procedures and collaborates with the urology team on combined cases, complex abdominal surgery, and reconstructive work.",
      "His practice emphasises minimally invasive techniques, careful pre-operative planning, and structured post-operative recovery, with a focus on patient safety and quick return to normal activities.",
    ],
    specialties: ["Laparoscopic Surgery", "General Surgery", "Hernia Repair", "Combined Surgical Cases"],
    expertise: [
      "Diagnostic & Therapeutic Laparoscopy",
      "Hernia & Abdominal Wall Surgery",
      "Day-Care Surgical Procedures",
      "Pre & Post-Operative Care",
    ],
    languages: ["English", "Kannada", "Hindi"],
    registration: "Karnataka Medical Council — KMC 68596",
    accent: "primary",
  },
];

export function getDoctor(slug: string): Doctor | undefined {
  return doctors.find((d) => d.slug === slug);
}
