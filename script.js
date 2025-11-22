const translations = {
    en: {
        nav_features: "Features",
        nav_digisign: "Digital Sign",
        nav_community: "Community",
        nav_get_started: "Get Started",
        hero_title: "The Future of <br><span class=\"gradient-text\">Quality Management</span>",
        hero_desc: "Seamless ISO compliance, advanced document control, and secure digital signatures. Optimized for organizations in Vietnam.",
        btn_demo: "Join Demo Now",
        btn_contact: "Contact Us",
        card_status: "Document Signed Successfully",
        card_signed_by: "Digitally Signed by",
        card_manager: "Manager",
        card_valid: "Valid",
        features_title: "Engineered for <span class=\"highlight\">Excellence</span>",
        features_desc: "Everything you need to maintain ISO standards without the headache.",
        feat_1_title: "Document Control",
        feat_1_desc: "Integrated ONLYOFFICE editing. Version control, automated workflows, and secure archiving.",
        feat_2_title: "Workflow Automation",
        feat_2_desc: "Streamline approvals, distribution, and review cycles with customizable logic.",
        feat_3_title: "ISO Compliance",
        feat_3_desc: "Built-in modules for Audits, CAPA, Risk Management, and Training records.",
        spotlight_title: "Next-Gen <span class=\"gradient-text\">Digital Signatures</span>",
        spotlight_full_text: "Experience uninterrupted signing. It's time to say goodbye to cumbersome printing and scanning processes. We simplify document approval with an intuitive electronic signature workflow, while securely storing all transaction history. The system also flexibly supports advanced digital signature standards. Enjoy a smooth interface that helps you complete signing in just a few clicks, directly in the browser.",
        btn_learn_more: "Learn More",
        cta_title: "Ready to Transform Your QMS?",
        cta_desc: "Join thousands of users managing quality with FlinkISO.",
        btn_docs: "View Documentation",
        footer_tagline: "Comprehensive Quality Management System.",
        footer_resources: "Resources",
        footer_docs: "Documentation",
        footer_api: "API Reference",
        footer_forum: "Community Forum",
        footer_project: "Project",
        footer_issues: "Issues",
        footer_roadmap: "Roadmap",
        footer_connect: "Connect",
        footer_copyright: "All Rights Reserved."
    },
    vn: {
        nav_features: "Tính năng",
        nav_digisign: "Ký số",
        nav_community: "Cộng đồng",
        nav_get_started: "Bắt đầu ngay",
        hero_title: "Tương lai của <br><span class=\"gradient-text\">Quản lý Chất lượng</span>",
        hero_desc: "Tuân thủ ISO liền mạch, kiểm soát tài liệu nâng cao và chữ ký số an toàn. Được tối ưu hóa và cải tiến phù hợp với các đơn vị tổ chức ở Việt Nam.",
        btn_demo: "Tham gia Demo ngay",
        btn_contact: "Liên hệ chúng tôi",
        card_status: "Tài liệu đã ký thành công",
        card_signed_by: "Được ký số bởi",
        card_manager: "Giám đốc",
        card_valid: "Hợp lệ",
        features_title: "Thiết kế cho sự <span class=\"highlight\">Hoàn hảo</span>",
        features_desc: "Mọi thứ bạn cần để duy trì tiêu chuẩn ISO mà không gặp rắc rối.",
        feat_1_title: "Kiểm soát tài liệu",
        feat_1_desc: "Tích hợp chỉnh sửa ONLYOFFICE. Kiểm soát phiên bản, quy trình tự động và lưu trữ an toàn.",
        feat_2_title: "Tự động hóa quy trình",
        feat_2_desc: "Hợp lý hóa quy trình phê duyệt, phân phối và đánh giá với logic tùy chỉnh.",
        feat_3_title: "Tuân thủ ISO",
        feat_3_desc: "Các mô-đun tích hợp sẵn cho Kiểm toán, CAPA, Quản lý rủi ro và Hồ sơ đào tạo.",
        spotlight_title: "Chữ ký số <span class=\"gradient-text\">Thế hệ mới</span>",
        spotlight_full_text: "Trải nghiệm ký duyệt không gián đoạn. Đã đến lúc nói lời tạm biệt với quy trình in ấn và scan rườm rà. Chúng tôi đơn giản hóa việc phê duyệt tài liệu bằng quy trình ký điện tử trực quan, đồng thời lưu trữ bảo mật mọi lịch sử giao dịch. Hệ thống cũng hỗ trợ linh hoạt các chuẩn ký số nâng cao. Tận hưởng giao diện mượt mà giúp bạn hoàn tất việc ký duyệt chỉ trong vài cú nhấp chuột, trực tiếp trên trình duyệt.",
        btn_learn_more: "Tìm hiểu thêm",
        cta_title: "Sẵn sàng chuyển đổi QMS của bạn?",
        cta_desc: "Tham gia cùng hàng ngàn người dùng quản lý chất lượng với FlinkISO.",
        btn_docs: "Xem tài liệu",
        footer_tagline: "Hệ thống Quản lý Chất lượng Toàn diện.",
        footer_resources: "Tài nguyên",
        footer_docs: "Tài liệu",
        footer_api: "Tài liệu API",
        footer_forum: "Diễn đàn cộng đồng",
        footer_project: "Dự án",
        footer_issues: "Báo lỗi",
        footer_roadmap: "Lộ trình",
        footer_connect: "Kết nối",
        footer_copyright: "Mọi quyền được bảo lưu."
    }
};

function setLanguage(lang) {
    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick').includes(lang)) {
            btn.classList.add('active');
        }
    });

    // Update text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            // Check if the element contains HTML (like spans with classes)
            if (translations[lang][key].includes('<')) {
                el.innerHTML = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });

    // Save preference
    localStorage.setItem('flinkiso_lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    // Load saved language or default to EN
    const savedLang = localStorage.getItem('flinkiso_lang') || 'en';
    setLanguage(savedLang);

    // Cursor Glow Effect
    const cursor = document.querySelector('.cursor-glow');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Scroll Reveal Animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('[data-animate]').forEach(el => {
        observer.observe(el);
    });

    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    mobileToggle.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        if (navLinks.style.display === 'flex') {
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '80px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'rgba(5, 5, 8, 0.95)';
            navLinks.style.padding = '20px';
            navLinks.style.borderBottom = '1px solid var(--glass-border)';
        }
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
