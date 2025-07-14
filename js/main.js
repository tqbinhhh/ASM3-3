document.addEventListener('DOMContentLoaded', function () {
    /**
     * Xử lý biểu mẫu xác thực email để hiển thị thông tin cá nhân.
     */
    const handleEmailVerification = () => {
        const emailFormContainer = document.querySelector('#email-form');
        const infoContent = document.querySelector('#info-content');

        if (!emailFormContainer || !infoContent) return;

        const form = emailFormContainer.querySelector('form');
        const emailInput = document.querySelector('#email-input');
        const errorMessage = document.querySelector('#error-message');

        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            const enteredEmail = emailInput.value.trim();

            if (emailRegex.test(enteredEmail)) {
                emailFormContainer.classList.add('hidden');
                infoContent.classList.remove('hidden');
                errorMessage.textContent = '';
            } else {
                errorMessage.textContent = 'Địa chỉ email không hợp lệ. Vui lòng nhập lại.';
            }
        });
    };

    /**
     * Xử lý chức năng "View More" / "View Less" cho các thẻ.
     * Logic: Dùng class '.is-open' để quản lý trạng thái mở/đóng.
     */
    const handleCollapsibleCards = () => {
        const cards = document.querySelectorAll('.collapsible-section');

        cards.forEach(card => {
            const toggleButton = card.querySelector('.toggle-btn');
            const sectionContent = card.querySelector('.section-content');

            if (!toggleButton || !sectionContent) return;

            toggleButton.addEventListener('click', () => {
                // Thêm hoặc xóa class 'is-open' trên thẻ cha
                card.classList.toggle('is-open');

                // Cập nhật lại chữ trên nút dựa vào class 'is-open'
                if (card.classList.contains('is-open')) {
                    toggleButton.textContent = 'View Less';
                } else {
                    toggleButton.textContent = 'View More';
                }
            });
        });
    };

    // --- KHỞI CHẠY TẤT CẢ CÁC HÀM ---
    handleEmailVerification();
    handleCollapsibleCards();

});
