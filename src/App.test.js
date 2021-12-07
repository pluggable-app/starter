import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

describe('Root component', () => {
    it('should be in the document', () => {
        const { getByText } = render(<App />)
        expect(getByText(/App Works/i)).toBeInTheDocument()
    })
})
