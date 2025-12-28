import React, { useContext } from 'react'
import styles from './Home.module.css'
import HomeBannerSlider from './HomeBannerSlider'

import { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
// import HomeCardSlider from './HomeCardSlider'
import Footer from '../../Components/Footer/Footer'
import { SearchContext } from '../../Context/SearchContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function Home() {
  const [newArrivalToggle, SetNewArrivalToggle] = useState(true)

  const [PiecesKurtasetToggle, SetPiecesKurtaSetToggle] = useState(true)
  const [PiecesKurtaToggle, SetPiecesKurtaToggle] = useState(false)
  const [PiecesWesternToggle, SetPiecesWesternToggle] = useState(false)
  const [PiecesSherwaniToggle, SetPiecesSherwaniToggle] = useState(false)
  const [PiecesJacketToggle, SetPiecesJacketToggle] = useState(false)


  const [womenLehenga, setWomenLehenga] = useState([])
  const [menKurtaset, setMenKurtaset] = useState([])
  const [menKurtas, setMenKurtas] = useState([])
  const [indoWestorn, setindoWestorn] = useState([])
  const [sherwani, setSherwani] = useState([])
  const [jacket, setJacket] = useState([])
  const [mendata, setMenData] = useState([])


  const navigate = useNavigate()

  const { setGender, setCategory, setOccasion, setCollection, breadCrum2, setBreadCrum2, breadCrum3, setBreadCrum3,
    heading, setHeading, setSkip, setPage } = useContext(SearchContext)

  const GoToProductPage = (gen, cat) => {
    setGender(gen)
    setCategory(cat)
    setCollection("")
    setOccasion("")
    setHeading(cat)
    setBreadCrum2(gen)
    setBreadCrum3(cat)
    setSkip(0)
    setPage(1)
    navigate('/products')
  }

  const GotoparticularPage = (id) => {
    navigate(`/singleproduct/${id}`)
  }

  useEffect(() => {
    GetData('Lehenga', setWomenLehenga)
    GetData('Kurta Sets', setMenKurtaset)
    GetData('Kurta', setMenKurtas)
    GetData('Sherwani', setSherwani)
    GetData('Jackets', setJacket)
    GetData('Indo-Western', setindoWestorn)
    GetDataMenData()
  }, [])


  const GetData = async (cat, set) => {
    await fetch(`https://proud-lamb-suspenders.cyclic.app/products/?category=${cat}`)
      .then((res) => res.json())
      .then((res) => {
        set(res)
      })
      .catch((err) => console.log(err))
  }

  const GetDataMenData = async () => {
    await fetch(`https://proud-lamb-suspenders.cyclic.app/products/?gender=men`)
      .then((res) => res.json())
      .then((res) => {
        setMenData(res)
      })
      .catch((err) => console.log(err))
  }




  return (
    <div className={styles.homeMainContainer}>
      <Navbar />
      <HomeBannerSlider />
      <div className={styles.homeCollectionsDiv}>
        <div onClick={() => GoToProductPage('men', 'Sherwani')} >
          <img src="https://manyavar.scene7.com/is/image/manyavarstage/Sherwani%20Category%20Tiles_%20Both%20device_12-01-2023-11-56?$R%2DD%2DHP%2DCircle$" alt="" />
          <h2>SHERWANI</h2>
        </div>
        <div onClick={() => GoToProductPage('men', 'Kurta Sets')} >
          <img src="https://manyavar.scene7.com/is/image/manyavarstage/Kurta%20pajama%20jpg_11-11-2022-07-36-2?$R%2DD%2DHP%2DCircle$" alt="" />
          <h2>KURTA PAJAMA</h2>
        </div>
        <div onClick={() => GoToProductPage('men', 'Indo-Western')}  >
          <img src="https://manyavar.scene7.com/is/image/manyavarstage/Indo%20Western%20jpg_11-11-2022-07-36-2?$R%2DD%2DHP%2DCircle$" alt="" />
          <h2>INDO WESTERN</h2>
        </div>
        <div onClick={() => GoToProductPage('men', 'Kurta Jacket Set')} >
          <img src="https://manyavar.scene7.com/is/image/manyavarstage/Kurta%20Jacket%20jpg_11-11-2022-07-36-2?$R%2DD%2DHP%2DCircle$" alt="" />
          <h2>KURTA JACKET SETS</h2>
        </div>
        <div onClick={() => GoToProductPage('men', 'Kurta')}  >
          <img src="https://manyavar.scene7.com/is/image/manyavarstage/Only%20Kurta%20jpg_11-11-2022-07-36-2?$R%2DD%2DHP%2DCircle$" alt="" />
          <h2>KURTAS</h2>
        </div>
        <div onClick={() => GoToProductPage('men', 'Jackets')} >
          <img src="https://manyavar.scene7.com/is/image/manyavarstage/Jacket%20jpg_11-11-2022-07-36-2?$R%2DD%2DHP%2DCircle$" alt="" />
          <h2>JACKETS</h2>
        </div>
        <div onClick={() => GoToProductPage('women', 'Lehenga')} >
          <img src="https://manyavar.scene7.com/is/image/manyavarstage/Category%20Tiles%20%20Alia%20Replacement%20jpg_11-11-2022-07-36?$R%2DD%2DHP%2DCircle$" alt="" />
          <h2>LEHENGAS</h2>
        </div>
        <div onClick={() => GoToProductPage('kids', 'Kurta')} >
          <img src="https://manyavar.scene7.com/is/image/manyavarstage/Boys%20jpg_11-11-2022-07-36-2?$R%2DD%2DHP%2DCircle$" alt="" />
          <h2>BOYS</h2>
        </div>
      </div>
      <div>
        <h1 className={styles.Home_New_Arrival_Headin}>New Arrivals</h1>


        <div className={styles.Home_newArr_men_women}>
          <button onClick={() => SetNewArrivalToggle(true)} style={newArrivalToggle ? { borderBottom: "3px solid grey" } : { borderBottom: 'unset' }}>MEN </button>
          <button onClick={() => SetNewArrivalToggle(false)} style={!newArrivalToggle ? { borderBottom: "3px solid grey" } : { borderBottom: 'unset' }} >WOMEN</button>
        </div>
        <div>{newArrivalToggle ?
          <div className={styles.newArrival_card_con}>
            {
              mendata.map((ele) => <div onClick={() => GotoparticularPage(ele._id)} className={styles.container_1_cards} key={ele._id}>
                <div className={styles.HomeCard}>
                  <div className={styles.HomeCardImg_Div}>
                    <img src={ele.img1} alt="" />
                  </div>

                  <div className={styles.HomeCardoverlay}>
                    <div className={styles.HomeCardText}>
                      <p>View</p>
                    </div>
                  </div>
                </div>
                <p>{ele.name}</p>
                <h5>₹ {ele.price}.00</h5>
              </div>)
            }
          </div>

          :

          <div className={styles.newArrival_card_con}>
            {
              womenLehenga.map((ele) => <div key={ele._id} onClick={() => GotoparticularPage(ele._id)}>
                <div className={styles.HomeCard}>
                  <div className={styles.HomeCardImg_Div}>
                    <img src={ele.img1} alt="" />
                  </div>

                  <div className={styles.HomeCardoverlay}>
                    <div className={styles.HomeCardText}>
                      <p>View</p>
                    </div>
                  </div>
                </div>
                <p>{ele.name}</p>
                <h5 style={{ fontWeight: '500', color: 'black' }} >₹ {ele.price}.00</h5>
              </div>)
            }
          </div>
        }
        </div>

      </div>
      <div className={styles.HomeContainer2}>
        <h1 className={styles.Home_New_Arrival_Headin}>Pieces Customers Love</h1>

        <div className={styles.home_viewAll} onClick={() => {
          setGender("men")
          setCategory("")
          setCollection("")
          setOccasion("")
          setHeading("Men")
          setBreadCrum2("Men")
          setBreadCrum3("")
          setSkip(0)
          setPage(1)
          navigate('/products')
        }}>VIEW ALL</div>


        <div className={styles.Home_newArr_con_2_buttons}>
          <button onClick={() => {
            SetPiecesKurtaSetToggle(true)
            SetPiecesKurtaToggle(false)
            SetPiecesWesternToggle(false)
            SetPiecesSherwaniToggle(false)
            SetPiecesJacketToggle(false)

          }} style={PiecesKurtasetToggle ? { borderBottom: "3px solid grey" } : { borderBottom: 'unset' }}>KURTA SETS </button>
          <button onClick={() => {
            SetPiecesKurtaToggle(true)

            SetPiecesKurtaSetToggle(false)
            SetPiecesWesternToggle(false)
            SetPiecesSherwaniToggle(false)
            SetPiecesJacketToggle(false)
          }} style={PiecesKurtaToggle ? { borderBottom: "3px solid grey" } : { borderBottom: 'unset' }} >KURTAS</button>
          <button onClick={() => {
            SetPiecesWesternToggle(true)

            SetPiecesKurtaSetToggle(false)
            SetPiecesKurtaToggle(false)
            SetPiecesSherwaniToggle(false)
            SetPiecesJacketToggle(false)
          }} style={PiecesWesternToggle ? { borderBottom: "3px solid grey" } : { borderBottom: 'unset' }} >INDOWESTERN</button>
          <button onClick={() => {
            SetPiecesSherwaniToggle(true)

            SetPiecesKurtaSetToggle(false)
            SetPiecesKurtaToggle(false)
            SetPiecesWesternToggle(false)
            SetPiecesJacketToggle(false)
          }} style={PiecesSherwaniToggle ? { borderBottom: "3px solid grey" } : { borderBottom: 'unset' }} >SHERWANI</button>
          <button onClick={() => {
            SetPiecesJacketToggle(true)

            SetPiecesKurtaSetToggle(false)
            SetPiecesKurtaToggle(false)
            SetPiecesWesternToggle(false)
            SetPiecesSherwaniToggle(false)
          }} style={PiecesJacketToggle ? { borderBottom: "3px solid grey" } : { borderBottom: 'unset' }} >JACKETS</button>
        </div>
        <div className={styles.Home_newArr_con_2_div}>
          <div>{PiecesKurtasetToggle ?
            <div className={styles.newArrival_card_con}>
              {
                menKurtaset.map((ele) => <div key={ele._id} className={styles.container_2_card} onClick={() => GotoparticularPage(ele._id)}>
                  <div className={styles.HomeCard}>
                    <div className={styles.HomeCardImg_Div}>
                      <img src={ele.img1} alt="" />
                    </div>

                    <div className={styles.HomeCardoverlay}>
                      <div className={styles.HomeCardText}>
                        <p>View</p>
                      </div>
                    </div>
                  </div>
                  <p>{ele.name}</p>
                  <h5 style={{ fontWeight: '500', color: 'black' }} >₹ {ele.price}.00</h5>
                </div>)
              }
            </div>

            : PiecesKurtaToggle ?

              <div className={styles.newArrival_card_con}>
                {
                  menKurtas.map((ele) => <div key={ele._id} onClick={() => GotoparticularPage(ele._id)}>
                    <div className={styles.HomeCard}>
                      <div className={styles.HomeCardImg_Div}>
                        <img src={ele.img1} alt="" />
                      </div>

                      <div className={styles.HomeCardoverlay}>
                        <div className={styles.HomeCardText}>
                          <p>View</p>
                        </div>
                      </div>
                    </div>
                    <p>{ele.name}</p>
                    <h5 style={{ fontWeight: '500', color: 'black' }} >₹ {ele.price}.00</h5>
                  </div>)
                }
              </div>
              : PiecesWesternToggle ?
                <div className={styles.newArrival_card_con} >
                  {
                    indoWestorn.map((ele) => <div key={ele._id} onClick={() => GotoparticularPage(ele._id)}>
                      <div className={styles.HomeCard}>
                        <div className={styles.HomeCardImg_Div}>
                          <img src={ele.img1} alt="" />
                        </div>

                        <div className={styles.HomeCardoverlay}>
                          <div className={styles.HomeCardText}>
                            <p>View</p>
                          </div>
                        </div>
                      </div>
                      <p>{ele.name}</p>
                      <h5 style={{ fontWeight: '500', color: 'black' }} >₹ {ele.price}.00</h5>
                    </div>)
                  }
                </div>
                : PiecesSherwaniToggle ?
                  <div className={styles.newArrival_card_con}>
                    {
                      sherwani.map((ele) => <div key={ele.image} onClick={() => GotoparticularPage(ele._id)}>
                        <div className={styles.HomeCard}>
                          <div className={styles.HomeCardImg_Div}>
                            <img src={ele.img1} alt="" />
                          </div>

                          <div className={styles.HomeCardoverlay}>
                            <div className={styles.HomeCardText}>
                              <p>View</p>
                            </div>
                          </div>
                        </div>
                        <p>{ele.name}</p>
                        <h5 style={{ fontWeight: '500', color: 'black' }} >₹ {ele.price}.00</h5>
                      </div>)
                    }

                  </div> :
                  <div className={styles.newArrival_card_con}>
                    {
                      jacket.map((ele) => <div key={ele.image} onClick={() => GotoparticularPage(ele._id)}>
                        <div className={styles.HomeCard}>
                          <div className={styles.HomeCardImg_Div}>
                            <img src={ele.img1} alt="" />
                          </div>

                          <div className={styles.HomeCardoverlay}>
                            <div className={styles.HomeCardText}>
                              <p>View</p>
                            </div>
                          </div>
                        </div>
                        <p>{ele.name}</p>
                        <h5 style={{ fontWeight: '500', color: 'black' }} >₹ {ele.price}.00</h5>
                      </div>)
                    }

                  </div>
          }
          </div>

        </div >
        <div className={styles.HomeContainer3}>
          <h1 className={styles.Home_New_Arrival_Headin}>Attending a Wedding?</h1>
          <p>Like Ranveer Says, Shaadi Hai? #Taiyaar Hokar Aayiye</p>
          <div className={styles.Attending_Wedding} onClick={() => {
            setGender('men')
            setOccasion('Wedding')
            setCategory("")
            setCollection("")
            setHeading('Wedding')
            setBreadCrum2("Men")
            setBreadCrum3("Wedding")
            setSkip(0)
            setPage(1)
            navigate('/products')
          }}>
            <div>
              <img className={styles.Container3_img_1} src="https://manyavar.scene7.com/is/image/manyavarstage/Shop%20as%20a%20Groom%20jpg_11-11-2022-04-47?$R%2DD%2DHP%2DAW$" alt="" />
              <img className={styles.Container3_img_2} src="https://manyavar.scene7.com/is/image/manyavarstage/As%20a%20the%20groom%20jpg_11-11-2022-10-26?$R%2DM%2DHP%2DAW$" alt="" />
            </div>
            <div>
              <img className={styles.Container3_img_1} src="https://manyavar.scene7.com/is/image/manyavarstage/Shop%20as%20a%20Guest%20jpg_11-11-2022-04-47?$R%2DD%2DHP%2DAW$" alt="" />
              <img className={styles.Container3_img_2} src="https://manyavar.scene7.com/is/image/manyavarstage/As%20a%20guest%20jpg_11-11-2022-10-26?$R%2DM%2DHP%2DAW$" alt="" />
            </div>
          </div>
        </div>
        <div className={styles.moheyBanner} onClick={() => {
          setGender('women')
          setOccasion('')
          setCategory("Lehenga")
          setCollection("")
          setHeading('Lehenga')
          setBreadCrum2("Women")
          setBreadCrum3("Lehenga")
          setSkip(0)
          setPage(1)
          navigate('/products')
        }}>
          <img src="https://static01.manyavar.com/uploads/Newhometemplate/images//Manvayar-Crest-Mohey_Horizontal.png" alt="" />
          <div>
            <img className={styles.mohey_image1} src="https://manyavar.scene7.com/is/image/manyavarstage/Mohey%20Banner%20Dektop%20jpg_11-11-2022-04-58?$R%2DD%2DHP%2DMB$" alt="" />
            <img className={styles.mohey_image2} src="https://manyavar.scene7.com/is/image/manyavarstage/Lehenga%20Hero%20Banner%20_Mobile%20jpg_09-11-2022-09-18?$R%2DM%2DHP%2FMLP%2FWLP%2DB$" alt="" />
          </div>
        </div>
      </div >
      <div className={styles.container_4}>
        <h1 className={styles.Home_New_Arrival_Headin}>Pieces Customers Love</h1>
        <div className={styles.home_viewAll} onClick={() => GoToProductPage('women', 'Lehenga')}>VIEW ALL</div>
        <div className={styles.newArrival_card_con}>
          {
            womenLehenga.map((ele) => <div key={ele._id} onClick={() => GotoparticularPage(ele._id)}>
              <div className={styles.HomeCard}>
                <div className={styles.HomeCardImg_Div}>
                  <img src={ele.img1} alt="" />
                </div>

                <div className={styles.HomeCardoverlay}>
                  <div className={styles.HomeCardText}>
                    <p>View</p>
                  </div>
                </div>
              </div>
              <p>{ele.name}</p>
              <h5 style={{ fontWeight: '500', color: 'black' }} >₹ {ele.price}.00</h5>
            </div>)
          }
        </div>
      </div>
      <div className={styles.contaoner_5}>

        <img className={styles.container5_img_1} src="https://manyavar.scene7.com/is/image/manyavarstage/Book%20an%20appiontment%20JPG_19-10-2022-12-23?$R%2DD%2DHP%2DBAA$" alt="" />
        <img className={styles.container5_img_2} src="https://manyavar.scene7.com/is/image/manyavarstage/Book%20an%20appointment%20jpg_11-11-2022-11-26?$R%2DM%2DHP%2DBAA$" alt="" />
      </div>
      <div className={styles.container_6}>
        <h1 className={styles.Home_New_Arrival_Headin}>Shop By Collections</h1>
        <p>A wedding is a beautiful life event with many intricate traditions. Every occasion calls for that perfect celebration outfit, select your from below.</p>
        <div className={styles.container_6_card_parent}>
          <div onClick={() => {
            setGender('men')
            setOccasion('Sangeet')
            setCategory("")
            setCollection("")
            setHeading('Men Sangeet')
            setBreadCrum2("Men")
            setBreadCrum3("Sangeet")
            setSkip(0)
            setPage(1)
            navigate('/products')
          }}>
            <img src="https://manyavar.scene7.com/is/image/manyavarstage/Sangeet%20jpg_11-11-2022-05-281?$R%2DD%2FM%2DHP%2DSBC$" alt="" />
          </div>
          <div onClick={() => {
            setGender('men')
            setOccasion('Engagement')
            setCategory("")
            setCollection("")
            setHeading('Men Engagement')
            setBreadCrum2("Men")
            setBreadCrum3("Engagement")
            setSkip(0)
            setPage(1)
            navigate('/products')
          }}>
            <img src="https://manyavar.scene7.com/is/image/manyavarstage/Engagement%20jpg_11-11-2022-05-281?$R%2DD%2FM%2DHP%2DSBC$" alt="" />
          </div>
          <div onClick={() => {
            setGender('men')
            setOccasion('Reception')
            setCategory("")
            setCollection("")
            setHeading('Men Reception')
            setBreadCrum2("Men")
            setBreadCrum3("Reception")
            setSkip(0)
            setPage(1)
            navigate('/products')
          }}>
            <img src="https://manyavar.scene7.com/is/image/manyavarstage/Reception%20jpg_11-11-2022-05-281?$R%2DD%2FM%2DHP%2DSBC$" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div >
  )
}
