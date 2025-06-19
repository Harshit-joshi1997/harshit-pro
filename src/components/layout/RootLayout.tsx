
import { Outlet } from 'react-router-dom'
import { LoginForm } from '../login-form'


const RootLayout = () => {
  return (
    <>
      <Outlet />
      <LoginForm />
      {/* <Page /> */}
    </>
  )
}

export default RootLayout