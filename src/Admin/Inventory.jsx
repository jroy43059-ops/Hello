import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import styles from "./Styles/AdminDashboard.module.css"
import { getProducts, updateProduct, deleteProduct } from '../Redux/admin/action'

import mehelLogo from "../Assets/mehelLogo.webp"
import ProductsSkeliton from './ProductsSkeliton'


import { AiOutlineEdit } from 'react-icons/ai'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { GrView } from 'react-icons/gr'

import { Modal, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Button, Input, Select, useToast, Spinner } from '@chakra-ui/react'

export default function Inventory() {

  const [product, setproduct] = useState({})
  const [form, setForm] = useState(false)

  const [name, setName] = useState('')
  const [color, setColor] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [gender, setGender] = useState('')
  const [occasion, setOccasion] = useState('')
  const [collection, setCollections] = useState('')
  const [img1, setImg1] = useState('')
  const [img2, setImg2] = useState('')
  const [img3, setImg3] = useState('')
  const [img4, setImg4] = useState('')
  const [img5, setImg5] = useState('')


  const { isOpen, onOpen, onClose } = useDisclosure()

  const dispatch = useDispatch()
  const toast = useToast()

  const products = useSelector((store) => store.adminManager)

  const Update = () => {
    let obj = {
      name: name || product.name,
      color: color || product.color,
      category: category || product.category,
      price: Number(price) || Number(product.price),
      gender: gender || product.gender,
      occasion: occasion || product.occasion,
      collections: collection || product.collections,
      img1: img1 || product.img1,
      img2: img2 || product.img2,
      img3: img3 || product.img3,
      img4: img4 || product.img4,
      img5: img5 || product.img5,
    }

    updateProduct(dispatch, product._id, obj)

    console.log(obj)

    setTimeout(() => {
      getProducts(dispatch)
      toast({
        title: 'Product has been updated.',
        description: "Update has been reflected on the product page",
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top',
      })
      onClose()
    }, 1000);
  }

  const deleteFunction = (ele) => {
    deleteProduct(dispatch, ele._id)

    setTimeout(() => {
      getProducts(dispatch)
      toast({
        title: 'Product has been delete.',
        description: "Delete product will not reflected on the product page",
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top',
      })
    }, 1000);
  }

  useEffect(() => {
    getProducts(dispatch)
  }, [])

  return (
    <div className={styles.InventoryContainer} >
      <img className={styles.mehelLogo} src={mehelLogo} alt="" />
      <div className={styles.InventoryCardContainer} >
        {
          products.productsListLoading ? <ProductsSkeliton /> :
            <div className={styles.ProductsSkelitonContainer} >
              {
                products.productsList.map((ele) =>
                  <div key={ele._id} className={styles.ProductsSkelitonCard} >
                    <div>
                      <div>
                        <img src={ele.img1} alt="" />
                      </div>
                      <div>
                        <h2><b>{ele.name.substring(0, 15)}...</b></h2>
                        <h2><b>Price : </b> ₹ {ele.price}.00</h2>
                        <h2><b>Category : </b> {ele.category.substring(0, 10)}</h2>
                        <h2><b>Id :</b> {ele._id.substring(0, 9)}...</h2>
                      </div>
                    </div>
                    <div className={styles.ProductsBtns}  >
                      <button onClick={() => {
                        setForm(false)
                        setproduct(ele)
                        onOpen()
                      }}  > <GrView /></button>

                      <button onClick={() => {
                        setForm(true)
                        setproduct(ele)
                        onOpen()
                      }}  ><AiOutlineEdit /></button>

                      <button onClick={() => {
                        setproduct(ele)
                        deleteFunction(ele)
                      }} >{ele._id === product._id && products.deleteProductLoading ? <Spinner size='xs' /> : <RiDeleteBin5Line />}</button>
                    </div>
                  </div>
                )
              }
            </div>
        }
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        {
          form ?

            <ModalContent>
              <ModalHeader>Update product</ModalHeader>
              <ModalCloseButton />
              <ModalBody>

                <Input mb='2' color='#718096' type="text" placeholder={`Img1 `} onChange={(e) => setImg1(e.target.value)} />
                <Input mb='2' color='#718096' type="text" placeholder={`Img2 `} onChange={(e) => setImg2(e.target.value)} />
                <Input mb='2' color='#718096' type="text" placeholder={`Img3 `} onChange={(e) => setImg3(e.target.value)} />
                <Input mb='2' color='#718096' type="text" placeholder={`Img4 `} onChange={(e) => setImg4(e.target.value)} />
                <Input mb='2' color='#718096' type="text" placeholder={`Img5 `} onChange={(e) => setImg5(e.target.value)} />
                <Input mb='2' color='#718096' type="text" placeholder={`Name : ${product.name}`} onChange={(e) => setName(e.target.value)} />
                <Input mb='2' color='#718096' type="text" placeholder={`Price : ₹ ${product.price}.00`} onChange={(e) => setPrice(e.target.value)} />
                <Input mb='2' color='#718096' type="text" placeholder={`Color : ${product.color}`} onChange={(e) => setColor(e.target.value)} />
                <Select mb='2' color='#718096' onChange={(e) => setCategory(e.target.value)} >
                  <option value="">Category</option>
                  <option value="Kurta">Kurta</option>
                  <option value="Kurta Sets">Kurta Sets</option>
                  <option value="Kurta Jacket Set">Kurta Jacket Set</option>
                  <option value="Jackets">Jackets</option>
                  <option value="Indo-Western">Indo-Western</option>
                  <option value="Sherwani">Sherwani</option>
                  <option value="Kurta Dhoti">Kurta Dhoti</option>
                  <option value="Footwear">Footwear</option>
                  <option value="Bottomwear">Bottomwear</option>
                  <option value="Lehenga">Lehenga</option>
                  <option value="Gown">Gown</option>
                  <option value="Saree">Saree</option>
                  <option value="Stitched Suits">Stitched Suits</option>
                  <option value="Kurti / Suit">Kurti / Suit</option>
                  <option value="Kurta Jacket">Kurta Jacket</option>
                  <option value="Juti">Juti</option>
                  <option value="Brooch">Brooch</option>
                  <option value="Pocket Square">Pocket Square</option>
                  <option value="Safa">Safa</option>
                  <option value="Mala">Mala</option>
                  <option value="Bandanna">Bandanna</option>
                  <option value="Sherwani Inner Kurta">Sherwani Inner Kurta</option>
                  <option value="Socks">Socks</option>
                </Select>
                <Select mb='2' color='#718096' onChange={(e) => setGender(e.target.value)} >
                  <option value="">Whome</option>
                  <option value="men">Men</option>
                  <option value="women">Women</option>
                  <option value="kids">Kids</option>
                </Select>
                <Select mb='2' color='#718096' onChange={(e) => setOccasion(e.target.value)} >
                  <option value="">Occassion</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Reception">Reception</option>
                  <option value="Engagement">Engagement</option>
                  <option value="Sangeet">Sangeet</option>
                  <option value="Haldi">Haldi</option>
                </Select>
                <Select mb='2' color='#718096' onChange={(e) => setCollections(e.target.value)} >
                  <option value="">Collection</option>
                  <option value="Festive">Festive</option>
                  <option value="Formal">Formal</option>
                  <option value="Classic">Classic</option>
                  <option value="Bridal">Bridal</option>
                  <option value="Casual">Casual</option>
                </Select>
                <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={
                    Update
                  }>
                    {products.updateProductLoading ? <Spinner size='sm' /> : 'Update'}
                  </Button>
                  <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                  </Button>

                </ModalFooter>
              </ModalBody>
            </ModalContent>
            :
            <ModalContent >
              <ModalHeader>More about the product</ModalHeader>
              <ModalCloseButton />
              <ModalBody className={styles.viewMoreproductModal} >
                <div>
                  <img src={product.img2} alt="" />
                  <img src={product.img3} alt="" />
                  <img src={product.img1} alt="" />
                  <img src={product.img4} alt="" />
                  <img src={product.img5} alt="" />
                </div>
                <div>
                  <br />
                  <p><b>ID : </b>{product._id}</p>
                  <p><b>Name : </b>{product.name}</p>
                  <p><b>Category : </b>{product.category}</p>
                  <p><b>Gender : </b>{product.gender}</p>
                  <p><b>Occasion : </b>{product.occasion}</p>
                  <p><b>Collections : </b>{product.collections}</p>
                  <p><b>Price : </b>₹ {product.price}.00</p>
                  <p><b>Color : </b>{product.color}</p>
                  <p><b>Size : </b>{product.size && product.size.map((el, ind) => <span key={ind} >{el} {ind < product.size.length - 1 ? ', ' : ''}</span>)}</p>
                  <p><b>Features : </b>{product.features && product.features.map((el, ind) => <span key={ind} >{el} {ind < product.size.length - 1 ? ', ' : ''}</span>)}</p>
                  <p><b>Email : </b>{product.email}</p>
                  <p><b>Address : </b>{product.address}</p>
                  <p><b>Description : </b>{product.description}</p>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
        }
      </Modal>
    </div>
  )
}
