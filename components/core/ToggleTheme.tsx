import { useTheme } from 'next-themes'
import { IconBtn } from '../atoms/IconBtn'

const ToggleTheme = (props: {}) => {
  const { theme, setTheme } = useTheme()
  const toggleFunction = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return (
    <div>
      <IconBtn name='hello' onClick={toggleFunction} />
    </div>
  )
}
export default ToggleTheme
