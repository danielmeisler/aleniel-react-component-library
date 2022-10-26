import React, { MutableRefObject, useRef, useState } from 'react'

interface AccordionProps {
  title: React.ReactNode
  content: React.ReactNode
}

export const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [showExtraContent, setShowExtraContent] = useState(false)
  const [height, setHeight] = useState('0px')

  const contentSpace = useRef(null) as unknown as MutableRefObject<HTMLDivElement>

  function toggleAccordion() {
		setShowExtraContent((previousState) => !previousState)
    setHeight(showExtraContent ? '0px' : `${contentSpace.current.scrollHeight}px`)
  }

  return (
    <div className="container">
      <button
        onClick={toggleAccordion}
      >
        <p>{title}</p>
        <img
          src={'/assets/img/icons/chevron-up.svg'}
          alt="Chevron icon"
          className={`${showExtraContent ? 'rotate' : null} arrow`}
        />
      </button>
      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        className="extra-content"
      >
        <div>{content}</div>
      </div>
    </div>
  )
}

export default Accordion;