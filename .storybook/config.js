import { configure } from '@storybook/react'

const loadStories = () => {
  require('../src/components/Cube/stories.jsx')
  require('../src/components/SimpleCircle/stories.jsx')
  require('../src/HOCS/stories.jsx')
}

configure(loadStories, module)
