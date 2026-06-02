export type ServiceCategory = "Andrology" | "Urology" | "Men's Health" | "Additional Services";

export type Service = {
  slug: string;
  category: ServiceCategory;
  title: string;
  shortDescription: string;
  longDescription: string[];
  symptoms: string[];
  treatments: { name: string; description: string }[];
  whyChooseUs: string[];
  faqs: { q: string; a: string }[];
  icon: string;
  accent: "primary" | "secondary" | "accent" | "gold";
  image?: string;
};

export const services: Service[] = [
  // ─── ANDROLOGY ───────────────────────────────────────────
  {
    slug: "erectile-dysfunction-treatment-in-bangalore",
    image: "/services/erectile-dysfunction-treatment-in-bangalore.webp",
    category: "Andrology",
    title: "Erectile Dysfunction Treatment in Bangalore",
    shortDescription:
      "Comprehensive evaluation and tiered treatment for erectile dysfunction — from lifestyle changes and oral medications to low-intensity shockwave therapy, intracavernosal injections, and penile prosthesis implantation.",
    longDescription: [
      "Erectile dysfunction is the inability to achieve or sustain an erection firm enough for satisfactory sexual intercourse. It commonly arises from a combination of physical factors (cardiovascular disease, diabetes, hypertension, high cholesterol, smoking, excess weight, nerve damage from cancer or pelvic surgery) and psychological factors (stress, anxiety, relationship difficulties, substance and alcohol use).",
      "At Joshi's Centre, we provide a structured, confidential workup to identify the underlying cause and follow a tiered treatment plan — starting with the least invasive option that works. Onsite ultrasound and laboratory services support diagnosis, and we offer the full range of medical, device-based, and surgical options under one roof.",
    ],
    symptoms: [
      "Difficulty getting an erection",
      "Trouble maintaining an erection during sex",
      "Reduced sexual desire or performance anxiety",
      "Soft erections that don't allow penetration",
      "Loss of morning erections",
    ],
    treatments: [
      { name: "Lifestyle Changes", description: "First-line interventions — weight, exercise, diet, sleep, smoking cessation, and managing diabetes/hypertension." },
      { name: "Oral Medications (PDE5 Inhibitors)", description: "Sildenafil, tadalafil, and other oral therapies with personalized dosing after cardiac screening." },
      { name: "Low-Intensity Shockwave Therapy (EDSWT)", description: "Non-invasive shockwaves stimulate new blood vessel growth in the penis — available onsite at Joshi's Centre." },
      { name: "Intracavernosal Injections", description: "Self-administered injections that produce a reliable erection within minutes." },
      { name: "Vacuum Erection Devices", description: "Mechanical alternative for patients who cannot or prefer not to use medications." },
      { name: "Surgical Options", description: "Venous ligation or penile prosthesis implantation for severe ED unresponsive to medical therapy." },
    ],
    whyChooseUs: [
      "20+ years of dedicated andrology experience",
      "Latest EDSWT (Low-Intensity Shockwave) therapy",
      "All major penile implant brands available",
      "Complete confidentiality & private consultation rooms",
      "Integrated counseling with our clinical psychologist",
    ],
    faqs: [
      { q: "Is ED a normal part of aging?", a: "While ED becomes more common with age, it is not inevitable. Most cases have an identifiable cause and can be successfully treated at any age." },
      { q: "Are ED medications safe?", a: "Yes, when prescribed by a qualified specialist after evaluation. We screen for cardiac and other contraindications before recommending treatment." },
      { q: "Is treatment confidential?", a: "Absolutely. All consultations, records, and treatment are completely private and confidential." },
    ],
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    accent: "secondary",
  },
  {
    slug: "male-infertility-treatment-in-bangalore",
    image: "/services/male-infertility-treatment-in-bangalore.webp",
    category: "Andrology",
    title: "Male Infertility Treatment in Bangalore",
    shortDescription:
      "Complete male fertility evaluation and treatment — from advanced WHO-standard semen analysis and DNA fragmentation testing to surgical sperm retrieval and assisted reproduction.",
    longDescription: [
      "Male infertility refers to reproductive issues that prevent natural conception with a fertile partner. It accounts for roughly one-fifth of infertility cases on its own and contributes to about half of all cases when combined with female factors — yet male evaluation is often overlooked.",
      "At Joshi's Centre, we begin with a detailed history, physical examination, and WHO-standard semen analysis assessing sperm count, motility and morphology. When standard results don't tell the full story, we move to advanced testing — DNA fragmentation, hormonal profiling, and scrotal ultrasound — and then to medical, surgical, or assisted reproduction options as indicated.",
    ],
    symptoms: [
      "Inability to conceive after 12 months of unprotected intercourse",
      "Low semen volume or abnormal ejaculation",
      "Pain, swelling, or lump in the testicular area",
      "History of varicocele, undescended testes, or genital surgery",
      "Hormonal symptoms — low libido, fatigue, gynecomastia",
    ],
    treatments: [
      { name: "Advanced Semen Analysis (WHO 2021)", description: "Comprehensive sperm count, motility, morphology, vitality, and biochemistry testing." },
      { name: "DNA Fragmentation Index (DFI)", description: "Measures sperm DNA integrity — a key predictor of fertility and IVF outcomes." },
      { name: "Microsurgical Varicocele Ligation", description: "Gold-standard surgery to correct varicocele and improve sperm parameters." },
      { name: "PESA / TESA / micro-TESE", description: "Surgical sperm retrieval techniques for azoospermia (no sperm in ejaculate)." },
      { name: "Vasectomy Reversal", description: "Microsurgical reconnection of the vas deferens to restore natural fertility." },
      { name: "Hormonal Therapy", description: "Targeted hormonal treatment for hypogonadotropic hypogonadism and other endocrine causes." },
    ],
    whyChooseUs: [
      "Onsite advanced semen analysis lab with WHO 2021 standards",
      "DNA fragmentation testing under one roof",
      "Microsurgical expertise for varicocele and reversal",
      "Coordinated care with our IVF specialist",
      "Cryo-preservation facility on site",
    ],
    faqs: [
      { q: "When should we see a specialist?", a: "If you've been trying to conceive for 12 months without success (6 months if the partner is over 35), both partners should be evaluated." },
      { q: "Is male infertility treatable?", a: "Many causes are treatable — varicocele, hormonal issues, infections, and obstructive azoospermia can often be corrected. Even severe cases can benefit from sperm retrieval and ICSI." },
      { q: "Do I need surgery?", a: "Not always. We start with the least invasive approach and only recommend surgery when it offers the best chance of success." },
    ],
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    accent: "secondary",
  },
  {
    slug: "delayed-ejaculation-treatment-in-bangalore",
    image: "/services/delayed-ejaculation-treatment-in-bangalore.webp",
    category: "Andrology",
    title: "Delayed Ejaculation Treatment in Bangalore",
    shortDescription:
      "Specialised, discreet care at Joshi's Andrology and Urology Hospital, Sahakar Nagar — for both delayed and premature ejaculation. Patient-first approach combining medical, lifestyle, and counseling support.",
    longDescription: [
      "Delayed ejaculation is a common yet often overlooked men's health concern that can affect confidence, relationships, and overall well-being. At Joshi's Andrology and Urology Hospital in Sahakar Nagar, Bangalore, we provide specialised, discreet, and effective treatment for both delayed and premature ejaculation with a patient-first approach.",
      "Delayed ejaculation occurs when there is a prolonged time to reach climax, or difficulty ejaculating despite adequate stimulation. It may be caused by physical conditions, psychological factors, lifestyle habits, or medication side effects. Our expert team focuses on identifying the root cause through a detailed evaluation and personalised diagnosis.",
      "We understand that every individual is different. Our approach combines advanced medical care with counseling support — including medical management, lifestyle guidance, and therapy when needed. Whether you are experiencing delayed ejaculation or premature ejaculation, our goal is to restore confidence and improve your quality of life.",
      "Our hospital is known for its expertise in men's sexual health, providing a safe, confidential, and supportive environment. With modern facilities and experienced specialists, we ensure accurate diagnosis and effective treatment plans tailored to your needs. Early consultation can make a significant difference, so don't hesitate to seek professional advice.",
    ],
    symptoms: [
      "Prolonged time to reach climax despite adequate stimulation",
      "Difficulty ejaculating during intercourse",
      "Ejaculation within about a minute of penetration (premature pattern)",
      "Distress or relationship strain from ejaculatory timing",
      "Reduced sexual satisfaction for self or partner",
    ],
    treatments: [
      { name: "Detailed Evaluation & Personalised Diagnosis", description: "Identifying the root cause — physical, psychological, lifestyle, or medication-related." },
      { name: "Medical Management", description: "Targeted medications and review of any contributing prescriptions." },
      { name: "Lifestyle Guidance", description: "Sleep, exercise, alcohol/substance, and stress factors that often play a role." },
      { name: "Behavioural Therapy", description: "Stop-start, squeeze, and other proven techniques taught by our specialists." },
      { name: "Counseling & Couples Therapy", description: "Confidential individual or joint sessions with our clinical psychologist when needed." },
    ],
    whyChooseUs: [
      "Specialist expertise in men's sexual health",
      "Safe, confidential, and supportive environment",
      "Modern facilities with experienced specialists",
      "Combined medical, lifestyle, and counseling care under one roof",
      "Patient-first, judgment-free consultations",
    ],
    faqs: [
      { q: "Is delayed ejaculation treatable?", a: "Yes. With a detailed evaluation to identify the cause, most men see meaningful improvement through a tailored combination of medical, lifestyle, and behavioural treatment." },
      { q: "When should I consult a specialist?", a: "Early consultation makes a significant difference. If ejaculatory difficulties are affecting your confidence, relationship, or quality of life, it is worth seeking professional advice." },
      { q: "Is treatment confidential?", a: "Absolutely. Every consultation, record, and treatment is fully confidential, in a comfortable judgment-free setting." },
    ],
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    accent: "secondary",
  },
  {
    slug: "penile-prosthesis-reconstruction-in-bangalore",
    category: "Andrology",
    title: "Penile Prosthesis & Reconstruction in Bangalore",
    shortDescription:
      "Advanced penile prosthesis and reconstruction at Joshi's Andrology and Urology Hospital, Sahakar Nagar — restoring function and confidence with personalised, patient-first care.",
    longDescription: [
      "At Joshi's Andrology and Urology Hospital in Bangalore, we provide advanced care for men facing complex urological concerns through specialised penile prosthesis and reconstruction procedures. With a strong focus on patient comfort, privacy, and long-term results, our expert team offers personalised treatment plans designed to restore both function and confidence.",
      "Penile reconstruction surgery in Bangalore is recommended for men dealing with conditions such as erectile dysfunction unresponsive to medication, injury, congenital issues, or post-surgical complications. Our experienced urologists use modern techniques and proven surgical methods to ensure safe procedures with effective outcomes. We take the time to understand each patient's condition and guide them through every step — from consultation to recovery.",
      "A penile prosthesis is a highly effective solution for severe erectile dysfunction, offering reliable and lasting results. We use high-quality implants and advanced surgical approaches to provide natural-looking and functional outcomes. Our team makes sure patients are well-informed about the procedure, benefits, and post-surgery care, keeping the entire process smooth and stress-free.",
      "Located in Sahakar Nagar, Bangalore, Joshi's Andrology and Urology Hospital is known for its patient-centric approach and expertise in men's health. We maintain strict confidentiality and provide a supportive environment where patients can discuss their concerns openly.",
    ],
    symptoms: [
      "Erectile dysfunction unresponsive to medications or injections",
      "Significant penile curvature affecting function (Peyronie's or congenital)",
      "Acute bending of the erect penis (penile fracture — surgical emergency)",
      "Injury, trauma, or post-surgical deformity",
      "Congenital penile abnormalities",
    ],
    treatments: [
      { name: "Inflatable Penile Prosthesis (3-piece)", description: "Modern implant that inflates and deflates on demand for natural rigidity — discreet, reliable, lasting results." },
      { name: "Malleable Penile Prosthesis", description: "Simpler, semi-rigid alternative for select patients." },
      { name: "Peyronie's Surgery", description: "Plication, grafting, or implant-based correction depending on plaque severity and curvature." },
      { name: "Penile Fracture Repair", description: "Emergency surgical repair to restore function and prevent long-term deformity." },
      { name: "Penile Reconstruction", description: "Multi-stage reconstruction for trauma, congenital deformity, or post-cancer cases." },
    ],
    whyChooseUs: [
      "Specialised expertise in men's health and reconstructive andrology",
      "High-quality implants and modern surgical techniques",
      "Personalised, patient-first treatment plans",
      "Strict confidentiality and supportive environment",
      "Step-by-step guidance from consultation to recovery",
    ],
    faqs: [
      { q: "Who is a candidate for penile reconstruction surgery?", a: "Men with erectile dysfunction unresponsive to medication, injury, congenital issues, or post-surgical complications. We tailor each plan after a careful evaluation." },
      { q: "Will an implant feel natural?", a: "Modern 3-piece inflatable implants produce highly natural erections, with reliable and lasting results. Most patients and partners report excellent satisfaction." },
      { q: "Is the implant visible?", a: "No — the implant is entirely concealed within the body. Nothing is visible externally when not in use." },
      { q: "Is the consultation confidential?", a: "Yes. We maintain strict confidentiality throughout consultation, surgery, and follow-up care." },
    ],
    icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z",
    accent: "secondary",
  },
  {
    slug: "penile-enlargement-surgery-in-bangalore",
    category: "Andrology",
    title: "Penile Enlargement Surgery in Bangalore",
    shortDescription:
      "Trusted penile enlargement surgery in Bangalore at Joshi's Andrology and Urology Hospital, Sahakar Nagar — over 20 years of expertise, modern techniques, and complete confidentiality.",
    longDescription: [
      "If you are looking for a trusted and experienced hospital for penile enlargement surgery in Bangalore, Joshi's Andrology and Urology Hospital, Sahakar Nagar, is a leading choice. With over 20 years of expertise in men's health and urology, we provide safe, advanced, and confidential treatment tailored to your needs.",
      "We understand that concerns related to size and performance can affect confidence and overall well-being. Our team of highly qualified specialists offers modern penile enlargement procedures using the latest medical techniques to ensure effective and natural-looking results. Every treatment plan is personalised after a detailed consultation, focusing on your expectations, safety, and long-term satisfaction.",
      "We prioritise patient privacy and comfort, ensuring a completely discreet and supportive environment. From consultation to recovery, our experts guide you at every step — explaining procedures clearly and helping you make informed decisions. Our advanced surgical methods aim for minimal downtime, faster recovery, and improved outcomes.",
      "Located in Sahakar Nagar, Bangalore, our hospital is easily accessible and equipped with modern facilities to deliver world-class care. We are committed to helping you regain confidence and improve your quality of life. If you are considering penile enlargement surgery, book a consultation with our experts today and take the first step toward a more confident you.",
    ],
    symptoms: [
      "Concerns about penile size or appearance",
      "Stretched length under 7 cm (micropenis)",
      "Buried or concealed penis after weight gain or loss",
      "Reduced confidence affecting overall well-being",
    ],
    treatments: [
      { name: "Suspensory Ligament Release", description: "Surgical lengthening through release of the suspensory ligament." },
      { name: "Girth Enhancement Procedures", description: "Modern fat-grafting and dermal-graft techniques for circumferential enhancement." },
      { name: "Buried Penis Correction", description: "Surgical correction for buried or concealed penis often associated with weight loss." },
      { name: "Inflatable Penile Prosthesis (Selected Cases)", description: "Considered for combined ED and girth concerns where indicated." },
      { name: "Personalised Consultation & Counseling", description: "Detailed evaluation focused on your expectations, safety, and long-term satisfaction." },
    ],
    whyChooseUs: [
      "20+ years of experience in andrology and urology",
      "Skilled and certified surgeons",
      "Advanced and safe surgical techniques",
      "Personalised treatment approach",
      "High standards of hygiene and patient care",
      "Complete confidentiality and privacy",
    ],
    faqs: [
      { q: "Is penile enlargement surgery safe?", a: "When performed by qualified andrology specialists using modern techniques, the procedure is safe. Each patient is carefully evaluated and treatment is personalised for safety and best outcomes." },
      { q: "Will I have to stay in the hospital long?", a: "Our advanced surgical methods aim for minimal downtime and faster recovery. Specific stay and recovery details are discussed during your consultation based on the procedure planned." },
      { q: "Will my consultation be confidential?", a: "Yes. We maintain complete confidentiality and a discreet, supportive environment from consultation through recovery." },
    ],
    icon: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5",
    accent: "secondary",
  },
  {
    slug: "testicular-treatment-in-bangalore",
    category: "Andrology",
    title: "Testicular Treatment in Bangalore",
    shortDescription:
      "Evaluation and treatment of varicocele, hydrocele, epididymo-orchitis, testicular torsion (a surgical emergency), undescended testes, and testicular masses.",
    longDescription: [
      "The testes are central to both fertility and hormone production. Common conditions we treat include epididymo-orchitis (infection), testicular torsion, hydrocele, varicocele, testicular atrophy, undescended testicles, trauma, and testicular cancer. Any sudden severe scrotal pain — especially with swelling — needs urgent evaluation as torsion is a time-critical emergency.",
      "Diagnosis combines clinical examination, urine tests, scrotal ultrasound, and Doppler imaging to assess blood flow. Treatment depends on the cause — antibiotics for infections, urgent surgery for torsion, day-care surgery for hydrocele, and microsurgical repair for varicocele.",
    ],
    symptoms: [
      "Lump or swelling in the testicle",
      "Sudden severe pain in the scrotum (possible torsion — emergency)",
      "Pain, heaviness, or tenderness in the scrotum",
      "Asymmetry between testicles",
      "Infertility associated with varicocele",
    ],
    treatments: [
      { name: "Microsurgical Varicocele Ligation", description: "Gold-standard surgery for symptomatic or fertility-related varicocele." },
      { name: "Hydrocele Repair", description: "Day-care surgery with rapid recovery." },
      { name: "Testicular Torsion Surgery", description: "Emergency exploration to untwist the testicle and fix both sides — time is critical." },
      { name: "Treatment of Epididymo-Orchitis", description: "Targeted antibiotics, analgesics, and management of underlying cause." },
      { name: "Testicular Mass Evaluation", description: "Ultrasound, tumor markers, and surgical management when needed." },
      { name: "Orchiopexy for Undescended Testes", description: "Surgical correction in children and select adults." },
    ],
    whyChooseUs: [
      "Onsite high-resolution scrotal Doppler ultrasound",
      "Microsurgical expertise for varicocele",
      "Emergency-ready for testicular torsion",
      "Day-care procedures with rapid recovery",
    ],
    faqs: [
      { q: "Is a testicular lump always cancer?", a: "No, but any lump should be evaluated promptly. Most are benign, but early diagnosis is critical when cancer is present." },
      { q: "Why is testicular torsion an emergency?", a: "Torsion cuts off blood supply to the testis. Without surgery within roughly 6 hours, the testis can be permanently damaged. Sudden severe scrotal pain needs immediate evaluation." },
    ],
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    accent: "secondary",
  },

  // ─── UROLOGY ─────────────────────────────────────────────
  {
    slug: "kidney-stone-treatment-in-bangalore",
    image: "/services/kidney-stone-treatment-in-bangalore.webp",
    category: "Urology",
    title: "Kidney Stone Treatment in Bangalore",
    shortDescription:
      "Full-spectrum stone care — ESWL, ureteroscopy, RIRS, and PCNL — plus metabolic evaluation to prevent recurrence. Calcium oxalate, struvite, uric acid, and cystine stones all managed onsite.",
    longDescription: [
      "Kidney stones range from gravel-like crystals to large staghorn formations and are one of the most common urological problems. The most frequent type is calcium oxalate (60–80% of stones), followed by struvite, uric acid, and cystine. Untreated stones can cause severe pain, infection, and lasting kidney damage.",
      "Diagnosis combines blood and urine tests, ultrasound, and a non-contrast CT KUB scan — the gold-standard investigation when ultrasound doesn't show enough detail. We offer the full range of stone treatments under one roof and pair them with a metabolic workup to identify why stones form and prevent recurrence.",
    ],
    symptoms: [
      "Sudden severe pain radiating from the loin to the groin (or down to the testis, scrotum, labia, or front of thigh)",
      "Blood in urine",
      "Painful or burning urination",
      "Nausea, vomiting, fever with chills",
      "Frequent nighttime urination",
    ],
    treatments: [
      { name: "Extracorporeal Shockwave Lithotripsy (ESWL)", description: "Non-invasive shockwaves break stones into small fragments that pass naturally." },
      { name: "Ureteroscopy (URS) with Laser Lithotripsy", description: "Endoscopic stone removal using laser — no incisions, day-care procedure." },
      { name: "Percutaneous Nephrolithotomy (PCNL)", description: "Keyhole surgery for large or complex kidney stones." },
      { name: "RIRS (Retrograde Intrarenal Surgery)", description: "Flexible ureteroscope and laser for stones high in the kidney." },
      { name: "Metabolic Stone Workup", description: "Comprehensive evaluation to identify recurrence risk and prevent future stones." },
    ],
    whyChooseUs: [
      "All stone treatments under one roof",
      "Latest holmium laser lithotripsy",
      "Day-care endoscopic procedures",
      "Long-term recurrence prevention plans",
    ],
    faqs: [
      { q: "Will I need surgery?", a: "Small stones often pass on their own. Larger or symptomatic stones may need ESWL, URS, or PCNL — we recommend the least invasive option that works." },
      { q: "Can I prevent future stones?", a: "Yes. With proper hydration, dietary changes, and targeted treatment based on your metabolic workup, recurrence can be significantly reduced." },
    ],
    icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707",
    accent: "primary",
  },
  {
    slug: "prostate-disorders-treatment-in-bangalore",
    image: "/services/prostate-disorders-treatment-in-bangalore.webp",
    category: "Urology",
    title: "Prostate Disorders Treatment in Bangalore",
    shortDescription:
      "Advanced, personalised care for prostate enlargement (BPH), prostatitis, and prostate-related urinary issues at Joshi's Andrology and Urology Hospital, Sahakara Nagar, Bangalore.",
    longDescription: [
      "Prostate disorders are a common health concern among men, especially as they age. Conditions such as prostate enlargement (BPH), prostatitis, and prostate-related urinary issues can affect daily life and overall well-being. At Joshi's Andrology and Urology Hospital in Bangalore (Sahakara Nagar), we offer advanced and personalised care for all types of prostate disorders.",
      "The prostate gland plays a vital role in male reproductive health, but when it becomes enlarged or inflamed it can cause symptoms like frequent urination, weak urine flow, difficulty starting urination, and a feeling of incomplete bladder emptying. In some cases, untreated prostate issues can lead to serious complications.",
      "Our approach focuses on accurate diagnosis and effective treatment. Using modern diagnostic tools and expert evaluation, we identify the root cause and recommend the most suitable treatment plan. Options may include medications, catheter-based management, or advanced surgical procedures such as TURP and laser prostate surgery, depending on the severity of the condition.",
      "Led by experienced urologists and andrology specialists, the hospital provides comprehensive urology and prostate care under one roof. The centre is known for its patient-focused approach, ethical practices, and use of advanced medical technologies to ensure the best outcomes. Located in Sahakara Nagar, Bangalore, we have successfully treated thousands of patients with various urological conditions, including prostate disorders. Early diagnosis and timely treatment are key to preventing complications — if you are experiencing prostate-related symptoms, book a consultation today.",
    ],
    symptoms: [
      "Frequent urination, especially at night",
      "Weak or interrupted urine flow",
      "Difficulty starting urination",
      "Feeling of incomplete bladder emptying",
      "Pelvic discomfort or painful ejaculation",
    ],
    treatments: [
      { name: "Accurate Diagnosis & Evaluation", description: "Modern diagnostic tools and expert evaluation to identify the root cause of the condition." },
      { name: "Medical Therapy", description: "Alpha-blockers, 5-ARIs, and combination therapy for BPH symptom control." },
      { name: "Catheter-Based Management", description: "When indicated for acute retention or while planning definitive treatment." },
      { name: "TURP (Transurethral Resection of Prostate)", description: "Established surgical relief for BPH-related obstruction." },
      { name: "Laser Prostate Surgery", description: "Advanced laser prostatectomy with minimal bleeding — suitable for larger prostates." },
      { name: "Prostatitis Management", description: "Targeted antibiotic therapy and supportive care for acute and chronic prostatitis." },
    ],
    whyChooseUs: [
      "Experienced urologists and andrology specialists",
      "Comprehensive urology and prostate care under one roof",
      "Patient-focused approach with ethical practices",
      "Advanced medical technologies and modern diagnostics",
      "Thousands of urological patients successfully treated",
      "Convenient Sahakara Nagar, Bangalore location",
    ],
    faqs: [
      { q: "Do I need surgery for an enlarged prostate?", a: "Not always. Many men do well on medications. Surgery is recommended when symptoms are severe, complications develop, or medications no longer work." },
      { q: "When should I see a specialist?", a: "Don't ignore symptoms like frequent urination, weak flow, difficulty starting urination, or incomplete bladder emptying. Early diagnosis is key to preventing complications." },
      { q: "What treatment options are available?", a: "Depending on the cause and severity, we offer medications, catheter-based management, TURP, and laser prostate surgery — selected after a detailed evaluation." },
    ],
    icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
    accent: "primary",
  },
  {
    slug: "reconstructive-urology-treatment-in-bangalore",
    image: "/services/reconstructive-urology-treatment-in-bangalore.webp",
    category: "Urology",
    title: "Reconstructive Urology Treatment in Bangalore",
    shortDescription:
      "Simple and complex reconstructive surgery across the upper and lower urinary tract — urethroplasty, pyeloplasty, bladder reconstruction, fistula repair, vasoepididymal anastomosis, and vasectomy reversal.",
    longDescription: [
      "Reconstructive urology addresses complex anatomical and functional problems of the urinary tract and male genital system — often resulting from trauma, prior surgery, congenital conditions, infection, or obstruction. These procedures require specialized training and meticulous technique.",
      "Our reconstructive service covers the full anatomical range — from pyeloplasty for upper-tract obstruction, to urethroplasty and stricture repair, bladder augmentation, urinary fistula closure, artificial urinary sphincter placement, penile curvature correction, and fertility-related reconstruction including vasoepididymal anastomosis, vasectomy reversal, and TURED.",
    ],
    symptoms: [
      "Recurrent urethral strictures",
      "Urinary fistulas",
      "Post-traumatic injuries",
      "Upper urinary tract obstruction",
      "Azoospermia from obstruction (vasoepididymal block)",
      "Complications of prior pelvic surgery",
    ],
    treatments: [
      { name: "Urethroplasty", description: "Single or multi-stage reconstruction for complex urethral strictures using buccal mucosa or skin grafts." },
      { name: "Pyeloplasty", description: "Reconstruction of the pelviureteric junction to relieve upper tract obstruction." },
      { name: "Bladder Reconstruction", description: "Augmentation, neobladder formation, and continent urinary diversion." },
      { name: "Fistula Repair", description: "Surgical closure of urinary fistulas with high success rates." },
      { name: "Artificial Urinary Sphincter", description: "Implantation for severe stress incontinence after prostate surgery or trauma." },
      { name: "Vasoepididymal Anastomosis & Vasectomy Reversal", description: "Microsurgical reconstruction to restore fertility in obstructive azoospermia." },
      { name: "TURED", description: "Transurethral resection of the ejaculatory duct for select obstruction cases." },
    ],
    whyChooseUs: [
      "Specialized reconstructive training",
      "High-volume urethroplasty experience",
      "Complete urological workup on site",
    ],
    faqs: [
      { q: "How long is recovery from urethroplasty?", a: "Most patients return to normal activities within 4–6 weeks. Catheter is typically removed around 3 weeks post-surgery." },
    ],
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    accent: "primary",
  },
  {
    slug: "urinary-tract-infection-treatment-in-bangalore",
    image: "/services/urinary-tract-infection-treatment-in-bangalore.webp",
    category: "Urology",
    title: "Urinary Tract Infection Treatment in Bangalore",
    shortDescription:
      "Comprehensive evaluation and management of simple and complicated UTIs — culture-guided antibiotics, imaging when indicated, and long-term prevention for recurrent infections.",
    longDescription: [
      "UTIs are broadly classified as simple (typically a first-time lower-tract infection in women) or complicated (when they occur in men or alongside underlying anatomical or functional abnormalities that increase risk). Recurrent or complicated UTIs need specialist evaluation to rule out stones, obstruction, or bladder dysfunction.",
      "Our standard workup includes urine analysis and culture, complete blood count, renal function tests, and abdominal ultrasound or CT imaging when indicated. Treatment combines targeted antibiotics, urinary analgesics and alkalinizers, and procedural intervention when complications are present.",
    ],
    symptoms: [
      "Burning sensation during urination",
      "Frequent or urgent need to urinate",
      "Cloudy, dark, or foul-smelling urine",
      "Pelvic or lower abdominal pain",
      "Fever, chills, back pain (signs of kidney involvement)",
    ],
    treatments: [
      { name: "Targeted Antibiotic Therapy", description: "Culture-guided antibiotics for fast, effective resolution." },
      { name: "Recurrent UTI Workup", description: "Imaging and urodynamic evaluation to identify underlying causes." },
      { name: "Long-Term Prevention", description: "Lifestyle, hydration, and where needed, prophylactic strategies." },
      { name: "Treatment of Complicated UTIs", description: "Hospital-based care for severe or upper tract infections." },
    ],
    whyChooseUs: [
      "Onsite microbiology and culture testing",
      "Specialist evaluation for recurrent UTIs",
      "Personalized prevention plans",
    ],
    faqs: [
      { q: "Why do I keep getting UTIs?", a: "Recurrent UTIs may be caused by anatomical issues, stones, incomplete bladder emptying, or other factors. A specialist evaluation can identify and address the cause." },
    ],
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    accent: "primary",
  },
  {
    slug: "urological-cancers-treatment-in-bangalore",
    image: "/services/urological-cancers-treatment-in-bangalore.webp",
    category: "Urology",
    title: "Urological Cancers Treatment in Bangalore",
    shortDescription:
      "Advanced, compassionate cancer care at Joshi's Andrology and Urology Hospital, Sahakar Nagar — for prostate, kidney, bladder, and testicular cancers.",
    longDescription: [
      "When it comes to advanced and compassionate care for urological cancers, choosing the right hospital makes all the difference. Joshi's Andrology and Urology Hospital in Bangalore (Sahakar Nagar) is recognised as one of the leading centres for diagnosing and treating urological cancers with precision, expertise, and patient-focused care.",
      "We specialise in cancers affecting the urinary tract and male reproductive system — including prostate cancer, kidney cancer, bladder cancer, and testicular cancer. Our team of highly experienced urologists and specialists ensures accurate diagnosis and effective treatment plans tailored to each patient's condition.",
      "We combine advanced technology with a personalised approach. From early screening and diagnosis to minimally invasive surgeries and post-treatment care, every step is designed to deliver the best outcomes with minimal discomfort. Our goal is not just treatment, but complete support throughout your recovery journey.",
      "We understand that dealing with urological cancer can be overwhelming. Our team focuses on clear communication, patient education, and emotional support, so every patient feels confident and informed about their treatment options. Conveniently located in Sahakar Nagar, Bangalore, our hospital is easily accessible and equipped with modern facilities to deliver world-class care — whether you are seeking a second opinion, early diagnosis, or advanced cancer treatment.",
    ],
    symptoms: [
      "Blood in urine",
      "Lump or swelling in the testicle or kidney area",
      "Persistent back pain",
      "Unexplained weight loss",
      "Difficulty urinating (in advanced prostate cancer)",
    ],
    treatments: [
      { name: "Early Screening & Diagnosis", description: "Targeted screening programmes and modern diagnostic tools for early, accurate detection." },
      { name: "Minimally Invasive Surgery", description: "Advanced surgical techniques for faster recovery and minimal discomfort wherever oncologically appropriate." },
      { name: "Radical Prostatectomy", description: "Open or laparoscopic removal of the prostate for localised prostate cancer." },
      { name: "Partial / Radical Nephrectomy", description: "Kidney-sparing or complete removal for kidney tumours." },
      { name: "Radical Cystectomy", description: "Bladder removal with urinary diversion for invasive bladder cancer." },
      { name: "Post-Treatment & Survivorship Care", description: "Structured follow-up, surveillance, and long-term recovery support." },
    ],
    whyChooseUs: [
      "Highly experienced urologists and cancer specialists",
      "Advanced technology with a personalised approach",
      "Clear communication, patient education, and emotional support",
      "Minimally invasive surgeries with focus on recovery",
      "Convenient Sahakar Nagar, Bangalore location",
      "Trusted for second opinions, early diagnosis, and advanced treatment",
    ],
    faqs: [
      { q: "Which urological cancers do you treat?", a: "We treat prostate, kidney, bladder, and testicular cancers — from early screening through definitive treatment and survivorship care." },
      { q: "Will I need chemotherapy?", a: "It depends on the type, stage, and biology of the cancer. Many early-stage urological cancers are cured with surgery alone; others may benefit from systemic therapy." },
      { q: "Do you offer second opinions?", a: "Yes. Whether you are seeking a second opinion, early diagnosis, or advanced cancer treatment, our team is here to help." },
    ],
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
    accent: "primary",
  },
  {
    slug: "urinary-incontinence-treatment-in-bangalore",
    image: "/services/urinary-incontinence-treatment-in-bangalore.webp",
    category: "Urology",
    title: "Urinary Incontinence Treatment in Bangalore",
    shortDescription:
      "Evaluation and treatment of stress, urge, and mixed incontinence through behavioral, medical, and surgical approaches.",
    longDescription: [
      "Urinary incontinence is more common than people think — and rarely something patients should simply live with. The right treatment depends on the type and cause, and most patients see significant improvement with appropriate care.",
    ],
    symptoms: [
      "Leakage with coughing, sneezing, or exercise (stress incontinence)",
      "Sudden, intense urge followed by leakage (urge incontinence)",
      "Frequent urination, day or night",
      "Bedwetting",
    ],
    treatments: [
      { name: "Pelvic Floor Therapy", description: "Targeted exercises to strengthen pelvic muscles." },
      { name: "Bladder Training", description: "Behavioral programs to improve bladder control." },
      { name: "Medications", description: "Anticholinergics and beta-3 agonists for overactive bladder." },
      { name: "Sling Procedures", description: "Minimally invasive surgery for stress incontinence." },
      { name: "Botox Injections", description: "Effective for refractory overactive bladder." },
    ],
    whyChooseUs: [
      "Onsite urodynamic testing",
      "Full range of treatment options",
      "Discreet, sensitive care",
    ],
    faqs: [
      { q: "Is incontinence reversible?", a: "Most patients see significant improvement with the right treatment. Surgical options are highly effective for stress incontinence." },
    ],
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    accent: "primary",
  },

  // ─── MEN'S HEALTH ────────────────────────────────────────
  {
    slug: "low-testosterone",
    category: "Men's Health",
    title: "Low Testosterone",
    shortDescription:
      "Diagnosis and management of androgen deficiency (testosterone < 300 ng/dL) — comprehensive hormonal workup, multiple TRT delivery options, and strict safety monitoring.",
    longDescription: [
      "Androgen deficiency is a condition in which the testes and adrenal glands produce insufficient testosterone, affecting reproductive function, sexual performance, body composition, bone strength, and cognitive well-being. It is estimated to affect roughly 13.8% of middle-aged and older men. Diagnosis is based on serum testosterone below 300 ng/dL with consistent symptoms; LH measurement helps distinguish primary from secondary causes.",
      "Treatment may include testosterone replacement therapy (TRT) using oral medications, transdermal gels, injections, or pellets — chosen to suit lifestyle and clinical profile. The aim is to restore testosterone to the mid-normal range while minimising side effects. Importantly, men actively pursuing fertility should avoid exogenous testosterone, as it suppresses sperm production — we use alternative strategies in those cases.",
    ],
    symptoms: [
      "Low libido or sexual desire",
      "Fatigue and lack of energy",
      "Loss of muscle mass and strength",
      "Mood changes, irritability, or depression",
      "Difficulty concentrating",
      "Erectile dysfunction",
    ],
    treatments: [
      { name: "Comprehensive Hormonal Evaluation", description: "Total testosterone, free testosterone, LH, FSH, prolactin, SHBG, and metabolic profile." },
      { name: "Testosterone Replacement Therapy (TRT)", description: "Injectable, gel, or oral options tailored to lifestyle and response." },
      { name: "Lifestyle & Nutrition Optimization", description: "Sleep, exercise, weight, and dietary guidance to support natural hormone balance." },
      { name: "Ongoing Monitoring", description: "Regular bloodwork to ensure safe hormone levels and prevent side effects." },
    ],
    whyChooseUs: [
      "Specialist-led TRT with strict safety monitoring",
      "Comprehensive hormonal workup",
      "Integrated metabolic and lifestyle support",
      "All testing available on site",
    ],
    faqs: [
      { q: "Is TRT safe?", a: "When prescribed and monitored by a qualified andrologist, TRT is safe and effective. We screen for prostate health and monitor regularly." },
      { q: "Will I need TRT for life?", a: "It depends on the cause. Some men need lifelong therapy; others recover natural function once underlying issues are addressed." },
    ],
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    accent: "accent",
  },
  {
    slug: "prostate-health",
    category: "Men's Health",
    title: "Prostate Health",
    shortDescription:
      "Comprehensive prostate screening, PSA monitoring, and proactive prostate care for men over 40.",
    longDescription: [
      "Prostate problems become increasingly common with age. Proactive screening — including PSA testing, digital rectal examination, and ultrasound when needed — helps detect issues early when they are most treatable.",
      "We offer structured prostate health programs for men over 40, with personalized screening intervals based on individual risk factors.",
    ],
    symptoms: [
      "Family history of prostate cancer",
      "Age over 40 (or 45 with risk factors)",
      "Mild urinary symptoms",
      "Elevated PSA on routine testing",
    ],
    treatments: [
      { name: "PSA Screening Programs", description: "Structured PSA testing with risk-stratified intervals." },
      { name: "Digital Rectal Examination", description: "Simple, quick clinical examination for early detection." },
      { name: "TRUS-Guided Biopsy", description: "Targeted prostate biopsy when indicated by elevated PSA." },
      { name: "Lifestyle Counseling", description: "Diet, exercise, and lifestyle guidance for prostate health." },
    ],
    whyChooseUs: [
      "Onsite PSA testing and ultrasound",
      "Structured screening programs",
      "Coordinated cancer team if needed",
    ],
    faqs: [
      { q: "When should I start prostate screening?", a: "Generally at age 50, or 40-45 if you have a family history or are at higher risk. We tailor recommendations individually." },
    ],
    icon: "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z",
    accent: "accent",
  },
  {
    slug: "preventive-cardiology",
    category: "Men's Health",
    title: "Preventive Cardiology",
    shortDescription:
      "Cardiovascular risk assessment and prevention — recognizing the strong link between heart health and erectile function.",
    longDescription: [
      "Erectile dysfunction is often the first warning sign of cardiovascular disease — the smaller penile arteries narrow before larger coronary arteries. Comprehensive men's health includes proactive cardiovascular evaluation.",
      "We offer cardiovascular risk profiling and coordinate with cardiology specialists for prevention, lifestyle optimization, and timely intervention.",
    ],
    symptoms: [
      "Erectile dysfunction (often first sign of vascular disease)",
      "High blood pressure or cholesterol",
      "Family history of heart disease",
      "Diabetes, obesity, or sedentary lifestyle",
      "Chest discomfort or breathlessness",
    ],
    treatments: [
      { name: "Cardiovascular Risk Profiling", description: "Lipid profile, blood pressure, ECG, and risk score calculation." },
      { name: "Lifestyle Modification", description: "Structured programs for diet, exercise, and stress management." },
      { name: "Coordinated Cardiology Care", description: "Referral and coordination with cardiology specialists when needed." },
      { name: "Medication Management", description: "Statins, anti-hypertensives, and other preventive medications." },
    ],
    whyChooseUs: [
      "Holistic men's health approach",
      "Recognition of ED-cardiac link",
      "Coordinated care with cardiology",
    ],
    faqs: [
      { q: "Why is ED linked to heart health?", a: "The same blood vessel disease that causes ED can affect the heart. ED can appear years before a cardiac event — it's a critical warning sign." },
    ],
    icon: "M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z",
    accent: "accent",
  },
  {
    slug: "diabetes-hypertension",
    category: "Men's Health",
    title: "Diabetes & Hypertension",
    shortDescription:
      "Management of diabetes and hypertension — both major contributors to urological and sexual health problems.",
    longDescription: [
      "Diabetes and hypertension are leading causes of erectile dysfunction, kidney disease, and urinary problems in men. Optimal control of these conditions dramatically improves urological and overall health outcomes.",
      "We offer integrated diabetes and hypertension management as part of our holistic men's health approach.",
    ],
    symptoms: [
      "Increased thirst, frequent urination",
      "Fatigue, blurred vision",
      "High blood pressure readings",
      "Headaches, dizziness",
      "Erectile dysfunction or infertility",
    ],
    treatments: [
      { name: "HbA1c & Glucose Monitoring", description: "Comprehensive diabetes evaluation and control." },
      { name: "Blood Pressure Management", description: "Lifestyle and medication-based hypertension control." },
      { name: "Kidney Function Assessment", description: "Regular monitoring to detect early kidney involvement." },
      { name: "Nutrition & Lifestyle Counseling", description: "Personalized plans for sustainable disease control." },
    ],
    whyChooseUs: [
      "Integrated with urological care",
      "Onsite testing facilities",
      "Lifestyle coaching and follow-up",
    ],
    faqs: [
      { q: "How does diabetes affect sexual health?", a: "Diabetes damages nerves and blood vessels, frequently causing ED, retrograde ejaculation, and reduced libido. Good glucose control significantly helps." },
    ],
    icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z",
    accent: "accent",
  },
  {
    slug: "cosmetology-for-men",
    category: "Men's Health",
    title: "Cosmetology for Men",
    shortDescription:
      "Specialized aesthetic and cosmetic treatments for men — hair, skin, anti-ageing, and grooming concerns.",
    longDescription: [
      "Looking and feeling your best is part of overall wellness. Our cosmetology service offers evidence-based aesthetic treatments tailored specifically for men — addressing hair loss, skin concerns, and anti-ageing in a discreet, masculine setting.",
    ],
    symptoms: [
      "Hair thinning or male pattern baldness",
      "Skin problems — acne, pigmentation",
      "Premature ageing or fine lines",
      "Excess facial or body hair concerns",
    ],
    treatments: [
      { name: "Hair Loss Treatment", description: "PRP, mesotherapy, medications, and hair transplant options." },
      { name: "Anti-ageing Treatments", description: "Botox, fillers, and skin rejuvenation procedures." },
      { name: "Acne & Pigmentation Care", description: "Medical-grade treatments for problem skin." },
      { name: "Laser Hair Removal", description: "Safe, effective hair removal for men." },
    ],
    whyChooseUs: [
      "Specialist dermatology team",
      "Men-focused aesthetic protocols",
      "Discreet, professional setting",
    ],
    faqs: [
      { q: "Are these treatments safe for men?", a: "Yes — all our treatments are evidence-based and tailored for men's specific anatomy and concerns." },
    ],
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    accent: "accent",
  },
  {
    slug: "psychiatry-counselling",
    category: "Men's Health",
    title: "Psychiatry & Counselling",
    shortDescription:
      "Confidential psychological counseling for sexual concerns, performance anxiety, depression, relationships, and stress.",
    longDescription: [
      "Mental and sexual health are deeply connected. Performance anxiety, depression, stress, and relationship difficulties can both cause and result from sexual or urological problems — and addressing them is essential for complete care.",
      "Our clinical psychologist offers confidential individual and couples sessions using evidence-based approaches including CBT, sex therapy, and supportive counseling.",
    ],
    symptoms: [
      "Performance anxiety",
      "Loss of confidence or self-esteem",
      "Relationship difficulties",
      "Depression, anxiety, or stress",
      "Emotional impact of infertility or ED",
    ],
    treatments: [
      { name: "Individual Counseling", description: "Confidential one-on-one sessions tailored to your concerns." },
      { name: "Couples Therapy", description: "Joint sessions to rebuild intimacy and communication." },
      { name: "Cognitive Behavioral Therapy", description: "Evidence-based therapy for anxiety and unhelpful thought patterns." },
      { name: "Sex Therapy", description: "Specialized therapy for sexual dysfunction and intimacy concerns." },
      { name: "Stress Management", description: "Techniques and structured programs for stress and burnout." },
    ],
    whyChooseUs: [
      "Onsite clinical psychologist",
      "Fully confidential sessions",
      "Integrated with your medical care",
    ],
    faqs: [
      { q: "Will my partner need to attend?", a: "Not necessarily. Sessions can be individual or as a couple, depending on what works best." },
    ],
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    accent: "accent",
  },
  {
    slug: "yoga-wellness",
    category: "Men's Health",
    title: "Yoga & Wellness",
    shortDescription:
      "Yoga, meditation, and wellness programs designed for men — supporting urological, sexual, and overall health.",
    longDescription: [
      "Yoga and structured wellness practices have proven benefits for stress reduction, sexual function, prostate health, and overall well-being. We integrate evidence-based wellness practices into our holistic men's health approach.",
      "Our wellness programs include yoga therapy, breathing techniques, meditation, and lifestyle guidance — tailored for men's specific health goals.",
    ],
    symptoms: [
      "Chronic stress or burnout",
      "Sleep difficulties",
      "Sedentary lifestyle",
      "Pelvic floor weakness",
      "General health & vitality concerns",
    ],
    treatments: [
      { name: "Therapeutic Yoga", description: "Customized yoga practice for specific health concerns." },
      { name: "Breathing Techniques (Pranayama)", description: "Evidence-based breathing for stress and ED." },
      { name: "Meditation & Mindfulness", description: "Guided practices for mental wellness." },
      { name: "Pelvic Floor Yoga", description: "Targeted practices for urological and sexual health." },
    ],
    whyChooseUs: [
      "Integrated wellness approach",
      "Evidence-based practices",
      "Tailored for men's health concerns",
    ],
    faqs: [
      { q: "Can yoga really help ED?", a: "Yes — research shows specific yoga practices improve erectile function, particularly in stress-related ED. They complement medical treatment well." },
    ],
    icon: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12z",
    accent: "accent",
  },

  // ─── ADDITIONAL SERVICES ─────────────────────────────────
  {
    slug: "female-fertility-treatment-in-bangalore",
    image: "/services/female-fertility-treatment-in-bangalore.webp",
    category: "Additional Services",
    title: "Female Fertility Treatment in Bangalore",
    shortDescription:
      "Advanced and compassionate female fertility care at Joshi's Andrology and Urology Hospital, Sahakar Nagar — personalised treatment plans for PCOS, ovulation disorders, endometriosis, and more.",
    longDescription: [
      "Fertility concerns can be emotionally challenging, and the right care makes a real difference. At Joshi's Andrology and Urology Hospital, we provide advanced and compassionate female fertility treatment in Bangalore — helping women move toward parenthood with confidence and care.",
      "Recognised as a leading female fertility hospital in Sahakar Nagar, Bangalore, our centre combines modern technology with experienced specialists to deliver personalised solutions. Whether you are facing PCOS, irregular periods, hormonal imbalance, ovulation disorders, endometriosis, or unexplained infertility, our team is here to guide you at every step.",
      "Our comprehensive fertility care for women includes accurate diagnosis, fertility evaluation, ovulation induction, hormonal therapy, and advanced reproductive techniques. Every patient is unique, so each treatment plan is tailored to your medical history, lifestyle, and fertility goals.",
      "We focus on holistic reproductive health — pairing clinical care with detailed consultations, lifestyle guidance, and emotional support, so the journey is comfortable and stress-free. If you are looking for a trusted female fertility centre in Sahakar Nagar, take the first step today and book a consultation with our specialists.",
    ],
    symptoms: [
      "Difficulty conceiving",
      "Irregular menstrual cycles or hormonal imbalance",
      "PCOS or endometriosis",
      "Ovulation disorders",
      "Unexplained infertility",
      "Recurrent pregnancy loss or advanced maternal age concerns",
    ],
    treatments: [
      { name: "Fertility Evaluation & Diagnosis", description: "Detailed assessment to identify the underlying cause and the best path forward." },
      { name: "Ovulation Induction", description: "Oral or injectable medications to stimulate ovulation, with careful cycle monitoring." },
      { name: "Hormonal Therapy", description: "Targeted treatment for hormonal imbalance, PCOS, and ovulation disorders." },
      { name: "Follicular Monitoring", description: "Ultrasound tracking of egg development for accurate timing." },
      { name: "Ovarian Reserve Testing", description: "AMH, AFC, and FSH testing to assess fertility potential." },
      { name: "PCOS & Endometriosis Care", description: "Comprehensive management of common fertility-affecting conditions." },
      { name: "Advanced Reproductive Techniques", description: "Coordinated IUI, IVF, and ICSI services as part of your tailored plan." },
    ],
    whyChooseUs: [
      "Experienced female fertility specialists",
      "Modern technology with personalised care plans",
      "Comprehensive evaluation and treatment under one roof",
      "Holistic reproductive health — clinical + lifestyle + emotional support",
      "Patient-first approach with detailed consultations",
      "Trusted Sahakar Nagar, Bangalore location",
    ],
    faqs: [
      { q: "Who is female fertility treatment for?", a: "Women facing PCOS, irregular periods, hormonal imbalance, ovulation disorders, endometriosis, unexplained infertility, recurrent pregnancy loss, or age-related fertility concerns." },
      { q: "How is the treatment plan decided?", a: "After a detailed fertility evaluation, your specialist will create a customised plan based on your medical history, lifestyle, and fertility goals." },
      { q: "Should both partners be evaluated?", a: "Yes — male factor contributes to a large share of cases. Evaluating both partners together gives the best chance of success, and our integrated andrology and IVF teams coordinate care closely." },
    ],
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    accent: "gold",
  },
  {
    slug: "iui-treatment-in-bangalore",
    image: "/services/iui-treatment-in-bangalore.webp",
    category: "Additional Services",
    title: "IUI Treatment in Bangalore",
    shortDescription:
      "Trusted IUI care at Joshi's Andrology & Urology Hospital, Sahakar Nagar — advanced fertility solutions, experienced specialists, and a structured, patient-friendly process.",
    longDescription: [
      "If you are looking for IUI treatment in Bangalore, Joshi's Andrology & Urology Hospital offers advanced, safe, and effective fertility solutions tailored to your needs. Recognised as a leading IUI hospital in Sahakar Nagar, Bangalore, we specialise in helping couples achieve their dream of parenthood with expert care and modern medical technology.",
      "Intrauterine Insemination (IUI) is a simple and minimally invasive fertility treatment in which healthy, processed sperm is placed directly into the uterus during ovulation. This increases the chances of fertilisation and is often recommended for couples facing male infertility, low sperm count, unexplained infertility, or ovulation issues.",
      "We combine expertise, precision, and personalised care to deliver high success rates. Our team of experienced specialists ensures that every step of your IUI journey is handled with care and full transparency, supported by advanced diagnostic and lab facilities.",
      "We understand the emotional and physical challenges of infertility. As a leading centre for IUI treatment in Bangalore, we are committed to providing compassionate care, accurate diagnosis, and effective solutions. If you are searching for the best IUI treatment in Sahakar Nagar, Bangalore — your journey begins here. Book your consultation today and take the first step towards parenthood.",
    ],
    symptoms: [
      "Couples with unexplained infertility",
      "Men with low sperm motility or count",
      "Women with cervical mucus issues",
      "Mild endometriosis",
      "Couples trying to conceive over a long time",
    ],
    treatments: [
      { name: "Initial Consultation & Fertility Assessment", description: "Detailed evaluation of both partners to plan the right treatment path." },
      { name: "Ovulation Monitoring", description: "Ultrasound and hormonal tracking to time the procedure precisely." },
      { name: "Semen Preparation (Sperm Washing)", description: "Lab processing to concentrate the most motile, healthy sperm." },
      { name: "IUI Procedure", description: "Quick, minimally invasive placement of processed sperm directly into the uterus — typically completed within minutes." },
      { name: "Post-Procedure Support & Guidance", description: "Structured follow-up and emotional support throughout the journey." },
    ],
    whyChooseUs: [
      "Trusted IUI hospital in Sahakar Nagar, Bangalore",
      "Experienced fertility and andrology specialists",
      "Advanced diagnostic and lab facilities",
      "Personalised treatment plans for every couple",
      "High success rates in IUI procedures",
      "Compassionate, transparent, patient-friendly care",
    ],
    faqs: [
      { q: "Is IUI painful?", a: "No — it's a quick, minimally invasive procedure usually completed within minutes, similar to a routine pelvic exam." },
      { q: "Who is IUI suitable for?", a: "IUI is ideal for couples with unexplained infertility, mild male factor, cervical mucus issues, mild endometriosis, or those who have been trying to conceive for a long time." },
      { q: "How long does the process take?", a: "The procedure itself is quick. The full cycle includes initial consultation, fertility assessment, ovulation monitoring, semen preparation, the IUI procedure, and post-procedure support." },
    ],
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    accent: "gold",
  },
  {
    slug: "icsi-treatment-in-bangalore",
    image: "/services/icsi-treatment-in-bangalore.webp",
    category: "Additional Services",
    title: "ICSI Treatment in Bangalore",
    shortDescription:
      "Advanced ICSI fertility care at Joshi's Andrology and Urology Hospital, Sahakar Nagar — a focused solution for male infertility, low sperm count, poor motility, and previous IVF failures.",
    longDescription: [
      "If you are struggling with infertility, advanced treatments like ICSI (Intracytoplasmic Sperm Injection) offer real hope and proven results. At Joshi's Andrology and Urology Hospital, we provide world-class ICSI treatment in Bangalore, helping couples achieve their dream of parenthood with precision and care.",
      "Recognised as a leading ICSI hospital in Sahakar Nagar, Bangalore, our centre combines cutting-edge technology with expert medical guidance. ICSI is highly effective for male infertility, low sperm count, poor sperm motility, or previous IVF failures. In this procedure, a single healthy sperm is injected directly into the egg to maximise the chance of successful fertilisation.",
      "Every fertility journey is unique, so our experienced specialists provide personalised ICSI treatment plans focused on the highest success rates while maintaining patient comfort and transparency. We use advanced laboratory techniques and follow strict quality standards to deliver accurate, reliable outcomes.",
      "As a trusted ICSI centre in Bangalore we focus on clinical excellence and emotional support together — guiding you at every step. If you are considering ICSI in Sahakar Nagar or Bangalore, get in touch with our specialists to understand if ICSI is the right option for you. We are committed to safe, ethical, and result-oriented fertility care tailored to your needs.",
    ],
    symptoms: [
      "Severe male factor infertility",
      "Low sperm count (oligospermia)",
      "Poor sperm motility (asthenospermia)",
      "Abnormal sperm morphology",
      "Previous failed IVF cycles",
      "Azoospermia with surgically retrieved sperm",
    ],
    treatments: [
      { name: "Personalised ICSI Treatment Plan", description: "Tailored protocol after detailed evaluation of both partners — focused on the best possible success rate." },
      { name: "ICSI Procedure", description: "A single healthy sperm is injected directly into each mature egg to maximise fertilisation." },
      { name: "ICSI with Surgical Sperm Retrieval", description: "Combined with PESA, TESA, or micro-TESE for azoospermia cases." },
      { name: "Advanced Embryology Lab", description: "State-of-the-art lab techniques and strict quality standards for reliable outcomes." },
      { name: "Comprehensive Diagnosis & Support", description: "End-to-end fertility evaluation and emotional support throughout the journey." },
    ],
    whyChooseUs: [
      "Advanced ICSI fertility treatment in Bangalore",
      "Expert care for male infertility and reproductive health",
      "State-of-the-art embryology lab facilities",
      "Comprehensive diagnosis and treatment support",
      "Personalised plans with full transparency",
      "Clinical excellence combined with emotional support",
    ],
    faqs: [
      { q: "Who is ICSI suitable for?", a: "ICSI is especially beneficial in male infertility, low sperm count, poor sperm motility, abnormal morphology, azoospermia (with surgical sperm retrieval), or previous IVF failures." },
      { q: "Is ICSI safe?", a: "ICSI has been used safely for over 30 years and is performed with strict laboratory quality standards. We discuss any individual considerations during your consultation." },
      { q: "How is ICSI different from IVF?", a: "Standard IVF mixes eggs and sperm in the lab and lets fertilisation happen naturally. In ICSI, a single healthy sperm is injected directly into each egg — improving fertilisation when sperm quality is the limiting factor." },
    ],
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    accent: "gold",
  },
  {
    slug: "ivf-treatment-in-bangalore",
    image: "/services/ivf-treatment-in-bangalore.webp",
    category: "Additional Services",
    title: "IVF Treatment in Bangalore",
    shortDescription:
      "Advanced IVF care at Joshi's Andrology and Urology Hospital, Sahakar Nagar — modern lab techniques, experienced specialists, and personalised treatment plans for every couple.",
    longDescription: [
      "If you are searching for the best IVF treatment in Bangalore, Joshi's Andrology and Urology Hospital offers advanced fertility solutions with personalised care. Recognised as a leading IVF hospital in Sahakar Nagar, Bangalore, we are committed to helping couples achieve their dream of parenthood through safe, effective, and affordable treatments.",
      "Our hospital provides state-of-the-art IVF treatment in Bangalore, combining modern technology with experienced fertility specialists. IVF (In Vitro Fertilisation) is one of the most effective solutions for couples facing infertility issues such as low sperm count, PCOS, blocked fallopian tubes, or unexplained infertility.",
      "We follow a step-by-step approach — detailed fertility assessment, personalised IVF treatment plans, advanced lab techniques for higher success rates, and continuous monitoring with expert guidance. Every patient receives compassionate care and transparent communication throughout the journey.",
      "Beyond IVF we offer a full range of fertility services including IUI, male infertility treatment, andrology services, and hormonal evaluation — making us a trusted, integrated choice for fertility care in Bangalore. Take the first step towards building your family with expert guidance and advanced care.",
    ],
    symptoms: [
      "Couples unable to conceive despite trying",
      "Low sperm count or male factor infertility",
      "PCOS or ovulation disorders",
      "Blocked or damaged fallopian tubes",
      "Unexplained infertility",
      "Failed IUI cycles",
    ],
    treatments: [
      { name: "Detailed Fertility Assessment", description: "Comprehensive evaluation of both partners to plan the right treatment path." },
      { name: "Personalised IVF Treatment Plan", description: "Stimulation protocol and monitoring tailored to your individual diagnosis and history." },
      { name: "Advanced Lab Techniques", description: "Modern embryology lab practices designed for higher success rates." },
      { name: "Continuous Monitoring & Expert Guidance", description: "Ultrasound and hormone tracking through every step, with full transparency." },
      { name: "Integrated Fertility Care", description: "Coordinated IUI, male infertility, andrology, and hormonal evaluation services under one roof." },
    ],
    whyChooseUs: [
      "Experienced fertility and urology specialists",
      "High IVF success rates",
      "Advanced diagnostic and laboratory facilities",
      "Affordable IVF packages in Bangalore",
      "Patient-centred approach with emotional support",
      "Comfortable, supportive environment for every couple",
    ],
    faqs: [
      { q: "Who is IVF suitable for?", a: "IVF is recommended for couples facing infertility from causes like low sperm count, PCOS, blocked fallopian tubes, unexplained infertility, or after failed IUI cycles." },
      { q: "Are affordable IVF packages available?", a: "Yes — we offer affordable IVF packages and transparent pricing to make fertility care accessible." },
      { q: "What other fertility treatments do you offer?", a: "Alongside IVF we provide IUI, male infertility treatment, andrology services, and hormonal evaluation as part of an integrated fertility programme." },
    ],
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    accent: "gold",
  },
  {
    slug: "advanced-semen-analysis-in-bangalore",
    image: "/services/advanced-semen-analysis-in-bangalore.webp",
    category: "Additional Services",
    title: "Advanced Semen Analysis in Bangalore",
    shortDescription:
      "Detailed, accurate semen evaluation at Joshi's Andrology and Urology Hospital, Sahakar Nagar — modern lab, expert interpretation, and personalised treatment guidance.",
    longDescription: [
      "At Joshi's Andrology and Urology Hospital, we offer advanced semen analysis in Bangalore using cutting-edge technology and expert evaluation to deliver accurate, reliable results. As a leading andrology and urology hospital in Sahakar Nagar, we specialise in diagnosing male fertility issues with precision and care.",
      "Advanced semen analysis is a detailed laboratory test that evaluates sperm count, motility, morphology, vitality, and overall semen health. Unlike basic testing, our advanced analysis includes DNA fragmentation testing, sperm function tests, and microscopic evaluation — helping identify the underlying causes of infertility more effectively.",
      "If you are facing challenges such as difficulty conceiving, low sperm count, erectile issues, or hormonal imbalances, an advanced semen analysis can help identify the root cause. Early diagnosis allows for effective treatment and improves the chances of successful conception.",
      "We follow a patient-centric approach, ensuring complete privacy, comfort, and clear communication throughout the process. After the test, our experts provide a detailed interpretation and a customised treatment plan tailored to your needs. If you are looking for trusted advanced semen analysis in Bangalore or a leading andrology hospital in Sahakar Nagar, take the first step towards better reproductive health today.",
    ],
    symptoms: [
      "Difficulty conceiving",
      "Low sperm count or suspected male factor infertility",
      "Erectile issues or hormonal imbalances",
      "Recurrent IVF failure or miscarriage",
      "Pre-fertility planning evaluation",
      "Pre and post varicocele or vasectomy reversal assessment",
    ],
    treatments: [
      { name: "WHO Standard Semen Analysis", description: "Volume, concentration, motility, morphology, and vitality assessed to current WHO criteria." },
      { name: "DNA Fragmentation Testing", description: "Evaluates sperm DNA integrity — a critical predictor of fertility outcomes, especially with IVF/ICSI." },
      { name: "Sperm Function Tests", description: "Microscopic and functional assays for a deeper picture of sperm health." },
      { name: "Detailed Interpretation", description: "Expert review of every report with a personalised treatment plan tailored to your needs." },
      { name: "Cryopreservation Compatibility", description: "Pre-freeze and post-thaw analysis for fertility preservation planning." },
    ],
    whyChooseUs: [
      "Highly experienced andrology and fertility specialists",
      "Advanced diagnostic laboratory with modern technology",
      "Accurate and fast semen analysis reports",
      "Personalised consultation and treatment guidance",
      "Trusted male fertility clinic in Bangalore",
      "Complete privacy, comfort, and clear communication",
    ],
    faqs: [
      { q: "What does advanced semen analysis include?", a: "Sperm count, motility, morphology, vitality, and overall semen health — plus advanced testing such as DNA fragmentation and sperm function assays where indicated." },
      { q: "Who should consider this test?", a: "Anyone facing difficulty conceiving, low sperm count, erectile issues, or hormonal imbalances. It's also useful for fertility planning and post-treatment review." },
      { q: "How are results delivered?", a: "Reports are accurate and fast, followed by a detailed expert interpretation and a personalised treatment plan tailored to your needs." },
    ],
    icon: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3",
    accent: "gold",
  },
  {
    slug: "best-gynaecology-hospital-in-bangalore",
    image: "/services/best-gynaecology-hospital-in-bangalore.webp",
    category: "Additional Services",
    title: "Best Gynaecology Hospital in Bangalore",
    shortDescription:
      "Comprehensive women's healthcare at Joshi's Andrology and Urology Hospital, Sahakar Nagar — patient-first care, advanced diagnostics, and a multidisciplinary team for every stage of life.",
    longDescription: [
      "When it comes to women's health, choosing the right hospital is essential for safe, effective, and compassionate care. At Joshi's Andrology and Urology Hospital, we extend our expertise to deliver comprehensive gynaecological services that support women at every stage of life.",
      "Conveniently located, we are recognised as a trusted gynaecology hospital in Sahakar Nagar, Bangalore, offering advanced treatments with a patient-first approach. Our experienced specialists focus on accurate diagnosis, personalised care, and modern medical solutions to ensure the best outcomes.",
      "We provide holistic women's healthcare using advanced technology and evidence-based treatments, with a multidisciplinary approach that gives every patient complete and coordinated care under one roof. Our team understands the unique healthcare needs of women and strives to make care both effective and comforting.",
      "If you are looking for a reliable gynaecology hospital in Sahakar Nagar — whether for preventive care or specialised treatment — Joshi's Andrology and Urology Hospital offers dependable, advanced gynaecology services in Bangalore. Contact us today to schedule your consultation.",
    ],
    symptoms: [
      "Irregular or painful periods",
      "PCOS / PCOD symptoms",
      "Pelvic pain or discomfort",
      "Fertility concerns or pre-pregnancy planning",
      "Pregnancy-related care needs",
      "Menopause-related symptoms",
    ],
    treatments: [
      { name: "Routine Gynaecological Check-ups", description: "Preventive evaluations and screenings to keep women's health on track at every stage." },
      { name: "Menstrual Disorder Management", description: "Diagnosis and treatment for irregular, heavy, or painful periods." },
      { name: "PCOS / PCOD Treatment", description: "Personalised hormonal and lifestyle management plans." },
      { name: "Fertility Evaluation & Support", description: "Coordinated with our andrology and IVF teams for couples-focused fertility care." },
      { name: "Pregnancy Care & Guidance", description: "Antenatal evaluation and supportive care throughout pregnancy." },
      { name: "Menopause Management", description: "Symptom management and long-term wellness planning." },
      { name: "Minimally Invasive Procedures", description: "Modern, day-care procedures with faster recovery wherever appropriate." },
    ],
    whyChooseUs: [
      "Highly experienced doctors and specialists",
      "Advanced diagnostic and treatment facilities",
      "Personalised treatment plans",
      "Safe, hygienic, and modern infrastructure",
      "Compassionate and confidential care",
      "Multidisciplinary, coordinated care under one roof",
    ],
    faqs: [
      { q: "What gynaecological services do you offer?", a: "Routine check-ups, menstrual disorder management, PCOS / PCOD treatment, fertility evaluation, pregnancy care, menopause management, and minimally invasive procedures." },
      { q: "Do I need a referral?", a: "No referral is needed. You can book directly with our gynaecology team." },
      { q: "Is care confidential?", a: "Yes — all consultations and treatments are fully confidential, in a comfortable and supportive environment." },
    ],
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    accent: "gold",
  },
  {
    slug: "best-radiology-hospital-in-bangalore",
    image: "/services/best-radiology-hospital-in-bangalore.webp",
    category: "Additional Services",
    title: "Best Radiology Hospital in Bangalore",
    shortDescription:
      "Accurate, timely diagnostic imaging at Joshi's Andrology and Urology Hospital, Sahakar Nagar — modern equipment, experienced radiologists, and fast reports.",
    longDescription: [
      "Accurate diagnosis depends on accurate imaging. At Joshi's Andrology and Urology Hospital, our radiology service delivers precise, reliable, and timely results that support effective treatment and better patient outcomes — for routine scans and specialised diagnostic studies alike.",
      "Recognised as a leading radiology hospital in Sahakar Nagar, Bangalore, we combine cutting-edge technology with experienced radiologists so every scan and test meets the highest standards of accuracy. The department is equipped with modern diagnostic tools designed to detect and monitor a wide range of medical conditions with clarity.",
      "We offer a comprehensive range of radiology services — including ultrasound scans, Doppler studies, and other advanced imaging techniques. These investigations play a critical role in diagnosing urological and andrological conditions, helping our specialists build personalised treatment plans for every patient.",
      "Conveniently located in Sahakar Nagar, the hospital is easily accessible across Bangalore. Whether you need a routine scan or specialised diagnostic imaging, our focus on innovation, accuracy, and compassionate care makes us a dependable partner for quality healthcare.",
    ],
    symptoms: [
      "Need for scrotal or testicular evaluation",
      "Renal or bladder ultrasound required",
      "Prostate assessment",
      "Image-guided biopsy or procedure",
      "Routine diagnostic imaging or follow-up scan",
    ],
    treatments: [
      { name: "Ultrasound Scans", description: "High-resolution ultrasound for abdominal, pelvic, scrotal, renal, and bladder imaging." },
      { name: "Doppler Studies", description: "Vascular and flow studies including scrotal Doppler for varicocele and testicular evaluation." },
      { name: "Prostate Imaging", description: "TRUS and pelvic ultrasound for prostate assessment." },
      { name: "Uroflowmetry", description: "Functional testing of urinary flow." },
      { name: "Image-Guided Biopsy", description: "Precise, minimally invasive tissue sampling under imaging guidance." },
    ],
    whyChooseUs: [
      "Experienced radiologists with expertise in advanced imaging",
      "Modern equipment for precise and clear diagnostics",
      "Patient-centred care with minimal waiting time",
      "Accurate and timely reports for better treatment decisions",
      "Convenient Sahakar Nagar, Bangalore location",
    ],
    faqs: [
      { q: "What radiology services do you offer?", a: "Ultrasound, Doppler studies, prostate imaging, uroflowmetry, and image-guided procedures — chosen to support accurate diagnosis of urological and andrological conditions." },
      { q: "How quickly will I get my report?", a: "We focus on fast turnaround without compromising on quality, so reports are typically available the same day for most studies." },
      { q: "Do I need to fast or prepare?", a: "It depends on the test — some scans need a full bladder, others empty, and a few need fasting. Our team will advise specific preparation when booking." },
    ],
    icon: "M9 12.75L11.25 15 15 9.75",
    accent: "gold",
  },
  {
    slug: "dermatology",
    image: "/services/dermatology.webp",
    category: "Additional Services",
    title: "Dermatology",
    shortDescription:
      "Skin and hair care — addressing common male dermatology concerns including hair loss, acne, pigmentation, and skin lesions.",
    longDescription: [
      "Our dermatology service complements our men's health offering with expert skin and hair care. From hair loss treatment to acne management and skin lesion evaluation, we provide evidence-based dermatology under the same roof.",
    ],
    symptoms: [
      "Hair thinning or baldness",
      "Acne or pigmentation",
      "Skin rashes or eczema",
      "Suspicious moles or skin lesions",
    ],
    treatments: [
      { name: "Hair Loss Care", description: "PRP, mesotherapy, medical management, and transplant options." },
      { name: "Acne Treatment", description: "Medical-grade treatments and chemical peels." },
      { name: "Pigmentation Care", description: "Targeted treatments for hyperpigmentation and melasma." },
      { name: "Lesion Evaluation", description: "Examination and management of moles, growths, and skin cancers." },
    ],
    whyChooseUs: [
      "Onsite dermatology consults",
      "Integrated with men's health",
      "Evidence-based treatments",
    ],
    faqs: [
      { q: "Does PRP really work for hair loss?", a: "Yes — PRP has solid evidence for early hair loss. Best results come from combining PRP with medical management." },
    ],
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    accent: "gold",
  },
  {
    slug: "internal-medicine",
    image: "/services/internal-medicine.webp",
    category: "Additional Services",
    title: "Internal Medicine",
    shortDescription:
      "General medicine consultations for adult health concerns — diabetes, hypertension, lifestyle conditions, and preventive care.",
    longDescription: [
      "Many urological problems are linked to underlying medical conditions like diabetes, hypertension, and metabolic syndrome. Our internal medicine service provides comprehensive adult health care, integrated with our specialist services.",
      "We offer preventive health checks, chronic disease management, and acute medical care — providing complete health support for our patients.",
    ],
    symptoms: [
      "General health concerns",
      "Diabetes or hypertension",
      "Fatigue, weight changes",
      "Need for preventive health check",
    ],
    treatments: [
      { name: "Comprehensive Health Check", description: "Detailed medical evaluation and screening." },
      { name: "Chronic Disease Management", description: "Diabetes, hypertension, lipid disorders, and more." },
      { name: "Preventive Health Care", description: "Vaccinations, screenings, and lifestyle counseling." },
      { name: "Acute Medical Care", description: "Treatment of acute illnesses and infections." },
    ],
    whyChooseUs: [
      "Integrated with urology & men's health",
      "Onsite lab and imaging",
      "Continuity of care",
    ],
    faqs: [
      { q: "Can I see internal medicine without urology issues?", a: "Yes — internal medicine is available as a standalone service for general adult healthcare." },
    ],
    icon: "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    accent: "gold",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return services.filter((s) => s.category === category);
}

export const serviceCategories: { name: ServiceCategory; accent: "primary" | "secondary" | "accent" | "gold"; description: string; image: string }[] = [
  { name: "Andrology", accent: "secondary", description: "Male reproductive and sexual health", image: "/services/andrologybanner.webp" },
  { name: "Urology", accent: "primary", description: "Comprehensive urinary tract care", image: "/services/urologybanner.webp" },
  { name: "Men's Health", accent: "accent", description: "Holistic wellness for men", image: "/services/menshealthbanner.webp" },
  { name: "Additional Services", accent: "gold", description: "Fertility, imaging, and supporting care", image: "/services/additionalservicesbanner.webp" },
];

export function getCategoryImage(category: ServiceCategory): string {
  return serviceCategories.find((c) => c.name === category)?.image ?? "/services/andrology.svg";
}

export function getServiceImage(service: Service): string {
  return service.image ?? getCategoryImage(service.category);
}
