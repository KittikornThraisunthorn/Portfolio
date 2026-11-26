/* ============================================================
   data.js  —  ไฟล์นี้คือที่เดียวที่ต้องแก้เพื่อเพิ่มผลงาน / รูปภาพ
   ------------------------------------------------------------
   วิธีใส่รูป
   1) เอาไฟล์รูปไปไว้ในโฟลเดอร์ images/ (แยกเป็น projects, certs, skills)
   2) ใส่ path ในช่อง img เช่น  img:"images/projects/ekkage.jpg"
      (ถ้าเว้นว่าง "" จะแสดงภาพท้องฟ้าตัวอย่างแทน)
   3) ชื่อไฟล์ควรเป็นภาษาอังกฤษ ไม่มีเว้นวรรค  เช่น  cert-ticc-2026.jpg

   วิธีเพิ่มผลงานใหม่
   - ก๊อปปี้ปีกกา {...} ของผลงานหนึ่งชิ้นใน W ไปวางต่อท้าย (อย่าลืมใส่ , คั่น)
   - แก้ข้อความ แล้วบันทึก → รีเฟรชหน้าเว็บ

   รูปเพิ่มเติมในหน้าต่างรายละเอียด (ไม่บังคับ)
   - ใส่ imgs:["images/projects/a1.jpg","images/projects/a2.jpg"] ในผลงานนั้นได้
   ============================================================ */

const FEAT={t:"SQL-Based Dormitory Management System",c:"OIC InsurTech Award 2026",img:"images/Dorm.jpg",pdf:"Project/Blue modern Professional Simple Real Estate Presentation.pdf",
colab:"",
 q:"Traditional dormitory management relies on paper-based records and messaging applications, resulting in fragmented information, inefficient data retrieval, and potential data loss.",
 i:"Designed a structured relational database using SQL to centralize information, improve data accessibility, and support more systematic dormitory management processes.",
 r:"Translated real-world operational challenges into database requirements, designed the database structure, and developed SQL queries to support efficient data storage, retrieval, and management.",
 g:["SQL","Relational Database","Database Design","Data Management","Business Process Improvement"]};


const FEAT2 = {
    t:"HR Attrition Analysis",
    c:"People Analytics & Machine Learning",
    img:"images/ROC.jpg",
    pdf:"https://canva.link/vd0oku71ejwjybn",
    colab:"https://colab.research.google.com/drive/1gZIEQ-9VNT2eMPIrwFrCheHmReJezc8u",
    q:"Investigated factors associated with employee attrition to support data-driven workforce management and employee retention strategies.",
    i:"Applied machine learning and ROC-AUC analysis to evaluate classification performance beyond conventional accuracy metrics.",
    r:"Conducted data analysis and model performance evaluation, focusing on translating analytical findings into meaningful insights for HR decision-making.",
    g:["Python","People Analytics","Machine Learning","ROC-AUC"]
};

// const W=[
// {t:"MTL Agent DNA กลยุทธ์ดึงดูดและรักษาตัวแทน",c:"การแข่งขัน TICC 2026",img:"images/MTL.jpg",d:"ข้อเสนอเชิงกลยุทธ์ด้านการสรรหาและรักษาตัวแทนรุ่นใหม่",l:"วิเคราะห์ปัญหาการคงอยู่ของตัวแทน และเสนอแนวทางสรรหาแบบเกมสำหรับคนรุ่นใหม่ ใส่รายละเอียดและผลลัพธ์เพิ่มเติมได้ที่นี่",g:["Strategy","Insurance"],
//     pdf:"Project/Risk C Duang (4).pdf"},
// {t:"BJC Bigseed Talentcamp",c:"ผลิตภัณฑ์",img:"images/B.jpg",d:"ทำให้การวางแผนการเงินและชีวิตเป็นเรื่องสนุก",l:"ใส่ปัญหาที่พบ ผู้ใช้เป้าหมาย ฟีเจอร์หลัก และผลการทดสอบ",g:["Gamification","Product"],
//     pdf:"Project/Quick Analysis Templete.pdf"},
// {t:"โปรเจกต์วิเคราะห์ข้อมูล (ตัวอย่าง)",c:"วิเคราะห์ข้อมูล",img:"images/time.jpg",d:"แทนที่ด้วยชื่อโปรเจกต์ โจทย์ และสิ่งที่ค้นพบ",l:"เล่า 4 ข้อ: โจทย์ ข้อมูลที่ใช้ วิธีวิเคราะห์ และผลลัพธ์",g:["Python","สถิติ"],
//     pdf:"Project/TimeSeries.pdf"},
// {t:"พิธีกรงานมหาวิทยาลัย (ตัวอย่าง)",c:"กิจกรรม",img:"images/boo.jpg",d:"แทนที่ด้วยชื่องาน บทบาท และภาพบรรยากาศ",l:"ใส่รูปจากงานและสิ่งที่ได้เรียนรู้",g:["MC","การนำเสนอ"],
//     pdf:"Project/03_ร้านหนังสือ.pdf"},
// {t:"งานนำเสนอในชั้นเรียน (ตัวอย่าง)",c:"กิจกรรม",img:"images/oic.jpg",d:"แทนที่ด้วยหัวข้อ วิชา และไฟล์สไลด์",l:"ใส่ลิงก์สไลด์หรือรูปประกอบ",g:["Presentation"],
//     pdf:"Project/NEW BMC CANVAS OIC INSURTECH 2026.pdf.pdf"}];

