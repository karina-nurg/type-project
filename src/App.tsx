import './App.css'
import { getAverageGrade } from './getAverageGrade'
import { user1 } from './user'
import { books } from './books'
import { order1, getTotalPrice } from './order'
import { student1 } from './student'

const grades = [5, 4, 3, 5, 2]

function App() {
  return (
    <div className="page">
      <section className="card">
        <h1>Задание 1: Функция подсчета среднего балла</h1>

        <div className="grades">
          {grades.map((grade, index) => (
            <span className="grade" key={index}>
              {grade}
            </span>
          ))}
        </div>

        <div className="result">
          <p className="result-label">Средний балл</p>
          <p className="result-value">{getAverageGrade(grades)}</p>
        </div>
      </section>

      <section className="card">
        <h1>Задание 2: Информация о пользователе</h1>

        <ul className="user">
          <li>
            <span className="user-key">Имя</span>
            <span className="user-value">{user1.name}</span>
          </li>
          <li>
            <span className="user-key">Возраст</span>
            <span className="user-value">{user1.age}</span>
          </li>
          <li>
            <span className="user-key">Email</span>
            <span className="user-value">{user1.email}</span>
          </li>
        </ul>

        <div className="result">
          <p className="result-label">Является админом</p>
          <p className="result-value">{user1.isAdmin ? 'Да' : 'Нет'}</p>
        </div>
      </section>

      <section className="card">
        <h1>Задание 3: Список книг</h1>

        <ul className="books">
          {books.map((book, index) => (
            <li key={index}>
              <span className="book-title">{book.title}</span>
              <span className="book-meta">
                {book.author}, {book.year}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h1>Задание 4: Интерфейс и функция работы с заказами</h1>

        <ul className="user">
          <li>
            <span className="user-key">Товар</span>
            <span className="user-value">{order1.product}</span>
          </li>
          <li>
            <span className="user-key">Количество</span>
            <span className="user-value">{order1.quantity}</span>
          </li>
          <li>
            <span className="user-key">Цена за шт.</span>
            <span className="user-value">{order1.pricePerUnit} тенге</span>
          </li>
        </ul>

        <div className="result">
          <p className="result-label">Общая сумма</p>
          <p className="result-value">{getTotalPrice(order1)} тенге</p>
        </div>
      </section>

      <section className="card">
        <h1>Задание 5: Типизация вложенных объектов</h1>

        <ul className="user">
          <li>
            <span className="user-key">Имя</span>
            <span className="user-value">{student1.fullName}</span>
          </li>
          <li>
            <span className="user-key">Группа</span>
            <span className="user-value">{student1.group}</span>
          </li>
          <li>
            <span className="user-key">Оценки</span>
            <span className="user-value">{student1.grades.join(', ')}</span>
          </li>
          <li>
            <span className="user-key">Адрес</span>
            <span className="user-value">
              {student1.address.city}, {student1.address.street}, д.{' '}
              {student1.address.houseNumber}
            </span>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default App
