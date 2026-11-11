import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function RevealWord({ children, progress, range, isLastInItem }) {
  const opacity = useTransform(progress, range, [0.32, 1])
  const color = useTransform(progress, range, ['#94a3b8', '#0f172a'])

  return (
    <span
      className="scroll-reveal-word-wrap"
      style={{
        display: 'inline-block',
        marginRight: isLastInItem ? 0 : '0.28em',
      }}
    >
      <motion.span style={{ color, opacity, display: 'inline-block' }}>
        {children}
      </motion.span>
    </span>
  )
}

/**
 * ScrollWordReveal
 * Progressively reveals text from light grey to rich solid black as the user scrolls.
 *
 * @param {Array<{ text: string, className?: string, as?: string }>} items - list of text blocks (e.g. headline + subtext)
 * @param {Array<string>} offset - Framer Motion useScroll offset, defaults to ['start 0.85', 'center 0.42']
 * @param {string} containerClassName - CSS class for the outer wrapper
 */
export default function ScrollWordReveal({
  items,
  offset = ['start 0.85', 'center 0.42'],
  containerClassName = '',
}) {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset,
  })

  // Calculate total word count across all paragraphs/headlines in this section
  const totalWords = items.reduce((acc, item) => {
    return acc + item.text.trim().split(/\s+/).length
  }, 0)

  let globalWordCounter = 0

  return (
    <div ref={containerRef} className={`scroll-reveal-container ${containerClassName}`}>
      {items.map((item, itemIdx) => {
        const itemWords = item.text.trim().split(/\s+/)
        const Tag = item.as || 'p'

        return (
          <Tag key={itemIdx} id={item.id} className={item.className}>
            {itemWords.map((word, wIdx) => {
              const currentIdx = globalWordCounter++
              // Distribute ranges evenly across the scroll duration with a smooth 14% overlap window
              const start = (currentIdx / totalWords) * 0.86
              const end = Math.min(1, start + 0.14)
              const isLastInItem = wIdx === itemWords.length - 1

              return (
                <RevealWord
                  key={`${itemIdx}-${wIdx}`}
                  progress={scrollYProgress}
                  range={[start, end]}
                  isLastInItem={isLastInItem}
                >
                  {word}
                </RevealWord>
              )
            })}
          </Tag>
        )
      })}
    </div>
  )
}

