import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">מדיניות פרטיות</h1>
      
      <p>אנו מחויבים לשמירה על פרטיות המשתמשים באתר שלנו. מסמך זה מסביר כיצד אנו אוספים, משתמשים ומגנים על המידע שלכם.</p>
      
      <h2 className="text-2xl font-semibold mt-4 mb-2">1. מידע שנאסף</h2>
      <p>כאשר אתם משתמשים באתר, אנו עשויים לאסוף מידע אישי כגון שם, אימייל ותוכן ההודעות שאתם שולחים דרך דפי יצירת הקשר.</p>
      
      <h2 className="text-2xl font-semibold mt-4 mb-2">2. שימוש במידע</h2>
      <p>המידע נאסף לשם שיפור חוויית המשתמש, מתן שירות טוב יותר ולמטרות תקשורת בלבד.</p>
      
      <h2 className="text-2xl font-semibold mt-4 mb-2">3. שמירה והגנה</h2>
      <p>אנו נוקטים באמצעים סבירים כדי להגן על המידע שלכם מפני גישה לא מורשית או שימוש לרעה.</p>
      
      <h2 className="text-2xl font-semibold mt-4 mb-2">4. שיתוף מידע עם צדדים שלישיים</h2>
      <p>אנו לא נמכור, נשכיר או נשתף את המידע האישי שלכם עם צדדים שלישיים ללא אישורכם, למעט מקרים חוקיים.</p>
      
      <h2 className="text-2xl font-semibold mt-4 mb-2">5. יצירת קשר</h2>
      <p>לשאלות נוספות לגבי מדיניות הפרטיות שלנו, ניתן לפנות דרך דף <a href="/contact" className="text-blue-600 underline">צור קשר</a>.</p>
    </div>
  )
}

export default PrivacyPolicy