const W = [

{
    t:"MTL Agent DNA – Talent Attraction & Retention Strategy",
    c:"Thailand Insurance Case Competition 2026",
    img:"images/MTL.jpg",

    d:"Developed strategic recommendations to attract and retain next-generation insurance agents through gamification and engagement strategies.",

    l:"Analyzed challenges in insurance agent recruitment and retention, focusing on the needs and motivations of younger generations. Proposed a gamification-based approach to enhance recruitment engagement and support long-term talent retention.",

    g:["Talent Acquisition","Employee Engagement","Retention Strategy","Gamification"],

    pdf:"Project/Risk C Duang (4).pdf"
},

{
    t:"BJC Bigseed Talent Camp – Business Case Competition",
    c:"Top 20 Finalists | Top 6.7%",
    img:"images/B.jpg",

    d:"Advanced to the final 20 teams out of 300 entries in a business case competition focused on local economic challenges.",

    l:"Applied analytical thinking, strategic problem-solving, and teamwork to address local economic challenges and develop business recommendations. Advanced to the final 20 teams out of 300 participating teams.",

    g:["Business Strategy","Analytical Thinking","Problem-solving","Teamwork"],

    pdf:"Project/Quick Analysis Templete.pdf"
},

{
    t:"Time Series Analysis & Forecasting",
    c:"Statistical Data Analytics Project",
    img:"images/time.jpg",

    d:"Applied statistical forecasting techniques to analyze time-dependent data and support data-driven decision-making.",

    l:"Explored time series analysis and statistical forecasting as tools for understanding historical data patterns and supporting future planning. The project demonstrates the application of quantitative methods to practical analytical problems.",

    g:["Time Series","Forecasting","Statistics","Data Analytics"],

    pdf:"Project/TimeSeries.pdf"
},

{
    t:"University Event Hosting & Public Speaking",
    c:"Leadership & Communication Experience",
    img:"images/boo.jpg",

    d:"Demonstrated public speaking and professional communication skills through university event hosting and presentations.",

    l:"Developed communication and presentation skills through university activities, including event hosting and audience engagement. These experiences strengthened confidence, adaptability, and the ability to communicate effectively with diverse audiences.",

    g:["Public Speaking","Communication","Presentation","Adaptability"],

    pdf:"Project/03_ร้านหนังสือ.pdf"
},

{
    t:"InsurTech Business Model Development",
    c:"Business Innovation & Presentation",
    img:"images/oic.jpg",

    d:"Explored business model development and innovative solutions within the insurance technology sector.",

    l:"Focused on communicating insurance technology concepts and business model ideas through structured presentations. The project highlights the integration of business understanding, innovation, and professional communication.",

    g:["Business Model Canvas","InsurTech","Innovation","Presentation"],

    pdf:"Project/NEW BMC CANVAS OIC INSURTECH 2026.pdf.pdf"
}

];

