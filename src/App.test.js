import React from 'react'
import App from './App'
import * as rtl from '@testing-library/react'


jest.mock('axios', ()=>{
    return
})



describe('App', ()=>{
    afterEach(rtl.cleanup)
    
    let wrapper;

    beforeEach(()=>{
        wrapper =rtl.render(<App/>)
    })

})

