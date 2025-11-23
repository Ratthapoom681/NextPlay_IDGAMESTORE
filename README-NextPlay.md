ธีม: เปลี่ยนเป็นโทนสี "ดำ-ทอง" ตามที่ร้องขอ และเพิ่มเมนูค้นหา/ตัวกรอง (UI-only)

การเปลี่ยนแปลงสำคัญ:
- ปรับ `nextplay.css` เป็นโทนสีดำ-ทอง
- เพิ่มแถบค้นหาและตัวกรอง (ฟอร์ม UI) เหนือส่วนสินค้าขายดี
- เพิ่มการป้องกันการ submit แบบง่ายใน `nextplay.js` (แจ้งเตือนว่าเป็นฟีเจอร์ตัวอย่าง)

หมายเหตุ: ฟังก์ชันค้นหา/ตัวกรองเป็นเพียงอินเทอร์เฟซ (ไม่ทำงานค้นหาจริง) ตามที่ผู้ใช้ร้องขอ

Sections added to meet assignment requirements:
- NavBar — ลิงก์ไปยังแต่ละ section และหน้า About
- Header (Title) — แนะนำสินค้า, ปุ่มดาวน์โหลด (mock), รูปภาพเด่น
- Social Links — อยู่ใน footer (required)
- About page — `about.html` (required separate page)

Optional sections added (some removed on user request):
- Price List — แสดงแพ็คเกจราคา (optional)
- Call to Action (CTA) — ปุ่มกระตุ้นการซื้อ (optional)

Removed per user request:
- Features — ถูกลบออกจากหน้า
- Testimonials — ถูกลบออกจากหน้า

New pages added:
- `login.html` — หน้าเข้าสู่ระบบ (UI-only)
- `register.html` — หน้า สมัครสมาชิก (UI-only)

การใช้งาน:
- เปิด `login.html` หรือ `register.html` เพื่อดูฟอร์มตัวอย่างได้ทันที

Auth UX update:
- แทนที่จะมีลิงก์แยกสำหรับเข้าสู่ระบบและสมัครสมาชิก ตอนนี้เมนูมีปุ่มเดียว "บัญชี" ที่จะเปิด modal (บนหน้า `nextplay.html`) ซึ่งมี 2 แท็บ: เข้าสู่ระบบ และ สมัครสมาชิก (UI-only)
- หากคุณเปิด `nextplay.html#auth` เบราว์เซอร์จะเปิด modal อัตโนมัติ

Social Links:
- เพิ่ม section `social` ที่ท้ายหน้า `nextplay.html` ซึ่งประกอบด้วยปุ่ม/ไอคอนสำหรับ Facebook, Instagram, Twitter, LinkedIn และลิงก์ไปยังไฟล์ PIM ใน workspace (`file:///c:/VsCode/ChatbotPIM/7%20ai.txt`) ตามคำขอ
- ข้อความเชิญชวน: "ติดตามเราบนโซเชียลมีเดีย!" และคำอธิบายสั้น ๆ เพื่อชวนผู้ใช้ติดตาม

About / Members page:
- เพิ่มหน้า `members.html` (ลิงก์จาก Navbar) แสดงรายละเอียดสมาชิกทีม: รูปอวาตาร์ ชื่อ นามสกุล ตำแหน่ง และลิงก์ไปยัง GitHub/Resume ของแต่ละคน
- การจัด layout: responsive grid 3 คอลัมน์ (desktop), 2 คอลัมน์ (tablet), 1 คอลัมน์ (mobile)
- รูปอวาตาร์เป็น SVG placeholder อยู่ในโฟลเดอร์ `img/` (เช่น `avatar-alex.svg`)




วิธีดู:
เปิด `nextplay.html` ในเบราว์เซอร์ และทดสอบลิงก์ไปยัง `about.html` และ sections ต่าง ๆ


# NextPlay (sample)

ไฟล์ตัวอย่างสำหรับงานส่งอาจารย์: หน้า Landing Page ธีมขายไอดีเกม

ไฟล์ที่เพิ่ม:
- `nextplay.html` — หน้า HTML ตัวอย่าง
- `nextplay.css` — CSS สำหรับหน้า

วิธีลองดูในเครื่อง (Windows):
1. เปิด `c:\VsCode\NextPlay\Project_Web_Game\nextplay.html` ในเบราว์เซอร์ (ดับเบิ้ลคลิกไฟล์หรือเปิดผ่าน VS Code Live Server)
2. ปรับรูป/ข้อมูลสินค้าได้ใน `nextplay.html`

หมายเหตุ: หน้าเป็นตัวอย่างการออกแบบเท่านั้น ไม่เชื่อมต่อระบบชำระเงินหรือฐานข้อมูล

เพิ่มไฟล์ล่าสุด:
- `img/` — โฟลเดอร์รูป SVG ตัวอย่างสำหรับแต่ละเกม (placeholder)
- `nextplay.js` — สคริปต์ client-side สำหรับเรนเดอร์สินค้าและ modal ซื้อ (จำลองการทำงาน)

สิ่งที่ทำไว้แล้ว:
- เพิ่มส่วน "แนะนำไอดีขายดี" ที่หน้า home
- ใส่รายละเอียดสินค้า (ชื่อ ราคา คำอธิบายสั้น ๆ) และปุ่มซื้อที่เปิดโมดอลแบบ client-side

คำเตือน / ข้อจำกัด:
- ตัวอย่างนี้เป็น mock/demo เท่านั้น ไม่มีการเก็บข้อมูลผู้ใช้หรือชำระเงินจริง ไม่ควรใช้เพื่อการหลอกลวงหรือการละเมิดข้อตกลงของแพลตฟอร์มเกม