const C=[
{t:"Asean Data Science Explorers 2024",c:"Participated in a regional training program focused on SAP Analytics Cloud and SAP Build Apps, gaining foundational knowledge in data analytics, data visualization, and digital application development",img:"images/certs/aseane2.jpg"},
{t:"The winner Quickathon Rabbitstart",c:"Compete to solve business problems within a tight timeframe, alongside participants from various universities.",img:"images/certs/Rabbitstart.jpg"},
{t:"BJC Bigseed Talentcamp",c:"Advanced to the final 20 teams out of 300 total entries (top 6.7%) in a case study competition focused on addressing local economic challenges, utilizing skills in analytical thinking, strategic problem-solving, and teamwork.",img:"images/certs/BJC.jpg"},
{t:"The Thailand Insurance Case Competition",c:"An analysis of the new strategic direction taken by insurance companies to reshape the image of insurance agents, enhancing their overall effectiveness within the industry.",img:"images/certs/Ticc.jpg"},
{t:"Valuation Master Class Pre-Boot Camp",c:"An in-depth understanding of finance and investment, developed through three key areas: financial literacy, business valuation, and equity instruments.",img:"images/certs/Finance.jpg"}];
// const S=[
// {t:"ทักษะการสืื่อสารกับคนหมู่มาก",img:"images/skills/MC.jpg",d:"MC OF KMITL",e:"เป็นพิธีกรงานมหาวิทยาลัยและนำเสนองานในชั้นเรียน"},
// {t:"การเล่าเรื่องจากข้อมูล",img:"images/skills/Rabbit.jpg",d:"เปลี่ยนตัวเลขและกราฟให้เป็นข้อเสนอที่ตัดสินใจได้",e:"สรุปผลวิเคราะห์เป็นข้อเสนอเชิงกลยุทธ์ในงานประกวด"},
// {t:"การทำงานเป็นทีม",img:"images/skills/GrubeBJ.jpg",d:"แบ่งบทบาท รับฟัง และช่วยให้งานกลุ่มไปถึงเป้าหมาย",e:"แก้เป็นตัวอย่างจริง เช่น งานกลุ่มหรือกีฬาเป็นทีม"},
// {t:"การแก้ปัญหา",img:"images/skills/grupnutsu.jpg",d:"แยกโจทย์ใหญ่เป็นส่วนย่อย แล้วทดสอบทีละข้อสมมติฐาน",e:"แก้เป็นตัวอย่างจริง เช่น ปัญหาที่เจอในโปรเจกต์"},
// {t:"การเรียนรู้ด้วยตนเอง",img:"images/skills/getdorm.jpg",d:"เรียนรู้เครื่องมือและโดเมนใหม่ได้เร็ว",e:"แก้เป็นตัวอย่างจริง เช่น เรียนด้านประกันจากการทำงาน"},
// {t:"การบริหารเวลา",img:"images/skills/getbook.jpg",d:"จัดสมดุลระหว่างเรียน ทำงาน และกิจกรรม",e:"แก้เป็นตัวอย่างจริง เช่น ช่วงส่งงานพร้อมสอบ"}];

const S = [

{
    t:"Public Speaking & Communication",
    img:"images/skills/MC.jpg",
    d:"Communicate ideas clearly and confidently to diverse audiences.",
    e:"Developed communication skills through university event hosting as an MC and academic presentations."
},

{
    t:"Data Storytelling",
    img:"images/skills/Rabbit.jpg",
    d:"Translate complex data and analytical findings into clear, actionable business insights.",
    e:"Presented analytical findings and strategic recommendations in business case competitions."
},

{
    t:"Teamwork & Collaboration",
    img:"images/skills/GrubeBJ.jpg",
    d:"Collaborate effectively with team members, respect diverse perspectives, and work toward shared objectives.",
    e:"Applied collaborative problem-solving and teamwork in group projects and business competitions."
},

{
    t:"Analytical Problem-solving",
    img:"images/skills/grupnutsu.jpg",
    d:"Break down complex challenges into manageable components and evaluate potential solutions systematically.",
    e:"Applied structured thinking to academic projects and business case challenges."
},

{
 

    t:"Field Research & User Insights",
    img:"images/skills/getdorm.jpg",

    d:"Conduct field research and engage directly with users to understand their needs, behaviors, and pain points, transforming firsthand insights into actionable business strategies.",

    e:"Conducted on-site interviews and direct observations to gather primary data, identify user needs, and translate research findings into evidence-based strategic recommendations."


},

{
    

    t:"Data Storytelling & Strategic Communication",
    img:"images/skills/getbook.jpg",

    d:"Transform complex data, analytical processes, and project findings into clear, structured narratives that support understanding and informed decision-making.",

    e:"Presented end-to-end project workflows, from problem identification and data collection to analysis, key findings, and strategic recommendations, making technical concepts accessible to both technical and non-technical audiences."


}

];
