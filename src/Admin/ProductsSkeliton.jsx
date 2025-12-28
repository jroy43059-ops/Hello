import React from 'react'

import styles from "./Styles/AdminDashboard.module.css"

import { Skeleton } from '@chakra-ui/react'

export default function ProductsSkeliton() {
    let arr = new Array(12).fill(0)

    return (
        <div className={styles.ProductsSkelitonContainer} >
            {
                arr.map((ele) =>
                    <div className={styles.ProductsSkelitonCard} >
                        <div>
                            <div>
                                <Skeleton height='100%' />
                            </div>
                            <div>
                                <Skeleton height='25px' mt='1' />
                                <Skeleton height='25px' mt='1' />
                                <Skeleton height='25px' mt='1' />
                                <Skeleton height='25px' mt='1' />
                            </div>
                        </div>
                        <div >
                            <Skeleton height='40px' />
                            <Skeleton height='40px' />
                            <Skeleton height='40px' />
                        </div>
                    </div>
                )
            }
        </div>
    )
}
