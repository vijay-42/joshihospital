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
  faqs?: { q: string; a: string }[];
};

export const doctors: Doctor[] = [
  {
    slug: "dr-praveen-joshi",
    name: "Dr. Praveen Joshi",
    title: "Founder & Chief Urologist, Andrologist",
    category: "Founder",
    qualifications: ["MBBS", "DNB - General Surgery", "DNB - Urology / Genito-Urinary Surgery"],
    experience: "20+ Years",
    image: "/doctors/dr-praveen-joshi.webp",
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
    image: "/doctors/dr-sai-dilip-sriramula.jpg",
    shortBio:
      "Consultant urologist trained in advanced endoscopic stone management, BPH surgery, and reconstructive urology — supporting comprehensive urological care at Joshi's Centre.",
    fullBio: [
      "Dr. Sai Dilip Sriramula is a consultant urologist with MCh-level super-specialty training in urology. Recognised as a urology specialist in Bangalore, he works alongside Dr. Praveen Joshi to provide comprehensive care for a wide range of urological conditions, including kidney stones, prostate disorders, bladder dysfunction, urinary tract conditions, and urological cancers.",
      "His clinical expertise includes endoscopic stone surgeries such as URS, RIRS, and PCNL, laser prostate procedures, and reconstructive urology. As a Uro-Andrologist Specialist in Bangalore, he is committed to evidence-based, patient-centred care with clear communication and individualised treatment plans.",
      "Patients looking for a urology doctor in Bangalore often seek experienced specialists who provide accurate diagnosis, advanced treatment options, and compassionate care. Dr. Sai Dilip Sriramula focuses on delivering high-quality urological care tailored to each patient's needs.",
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
    faqs: [
      { q: "When should I consult a urology specialist in Bangalore?", a: "You should consult a urology specialist in Bangalore if you experience symptoms such as kidney stones, blood in the urine, frequent urination, urinary tract infections, prostate problems, bladder issues, or difficulty passing urine. Early diagnosis can help prevent complications and improve treatment outcomes." },
      { q: "What conditions does a urology doctor in Bangalore treat?", a: "A urology doctor in Bangalore treats conditions affecting the urinary tract and male reproductive system, including kidney stones, enlarged prostate, urinary tract infections (UTIs), bladder disorders, urinary incontinence, urological cancers, and male reproductive health concerns." },
      { q: "Who should consult a Uro-Andrologist Specialist in Bangalore?", a: "A Uro-Andrologist Specialist in Bangalore is the right specialist for men experiencing erectile dysfunction, male infertility, low testosterone, premature ejaculation, Peyronie's disease, or other conditions affecting male reproductive and sexual health." },
      { q: "What is the difference between a urology specialist and a uro-andrologist specialist?", a: "A urology specialist focuses on diseases of the urinary tract in both men and women, while a Uro-Andrologist Specialist has additional expertise in diagnosing and treating male reproductive and sexual health conditions alongside urological disorders." },
      { q: "How do I choose the right urology doctor in Bangalore?", a: "When choosing a urology doctor in Bangalore, consider the doctor's qualifications, experience, areas of expertise, available treatment options, diagnostic facilities, patient reviews, and the hospital's reputation for providing comprehensive urological care." },
      { q: "Can a urology specialist in Bangalore treat kidney stones without open surgery?", a: "Yes. A urology specialist in Bangalore may recommend minimally invasive procedures such as URS (Ureteroscopy), RIRS (Retrograde Intrarenal Surgery), or PCNL (Percutaneous Nephrolithotomy), depending on the size, location, and type of kidney stone." },
      { q: "When should I visit a urology doctor in Bangalore for prostate problems?", a: "If you experience difficulty urinating, weak urine flow, frequent urination, nighttime urination, blood in the urine, or pelvic discomfort, it is advisable to consult a urology doctor in Bangalore for evaluation and appropriate treatment." },
      { q: "Does a Uro-Andrologist Specialist in Bangalore treat male infertility?", a: "Yes. A Uro-Andrologist Specialist in Bangalore evaluates and treats various causes of male infertility, including low sperm count, poor sperm motility, hormonal imbalances, varicocele, and obstructive conditions affecting fertility." },
      { q: "What diagnostic tests may a urology specialist recommend?", a: "A urology specialist in Bangalore may recommend urine analysis, blood tests, ultrasound scans, CT scans, uroflowmetry, cystoscopy, PSA testing, or semen analysis, depending on your symptoms and medical condition." },
      { q: "When should I seek immediate medical attention from a urology specialist?", a: "You should seek immediate medical attention if you experience severe kidney stone pain, inability to pass urine, blood in the urine, high fever with urinary symptoms, severe testicular pain, or sudden swelling. Prompt evaluation by a urology specialist in Bangalore can help prevent serious complications." },
    ],
  },
  {
    slug: "dr-amit-kamat",
    name: "Dr. Amit Kamat",
    title: "Visiting General Physician",
    category: "General Medicine",
    qualifications: ["MBBS", "MD - General Medicine"],
    experience: "12+ Years",
    image: "/doctors/placeholder.svg",
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
    image: "/doctors/placeholder.svg",
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
    image: "/doctors/placeholder.svg",
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
    image: "/doctors/placeholder.svg",
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

export type DoctorSeo = { metaTitle: string; metaDescription: string };

export const doctorSeo: Record<string, DoctorSeo> = {
  "dr-praveen-joshi": {
    metaTitle: "Best Andrologist in Bangalore - Sexual Health Specialist for Men Bangalore",
    metaDescription:
      "Consult Dr. Praveen Joshi, the best andrologist in Bangalore and a trusted Uro-Andrologist specializing in male infertility, men's sexual health, fertility, andrology, and advanced urology care.",
  },
  "dr-sai-dilip-sriramula": {
    metaTitle: "Best Urologist & Uro-Andrologist in Bangalore - Urology Specialist Doctor in Bangalore",
    metaDescription:
      "Dr. Sai Dilip Sriramula is a leading Urologist and Uro-Andrologist in Bangalore, specializing in kidney stone treatment, men's health, male infertility, and urology care.",
  },
  "dr-amit-kamat": {
    metaTitle: "Best General Physician in Bangalore | Dr. Amit Kamat | Joshi's Center",
    metaDescription:
      "Book an appointment with Dr. Amit Kamat, an experienced General Physician in Bangalore, offering preventive healthcare, diagnosis, treatment, and personalized medical care.",
  },
  "dr-bharathi-rajanna": {
    metaTitle: "Best Gynaecologist & Fertility Specialist Doctor in Bangalore - Joshi's Center",
    metaDescription:
      "Meet Dr. Bharathi Rajanna, trusted Obstetrician, Gynaecologist and Fertility Specialist in Bangalore offering pregnancy care, infertility treatment, IVF guidance, and women's healthcare.",
  },
  "dr-priyanka": {
    metaTitle: "Fertility Specialist in Bangalore - IVF Doctor In Bangalore",
    metaDescription:
      "Consult Dr. Priyanka, a trusted Fertility Specialist in Bangalore and IVF Doctor in Bangalore, offering fertility evaluation, infertility treatment, IVF guidance, and personalized care.",
  },
  "dr-chandrakanth": {
    metaTitle: "General Surgery Specialist in Bangalore - Best General Surgeon",
    metaDescription:
      "Meet Dr. Chandrakanth, a skilled General Surgery Specialist in Bangalore providing advanced surgical treatment, expert consultation, and compassionate patient care.",
  },
};

export function getDoctorSeo(slug: string): DoctorSeo | undefined {
  return doctorSeo[slug];
}
