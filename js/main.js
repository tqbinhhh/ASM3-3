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
     * Xử lý chức năng "Xem thêm" / "Ẩn bớt" cho các thẻ có thể thu gọn.
     */
    const handleCollapsibleCards = () => {
        const cards = document.querySelectorAll('.collapsible-card');

        cards.forEach(card => {
            const content = card.querySelector('.section-content');

            // Tạo và thêm nút
            const toggleButton = document.createElement('button');
            toggleButton.textContent = 'View More';
            toggleButton.classList.add('toggle-btn');
            card.appendChild(toggleButton);

            // Gán sự kiện click cho nút
            toggleButton.addEventListener('click', () => {
                content.classList.toggle('is-visible');
                
                // Cập nhật lại chữ trên nút dựa vào trạng thái hiển thị
                if (content.classList.contains('is-visible')) {
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