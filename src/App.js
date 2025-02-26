import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";
import { Routes, Route } from 'react-router-dom';
import Register from './components/Register';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [

        { id: 1, img: "img/141.jpg", title: "ПЛАТЬЕ МАКСИ В АЛОМ ЦВЕТЕ", text: "Летящее игривое, оно станет вашей желанной одеждой", category: "school", price: "5000₽" },
        { id: 2, img: "img/33.jpg", title: "ГЛАВНЫЙ ДЕНЬ", text: "Платье свадебное из кружева с фигурным силуэтом", category: "wedding", price: "4500₽" },
        { id: 3, img: "img/91.jpg", title: "СКОРО В ОТПУСК", text: "Платье из шелка в оранжевом оттенке свободного силуэта", category: "holiday", price: "4200₽" },
        { id: 4, img: "img/231.jpg", title: "ПРАЗНИК К НАМ ПРИШЕЛ", text: "Платье длинное бархатное в бордовом цвете", category: "celebration", price: "6000₽" },
        { id: 5, img: "img/22.jpg", title: "ИДЕМ НА КОНЦЕРТ", text: "Платье Vivian серо-серебристого оттенка", category: "concert", price: "6100₽" },
        { id: 6, img: "img/622.jpg", title: "НА ВЕЧЕРИНКУ", text: "Маленькое черное платье облегающего силуэта", category: "party", price: "5300₽" },
        // остальные продукты
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Routes>
          <Route path="/" element={
            <>
              <Categories chooseCategory={this.chooseCategory} />
              <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
              {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
            </>
          } /> {/* Этот маршрут для страницы регистрации */}
          <Route path="/register" element={<Register />}


          /> {/* Этот маршрут для страницы регистрации */}
        </Routes>
        <Footer />
      </div>
    )
  }

  onShowItem(item) {
    this.setState({ fullItem: item })
    this.setState({ showFullItem: !this.state.showFullItem })
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items })
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
    })
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] })
  }
}

export default App;
