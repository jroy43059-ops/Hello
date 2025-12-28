import React, { useContext } from 'react'
import { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import styles from './Products.module.css'
import Logo from '../Images/productsTopLogo.jpg'

import walkingbarat from '../../Assets/walkingBarat.gif'


import { IoIosArrowDown } from 'react-icons/io'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'

import Card from './Card'
import Footer from '../../Components/Footer/Footer'
import { useEffect } from 'react'

import {
    Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button, Input, useDisclosure, btnRef
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { SearchContext } from '../../Context/SearchContext'
import FilterDrower from './FilterDrower'

export default function Products() {
    const [read, setRead] = useState(false)

    const [grid, setGrid] = useState(true)

    const [wish, setWish] = useState(false)

    const [data, setData] = useState([])

    const [proLoad, setProdLoad] = useState(false)

    const [scrollbar1, setScrollbar1] = useState(false)
    const [scrollbar2, setScrollbar2] = useState(false)
    const [scrollbar3, setScrollbar3] = useState(false)

    const [selectedCat, setSelectedCat] = useState('')
    const [selectSize, setSelectSize] = useState('')
    const [selectColor, setSelectColor] = useState('')

    const [order, setOrder] = useState('')
    const [sort, setSort] = useState('')

    const categoryOptionChange = (event) => {
        setSelectedCat(event.target.value);
        setCategory(event.target.value);
    }
    const sizeOptionChange = (event) => {
        setSelectSize(event.target.value);
        setSize(event.target.value);
    }
    const colorOptionChange = (event) => {
        setSelectColor(event.target.value);
        setColor(event.target.value);
    }

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const singleGrid = () => {
        setGrid(false)
    }
    const doubleGrid = () => {
        setGrid(true)
    }


    const { gender, setGender, category, setCategory, size, setSize, color, setColor, occasion, setOccasion, collections, setCollection, breadCrum2, setBreadCrum2, breadCrum3, setBreadCrum3, heading, setHeading, skip, setSkip, page, setPage } = useContext(SearchContext)

    useEffect(() => {
        getData()
    }, [gender, category, occasion, collections, size, color, skip, sort, order])

    const getData = async () => {
        setProdLoad(true)
        await fetch(`https://proud-lamb-suspenders.cyclic.app/products/?gender=${gender}&category=${category}&size=${size}&color=${color}&occasion=${occasion}&collections=${collections}&limit=12&skip=${skip}&sort=${sort}&order=${order}`)
            .then((res) => res.json())
            .then((res) => {
                setProdLoad(false)
                setData(res)
            })
            .catch(err => {
                setProdLoad(false)
                console.log(err)
            })
    }

    let navigate = useNavigate()

    const SinglePageFunc = (id) => {
        navigate(`/singleproduct/${id}`)
    }

    const NextPage = () => {
        if (data.length == 12) {
            setPage(page + 1)
            setSkip(skip + 12)
        }
    }

    const PrevPage = () => {
        if (page > 1) {
            setPage(page - 1)
            setSkip(skip - 12)
        }
    }

    return (
        <div className={styles.ProductMain_container}>
            <Navbar />
            <div className={styles.products_container_1}>
                <div className={styles.container_1_child_1}>
                    <img src={walkingbarat} alt="" />
                </div>
                <div className={styles.container_1_child_2}>
                    <h1>{heading}</h1>
                    <p className={read ? styles.container_1_child_2_para : ""}>Traditional wear for men has evolved over the years, all while keeping the cultural aesthetics and roots intact. Western-inspired <span style={{ color: '#027bfe' }}>Indo-Western</span> clothing like blazers and pants are among the most preferred outfits that cater to modern sensibilities and tastes. Even traditional Indian and {read ? "regional garments such as kurtas and dhotis have transformed by leaps and bounds. Men with preferences influenced by Western wear expect fashion-forward attires that exude charm, style and sophistication. Thus, Manyavar has crafted tastefully designed traditional clothes for men. We house the best traditional dress for men by offering fine blended fabrics in poised hues, stunning cuts and silhouettes, and elaborate adornments." : ""}</p>
                    <button onClick={() => setRead(!read)}>{read ? "Read less" : "Read more"}</button>
                </div>
                <div className={styles.container_1_child_3}>
                    <div>
                        <span>Sort By</span>
                        <select onChange={(e) => {
                            if (e.target.value) {
                                setOrder(e.target.value)
                                setSort('price')
                            }
                        }} >
                            <option value="">Select</option>
                            <option value="1">Price Low to High</option>
                            <option value="-1">Price High to Low</option>
                        </select>
                    </div>
                </div>
            </div>
            <p className={styles.routes_mobile}>Home / {breadCrum2} / {breadCrum3}</p>
            <div className={styles.filterContainer}>
                <div className={styles.filterContainer_child1} onClick={onOpen}>SORT</div>
                <Drawer
                    isOpen={isOpen}
                    placement='bottom'
                    onClose={onClose}
                    finalFocusRef={btnRef}>
                    <DrawerOverlay />
                    <DrawerContent bg="#FEFBF2">
                        <DrawerCloseButton />
                        <DrawerHeader bg='white' textAlign='center' fontSize={['20px', '40px']}>SORT</DrawerHeader>

                        <Button fontSize={['xl', '2xl']} fontWeight='light' bg="#FEFBF2" m='10px' onClick={() => {
                            onClose()
                            setOrder('1')
                            setSort('price')
                        }} >Price Low To High</Button>
                        <Button fontSize={['xl', '2xl']} fontWeight='light' bg="#FEFBF2" m='10px' onClick={() => {
                            onClose()
                            setOrder('-1')
                            setSort('price')
                        }} >Price High To Low</Button>
                        <DrawerBody >

                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
                <div className={styles.filterContainer_child2}><FilterDrower/></div>
                <div className={styles.grid_filter}>
                    <div onClick={singleGrid} className={styles.single_grid}>
                        <div></div>
                    </div>
                    <div onClick={doubleGrid} className={styles.double_grid}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className={styles.products_container_2} >
                <div className={styles.container_2_child_1}>
                    <p className={styles.products_root}>Home / {breadCrum2} / {breadCrum3}</p>
                    <p>1275 TOTAL ITEMS</p>
                    <div className={styles.grid_filter}>
                        <div onClick={singleGrid} className={styles.single_grid}>
                            <div></div>
                        </div>
                        <div onClick={doubleGrid} className={styles.double_grid}>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <p>FILTER</p>
                    <hr />
                    <div className={scrollbar1 || scrollbar2 || scrollbar3 ? styles.scrollbar : ""}>
                        <details onClick={() => setScrollbar1(!scrollbar1)}>
                            <summary><p>CATEGORIES</p><IoIosArrowDown color='grey' size='20px' /></summary>
                            <div><input type="radio" name="options" value="Kurta" checked={selectedCat === 'Kurta'} onChange={categoryOptionChange} /><p>Kurta</p></div>
                            <div><input type="radio" name="options" value="Kurta Sets" checked={selectedCat === 'Kurta Sets'} onChange={categoryOptionChange} /><p>Kurta Sets</p></div>
                            <div><input type="radio" name="options" value="Kurta Jacket Set" checked={selectedCat === 'Kurta Jacket Set'} onChange={categoryOptionChange} /><p>Kurta Jacket Set</p></div>
                            <div><input type="radio" name="options" value="Jackets" checked={selectedCat === 'Jackets'} onChange={categoryOptionChange} /><p>Jackets</p></div>
                            <div><input type="radio" name="options" value="Indo-Western" checked={selectedCat === 'Indo-Western'} onChange={categoryOptionChange} /><p>Indo-Western</p></div>
                            <div><input type="radio" name="options" value="Sherwani" checked={selectedCat === 'Sherwani'} onChange={categoryOptionChange} /><p>Sherwani</p></div>
                            <div><input type="radio" name="options" value="Kurta Dhoti" checked={selectedCat === 'Kurta Dhoti'} onChange={categoryOptionChange} /><p>Kurta Dhoti</p></div>
                            <div><input type="radio" name="options" value="Lehenga" checked={selectedCat === 'Lehenga'} onChange={categoryOptionChange} /><p>Lehenga</p></div>
                            <div><input type="radio" name="options" value="Gown" checked={selectedCat === 'Gown'} onChange={categoryOptionChange} /><p>Gown</p></div>
                            <div><input type="radio" name="options" value="Saree" checked={selectedCat === 'Saree'} onChange={categoryOptionChange} /><p>Saree</p></div>
                            <div><input type="radio" name="options" value="Stitched Suits" checked={selectedCat === 'Stitched Suits'} onChange={categoryOptionChange} /><p>Stitched Suits</p></div>
                            <div><input type="radio" name="options" value="Kurti / Suit" checked={selectedCat === 'Kurti / Suit'} onChange={categoryOptionChange} /><p>Kurti / Suit</p></div>
                        </details>
                        <hr />
                        <details onClick={() => setScrollbar2(!scrollbar2)}>
                            <summary><p>SIZE</p><IoIosArrowDown color='grey' size='20px' /></summary>
                            <div><input type="radio" name="options" value="S" checked={selectSize === 'S'} onChange={sizeOptionChange} /><p>S</p></div>
                            <div><input type="radio" name="options" value="M" checked={selectSize === 'M'} onChange={sizeOptionChange} /><p>M</p></div>
                            <div><input type="radio" name="options" value="L" checked={selectSize === 'L'} onChange={sizeOptionChange} /><p>L</p></div>
                            <div><input type="radio" name="options" value="XL" checked={selectSize === 'XL'} onChange={sizeOptionChange} /><p>XL</p></div>
                            <div><input type="radio" name="options" value="XXL" checked={selectSize === 'XXL'} onChange={sizeOptionChange} /><p>XXL</p></div>
                            <div><input type="radio" name="options" value="6" checked={selectSize === '6'} onChange={sizeOptionChange} /><p>6</p></div>
                            <div><input type="radio" name="options" value="7" checked={selectSize === '7'} onChange={sizeOptionChange} /><p>7</p></div>
                            <div><input type="radio" name="options" value="8" checked={selectSize === '8'} onChange={sizeOptionChange} /><p>8</p></div>
                            <div><input type="radio" name="options" value="9" checked={selectSize === '9'} onChange={sizeOptionChange} /><p>9</p></div>
                            <div><input type="radio" name="options" value="10" checked={selectSize === '10'} onChange={sizeOptionChange} /><p>10</p></div>
                            <div><input type="radio" name="options" value="11" checked={selectSize === '11'} onChange={sizeOptionChange} /><p>11</p></div>
                            <div><input type="radio" name="options" value="12" checked={selectSize === '12'} onChange={sizeOptionChange} /><p>12</p></div>
                            <div><input type="radio" name="options" value="13" checked={selectSize === '13'} onChange={sizeOptionChange} /><p>13</p></div>
                            <div><input type="radio" name="options" value="FS" checked={selectSize === 'FS'} onChange={sizeOptionChange} /><p>Free Size</p></div>
                        </details>
                        <hr />
                        <details onClick={() => setScrollbar3(!scrollbar3)}>
                            <summary><p>COLOR</p><IoIosArrowDown color='grey' size='20px' /></summary>
                            <div><input type="radio" name="options" value="Red" checked={selectColor === 'Red'} onChange={colorOptionChange} /><p>Red</p></div>
                            <div><input type="radio" name="options" value="Maroon" checked={selectColor === 'Maroon'} onChange={colorOptionChange} /><p>Maroon</p></div>
                            <div><input type="radio" name="options" value="Green" checked={selectColor === 'Green'} onChange={colorOptionChange} /><p>Green</p></div>
                            <div><input type="radio" name="options" value="Blue" checked={selectColor === 'Blue'} onChange={colorOptionChange} /><p>Blue</p></div>
                            <div><input type="radio" name="options" value="Sky" checked={selectColor === 'Sky'} onChange={colorOptionChange} /><p>Sky</p></div>
                            <div><input type="radio" name="options" value="Yellow" checked={selectColor === 'Yellow'} onChange={colorOptionChange} /><p>Yellow</p></div>
                            <div><input type="radio" name="options" value="Light Orange" checked={selectColor === 'Light Orange'} onChange={colorOptionChange} /><p>Light Orange</p></div>
                            <div><input type="radio" name="options" value="Biscuit" checked={selectColor === 'Biscuit'} onChange={colorOptionChange} /><p>Biscuit</p></div>
                            <div><input type="radio" name="options" value="Grey" checked={selectColor === 'Grey'} onChange={colorOptionChange} /><p>Grey</p></div>
                            <div><input type="radio" name="options" value="Gajaree" checked={selectColor === 'Gajaree'} onChange={colorOptionChange} /><p>Gajaree</p></div>

                        </details>

                    </div>

                </div>
                <div className={grid ? styles.container_2_child_2_double : styles.container_2_child_2_single} >
                    {
                        data.map((ele) =>
                            <div key={ele._id} onClick={() => SinglePageFunc(ele._id)}>
                                <div className={styles.HomeCard}>
                                    {/* <div onClick={() => setWish(!wish)} className={styles.wishlistHeart}>{wish ? <AiOutlineHeart color='white' size='25px' /> : <AiTwotoneHeart size='25px' color='red' />}</div> */}
                                    <Card image1={ele.img1} image2={ele.img2} />

                                    <div className={styles.HomeCardoverlay}>
                                        <div className={styles.HomeCardText}>
                                            <p>View</p>
                                        </div>
                                    </div>
                                </div>
                                <p className={styles.title}>{ele.name.substring(0, 30)}...</p>
                                <h5 className={styles.price}>₹ {ele.price}.00</h5>
                                <p className={styles.size}>S M L XL XXL 03XL</p>
                            </div>)
                    }
                </div>
            </div>
            <div className={styles.paginationBtns} >
                <button onClick={PrevPage} ><GrFormPrevious /> Prev</button>
                <button>{page}</button>
                <button onClick={NextPage} >Next <GrFormNext /></button>
            </div>
            <Footer />
        </div >
    )
}


