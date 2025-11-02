
import React, { useEffect, useState } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import Nav from './component/Nav';
import HomePageNav from './component/HomePageNav';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TermsOfUse from './pages/TermsOfUse';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AffiliateDisclosure from './pages/AffiliateDisclosure';
import ContactPage from './pages/ContactPage';

function App() {
  const [mostLikes, setMostLikes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories, setCategories] = useState([]); 
  const [filteredArr, setFilteredArr] = useState([]);  
  const [value, setValue] = useState("")



  const theFilter = filteredArr.filter((product) => product.Product_Desc.toLowerCase().includes(value.toLowerCase()))
  


  useEffect(() => {
    const fetchByCategory = async () => {
      try {
        let url = 'https://alifavorites-api.onrender.com/api/products';
        if (selectedCategory !== "All") {
          url = `https://alifavorites-api.onrender.com/api/products/category/${selectedCategory}`;
        }

        const response = await axios.get(url);
        setCategories(response.data);
        setFilteredArr(response.data);
      } catch (error) {
        console.error('Error fetching category data:', error.message);
      }
    };

    fetchByCategory();
  }, [selectedCategory]);

  const addMostLikes = (product) => {
    const isAlreadyLiked = mostLikes.some((p) => p.ProductId === product.ProductId);
    if (isAlreadyLiked) {
      setMostLikes(mostLikes.filter((p) => p.ProductId !== product.ProductId));
    } else {
      setMostLikes([...mostLikes, product]);
    }
  };

  return (
    <BrowserRouter>
  <div className="sticky top-0 z-60 bg-white w-full md:flex flex-col">
    <Nav
      setSelectedCategory={setSelectedCategory}
      mostLikes={mostLikes}
      setMostLikes={setMostLikes}
      filteredArr={filteredArr}
      setFilteredArr={setFilteredArr}
      allProducts={categories}
      value={value}
      setValue={setValue}
    />
    <HomePageNav
      categories={selectedCategory}
      setCategories={setSelectedCategory}
    />
  </div>

  <Routes>
    <Route
      path="/home"
      element={
        <HomePage
          value={value}
          setValue={setValue}
          filteredArr={filteredArr}
          setFilteredArr={setFilteredArr}
          categories={categories}
          addMostLikes={addMostLikes}
          mostLikes={mostLikes}
          theFilter={theFilter}
        />
      }
    />
    <Route path="/terms" element={<TermsOfUse />} />
    <Route path="/privacy" element={<PrivacyPolicy />} />
    <Route path="/disclosure" element={<AffiliateDisclosure />} />
    <Route path="/contact" element={<ContactPage />} />
  </Routes>
</BrowserRouter>
  );
}

export default App;
