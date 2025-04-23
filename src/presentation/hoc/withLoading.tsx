/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

type WithLoadingProps = {
  isLoading: boolean
  isError: boolean
  errorMessage: string
}

function withLoading<T extends React.ComponentType<any>>(WrappedComponent: T) {
  return function WithLoading({
    isLoading,
    isError,
    errorMessage,
    ...props
  }: WithLoadingProps & React.ComponentProps<T>) {
    if (isLoading) {
      return <p className="text-center">Cargando...</p>
    }

    if (isError) {
      return <p className="text-center text-red-500">{errorMessage}</p>
    }

    return <WrappedComponent {...(props as React.ComponentProps<T>)} />
  }
}

export default withLoading
