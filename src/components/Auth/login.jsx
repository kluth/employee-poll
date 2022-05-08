import React from 'react'

const Login = () => {
  return (
    <form>
        <label>
            Name:
            <input type="text" name="name" />
        </label>
        <label>
            Password:
            <input type="password" name="password" />
        </label>
        <input type="submit" value="Submit" />
    </form>
  )
}

export default Login