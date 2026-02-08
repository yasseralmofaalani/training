// ==============================
// security.js
// ==============================

// =====================================================
// 1) إضافة العلامة المائية (Watermark) مزدوجة
// =====================================================
function addWatermark() {
    // إنشاء عنصر العلامة المائية أعلى يمين
    const watermarkTopRight = document.createElement("div");
    watermarkTopRight.id = "wm-top-right";
    watermarkTopRight.innerHTML = `
        <div class="wm-wrap">
            <img src="assets/images.jpg" class="wm-logo" alt="Logo">
            <div class="wm-text">
                <div class="wm-line">وزارة الدفاع</div>
            </div>
        </div>
    `;
    document.body.appendChild(watermarkTopRight);

    // إنشاء عنصر العلامة المائية أسفل يسار
    const watermarkBottomLeft = document.createElement("div");
    watermarkBottomLeft.id = "wm-bottom-left";
    watermarkBottomLeft.innerHTML = `
        <div class="wm-wrap">
            <div class="wm-text">
                <div class="wm-line">© دورة GIS المستوى 0</div>
                <div class="wm-line">المقدم: المهندس ياسر المفعلاني</div>
            </div>
        </div>
    `;
    document.body.appendChild(watermarkBottomLeft);

    // إضافة الـ CSS
    const wmStyle = document.createElement("style");
    wmStyle.innerHTML = `
        /* العلامة المائية أعلى يمين */
        #wm-top-right{
            position: fixed;
            top: 15px;
            right: 15px;
            z-index: 99999999;
            padding: 10px 14px;
            background: rgba(255, 255, 255, 0.75);
            border-radius: 16px;
            backdrop-filter: blur(10px);
            display: flex;
            align-items: center;
            gap: 10px;
            pointer-events: none;
            box-shadow: 0 10px 25px rgba(0,0,0,0.15);
            animation: wmFadeIn 1.2s ease;
        }

        /* العلامة المائية أسفل يسار */
        #wm-bottom-left{
            position: fixed;
            bottom: 15px;
            left: 15px;
            z-index: 99999999;
            padding: 10px 14px;
            background: rgba(255, 255, 255, 0.75);
            border-radius: 16px;
            backdrop-filter: blur(10px);
            display: flex;
            align-items: center;
            gap: 10px;
            pointer-events: none;
            box-shadow: 0 10px 25px rgba(0,0,0,0.15);
            animation: wmFadeIn 1.2s ease;
        }

        .wm-wrap{
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .wm-logo{
            width: 50px;
            height: 50px;
            object-fit: contain;
            border-radius: 8px;
            background: rgba(255,255,255,0.9);
            padding: 4px;
            border: 1px solid rgba(0,0,0,0.1);
        }

        .wm-text{
            display: flex;
            flex-direction: column;
            text-align: right;
        }

        .wm-line{
            font-weight: 800;
            font-size: 13px;
            color: #111;
            line-height: 1.4;
        }

        @keyframes wmFadeIn{
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0px); }
        }
    `;
    document.head.appendChild(wmStyle);
}

// =====================================================
// 2) إضافة صوت تنقل بين الخطوات
// =====================================================
function addStepSound() {
    const audio = document.createElement("audio");
    audio.src = "assets/click.mp3"; // ضع ملف الصوت المناسب داخل مجلد assets
    audio.id = "step-audio";
    document.body.appendChild(audio);
}

// =====================================================
// 3) Spotlight Effect على العنصر النشط
// =====================================================
function addSpotlightEffect(targetSelector) {
    // إزالة أي طبقة سابقة
    const existing = document.getElementById("spotlight");
    if(existing) existing.remove();

    const spotlight = document.createElement("div");
    spotlight.id = "spotlight";
    document.body.appendChild(spotlight);

    const style = document.createElement("style");
    style.innerHTML = `
        #spotlight{
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 9999998;
            background: rgba(0,0,0,0.4);
            mix-blend-mode: multiply;
        }
        ${targetSelector}{
            position: relative;
            z-index: 9999999 !important;
            box-shadow: 0 0 30px 10px rgba(255,255,0,0.8);
            transition: box-shadow 0.3s ease;
        }
    `;
    document.head.appendChild(style);
}

// =====================================================
// 4) تهيئة العناصر عند تحميل الصفحة
// =====================================================
window.addEventListener("DOMContentLoaded", () => {
    addWatermark();
    addStepSound();
});
