import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';


const categoriesItems = ['all', ...new Set(items.map((item) =>
  item.category
))]

function App() {
  const [menuItem, setMenuItem] = useState(items);
  const [categories, setCategories] = useState(categoriesItems);

  const categoriesItem = (category) => {
    if (category === 'all') {
      setMenuItem(items)
      return;
    }
    const categoryItem = items.filter((item) => item.category === category)
    setMenuItem(categoryItem)
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categoriesItem={categoriesItem} categories={categories} />
        <Menu items={menuItem} />
      </section>
    </main>
  )
}

export default App;
