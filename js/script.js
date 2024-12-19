// toggle icon navbar

var menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

// scroll sections
let sections = document.querySelectorAll('section') // في الصفحة sectionنقوم بجلب كل  
let navLinks = document.querySelectorAll('header nav a') // sectionنقوم بجلب كل الروابط التي تنقلنا الى 
window.onscroll = () => { // في الصفحةscrool ننشى دالة نقوم بتشغيلها تلقائيا عندما يحدث 
    sections.forEach(sec => { //يتم تكرار الدالة على كل الاقسام
        let top = window.scrollY //يمثل المسافة العمودية التي تم تمريرها في الصفحة من اعلى الصفحة الى الموضع الحالى 
        let offset = sec.offsetTop - 100 //يمثل الجزء العلوي للصفحة مخصوم منه 100 لتجنب تداخله مع شريط التنقل
        let height = sec.offsetHeight //يمثل ارتفاع القسم الحالي
        let id = sec.getAttribute('id') //الخاص بالقسم الحاليid يخزن فيه 

        if (top >= offset && top < offset + height) { //نتاكد ادا كان وضع التمرير يقع داخل حدود القسم
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active') //من كل الروابط الصفحاتactiveنقوم بازالة الفئة 
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active') //لهactiveحيث نقوم باضافة idنقوم بالبحث على الرابط الدي يحتوي على 
            })
            // active sections for animate on scroll
            sec.classList.add('show-animate') //نقوم باظهار التاثيرات للصفحة المعروضة حاليا
        }
        // if want to use animation that repeat on scroll use this
        else {
            sec.classList.remove('show-animate') //نحدف التاثيرات للاقسام الغير نشطة
        }
    })

    // sticky header
    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 100) //  100pxلراس الصفحة الخاص بنا ليتم تغيرر لونة عند تجاوز stikyنقوم باضافة 

    // remove toggle and navbar click links (scroll)
    menuIcon.classList.remove('bx-x') //من ايقونات القائمةbx-xازالة التاثيرات من الفئة 
    navbar.classList.remove('active') //navمن active تعطيل عرض شريك التنقل بازالة 

    // animation footer on scroll
    let footer = document.querySelector('footer') //نقوم بجلب ديل الصفحة

    footer.classList.toggle(
        'show-animate',
        this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight //يظهر الديل عند الوصول لاسفل الصفحة 
    )
}

//Verify email
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form submission

    // Validate inputs
    let isValid = true;

    const nameInput = document.getElementById("name"); //نجلب حقل ادخال الاسم
    const numberInput = document.getElementById("number"); //نجلب حقل ادخال الرقم
    const emailInput = document.getElementById("email"); //emailنجلب حقل ادخال ال
    const messageInput = document.getElementById("message"); //نجلب حقل ادخال الرسالة
    const emailsubject = document.getElementById("subject"); //نجلب حقل ادخال العنوان الرسالة

    //نقم بالتحقق ماادا كان حقل الاسم فارغ ام لا 
    if (!nameInput.value.trim()) {
        isValid = false;
    }
    //التحقق من حقل ادخال الارقام فارغ ام لا
    if (!numberInput.value.trim()) {
        isValid = false;
    }
    //ادا كان فارغ ام لاemailsubjectالتحقق من حقل ال
    if (!emailsubject.value.trim()) {
        isValid = false;
    }
    //فارغ ام لا emailالتحقق ادا كان حقل 
    //emailوكدلك نتحقق من انه يوافق الشروط الاساسية لادخال
    if (!emailInput.value.trim()) {
        isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {

        isValid = false;
    }
    //التحقق ما ادا كان حقل ادخال الرسالة فارغ ام لا
    if (!messageInput.value.trim()) {
        isValid = false;
    }

    let Verification_BT = document.getElementById("Verification"); //نجلب رسالة التاكيد التي تظهر عند الارسال
    // ادا كان صحيح نرسل النموذج او نظهر الرسالة انه ادخال سليم
    if (isValid) {
        Verification_BT.innerHTML = "Form submitted successfully!";
        // هنا نقوم بافراغ حقول الادخال
        document.getElementById("contactForm").reset();
    }
    //ادا كان خطا نظهر هده الرسالة
    else {
        Verification_BT.innerHTML = "Form submitted not successfully!";
        document.getElementById("contactForm").reset();
    }

});
// تنسيقه مناسب email دالة للتحقق من ان 
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


//هنا نقوم بجلي زر التبديل بين الوضع النهاري والوضع المظلم
const Toggle_bt = document.getElementById('theme-toggle');

// التحقق من الوضع الحالي للصفحة عند التحميل
const CTheme = localStorage.getItem('theme') || 'dark';
if (CTheme === 'light') {
    document.documentElement.classList.add('light-mode');
}

// عند الضغط على الزر
Toggle_bt.addEventListener('click', () => {
    //htmlمن الذر الرئيسي للصفحة وهو ( نضيف او نحدف  class=light mode) هنا نقوم بتبديل الوضع 
    document.documentElement.classList.toggle('light-mode');

    // تحديث الوضع في Local Storage
    if (document.documentElement.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
});