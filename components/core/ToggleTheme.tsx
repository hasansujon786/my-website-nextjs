import { FiSun } from 'react-icons/fi'
import { useTheme } from 'next-themes'
import { IconBtn } from '../atoms/IconBtn'

const ToggleTheme = (props: {}) => {
  const { theme, setTheme } = useTheme()
  const toggleFunction = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return <IconBtn icon={<FiSun />} onClick={toggleFunction} />
}
export default ToggleTheme
