import React from 'react'

interface Props {
  children?: string;
}

const Typography: React.FC<Props> = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default Typography