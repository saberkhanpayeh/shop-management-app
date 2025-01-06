import React, { useRef} from 'react'
import styles from "./SearchProducts.module.css";
function SearchProducts({setSearchProducts}) {
    const inputRef=useRef(null);
    const searchHandler=()=>{
        const inputValue=inputRef.current.value.toLowerCase().trim();
        setSearchProducts(inputValue);
    }
  return (
    <div className={styles.container}>
    <button onClick={searchHandler}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#282828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 22L20 20" stroke="#282828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
    <input type="text" ref={inputRef} placeholder="جستجو کالا" />
  </div>
  )
}

export default SearchProducts