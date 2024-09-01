import React from 'react'

import ReactLoading from 'react-loading'

const LoadingPage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-black">
      <ReactLoading type="spokes" color="#fff" height={26} width={26} />
    </div>
  )
}

export default LoadingPage
