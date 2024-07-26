type StatusProps = {
    status: 'loading' | 'success' | 'error'
}

const Status = (props: StatusProps) => {
    let message
    if (props.status === 'loading') {
        message = 'Loading...'
        
    } else if (props.status === 'success') {
        message = 'Data Fetched Successfuly!'
    } else if (props.status === 'error') {
        message = 'Error Fetching Data'
    }
    return (
        <div>
            <h1>Status - {message}</h1>
        </div>
    )
}

export default Status;