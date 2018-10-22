import React, { ComponentType } from 'react'

type DemoComponent = ComponentType & { title: string }

export const DemoWrapper = ({ demos }: { demos: DemoComponent[] }) => (
  <main className="row">
    {demos.map((Demo, idx) => (
      <div key={idx} className="paper col col-12 demo-example-margin">
        <h4>{Demo.title}</h4>
        <Demo />
      </div>
    ))}
  </main>
)
