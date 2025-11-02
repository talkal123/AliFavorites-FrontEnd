import React from 'react'

const AffiliateDisclosure = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">הצהרת שותפים</h1>
      
      <p>אתר זה עשוי להכיל קישורים שותפים. אם תלחץ על קישור ותבצע רכישה, אנו עשויים לקבל עמלה.</p>
      
      <h2 className="text-2xl font-semibold mt-4 mb-2">1. שקיפות</h2>
      <p>כל הקישורים הממומנים באתר מסומנים בהתאם. אנו ממליצים לבדוק את הפרטים באתר המקושר לפני רכישה.</p>
      
      <h2 className="text-2xl font-semibold mt-4 mb-2">2. אחריות</h2>
      <p>אנו לא נושאים באחריות למוצרים או שירותים שנרכשו דרך קישורים שותפים. האחריות הינה על הספק המקורי.</p>
      
      <h2 className="text-2xl font-semibold mt-4 mb-2">3. יצירת קשר</h2>
      <p>לשאלות בנוגע לשיתופי פעולה או קישורים שותפים, ניתן לפנות דרך דף <a href="/contact" className="text-blue-600 underline">צור קשר</a>.</p>
    </div>
  )
}

export default AffiliateDisclosure
