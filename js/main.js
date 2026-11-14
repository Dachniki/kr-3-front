document.addEventListener('DOMContentLoaded', () => {
    const orderDialog = document.getElementById('order-dialog');
    const orderButtons = document.querySelectorAll('.product-card__button');
    const closeDialogButton = document.getElementById('close-order-dialog');
    const orderForm = document.getElementById('order-form');
    const successMessage = document.getElementById('success-message');

    if (orderDialog && orderButtons.length > 0 && closeDialogButton) {
        // Открытие модального окна
        orderButtons.forEach(button => {
            button.addEventListener('click', () => {
                if (successMessage) {
                    successMessage.hidden = true;
                }
                orderDialog.showModal();
            });
        });

        // Закрытие по кнопке
        closeDialogButton.addEventListener('click', () => {
            orderDialog.close();
        });

        // Закрытие по клику на темный фон
        orderDialog.addEventListener('click', (e) => {
            if (e.target === orderDialog) {
                orderDialog.close();
            }
        });
    }

    // Обработка отправки формы
    if (orderForm && successMessage) {
        orderForm.addEventListener('submit', (event) => {
            event.preventDefault();
            
            if (!orderForm.checkValidity()) {
                orderForm.reportValidity();
                return;
            }
            
            successMessage.hidden = false;
            orderForm.reset();
            
            if (orderDialog) {
                orderDialog.close();
            }
        });
    }
});