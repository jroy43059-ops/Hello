import React from 'react'

import { Heading } from '@chakra-ui/react'

export default function NotAutherished() {
    return (
        <div>
            <Heading mt='10%' textAlign='center' as='h1' ><span style={{ color: '#FC9F1F' }} >You are not</span> <span style={{ color: 'maroon' }} >authrished</span></Heading>
        </div>
    )
}
