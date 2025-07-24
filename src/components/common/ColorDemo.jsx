import React from 'react'
import Button from './Button'
import Heading from './Heading'
import Para from './Para'

const ColorDemo = () => {
  return (
    <div className="p-8 bg-light-bg-secondary min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Heading level={1} variant="primary" className="mb-4 animate-slide-down">
            Design System Demo
          </Heading>
          <Para variant="secondary" size="lg" className="animate-slide-up">
            Showcasing all colors, components, and animations
          </Para>
        </div>

        {/* Color Palette */}
        <section className="mb-12">
          <Heading level={2} variant="primary" className="mb-6 animate-slide-down">
            Color Palette
          </Heading>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['primary', 'secondary', 'accent', 'success', 'warning', 'error'].map((color) => (
              <div key={color} className="space-y-2 animate-fade-in">
                <div className={`bg-${color}-500 h-20 rounded-lg shadow-soft`}></div>
                <Para variant="secondary" size="sm" className="text-center capitalize">
                  {color}
                </Para>
              </div>
            ))}
          </div>
        </section>

        {/* Text Variants */}
        <section className="mb-12">
          <Heading level={2} variant="primary" className="mb-6 animate-slide-down">
            Text Variants
          </Heading>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <Heading level={3} variant="primary">Primary Text</Heading>
              <Heading level={3} variant="secondary">Secondary Text</Heading>
              <Heading level={3} variant="tertiary">Tertiary Text</Heading>
              <Heading level={3} variant="accent">Accent Text</Heading>
            </div>
            <div className="space-y-4">
              <Para variant="primary">Primary paragraph text</Para>
              <Para variant="secondary">Secondary paragraph text</Para>
              <Para variant="tertiary">Tertiary paragraph text</Para>
              <Para variant="muted">Muted paragraph text</Para>
            </div>
          </div>
        </section>

        {/* Button Variants */}
        <section className="mb-12">
          <Heading level={2} variant="primary" className="mb-6 animate-slide-down">
            Button Variants
          </Heading>
          <div className="space-y-6">
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button variant="success">Success</Button>
              <Button variant="warning">Warning</Button>
              <Button variant="error">Error</Button>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="sm">Small</Button>
              <Button variant="primary" size="md">Medium</Button>
              <Button variant="primary" size="lg">Large</Button>
              <Button variant="primary" size="xl">Extra Large</Button>
            </div>
          </div>
        </section>

        {/* Background Colors */}
        <section className="mb-12">
          <Heading level={2} variant="primary" className="mb-6 animate-slide-down">
            Background Colors
          </Heading>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-light-bg-primary p-6 rounded-lg border border-light-border-primary">
              <Heading level={3} variant="primary" className="mb-2">Primary Background</Heading>
              <Para variant="secondary">This is the main background color</Para>
            </div>
            <div className="bg-light-bg-secondary p-6 rounded-lg border border-light-border-primary">
              <Heading level={3} variant="primary" className="mb-2">Secondary Background</Heading>
              <Para variant="secondary">This is the secondary background color</Para>
            </div>
            <div className="bg-light-bg-card p-6 rounded-lg border border-light-border-primary shadow-soft">
              <Heading level={3} variant="primary" className="mb-2">Card Background</Heading>
              <Para variant="secondary">This is the card background color</Para>
            </div>
          </div>
        </section>

        {/* Animations */}
        <section className="mb-12">
          <Heading level={2} variant="primary" className="mb-6 animate-slide-down">
            Animations
          </Heading>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-primary-100 p-4 rounded-lg animate-fade-in">
                <Para variant="primary">Fade In Animation</Para>
              </div>
              <div className="bg-accent-100 p-4 rounded-lg animate-slide-up">
                <Para variant="primary">Slide Up Animation</Para>
              </div>
              <div className="bg-success-100 p-4 rounded-lg animate-slide-down">
                <Para variant="primary">Slide Down Animation</Para>
              </div>
              <div className="bg-warning-100 p-4 rounded-lg animate-scale-in">
                <Para variant="primary">Scale In Animation</Para>
              </div>
            </div>
            <div className="space-y-4">
              <Button variant="primary" className="animate-fade-in">Animated Button</Button>
              <Heading level={3} variant="accent" className="animate-slide-down">Animated Heading</Heading>
              <Para variant="secondary" className="animate-slide-up">Animated paragraph text with smooth transitions and beautiful typography.</Para>
            </div>
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="mb-12">
          <Heading level={2} variant="primary" className="mb-6 animate-slide-down">
            Interactive Demo
          </Heading>
          <div className="bg-light-bg-card p-8 rounded-2xl shadow-soft">
            <div className="text-center">
              <Heading level={3} variant="primary" className="mb-4">
                Try Different Combinations
              </Heading>
              <Para variant="secondary" className="mb-6">
                Hover over elements to see transitions and interactions
              </Para>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="primary" size="lg" className="hover:scale-105 transition-transform">
                  Hover Me
                </Button>
                <Button variant="outline" size="lg" className="hover:scale-105 transition-transform">
                  Interactive
                </Button>
                <Button variant="ghost" size="lg" className="hover:scale-105 transition-transform">
                  Elements
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ColorDemo 