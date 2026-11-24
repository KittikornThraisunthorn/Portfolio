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

const FEAT={t:"EkkAGE ประกันภัยตรวจจับการล้มสำหรับผู้สูงอายุ",c:"OIC InsurTech Award 2026",img:"",
 q:"สังคมไทยกำลังเข้าสู่สังคมสูงวัย และการล้มเป็นความเสี่ยงสำคัญของผู้สูงอายุที่ประกันทั่วไปดูแลได้ไม่ทั่วถึง",
 i:"ประกันภัยแบบพาราเมตริก ใช้เซนเซอร์ตรวจจับการล้ม เมื่อเข้าเงื่อนไขระบบจ่ายความคุ้มครองได้ทันที",
 r:"แก้ข้อความนี้เป็นบทบาทจริงของคุณ เช่น วิเคราะห์ตลาด ออกแบบความคุ้มครอง และนำเสนอ",
 g:["InsurTech","Parametric insurance","Product design"]};
const W=[
{t:"MTL Agent DNA กลยุทธ์ดึงดูดและรักษาตัวแทน",c:"การแข่งขัน TICC 2026",img:"",d:"ข้อเสนอเชิงกลยุทธ์ด้านการสรรหาและรักษาตัวแทนรุ่นใหม่",l:"วิเคราะห์ปัญหาการคงอยู่ของตัวแทน และเสนอแนวทางสรรหาแบบเกมสำหรับคนรุ่นใหม่ ใส่รายละเอียดและผลลัพธ์เพิ่มเติมได้ที่นี่",g:["Strategy","Insurance"]},
{t:"Life Game เกมวางแผนชีวิตสำหรับ Gen Z",c:"ผลิตภัณฑ์",img:"",d:"ทำให้การวางแผนการเงินและชีวิตเป็นเรื่องสนุก",l:"ใส่ปัญหาที่พบ ผู้ใช้เป้าหมาย ฟีเจอร์หลัก และผลการทดสอบ",g:["Gamification","Product"]},
{t:"โปรเจกต์วิเคราะห์ข้อมูล (ตัวอย่าง)",c:"วิเคราะห์ข้อมูล",img:"",d:"แทนที่ด้วยชื่อโปรเจกต์ โจทย์ และสิ่งที่ค้นพบ",l:"เล่า 4 ข้อ: โจทย์ ข้อมูลที่ใช้ วิธีวิเคราะห์ และผลลัพธ์",g:["Python","สถิติ"]},
{t:"พิธีกรงานมหาวิทยาลัย (ตัวอย่าง)",c:"กิจกรรม",img:"",d:"แทนที่ด้วยชื่องาน บทบาท และภาพบรรยากาศ",l:"ใส่รูปจากงานและสิ่งที่ได้เรียนรู้",g:["MC","การนำเสนอ"]},
{t:"งานนำเสนอในชั้นเรียน (ตัวอย่าง)",c:"กิจกรรม",img:"",d:"แทนที่ด้วยหัวข้อ วิชา และไฟล์สไลด์",l:"ใส่ลิงก์สไลด์หรือรูปประกอบ",g:["Presentation"]}];
const C=[
{t:"Asean Data Science Explorers 2024",c:"Participated in a regional training program focused on SAP Analytics Cloud and SAP Build Apps, gaining foundational knowledge in data analytics, data visualization, and digital application development",img:"images/certs/aseane2.jpg"},
{t:"The winner Quickathon Rabbitstart",c:"Compete to solve business problems within a tight timeframe, alongside participants from various universities.",img:"images/certs/Rabbitstart.jpg"},
{t:"BJC Bigseed Talentcamp",c:"Advanced to the final 20 teams out of 300 total entries (top 6.7%) in a case study competition focused on addressing local economic challenges, utilizing skills in analytical thinking, strategic problem-solving, and teamwork.",img:"images/certs/BJC.jpg"},
{t:"The Thailand Insurance Case Competition",c:"An analysis of the new strategic direction taken by insurance companies to reshape the image of insurance agents, enhancing their overall effectiveness within the industry.",img:"images/certs/Ticc.jpg"},
{t:"Valuation Master Class Pre-Boot Camp",c:"An in-depth understanding of finance and investment, developed through three key areas: financial literacy, business valuation, and equity instruments.",img:"images/certs/Finance.jpg"}];
const S=[
{t:"การสื่อสารและการนำเสนอ",img:"",d:"อธิบายเรื่องซับซ้อนให้คนฟังเข้าใจและนำไปใช้ได้",e:"เป็นพิธีกรงานมหาวิทยาลัยและนำเสนองานในชั้นเรียน"},
{t:"การเล่าเรื่องจากข้อมูล",img:"",d:"เปลี่ยนตัวเลขและกราฟให้เป็นข้อเสนอที่ตัดสินใจได้",e:"สรุปผลวิเคราะห์เป็นข้อเสนอเชิงกลยุทธ์ในงานประกวด"},
{t:"การทำงานเป็นทีม",img:"",d:"แบ่งบทบาท รับฟัง และช่วยให้งานกลุ่มไปถึงเป้าหมาย",e:"แก้เป็นตัวอย่างจริง เช่น งานกลุ่มหรือกีฬาเป็นทีม"},
{t:"การแก้ปัญหา",img:"",d:"แยกโจทย์ใหญ่เป็นส่วนย่อย แล้วทดสอบทีละข้อสมมติฐาน",e:"แก้เป็นตัวอย่างจริง เช่น ปัญหาที่เจอในโปรเจกต์"},
{t:"การเรียนรู้ด้วยตนเอง",img:"",d:"เรียนรู้เครื่องมือและโดเมนใหม่ได้เร็ว",e:"แก้เป็นตัวอย่างจริง เช่น เรียนด้านประกันจากการทำงาน"},
{t:"การบริหารเวลา",img:"",d:"จัดสมดุลระหว่างเรียน ทำงาน และกิจกรรม",e:"แก้เป็นตัวอย่างจริง เช่น ช่วงส่งงานพร้อมสอบ"}];
