import React, { ComponentType, useEffect, useLayoutEffect } from 'react'

type DemoComponent = ComponentType<{ className?: string }> & { title: string }

export const DemoWrapper = ({ demos }: { demos: DemoComponent[] }) => {

  return (
    <main className="row">
      {demos.map((Demo, idx) => {
        const NextDemo = demos[idx + 1] ? demos[idx + 1] : demos[0]

        return (
          <section
            id={makeValidSelector(Demo.title)}
            className="demo-example-margin col col-12"
            key={idx}
          >
            <div className="paper">
              <h4>{Demo.title}</h4>
              <Demo />
            </div>
            <div className="text-right">
              <a href={`#${makeValidSelector(NextDemo.title)}`} className="">
                Next 👉
              </a>
            </div>
          </section>
        )
      })}
    </main>
  )
}

function makeValidSelector(hash: string) {
  return hash.replace(/[\s/\\]/g, '-').replace('#', '')
}
