
import React, { useState } from 'react';

export default function Footer() {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <footer className="footer">
      <div className="footer-links">
        <span className="clickable" role="button" onClick={() => openModal('О нашей компании...')}>
          О компании
        </span>
        <span className="clickable" role="button" onClick={() => openModal('Свяжитесь с нами по email: contact@example.com')}>
          Связаться с нами
        </span>
        <span className="clickable" role="button" onClick={() => openModal('Мы всегда в поиске талантов! Присылайте резюме.')}>
          Вакансии
        </span>
        <span className="clickable" role="button" onClick={() => openModal('Доставка осуществляется в течение 3-5 рабочих дней.')}>
          Информация о доставке
        </span>
      </div>
      <div className="footer-social">
        <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
          <img src="/img/vk.svg" alt="vk" />
        </a>
        <a href="https://ok.ru" target="_blank" rel="noopener noreferrer">
          <img src="/img/ok.svg" alt="ok" />
        </a>
        <a href="https://t.me" target="_blank" rel="noopener noreferrer">
          <img src="/img/telegramm.svg" alt="Ttelegramm" />
        </a>
      </div>
      {modalContent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <p>{modalContent}</p>
            <button onClick={closeModal}>Закрыть</button>
          </div>
        </div>
      )}
      <p>Все права защищены &copy; {new Date().getFullYear()}</p>
    </footer>
  );
}
