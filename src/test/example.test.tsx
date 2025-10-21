import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from '../App'

// Mock the components that use external libraries
vi.mock('framer-motion', () => ({
  motion: {
    div: 'div',
    button: 'button',
    h1: 'h1',
    p: 'p',
    span: 'span',
    section: 'section',
    header: 'header',
    footer: 'footer',
    main: 'main',
    nav: 'nav',
    ul: 'ul',
    li: 'li',
    a: 'a',
    img: 'img',
    form: 'form',
    input: 'input',
    textarea: 'textarea',
    select: 'select',
    option: 'option',
    label: 'label',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
  },
  useInView: () => ({ ref: null, isInView: true }),
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
}))

vi.mock('react-tsparticles', () => ({
  default: () => <div data-testid="particles" />,
}))

vi.mock('locomotive-scroll', () => ({
  default: vi.fn(),
}))

describe('App', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    
    expect(screen.getByText(/SterMakeUp/i)).toBeInTheDocument()
  })
  
  it('renders main sections', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    
    // Check if main sections are rendered
    expect(screen.getByText(/beleza que inspira confiança/i)).toBeInTheDocument()
    expect(screen.getByText(/sobre/i)).toBeInTheDocument()
    expect(screen.getByText(/serviços/i)).toBeInTheDocument()
    expect(screen.getByText(/portfólio/i)).toBeInTheDocument()
    expect(screen.getByText(/contato/i)).toBeInTheDocument()
  })
})


