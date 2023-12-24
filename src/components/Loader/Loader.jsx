import React from 'react'
import { ProgressBar } from 'react-loader-spinner'
import { Wrapper } from './Loader.styled'

export const Loader = () => {
    return (
        <Wrapper>
            <ProgressBar
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="progress-bar-loading"
                wrapperStyle={{}}
                wrapperClass=""
                barColor="#3F51B3"
                borderColor="#000000"
            />
        </Wrapper>
    )
}

