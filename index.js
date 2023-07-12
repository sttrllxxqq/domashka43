// 43
const sliderContainer = document.querySelector('.slider-container');
    const orderForm = document.querySelector('.order-form');
    const orderFormInputs = orderForm.querySelectorAll('input, select, textarea');
    const orderFormSubmitButton = orderForm.querySelector('button[type="submit"]');

    function showOrderForm() {
      sliderContainer.style.display = 'none';
      orderForm.style.display = 'block';
    }

    function handleFormSubmit(event) {
      event.preventDefault();
      
      let isFormValid = true;
      orderFormInputs.forEach((input) => {
        if (input.required && !input.value.trim()) {
          isFormValid = false;
          input.classList.add('error');
        } else {
          input.classList.remove('error');
        }
      });

      if (isFormValid) {
        const orderInfo = {
          товар: 'Назва товару',
          ПІБ: orderFormInputs[0].value,
          місто: orderFormInputs[1].value,
          склад: orderFormInputs[2].value,
          спосіб_оплати: orderForm.querySelector('input[name="payment"]:checked').value,
          кількість: orderFormInputs[4].value,
          коментар: orderFormInputs[5].value
        };

        const orderInfoContainer = document.createElement('div');
        orderInfoContainer.innerHTML = `
          <h2>Інформація про замовлення</h2>
          <p><strong>Товар:</strong> ${orderInfo.товар}</p>
          <p><strong>ПІБ:</strong> ${orderInfo.ПІБ}</p>
          <p><strong>Місто:</strong> ${orderInfo.місто}</p>
          <p><strong>Склад Нової пошти:</strong> ${orderInfo.склад}</p>
          <p><strong>Спосіб оплати:</strong> ${orderInfo.спосіб_оплати}</p>
          <p><strong>Кількість:</strong> ${orderInfo.кількість}</p>
          <p><strong>Коментар:</strong> ${orderInfo.коментар}</p>
        `;
        
        document.body.appendChild(orderInfoContainer);
      } else {
        alert('Будь ласка, заповніть всі обов\'язкові поля.');
      }
    }

    orderFormSubmitButton.addEventListener('click', handleFormSubmit);
    sliderNextButton.addEventListener('click', showOrderForm);
    sliderPrevButton.addEventListener('click', showOrderForm);