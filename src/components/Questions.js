import React, { useState } from 'react';

const questionsData = [
    {
        question: "Как стать участником программы лояльности?",
        answer: "Вы можете зарегистрироваться в программе лояльности, заполнив анкету по ссылке или оформив заказ на сайте womenstories.ru."
    },
    {
        question: "Как накопить баллы?",
        answer: "За каждый доставленный заказ мы начисляем на ваш счет 10% кэшбек от стоимости оплаченных товаров. Бонусы привязываются к вашему номеру телефона.\n\nУсловия для розничных проектов:\nЗа каждую совершенную покупку* вам возвращается кэшбек – 10% на бонусную карту!\n*если был приобретен товар из категории sale, кэшбек не начисляется."
    },
    {
        question: "Как начисляются бонусы?",
        answer: "Бонусы начисляются в течение 30 дней с момента получения вами заказа. Если доставка не осуществлена или был оформлен возврат/обмен – бонусы не начисляются.\n\nМы только запустили программу лояльности, поэтому использовать кэшбек в корзине еще нельзя, но мы делаем все, чтобы добавить эту возможность в ближайшее время! А пока вам помогут наши стилисты, для этого:\n1 - Добавьте товары в корзину\n2 - В комментариях к заказу напишите «Кэшбек»\n3 - Не оплачивайте заказ, просто закройте страницу оплаты – наш стилист свяжется с вами для подтверждения заказа и применит скидку.\nОплатить бонусами можно до 50% от стоимости заказа.\n1 бонус = 1 рубль."
    }
];

const Questions = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="questions-container p-4 max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Вопросы и ответы</h1>
            {questionsData.map((item, index) => (
                <div key={index} className="border-b border-gray-300 py-2">
                    <button 
                        className="flex justify-between items-center w-full text-lg font-medium py-2"
                        onClick={() => toggleAnswer(index)}
                    >
                        {item.question}
                        <span className="text-2xl">{openIndex === index ? '−' : '+'}</span>
                    </button>
                    {openIndex === index && (
                        <p className="text-gray-700 mt-2 whitespace-pre-line">{item.answer}</p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Questions;
